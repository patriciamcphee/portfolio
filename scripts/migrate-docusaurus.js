// scripts/migrate-docusaurus.js
// Migrates content and sidebar from a Docusaurus project to Trellis.
//
// Usage:
//   node scripts/migrate-docusaurus.js <path-to-docusaurus-project> [--force] [--dry-run]

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT = path.join(__dirname, '..');
const TARGET_DOCS = path.join(ROOT, 'content', 'docs');
const TARGET_SIDEBAR = path.join(ROOT, 'config', 'sidebar.ts');

// Docusaurus-only frontmatter fields that have no Trellis equivalent
const DOCUSAURUS_ONLY_FIELDS = [
  'sidebar_position',
  'sidebar_label',
  'id',
  'slug',
  'displayed_sidebar',
  'pagination_label',
  'pagination_next',
  'pagination_prev',
  'custom_edit_url',
  'parse_number_prefixes',
  'hide_title',
];

// ── Report accumulator ───────────────────────────────────────────
const report = {
  copied: [],
  skipped: [],
  assetsCopied: [],
  warnings: [],
  errors: [],
  frontmatterStripped: new Map(),
  commentsConverted: 0,
  renamed: [],
  prefixesStripped: [],
  sidebarGenerated: false,
  variableSuggestions: [],
};

// ── CLI ──────────────────────────────────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  const flags = { force: false, dryRun: false };
  let docusaurusPath = null;

  for (const arg of args) {
    if (arg === '--force') flags.force = true;
    else if (arg === '--dry-run') flags.dryRun = true;
    else if (!arg.startsWith('--')) docusaurusPath = arg;
  }

  if (!docusaurusPath) {
    console.log('Usage: node scripts/migrate-docusaurus.js <path-to-docusaurus-project> [--force] [--dry-run]');
    console.log('');
    console.log('Options:');
    console.log('  --force     Overwrite existing files in content/docs/');
    console.log('  --dry-run   Preview changes without writing files');
    process.exit(1);
  }

  const resolved = path.resolve(docusaurusPath);
  if (!fs.existsSync(resolved)) {
    console.error(`Error: Path does not exist: ${resolved}`);
    process.exit(1);
  }

  return { docusaurusPath: resolved, ...flags };
}

// ── File discovery ───────────────────────────────────────────────
function findDocsDir(projectPath) {
  const docsDir = path.join(projectPath, 'docs');
  if (fs.existsSync(docsDir) && fs.statSync(docsDir).isDirectory()) return docsDir;
  // Some projects keep docs at root — check for .md/.mdx files
  const entries = fs.readdirSync(projectPath);
  const hasMd = entries.some((e) => /\.mdx?$/.test(e));
  return hasMd ? projectPath : null;
}

function discoverFiles(docsDir) {
  const mdFiles = [];
  const categoryFiles = [];
  const assetFiles = [];

  function walk(dir, rel) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const absPath = path.join(dir, entry.name);
      const relPath = rel ? `${rel}/${entry.name}` : entry.name;

      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;

      if (entry.isDirectory()) {
        walk(absPath, relPath);
      } else if (entry.name === '_category_.json' || entry.name === '_category_.yml') {
        categoryFiles.push({ absPath, relDir: rel || '' });
      } else if (/\.mdx?$/.test(entry.name)) {
        mdFiles.push({ absPath, relPath });
      } else {
        // Non-markdown assets (images, PDFs, etc.)
        assetFiles.push({ absPath, relPath });
      }
    }
  }

  walk(docsDir, '');
  return { mdFiles, categoryFiles, assetFiles };
}

// ── Path transforms ──────────────────────────────────────────────
function stripPrefixesFromPath(relPath) {
  return relPath
    .split('/')
    .map((segment) => {
      const ext = path.extname(segment);
      const base = path.basename(segment, ext);
      const stripped = base.replace(/^\d+-/, '');
      return stripped + ext;
    })
    .join('/');
}

