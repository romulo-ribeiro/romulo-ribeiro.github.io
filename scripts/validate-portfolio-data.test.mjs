import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { assertValidPortfolioData } from './validate-portfolio-data.mjs';

const dataUrl = new URL('../src/app/data/projects.json', import.meta.url);
const loadData = async () => JSON.parse(await readFile(dataUrl, 'utf8'));

test('accepts the checked-in portfolio data', async () => {
  const data = await loadData();
  assert.doesNotThrow(() => assertValidPortfolioData(data, 'projects.json'));
});

test('rejects a project translation when a required locale is missing', async () => {
  const data = await loadData();
  delete data.experienceAreas[0].translations.pt;

  assert.throws(
    () => assertValidPortfolioData(data, 'projects.json'),
    /experienceAreas\[0\]\.translations\.pt must be an object/,
  );
});

test('rejects content stored in a draft editorial slot', async () => {
  const data = await loadData();
  data.evidenceSlots[0].content = 'Confidential draft';

  assert.throws(
    () => assertValidPortfolioData(data, 'projects.json'),
    /evidenceSlots\[0\]\.content must be null while status is draft/,
  );
});
