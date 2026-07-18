import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import sharp from 'sharp';
import {
  assertCanonicalSources,
  assertGeneratedImages,
  createImagePlan,
  generateImages,
} from './generate-images.mjs';

const fixtureData = {
  projects: [
    { image: '/images/project-alpha.webp' },
    { image: '/images/project-alpha.webp' },
    { image: null },
  ],
  experienceAreas: [{ image: '/images/project-beta.webp' }],
};

test('creates one canonical source and three outputs per referenced image', () => {
  const plan = createImagePlan(fixtureData, '/sources', '/public/images');

  assert.deepEqual(
    plan.map((item) => ({
      source: item.source,
      outputs: item.outputs.map((output) => [output.path, output.width]),
    })),
    [
      {
        source: path.join('/sources', 'project-alpha.webp'),
        outputs: [
          [path.join('/public/images', 'project-alpha-600.webp'), 600],
          [path.join('/public/images', 'project-alpha-900.webp'), 900],
          [path.join('/public/images', 'project-alpha.webp'), 1200],
        ],
      },
      {
        source: path.join('/sources', 'project-beta.webp'),
        outputs: [
          [path.join('/public/images', 'project-beta-600.webp'), 600],
          [path.join('/public/images', 'project-beta-900.webp'), 900],
          [path.join('/public/images', 'project-beta.webp'), 1200],
        ],
      },
    ],
  );
});

test('reports a missing canonical source with its exact path', async () => {
  const sourceDirectory = await mkdtemp(path.join(os.tmpdir(), 'portfolio-image-test-'));
  const plan = createImagePlan(fixtureData, sourceDirectory, '/public/images');

  await assert.rejects(
    () => assertCanonicalSources(plan),
    new RegExp(
      `Missing canonical image source: ${path.join(sourceDirectory, 'project-alpha.webp')}`,
    ),
  );

  await rm(sourceDirectory, { recursive: true });
});

test('generates exact WebP widths into a caller-provided output directory', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'portfolio-image-generate-'));
  const sources = path.join(root, 'sources');
  const outputs = path.join(root, 'outputs');
  const plan = createImagePlan(
    { projects: [{ image: '/images/project-alpha.webp' }] },
    sources,
    outputs,
  );

  await mkdir(sources, { recursive: true });
  await sharp({
    create: { width: 1200, height: 750, channels: 3, background: '#0b1d2a' },
  })
    .webp()
    .toFile(plan[0].source);

  await generateImages(plan);
  await assertGeneratedImages(plan);

  await rm(root, { recursive: true });
});

test('produces byte-identical outputs across consecutive runs', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'portfolio-image-determinism-'));
  const sources = path.join(root, 'sources');
  const outputs = path.join(root, 'outputs');
  const plan = createImagePlan(
    { projects: [{ image: '/images/project-alpha.webp' }] },
    sources,
    outputs,
  );

  await mkdir(sources, { recursive: true });
  await sharp({
    create: { width: 1200, height: 750, channels: 3, background: '#123456' },
  })
    .webp()
    .toFile(plan[0].source);

  await generateImages(plan);
  const firstHashes = await Promise.all(
    plan[0].outputs.map(async (output) =>
      createHash('sha256')
        .update(await readFile(output.path))
        .digest('hex'),
    ),
  );

  await generateImages(plan);
  const secondHashes = await Promise.all(
    plan[0].outputs.map(async (output) =>
      createHash('sha256')
        .update(await readFile(output.path))
        .digest('hex'),
    ),
  );

  assert.deepEqual(secondHashes, firstHashes);
  await rm(root, { recursive: true });
});