function ensureMdxExtension(filename) {
  if (filename.endsWith('.md') && !filename.endsWith('.mdx')) {
    return filename.replace(/\.md$/, '.mdx');
  }
  return filename;
}

function normaliseReadme(relPath) {
  // README.md → index.mdx in each directory
  return relPath.replace(/README\.mdx?$/i, 'index.mdx');
}

// ── Frontmatter transform ────────────────────────────────────────
function transformFrontmatter(data, relPath) {
  const cleaned = { ...data };
  const stripped = [];

  // Warn if slug is being removed (URL structure will change)
  if (cleaned.slug) {
    report.warnings.push(`${relPath}: Had custom slug "${cleaned.slug}" — URL will change after migration`);
  }

  for (const field of DOCUSAURUS_ONLY_FIELDS) {
    if (field in cleaned) {
      stripped.push(field);
      delete cleaned[field];
    }
  }

  // Map tags → keywords
  if (cleaned.tags) {
    const tagValues = (Array.isArray(cleaned.tags) ? cleaned.tags : [cleaned.tags]).map((t) =>
      typeof t === 'string' ? t : t.label || String(t),
    );
    if (cleaned.keywords) {
      cleaned.keywords = [...new Set([...cleaned.keywords, ...tagValues])];
    } else {
      cleaned.keywords = tagValues;
    }
    delete cleaned.tags;
  }

  return { cleaned, stripped };
}

