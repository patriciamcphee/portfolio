// scripts/check-links.js
// Checks internal links in the static export for broken references.
// Reads every HTML file in out/ and verifies each internal href resolves
// to an existing file.  Deduplicates nav links so the same broken href
// is only reported once.
//
// Usage:
//   node scripts/check-links.js [--warn-only]
//
// --warn-only  Print broken links but exit 0 (don't fail the build).
//
// Exit codes:
//   0 — no broken links (or --warn-only)
//   1 — broken links found / out/ directory missing

const fs   = require('fs');
const path = require('path');

const OUT_DIR  = path.join(__dirname, '..', 'out');
const WARN_ONLY = process.argv.includes('--warn-only');

// ── Walk out/ and return all .html files ─────────────────────────
function walkHtml(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkHtml(full));
    } else if (entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

// ── Extract every href value from an HTML string ─────────────────
function extractHrefs(html) {
  const hrefs = [];
  const re = /href=["']([^"'#][^"']*?)["']/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    hrefs.push(m[1]);
  }
  return hrefs;
}

// ── Resolve a root-relative href to a filesystem path ────────────
function resolveTarget(href) {
  // Strip fragment and query string
  const clean = href.replace(/[?#].*$/, '');
  if (!clean || !clean.startsWith('/')) return null;

  // Skip Next.js internals and non-page assets we don't control
  if (clean.startsWith('/_next/')) return null;

  return path.join(OUT_DIR, clean);
}

// ── Check whether a resolved path exists ─────────────────────────
function targetExists(target) {
  // Exact file (images, PDFs, etc.)
  if (fs.existsSync(target) && fs.statSync(target).isFile()) return true;
  // Directory index  (trailing-slash routes)
  if (fs.existsSync(path.join(target, 'index.html')))         return true;
  // Non-trailing-slash route
  if (fs.existsSync(target + '.html'))                        return true;
  return false;
}

// ── Main ─────────────────────────────────────────────────────────
function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error('Error: out/ directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  const htmlFiles = walkHtml(OUT_DIR);
  console.log(`Checking internal links in ${htmlFiles.length} pages...`);

  // broken: Map<href → string[]>  (href → list of source pages)
  const broken = new Map();

  for (const file of htmlFiles) {
    const html    = fs.readFileSync(file, 'utf-8');
    const hrefs   = extractHrefs(html);
    const relPage = path.relative(OUT_DIR, file).replace(/\\/g, '/');

    for (const href of hrefs) {
      // Skip external, mailto, tel, data, javascript
      if (/^(https?:|mailto:|tel:|javascript:|data:)/.test(href)) continue;

      const target = resolveTarget(href);
      if (!target) continue;

      if (!targetExists(target)) {
        if (!broken.has(href)) broken.set(href, []);
        broken.get(href).push(relPage);
      }
    }
  }

  if (broken.size === 0) {
    console.log('  No broken links found.');
    process.exit(0);
  }

  const total = [...broken.values()].reduce((n, pages) => n + pages.length, 0);
  const label = WARN_ONLY ? 'Warning' : 'Error';
  console.log(`\n${label}: ${broken.size} broken link(s) found (${total} occurrence(s)):\n`);

  for (const [href, pages] of [...broken].sort(([a], [b]) => a.localeCompare(b))) {
    console.log(`  ${href}`);
    const shown = pages.slice(0, 3);
    for (const p of shown) console.log(`    in: ${p}`);
    if (pages.length > 3) console.log(`    ... and ${pages.length - 3} more page(s)`);
  }

  console.log('');
  process.exit(WARN_ONLY ? 0 : 1);
}

main();
