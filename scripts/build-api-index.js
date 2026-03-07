// scripts/build-api-index.js
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public/api-specs');
const SPEC_EXTENSIONS = ['.yaml', '.yml', '.json'];

// Load site config to check apiDocs settings
let siteConfig = {};
try {
  const configPath = path.join(ROOT, 'config/site.ts');
  const configRaw = fs.readFileSync(configPath, 'utf-8');
  siteConfig.apiDocsEnabled = /apiDocs:\s*\{[^}]*enabled:\s*true/s.test(configRaw);
  const specDirMatch = configRaw.match(/specDir:\s*['"]([^'"]+)['"]/);
  siteConfig.specDir = specDirMatch ? specDirMatch[1] : 'api';
  siteConfig.versioningEnabled = /versioning:\s*\{[^}]*enabled:\s*true/s.test(configRaw);
} catch {
  siteConfig = { apiDocsEnabled: false, specDir: 'api', versioningEnabled: false };
}

if (!siteConfig.apiDocsEnabled) {
  // Write empty index and exit
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, '_index.json'), JSON.stringify({}));
  console.log('API docs disabled — skipped.');
  process.exit(0);
}

// Load versions if versioning is enabled
let versions = [];
try {
  if (siteConfig.versioningEnabled) {
    versions = JSON.parse(fs.readFileSync(path.join(ROOT, 'versions.json'), 'utf-8'));
  }
} catch {
  // No versions file
}

function getSpecDir(version) {
  if (version === 'current') return path.join(ROOT, siteConfig.specDir);
  return path.join(ROOT, 'versioned_docs', version, 'api');
}

function processSpecs(dir, subDir) {
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return SPEC_EXTENSIONS.includes(ext) && !f.startsWith('_');
  });

  const entries = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    let spec;
    try {
      spec = file.endsWith('.json') ? JSON.parse(raw) : yaml.load(raw);
    } catch (err) {
      console.warn(`  Warning: Failed to parse ${file}: ${err.message}`);
      continue;
    }

    if (!spec.openapi && !spec.swagger) {
      console.warn(`  Warning: ${file} is not a valid OpenAPI/Swagger spec (missing openapi/swagger key)`);
      continue;
    }

    const slug = path.basename(file, path.extname(file));
    const outPath = path.join(OUT_DIR, subDir, `${slug}.json`);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(spec));

    entries.push({
      slug,
      title: spec.info?.title || slug,
      description: spec.info?.description || '',
      version: spec.info?.version || '',
      specFile: `${subDir}${slug}.json`,
    });
  }

  return entries;
}

// Build the index
const allVersions = ['current', ...versions];
const fullIndex = {};
let total = 0;

for (const version of allVersions) {
  const dir = getSpecDir(version);
  const subDir = version === 'current' ? '' : `${version}/`;
  const entries = processSpecs(dir, subDir);
  if (entries.length > 0) {
    fullIndex[version] = entries;
    total += entries.length;
  }
}

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, '_index.json'), JSON.stringify(fullIndex, null, 2));

console.log(`API index built: ${total} spec(s) across ${Object.keys(fullIndex).length} version(s)`);
