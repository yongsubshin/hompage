import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

// Read translations.ts
const translationsRaw = readFileSync(join(rootDir, 'src/lib/i18n/translations.ts'), 'utf-8');

// Extract the translations object - everything between first { after `translations =` and the matching `} as const;`
const transStart = translationsRaw.indexOf('export const translations = {');
if (transStart === -1) {
  console.error('Could not find translations object');
  process.exit(1);
}

// Find the object body - we need to find matching braces
let braceDepth = 0;
let objectStart = translationsRaw.indexOf('{', transStart);
let objectEnd = -1;

for (let i = objectStart; i < translationsRaw.length; i++) {
  if (translationsRaw[i] === '{') braceDepth++;
  if (translationsRaw[i] === '}') {
    braceDepth--;
    if (braceDepth === 0) {
      objectEnd = i + 1;
      break;
    }
  }
}

let transObjectStr = translationsRaw.substring(objectStart, objectEnd);

// Convert JS object literal to valid JSON:
// 1. Remove trailing commas before }
// 2. Quote unquoted keys
// 3. Handle single-quoted strings (there shouldn't be any, but just in case)

// Strategy: Use Function() to evaluate the JS object
const translations = new Function('return ' + transObjectStr)();

// Read pageMetadata.ts
const metadataRaw = readFileSync(join(rootDir, 'src/lib/i18n/pageMetadata.ts'), 'utf-8');

// Extract the pageMetadata object
const metaStart = metadataRaw.indexOf('= {', metadataRaw.indexOf('export const pageMetadata'));
let metaBraceDepth = 0;
let metaObjStart = metadataRaw.indexOf('{', metaStart);
let metaObjEnd = -1;

for (let i = metaObjStart; i < metadataRaw.length; i++) {
  if (metadataRaw[i] === '{') metaBraceDepth++;
  if (metadataRaw[i] === '}') {
    metaBraceDepth--;
    if (metaBraceDepth === 0) {
      metaObjEnd = i + 1;
      break;
    }
  }
}

let metaObjectStr = metadataRaw.substring(metaObjStart, metaObjEnd);
const pageMetadata = new Function('return ' + metaObjectStr)();

// Locale code mapping: source → target
const localeMap = {
  kr: 'ko',
  en: 'en',
  jp: 'ja',
  cn: 'zh'
};

// Path to metadata key mapping
function pathToKey(path) {
  if (path === '/') return 'home';
  // Remove leading slash, replace remaining slashes with underscore
  return path.slice(1).replace(/\//g, '_');
}

// Build output JSON for each locale
const outputDir = join(rootDir, 'src/i18n/messages');

for (const [srcLocale, targetLocale] of Object.entries(localeMap)) {
  const transData = translations[srcLocale];
  const metaData = pageMetadata[srcLocale];

  if (!transData) {
    console.error(`Missing translations for locale: ${srcLocale}`);
    continue;
  }

  // Deep clone the translations data
  const output = JSON.parse(JSON.stringify(transData));

  // Add metadata namespace
  if (metaData) {
    const metadata = {};
    for (const [path, meta] of Object.entries(metaData)) {
      const key = pathToKey(path);
      metadata[key] = meta;
    }
    output.metadata = metadata;
  }

  const outputPath = join(outputDir, `${targetLocale}.json`);
  const jsonStr = JSON.stringify(output, null, 2);
  writeFileSync(outputPath, jsonStr + '\n', 'utf-8');

  // Verify it's valid JSON
  try {
    JSON.parse(jsonStr);
    console.log(`[OK] ${targetLocale}.json written (${jsonStr.split('\n').length} lines)`);
  } catch (e) {
    console.error(`[ERROR] ${targetLocale}.json is not valid JSON:`, e.message);
  }
}

// Count keys per locale for verification
function countKeys(obj, prefix = '') {
  let count = 0;
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      count += countKeys(value, prefix + key + '.');
    } else {
      count++;
    }
  }
  return count;
}

console.log('\n--- Key counts per locale ---');
for (const [srcLocale, targetLocale] of Object.entries(localeMap)) {
  const json = JSON.parse(readFileSync(join(outputDir, `${targetLocale}.json`), 'utf-8'));
  console.log(`${targetLocale}.json: ${countKeys(json)} keys`);
}

// Sample verification
console.log('\n--- Sample verification ---');
for (const [srcLocale, targetLocale] of Object.entries(localeMap)) {
  const json = JSON.parse(readFileSync(join(outputDir, `${targetLocale}.json`), 'utf-8'));
  console.log(`\n${targetLocale}:`);
  console.log(`  nav.company = "${json.nav?.company}"`);
  console.log(`  common.learnMore = "${json.common?.learnMore}"`);
  console.log(`  main.heroTitle = "${json.main?.heroTitle}"`);
  console.log(`  metadata.home.title = "${json.metadata?.home?.title}"`);
  console.log(`  footer.copyright = "${json.footer?.copyright}"`);
}