// ── Content body transform ───────────────────────────────────────
function transformContent(content, relPath) {
  const changes = [];

  // Split on fenced code blocks so we don't transform inside them.
  // Odd-indexed parts are code blocks, even-indexed are prose.
  const parts = content.split(/(```[\s\S]*?```)/g);

  for (let i = 0; i < parts.length; i++) {
    if (i % 2 !== 0) continue; // skip code blocks

    let text = parts[i];

    // 1. Strip @theme imports
    const themeImportRe = /^import\s+.*?\s+from\s+['"]@theme\/[^'"]+['"];?\s*\n?/gm;
    const themeMatches = text.match(themeImportRe);
    if (themeMatches) {
      changes.push(`Stripped ${themeMatches.length} @theme import(s)`);
      text = text.replace(themeImportRe, '');
    }

    // 2. Strip @site imports
    const siteImportRe = /^import\s+.*?\s+from\s+['"]@site\/[^'"]+['"];?\s*\n?/gm;
    const siteMatches = text.match(siteImportRe);
    if (siteMatches) {
      changes.push(`Stripped ${siteMatches.length} @site import(s)`);
      report.warnings.push(`${relPath}: Stripped ${siteMatches.length} @site import(s) — verify no custom components are missing`);
      text = text.replace(siteImportRe, '');
    }

    // 3. HTML comments → MDX comments (<!-- ... --> → {/* ... */})
    const htmlCommentRe = /<!--([\s\S]*?)-->/g;
    let commentCount = 0;
    text = text.replace(htmlCommentRe, (_, inner) => {
      commentCount++;
      return `{/*${inner}*/}`;
    });
    if (commentCount > 0) {
      changes.push(`Converted ${commentCount} HTML comment(s) to MDX`);
      report.commentsConverted += commentCount;
    }

    parts[i] = text;
  }

  let result = parts.join('');

  // 4. Clean up excessive blank lines from import removal
  result = result.replace(/\n{3,}/g, '\n\n');

  // 5. Warn about <CodeBlock> JSX usage
  if (result.includes('<CodeBlock')) {
    report.warnings.push(`${relPath}: Contains <CodeBlock> component — convert to fenced code blocks manually`);
  }

  // 6. Convert relative MDX imports to @include directives.
  //    Docusaurus: import Foo from './_foo.mdx'; ... <Foo />
  //    Trellis:    @include ./_foo.mdx
  const mdxImportRe = /^import\s+(\w+)\s+from\s+['"]([^'"]*\.mdx?)['"];?\s*$/gm;
  const mdxImports = new Map(); // componentName -> path
  let mdxMatch;
  while ((mdxMatch = mdxImportRe.exec(result)) !== null) {
    mdxImports.set(mdxMatch[1], mdxMatch[2]);
  }

  if (mdxImports.size > 0) {
    // Remove the import lines
    result = result.replace(mdxImportRe, '');

    // Replace <ComponentName /> (self-closing) and <ComponentName>...</ComponentName>
    // with @include directives
    for (const [name, importPath] of mdxImports) {
      // Self-closing: <Foo /> or <Foo/>
      const selfClosingRe = new RegExp(`^\\s*<${name}\\s*/>\\s*$`, 'gm');
      result = result.replace(selfClosingRe, `@include ${importPath}`);

      // Opening + closing with no meaningful content: <Foo></Foo>
      const emptyBlockRe = new RegExp(`^\\s*<${name}\\s*>\\s*</${name}>\\s*$`, 'gm');
      result = result.replace(emptyBlockRe, `@include ${importPath}`);
    }

    changes.push(`Converted ${mdxImports.size} MDX import(s) to @include directive(s)`);
  }

  // 7. Warn about other remaining imports
  const remaining = (result.match(/^import\s+.+$/gm) || []).filter((line) => !(/\.mdx?['"]/.test(line)));
  if (remaining.length > 0) {
    report.warnings.push(`${relPath}: ${remaining.length} non-Docusaurus import(s) preserved — verify they work in Trellis`);
  }

  return { content: result, changes };
}

// ── Process a single markdown file ───────────────────────────────
function processFile(srcPath, relPath, force, dryRun) {
  // Path transforms
  let cleanedPath = normaliseReadme(relPath);
  cleanedPath = stripPrefixesFromPath(cleanedPath);
  const mdxPath = ensureMdxExtension(cleanedPath);
  const targetPath = path.join(TARGET_DOCS, mdxPath);

  if (dryRun) {
    console.log(`  [dry-run] ${relPath} -> ${mdxPath}`);
    report.copied.push({ from: relPath, to: mdxPath, changes: ['(dry-run)'] });
    return;
  }

  if (!force && fs.existsSync(targetPath)) {
    report.skipped.push(mdxPath);
    return;
  }

  const raw = fs.readFileSync(srcPath, 'utf-8');
  const { data, content } = matter(raw);

  const { cleaned, stripped } = transformFrontmatter(data, mdxPath);
  for (const field of stripped) {
    report.frontmatterStripped.set(field, (report.frontmatterStripped.get(field) || 0) + 1);
  }

  const { content: transformedContent, changes } = transformContent(content, mdxPath);

  const output = matter.stringify(transformedContent, cleaned);

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, output);

  report.copied.push({ from: relPath, to: mdxPath, changes });

  if (relPath !== mdxPath) {
    const origBase = relPath.replace(/\.mdx?$/, '');
    const newBase = mdxPath.replace(/\.mdx?$/, '');
    if (origBase !== newBase) {
      report.prefixesStripped.push({ from: relPath, to: mdxPath });
    }
    if (/\.md$/.test(relPath) && !/\.mdx$/.test(relPath)) {
      report.renamed.push({ from: relPath, to: mdxPath });
    }
  }
}

// ── Copy non-markdown assets ─────────────────────────────────────
function copyAsset(srcPath, relPath, force, dryRun) {
  const cleanedPath = stripPrefixesFromPath(relPath);
  const targetPath = path.join(TARGET_DOCS, cleanedPath);

  if (dryRun) {
    console.log(`  [dry-run] asset: ${relPath} -> ${cleanedPath}`);
    return;
  }

  if (!force && fs.existsSync(targetPath)) return;

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.copyFileSync(srcPath, targetPath);
  report.assetsCopied.push(cleanedPath);
}

// ── Sidebar: load Docusaurus config ──────────────────────────────
function loadDocusaurusSidebar(projectPath) {
  const candidates = ['sidebars.js', 'sidebars.cjs', 'sidebars.json'];

  for (const candidate of candidates) {
    const fullPath = path.join(projectPath, candidate);
    if (!fs.existsSync(fullPath)) continue;

    if (candidate.endsWith('.json')) {
      try {
        return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      } catch (err) {
        report.warnings.push(`Could not parse ${candidate}: ${err.message}`);
        return null;
      }
    }

    try {
      // Clear require cache so we get a fresh load
      delete require.cache[require.resolve(fullPath)];
      return require(fullPath);
    } catch (err) {
      report.warnings.push(`Could not load ${candidate}: ${err.message}. Will generate sidebar from filesystem.`);
      return null;
    }
  }

  // Try TypeScript sidebar as plain-data fallback
  const tsPath = path.join(projectPath, 'sidebars.ts');
  if (fs.existsSync(tsPath)) {
    return parseTypeScriptSidebar(tsPath);
  }

  report.warnings.push('No sidebars file found. Will generate sidebar from filesystem.');
  return null;
}

function parseTypeScriptSidebar(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const cleaned = raw
    .replace(/import\s+.*?;\n/g, '')
    .replace(/export\s+default\s+/, 'module.exports = ')
    .replace(/:\s*SidebarsConfig/g, '')
    .replace(/\bsatisfies\b[^;]*/g, '')
    .replace(/\bas\s+const\b/g, '');

  try {
    const fn = new Function('module', 'exports', 'require', cleaned);
    const mod = { exports: {} };
    fn(mod, mod.exports, require);
    return mod.exports;
  } catch (err) {
    report.warnings.push(`Could not parse TypeScript sidebar: ${err.message}. Will generate from filesystem.`);
    return null;
  }
}

// ── Sidebar: convert items ───────────────────────────────────────
function convertSidebarItem(item, categoryMeta) {
  if (typeof item === 'string') {
    return { type: 'doc', id: stripPrefixesFromPath(item) };
  }

  if (!item || typeof item !== 'object') return null;

  if (item.type === 'doc' || (!item.type && item.id)) {
    const result = { type: 'doc', id: stripPrefixesFromPath(item.id) };
    if (item.label) result.label = item.label;
    return result;
  }

  if (item.type === 'category') {
    const children = (item.items || []).map((child) => convertSidebarItem(child, categoryMeta)).filter(Boolean);

    const result = {
      type: 'category',
      label: item.label,
      collapsed: item.collapsed !== false,
      items: children,
    };

    if (item.link) {
      if (item.link.type === 'doc') {
        result.link = stripPrefixesFromPath(item.link.id);
      } else if (item.link.type === 'generated-index') {
        // Try to derive an index path from the category label
        const dirName = item.label.toLowerCase().replace(/\s+/g, '-');
        result.link = `${dirName}/index`;
      }
    }

    return result;
  }

  if (item.type === 'autogenerated') {
    const dirName = item.dirName || '.';
    const items = buildSidebarFromFilesystem(dirName);
    // Return items directly (they're already an array)
    return items;
  }

  if (item.type === 'link') {
    report.warnings.push(`External sidebar link skipped: ${item.label} -> ${item.href}`);
    return null;
  }

  return null;
}

// ── Sidebar: autogenerate from filesystem ────────────────────────
function buildSidebarFromFilesystem(dirName) {
  const baseDir = dirName === '.' ? TARGET_DOCS : path.join(TARGET_DOCS, dirName);

  if (!fs.existsSync(baseDir)) return [];

  const items = [];
  const entries = fs.readdirSync(baseDir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));

  for (const entry of entries) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;

    if (entry.isDirectory()) {
      const subDir = dirName === '.' ? entry.name : `${dirName}/${entry.name}`;
      const subItems = buildSidebarFromFilesystem(subDir);

      const indexPath = path.join(baseDir, entry.name, 'index.mdx');
      const hasIndex = fs.existsSync(indexPath);

      const label = getCategoryLabel(path.join(baseDir, entry.name)) || titleCase(entry.name);

      const category = {
        type: 'category',
        label,
        collapsed: true,
        items: subItems.filter((si) => {
          // Don't list the index as a child item
          if (si.type === 'doc') {
            const parts = si.id.split('/');
            return parts[parts.length - 1] !== 'index';
          }
          return true;
        }),
      };

      if (hasIndex) {
        category.link = `${subDir}/index`;
      }

      items.push(category);
    } else if (/\.mdx?$/.test(entry.name) && !/^index\.mdx?$/.test(entry.name)) {
      const id = path
        .join(dirName === '.' ? '' : dirName, entry.name.replace(/\.mdx?$/, ''))
        .replace(/\\/g, '/');
      items.push({ type: 'doc', id });
    }
  }

  return items;
}

