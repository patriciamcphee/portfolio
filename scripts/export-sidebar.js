#!/usr/bin/env node

/**
 * Exports the sidebar structure as a CSV file for content auditing.
 *
 * Usage:
 *   node scripts/export-sidebar.js                  # prints to stdout
 *   node scripts/export-sidebar.js > sidebar.csv    # saves to file
 *
 * Output columns:
 *   Doc ID, Title, URL, Category, Draft, Doc Type, Role, Last Updated, Author, Description, Keywords, File Path
 */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const ROOT = path.join(__dirname, '..')
const DOCS_DIR = path.join(ROOT, 'content/docs')

// Load sidebar config by reading the TypeScript file and extracting the array
function loadSidebar() {
  const sidebarPath = path.join(ROOT, 'config/sidebar.ts')
  const raw = fs.readFileSync(sidebarPath, 'utf-8')

  // Strip the type export and extract just the array
  const match = raw.match(/export const mainSidebar[^=]*=\s*(\[[\s\S]*\])/)
  if (!match) {
    console.error('Could not parse sidebar config')
    process.exit(1)
  }

  // Evaluate the array (it's plain JS-compatible data)
  return eval(match[1])
}

// Find the actual file for a doc id
function findDocFile(id) {
  const candidates = [
    path.join(DOCS_DIR, `${id}.mdx`),
    path.join(DOCS_DIR, `${id}.md`),
    path.join(DOCS_DIR, `${id}/index.mdx`),
    path.join(DOCS_DIR, `${id}/index.md`),
  ]
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate
  }
  return null
}

// Read frontmatter from a doc file
function readFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(raw)
  return data
}

// Escape a CSV field
function csvField(value) {
  if (value == null) return ''
  const str = String(value)
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"'
  }
  return str
}

// Flatten sidebar into rows
function flattenSidebar(items, category = '') {
  const rows = []

  for (const item of items) {
    if (item.type === 'doc') {
      const filePath = findDocFile(item.id)
      const slug = item.id.replace(/\/index$/, '')
      const url = `/${slug}/`

      if (filePath) {
        const fm = readFrontmatter(filePath)
        const relPath = path.relative(ROOT, filePath).replace(/\\/g, '/')
        rows.push({
          id: item.id,
          title: item.label || fm.title || slug,
          url,
          category,
          draft: fm.draft === true ? 'Yes' : '',
          docType: fm.doc_type || '',
          role: Array.isArray(fm.role) ? fm.role.join('; ') : (fm.role || ''),
          lastUpdated: fm.last_update?.date || '',
          author: fm.last_update?.author || '',
          description: fm.description || '',
          keywords: Array.isArray(fm.keywords) ? fm.keywords.join('; ') : '',
          filePath: relPath,
        })
      } else {
        rows.push({
          id: item.id,
          title: item.label || slug,
          url,
          category,
          draft: '',
          docType: '',
          role: '',
          lastUpdated: '',
          author: '',
          description: '',
          keywords: '',
          filePath: '(not found)',
        })
      }
    } else if (item.type === 'category') {
      // If the category itself links to a page, include it
      if (item.link) {
        const filePath = findDocFile(item.link)
        const slug = item.link.replace(/\/index$/, '')
        const url = `/${slug}/`

        if (filePath) {
          const fm = readFrontmatter(filePath)
          const relPath = path.relative(ROOT, filePath).replace(/\\/g, '/')
          rows.push({
            id: item.link,
            title: item.label,
            url,
            category: category || '(top-level)',
            draft: fm.draft === true ? 'Yes' : '',
            docType: fm.doc_type || '',
            role: Array.isArray(fm.role) ? fm.role.join('; ') : (fm.role || ''),
            lastUpdated: fm.last_update?.date || '',
            author: fm.last_update?.author || '',
            description: fm.description || '',
            keywords: Array.isArray(fm.keywords) ? fm.keywords.join('; ') : '',
            filePath: relPath,
          })
        }
      }

      // Recurse into children
      const childCategory = category ? `${category} > ${item.label}` : item.label
      rows.push(...flattenSidebar(item.items, childCategory))
    }
  }

  return rows
}

// Main
const sidebar = loadSidebar()
const rows = flattenSidebar(sidebar)

const headers = ['Doc ID', 'Title', 'URL', 'Category', 'Draft', 'Doc Type', 'Role', 'Last Updated', 'Author', 'Description', 'Keywords', 'File Path']
const csvLines = [
  headers.join(','),
  ...rows.map((r) =>
    [r.id, r.title, r.url, r.category, r.draft, r.docType, r.role, r.lastUpdated, r.author, r.description, r.keywords, r.filePath]
      .map(csvField)
      .join(',')
  ),
]

console.log(csvLines.join('\n'))
