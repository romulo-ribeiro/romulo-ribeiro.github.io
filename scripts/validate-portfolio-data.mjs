import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const languages = ['en', 'es', 'pt'];
const domains = ['industrial', 'enterprise', 'logistics', 'ai', 'product'];
const statuses = ['draft', 'published'];
const dataUrl = new URL('../src/app/data/projects.json', import.meta.url);

const isObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);

export function assertValidPortfolioData(data, source = 'portfolio data') {
  const errors = [];

  const requireObject = (value, path) => {
    if (isObject(value)) return true;
    errors.push(`${path} must be an object`);
    return false;
  };

  const requireArray = (value, path) => {
    if (Array.isArray(value)) return true;
    errors.push(`${path} must be an array`);
    return false;
  };

  const requireString = (value, path) => {
    if (typeof value === 'string' && value.trim().length > 0) return true;
    errors.push(`${path} must be a non-empty string`);
    return false;
  };

  const requireNullableString = (value, path) => {
    if (value === null || typeof value === 'string') return true;
    errors.push(`${path} must be a string or null`);
    return false;
  };

  const validateTranslation = (translation, path) => {
    if (!requireObject(translation, path)) return;
    ['title', 'summary', 'contribution', 'caption'].forEach((field) =>
      requireString(translation[field], `${path}.${field}`),
    );
    requireNullableString(translation.outcome, `${path}.outcome`);
  };

  const validateExperienceCollection = (value, path) => {
    if (!requireArray(value, path)) return;
    const ids = new Set();

    value.forEach((item, index) => {
      const itemPath = `${path}[${index}]`;
      if (!requireObject(item, itemPath)) return;

      if (requireString(item.id, `${itemPath}.id`)) {
        if (ids.has(item.id)) errors.push(`${itemPath}.id must be unique within ${path}`);
        ids.add(item.id);
      }
      if (!statuses.includes(item.status)) {
        errors.push(`${itemPath}.status must be one of: ${statuses.join(', ')}`);
      }
      if (typeof item.featured !== 'boolean') errors.push(`${itemPath}.featured must be a boolean`);
      if (!domains.includes(item.primaryDomain)) {
        errors.push(`${itemPath}.primaryDomain must be one of: ${domains.join(', ')}`);
      }

      if (requireArray(item.domains, `${itemPath}.domains`)) {
        if (item.domains.length === 0) errors.push(`${itemPath}.domains must not be empty`);
        item.domains.forEach((domain, domainIndex) => {
          if (!domains.includes(domain)) {
            errors.push(
              `${itemPath}.domains[${domainIndex}] must be one of: ${domains.join(', ')}`,
            );
          }
        });
        if (domains.includes(item.primaryDomain) && !item.domains.includes(item.primaryDomain)) {
          errors.push(`${itemPath}.domains must include primaryDomain`);
        }
      }

      if (item.image !== null) requireString(item.image, `${itemPath}.image`);
      if (requireArray(item.technologies, `${itemPath}.technologies`)) {
        item.technologies.forEach((technology, technologyIndex) =>
          requireString(technology, `${itemPath}.technologies[${technologyIndex}]`),
        );
      }

      if (requireObject(item.translations, `${itemPath}.translations`)) {
        languages.forEach((language) =>
          validateTranslation(item.translations[language], `${itemPath}.translations.${language}`),
        );
      }
    });
  };

  const validateEditorialCollection = (value, path) => {
    if (!requireArray(value, path)) return;
    const ids = new Set();

    value.forEach((item, index) => {
      const itemPath = `${path}[${index}]`;
      if (!requireObject(item, itemPath)) return;
      if (requireString(item.id, `${itemPath}.id`)) {
        if (ids.has(item.id)) errors.push(`${itemPath}.id must be unique within ${path}`);
        ids.add(item.id);
      }
      if (!statuses.includes(item.status)) {
        errors.push(`${itemPath}.status must be one of: ${statuses.join(', ')}`);
      }
      requireNullableString(item.content, `${itemPath}.content`);
      if (item.status === 'draft' && item.content !== null) {
        errors.push(`${itemPath}.content must be null while status is draft`);
      }
    });
  };

  if (requireObject(data, source)) {
    validateExperienceCollection(data.experienceAreas, 'experienceAreas');
    validateExperienceCollection(data.projects, 'projects');

    if (requireObject(data.caseStudySlots, 'caseStudySlots')) {
      requireNullableString(data.caseStudySlots.role, 'caseStudySlots.role');
      requireNullableString(data.caseStudySlots.validation, 'caseStudySlots.validation');
    }

    validateEditorialCollection(data.evidenceSlots, 'evidenceSlots');
    validateEditorialCollection(data.technicalNotes, 'technicalNotes');
  }

  if (errors.length > 0) {
    throw new Error(`${source} is invalid:\n- ${errors.join('\n- ')}`);
  }
}

function validateCheckedInData() {
  const data = JSON.parse(readFileSync(dataUrl, 'utf8'));
  assertValidPortfolioData(data, 'src/app/data/projects.json');
  console.log('Portfolio data is valid.');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  validateCheckedInData();
}