function getCategoryLabel(dirPath) {
  for (const name of ['_category_.json', '_category_.yml']) {
    const catFile = path.join(dirPath, name);
    if (fs.existsSync(catFile) && name.endsWith('.json')) {
      try {
        const data = JSON.parse(fs.readFileSync(catFile, 'utf-8'));
        return data.label || null;
      } catch {
        return null;
      }
    }
  }
  return null;
}

function titleCase(str) {
  return str.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

// ── Sidebar: generate Trellis config file ────────────────────────
function generateSidebarFile(items) {
  const header = [
    "export type SidebarItem =",
    "  | { type: 'doc'; id: string; label?: string }",
    "  | { type: 'category'; label: string; link?: string; collapsed?: boolean; items: SidebarItem[] }",
    "",
    "",
  ].join('\n');

  function escapeStr(s) {
    return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  }

  function serializeItem(item, indent) {
    const pad = ' '.repeat(indent);

    if (item.type === 'doc') {
      const parts = [`type: 'doc'`, `id: '${escapeStr(item.id)}'`];
      if (item.label) parts.push(`label: '${escapeStr(item.label)}'`);
      return `${pad}{ ${parts.join(', ')} },`;
    }

    if (item.type === 'category') {
      let result = `${pad}{\n`;
      result += `${pad}  type: 'category',\n`;
      result += `${pad}  label: '${escapeStr(item.label)}',\n`;
      if (item.link) result += `${pad}  link: '${escapeStr(item.link)}',\n`;
      result += `${pad}  collapsed: ${item.collapsed ?? true},\n`;
      result += `${pad}  items: [\n`;
      for (const child of item.items) {
        result += serializeItem(child, indent + 4) + '\n';
      }
      result += `${pad}  ],\n`;
      result += `${pad}},`;
      return result;
    }

    return '';
  }

  let body = 'export const mainSidebar: SidebarItem[] = [\n';
  for (const item of items) {
    body += serializeItem(item, 2) + '\n';
  }
  body += ']\n';

  return header + body;
}

// ── Variable suggestions ─────────────────────────────────────────
function suggestVariables() {
  const candidates = new Map();

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(abs);
      } else if (/\.mdx?$/.test(entry.name)) {
        try {
          const { content } = matter(fs.readFileSync(abs, 'utf-8'));

          // Version strings
          const versions = content.match(/\bv?\d+\.\d+\.\d+\b/g) || [];
          for (const v of versions) candidates.set(v, (candidates.get(v) || 0) + 1);

          // Capitalised multi-word phrases (potential product names)
          const phrases = content.match(/\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+\b/g) || [];
          for (const p of phrases) candidates.set(p, (candidates.get(p) || 0) + 1);

          // Repeated URLs
          const urls = content.match(/https?:\/\/[^\s)>"']+/g) || [];
          for (const u of urls) candidates.set(u, (candidates.get(u) || 0) + 1);
        } catch {
          /* skip unreadable files */
        }
      }
    }
  }

  walk(TARGET_DOCS);

  const suggestions = [];
  for (const [value, count] of candidates) {
    if (count < 3) continue;
    const key = /^https?:\/\//.test(value)
      ? 'url_' +
        value
          .replace(/https?:\/\//, '')
          .replace(/[^\w]/g, '_')
          .slice(0, 30)
      : value
          .toLowerCase()
          .replace(/[^\w]+/g, '_')
          .replace(/_+/g, '_')
          .replace(/^_|_$/g, '');
    suggestions.push({ key, value, count });
  }

  suggestions.sort((a, b) => b.count - a.count);
  return suggestions;
}

