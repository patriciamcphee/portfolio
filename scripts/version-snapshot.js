#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const version = process.argv[2]
if (!version) {
  console.error('Usage: node scripts/version-snapshot.js <version>')
  console.error('Example: node scripts/version-snapshot.js v1')
  process.exit(1)
}

const ROOT = path.join(__dirname, '..')
const VERSIONS_FILE = path.join(ROOT, 'versions.json')

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return
  fs.mkdirSync(dest, { recursive: true })
  const entries = fs.readdirSync(src, { withFileTypes: true })
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

// 1. Copy content/docs/ -> versioned_docs/<version>/
const docsSrc = path.join(ROOT, 'content/docs')
const docsDest = path.join(ROOT, 'versioned_docs', version)

if (fs.existsSync(docsDest)) {
  console.error(`Error: Version "${version}" already exists at ${docsDest}`)
  process.exit(1)
}

copyDirSync(docsSrc, docsDest)
console.log(`  Copied content/docs/ -> versioned_docs/${version}/`)

// 2. Copy sidebar config -> versioned_sidebars/<version>.ts
const sidebarSrc = path.join(ROOT, 'config/sidebar.ts')
const sidebarDestDir = path.join(ROOT, 'versioned_sidebars')
fs.mkdirSync(sidebarDestDir, { recursive: true })
const sidebarDest = path.join(sidebarDestDir, `${version}.ts`)
if (fs.existsSync(sidebarSrc)) {
  fs.copyFileSync(sidebarSrc, sidebarDest)
  console.log(`  Copied sidebar -> versioned_sidebars/${version}.ts`)
}

// 3. Update versions.json
let versions = []
try {
  versions = JSON.parse(fs.readFileSync(VERSIONS_FILE, 'utf-8'))
} catch {
  // First version — file doesn't exist yet
}

if (!versions.includes(version)) {
  versions.unshift(version)
  fs.writeFileSync(VERSIONS_FILE, JSON.stringify(versions, null, 2) + '\n')
  console.log(`  Updated versions.json: [${versions.join(', ')}]`)
}

// 4. Copy i18n locale docs if they exist
const i18nDir = path.join(ROOT, 'content/i18n')
if (fs.existsSync(i18nDir)) {
  const locales = fs.readdirSync(i18nDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)

  for (const locale of locales) {
    const localeSrc = path.join(i18nDir, locale, 'docs')
    const localeDest = path.join(i18nDir, locale, 'versioned_docs', version)
    if (fs.existsSync(localeSrc)) {
      copyDirSync(localeSrc, localeDest)
      console.log(`  Copied i18n/${locale}/docs -> i18n/${locale}/versioned_docs/${version}/`)
    }
  }
}

console.log(`\nVersion "${version}" snapshot created successfully.`)
