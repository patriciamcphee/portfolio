// scripts/build-faq-index.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT = path.join(__dirname, '..');
const FAQ_DIR = path.join(ROOT, 'content/docs/faq');
const OUT_FILE = path.join(ROOT, 'public/faqIndex.json');
const BASE_PERMALINK = '/faq';

// Load doc variables for resolving {vars.xxx} in headings
let docVars = {};
try {
  const varsRaw = fs.readFileSync(path.join(ROOT, 'config/variables.ts'), 'utf-8');
  const varMatches = [...varsRaw.matchAll(/(\w+):\s*['"]([^'"]*)['"]/g)];
  for (const m of varMatches) docVars[m[1]] = m[2];
} catch { /* variables file is optional */ }

const SMALL_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'from', 'if',
  'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'vs', 'yet',
]);

function titleCase(str) {
  return str
    .replace(/-/g, ' ')
    .replace(/\b\w+/g, (word, index) =>
      index === 0 || !SMALL_WORDS.has(word.toLowerCase())
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word.toLowerCase()
    );
}

function resolveVars(text) {
  return text.replace(/\{vars\.(\w+)\}/g, (_, key) => docVars[key] ?? '');
}

// Load site config for i18n/versioning awareness
let siteConfig = {};
try {
  const configPath = path.join(ROOT, 'config/site.ts');
  const configRaw = fs.readFileSync(configPath, 'utf-8');
  siteConfig.i18nEnabled = /i18n:\s*\{[^}]*enabled:\s*true/s.test(configRaw);
  siteConfig.versioningEnabled = /versioning:\s*\{[^}]*enabled:\s*true/s.test(configRaw);
  const localeMatch = configRaw.match(/defaultLocale:\s*['"]([^'"]+)['"]/);
  siteConfig.defaultLocale = localeMatch ? localeMatch[1] : 'en';

  if (siteConfig.i18nEnabled) {
    const codeMatches = [...configRaw.matchAll(/code:\s*['"]([^'"]+)['"]/g)];
    siteConfig.locales = codeMatches.map((m) => m[1]);
  } else {
    siteConfig.locales = [siteConfig.defaultLocale];
  }
} catch {
  siteConfig = {
    i18nEnabled: false,
    versioningEnabled: false,
    defaultLocale: 'en',
    locales: ['en'],
  };
}

let versions = [];
try {
  if (siteConfig.versioningEnabled) {
    versions = JSON.parse(fs.readFileSync(path.join(ROOT, 'versions.json'), 'utf-8'));
  }
} catch {
  // No versions file
}

function getFaqDir(locale, version) {
  const isDefault = locale === siteConfig.defaultLocale;
  const isCurrent = version === 'current';

  if (isDefault && isCurrent) return FAQ_DIR;
  if (isDefault && !isCurrent) return path.join(ROOT, 'versioned_docs', version, 'faq');
  if (!isDefault && isCurrent) return path.join(ROOT, 'content/i18n', locale, 'docs/faq');
  return path.join(ROOT, 'content/i18n', locale, 'versioned_docs', version, 'faq');
}

function buildUrlPrefix(locale, version) {
  const parts = [];
  if (locale !== siteConfig.defaultLocale) parts.push(locale);
  if (version !== 'current') parts.push(version);
  return parts.length > 0 ? '/' + parts.join('/') : '';
}

function indexFaqDir(faqDir, urlPrefix) {
  if (!fs.existsSync(faqDir)) return [];

  const files = fs
    .readdirSync(faqDir)
    .filter((f) => /\.mdx?$/.test(f) && f !== 'index.mdx' && f !== 'index.md');

  const topics = [];

  for (const file of files) {
    const filePath = path.join(faqDir, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(raw);

    // Skip draft pages
    if (frontmatter.draft === true) continue;

    const slug = file.replace(/\.mdx?$/, '');
    const title =
      frontmatter.title ||
      titleCase(slug);

    // Extract ### headings as questions
    const h3Regex = /^###\s+(.+)$/gm;
    const questions = [];
    let match;

    while ((match = h3Regex.exec(content)) !== null) {
      let questionText = resolveVars(
        match[1]
          .trim()
          .replace(/\*{1,3}(.*?)\*{1,3}/g, '$1')
          .replace(/`([^`]+)`/g, '$1')
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
          .trim()
      );

      if (questionText) {
        const anchor = questionText
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');

        questions.push({ text: questionText, anchor });
      }
    }

    topics.push({
      slug,
      title,
      description: frontmatter.description || '',
      permalink: `${urlPrefix}${BASE_PERMALINK}/${slug}`,
      questions,
    });
  }

  topics.sort((a, b) => a.title.localeCompare(b.title));
  return topics;
}

// Build the index
const allVersions = ['current', ...versions];
const allLocales = siteConfig.locales;
const fullIndex = {};
let totalTopics = 0;

for (const locale of allLocales) {
  for (const version of allVersions) {
    const faqDir = getFaqDir(locale, version);
    const urlPrefix = buildUrlPrefix(locale, version);
    const key = `${locale}:${version}`;
    const topics = indexFaqDir(faqDir, urlPrefix);

    if (topics.length > 0) {
      fullIndex[key] = topics;
      totalTopics += topics.length;
    }
  }
}

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(fullIndex, null, 2));

const keys = Object.keys(fullIndex);
const totalQuestions = Object.values(fullIndex).flat().reduce((s, t) => s + t.questions.length, 0);
console.log(`FAQ index built: ${totalTopics} topics, ${totalQuestions} questions across ${keys.length} index(es)`);