// ── Migration report ─────────────────────────────────────────────
function printReport() {
  console.log('\n');
  console.log('========================================');
  console.log('       MIGRATION REPORT');
  console.log('========================================');

  console.log(`\nFiles migrated:  ${report.copied.length}`);
  console.log(`Files skipped:   ${report.skipped.length}`);
  if (report.assetsCopied.length > 0) {
    console.log(`Assets copied:   ${report.assetsCopied.length}`);
  }
  console.log(`Errors:          ${report.errors.length}`);
  console.log(`Warnings:        ${report.warnings.length}`);

  if (report.frontmatterStripped.size > 0) {
    console.log('\nFrontmatter fields stripped:');
    for (const [field, count] of report.frontmatterStripped) {
      console.log(`  ${field}: ${count} file(s)`);
    }
  }

  if (report.commentsConverted > 0) {
    console.log(`\nHTML comments converted to MDX: ${report.commentsConverted}`);
  }

  if (report.renamed.length > 0) {
    console.log(`\nFiles renamed (.md -> .mdx): ${report.renamed.length}`);
  }

  if (report.prefixesStripped.length > 0) {
    console.log(`\nNumbered prefixes stripped: ${report.prefixesStripped.length}`);
    for (const { from, to } of report.prefixesStripped.slice(0, 10)) {
      console.log(`  ${from} -> ${to}`);
    }
    if (report.prefixesStripped.length > 10) {
      console.log(`  ... and ${report.prefixesStripped.length - 10} more`);
    }
  }

  if (report.sidebarGenerated) {
    console.log('\nSidebar: Generated config/sidebar.ts');
  }

  if (report.variableSuggestions.length > 0) {
    console.log('\nSuggested variables for config/variables.ts:');
    console.log('(These repeated values could be replaced with {vars.xxx})');
    for (const { key, value, count } of report.variableSuggestions.slice(0, 15)) {
      console.log(`  ${key}: '${value}' (found ${count} times)`);
    }
  }

  if (report.warnings.length > 0) {
    console.log('\nWarnings:');
    for (const w of report.warnings) {
      console.log(`  - ${w}`);
    }
  }

  if (report.errors.length > 0) {
    console.log('\nErrors:');
    for (const { file, error } of report.errors) {
      console.log(`  ${file}: ${error}`);
    }
  }

  console.log('\nNext steps:');
  console.log('  1. Review migrated files in content/docs/');
  console.log('  2. Review generated config/sidebar.ts');
  console.log('  3. Run "npm run build" to verify the build succeeds');
  console.log('  4. Check any warnings above and fix manually if needed');
  if (report.variableSuggestions.length > 0) {
    console.log('  5. Consider adding suggested variables to config/variables.ts');
  }
}

