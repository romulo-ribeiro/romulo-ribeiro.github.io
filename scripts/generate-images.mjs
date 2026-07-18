import { access, copyFile, mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const dataPath = path.join(repositoryRoot, 'src/app/data/projects.json');
const sourceDirectory = path.join(repositoryRoot, 'assets-src/images');
const outputDirectory = path.join(repositoryRoot, 'public/images');
const widths = [600, 900, 1200];
const webpOptions = { quality: 75, effort: 6 };

export function createImagePlan(data, sources = sourceDirectory, outputs = outputDirectory) {
  const imagePaths = [...(data.projects ?? []), ...(data.experienceAreas ?? [])]
    .map((item) => item.image)
    .filter((image) => typeof image === 'string');

  return [...new Set(imagePaths)]
    .map((image) => path.posix.basename(image))
    .sort()
    .map((filename) => {
      if (!filename.endsWith('.webp')) {
        throw new Error(`Project image must use WebP: ${filename}`);
      }

      const basename = filename.slice(0, -5);
      return {
        source: path.join(sources, filename),
        outputs: widths.map((width) => ({
          path: path.join(outputs, width === 1200 ? filename : `${basename}-${width}.webp`),
          width,
        })),
      };
    });
}

export async function assertCanonicalSources(plan) {
  for (const item of plan) {
    try {
      await access(item.source);
    } catch {
      throw new Error(`Missing canonical image source: ${item.source}`);
    }

    const metadata = await sharp(item.source).metadata();
    if (metadata.format !== 'webp') {
      throw new Error(`Canonical image source must be WebP: ${item.source}`);
    }
    if (metadata.width !== 1200) {
      throw new Error(`Canonical image source must be exactly 1200px wide: ${item.source}`);
    }
  }
}

export async function generateImages(plan) {
  await assertCanonicalSources(plan);

  for (const item of plan) {
    for (const output of item.outputs) {
      await mkdir(path.dirname(output.path), { recursive: true });
      if (output.width === 1200) {
        await copyFile(item.source, output.path);
        continue;
      }

      await sharp(item.source)
        .rotate()
        .resize({ width: output.width, withoutEnlargement: true })
        .webp(webpOptions)
        .toFile(output.path);
    }
  }
}

export async function assertGeneratedImages(plan) {
  await assertCanonicalSources(plan);

  for (const item of plan) {
    for (const output of item.outputs) {
      let metadata;
      try {
        metadata = await sharp(output.path).metadata();
      } catch {
        throw new Error(`Missing generated image variant: ${output.path}`);
      }

      if (metadata.format !== 'webp') {
        throw new Error(`Generated image variant must be WebP: ${output.path}`);
      }
      if (metadata.width !== output.width) {
        throw new Error(
          `Generated image variant has width ${metadata.width ?? 'unknown'}; expected ${output.width}: ${output.path}`,
        );
      }
    }
  }
}

async function run() {
  const data = JSON.parse(await readFile(dataPath, 'utf8'));
  const plan = createImagePlan(data);

  if (process.argv.includes('--check')) {
    await assertGeneratedImages(plan);
    console.log(`Validated ${plan.length * widths.length} project image variants.`);
    return;
  }

  await generateImages(plan);
  await assertGeneratedImages(plan);
  console.log(`Generated ${plan.length * widths.length} project image variants.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await run();
}