// ── Main ─────────────────────────────────────────────────────────
function main() {
  const { docusaurusPath, force, dryRun } = parseArgs();

  console.log('Docusaurus -> Trellis Migration');
  console.log('================================');
  console.log(`Source: ${docusaurusPath}`);
  console.log(`Target: ${TARGET_DOCS}`);
  if (force) console.log('Mode: --force (overwriting existing files)');
  if (dryRun) console.log('Mode: --dry-run (no files will be written)');
  console.log('');

  // ── Phase 1: Content files ──────────────────────────────────
  const docsDir = findDocsDir(docusaurusPath);
  if (!docsDir) {
    console.error('Error: Could not find a docs/ directory in the Docusaurus project.');
    process.exit(1);
  }
  console.log(`Found docs at: ${docsDir}`);

  const { mdFiles, categoryFiles, assetFiles } = discoverFiles(docsDir);
  console.log(`\nPhase 1: Migrating content files...`);
  console.log(`  Found ${mdFiles.length} markdown file(s), ${categoryFiles.length} category file(s), ${assetFiles.length} asset(s)`);

  // Build category metadata map for sidebar generation
  const categoryMeta = {};
  for (const catFile of categoryFiles) {
    if (catFile.absPath.endsWith('.json')) {
      try {
        categoryMeta[catFile.relDir] = JSON.parse(fs.readFileSync(catFile.absPath, 'utf-8'));
      } catch {
        /* skip */
      }
    }
  }

  for (const file of mdFiles) {
    try {
      processFile(file.absPath, file.relPath, force, dryRun);
    } catch (err) {
      report.errors.push({ file: file.relPath, error: err.message });
      console.error(`  Error: ${file.relPath}: ${err.message}`);
    }
  }

  // Copy assets (images etc.)
  for (const file of assetFiles) {
    try {
      copyAsset(file.absPath, file.relPath, force, dryRun);
    } catch (err) {
      report.errors.push({ file: file.relPath, error: err.message });
    }
  }

  // ── Phase 2: Sidebar conversion ─────────────────────────────
  console.log('\nPhase 2: Converting sidebar...');
  const sidebarData = loadDocusaurusSidebar(docusaurusPath);

  let convertedItems = [];

  if (sidebarData && typeof sidebarData === 'object') {
    const keys = Object.keys(sidebarData);
    if (keys.length > 0) {
      const sidebarKey = keys[0];
      const rawItems = Array.isArray(sidebarData[sidebarKey]) ? sidebarData[sidebarKey] : [];
      console.log(`  Converting sidebar "${sidebarKey}" (${rawItems.length} top-level item(s))`);

      for (const item of rawItems) {
        const converted = convertSidebarItem(item, categoryMeta);
        if (Array.isArray(converted)) {
          // Autogenerated returns an array
          convertedItems.push(...converted);
        } else if (converted) {
          convertedItems.push(converted);
        }
      }
    }
  }

  if (convertedItems.length === 0) {
    console.log('  No sidebar items converted. Generating from filesystem...');
    convertedItems = buildSidebarFromFilesystem('.');
  }

  if (convertedItems.length > 0) {
    if (!dryRun) {
      if (fs.existsSync(TARGET_SIDEBAR)) {
        const backupPath = TARGET_SIDEBAR.replace('.ts', '.backup.ts');
        fs.copyFileSync(TARGET_SIDEBAR, backupPath);
        console.log(`  Backed up existing sidebar to ${path.basename(backupPath)}`);
      }

      const sidebarContent = generateSidebarFile(convertedItems);
      fs.writeFileSync(TARGET_SIDEBAR, sidebarContent);
      report.sidebarGenerated = true;
      console.log(`  Sidebar written to config/sidebar.ts (${convertedItems.length} top-level items)`);
    } else {
      console.log(`  [dry-run] Would write sidebar with ${convertedItems.length} top-level items`);
    }
  }

  // ── Phase 3: Variable suggestions ───────────────────────────
  if (!dryRun && report.copied.length > 0) {
    console.log('\nPhase 3: Scanning for variable candidates...');
    report.variableSuggestions = suggestVariables();
    if (report.variableSuggestions.length > 0) {
      console.log(`  Found ${report.variableSuggestions.length} candidate(s)`);
    } else {
      console.log('  No repeated strings found');
    }
  }

  // ── Report ──────────────────────────────────────────────────
  printReport();
}

main();
