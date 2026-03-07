import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { siteConfig } from '@/config/site'
import { authors as authorProfiles } from '@/config/authors'
import type { AuthorProfile } from '@/config/authors'
import { resolveIncludes } from './resolve-includes'
import { preprocessAdmonitions } from './remark-callout'

const DOCS_DIR = path.join(process.cwd(), 'content/docs')
const BLOG_DIR = path.join(process.cwd(), 'content/blog')
const RELEASE_NOTES_DIR = path.join(process.cwd(), 'content/release-notes')

function getContentDir(locale: string, version: string): string {
  const { i18n, versioning } = siteConfig
  const defaultLocale = i18n?.defaultLocale || 'en'
  const isDefaultLocale = !i18n?.enabled || locale === defaultLocale
  const isCurrentVersion = !versioning?.enabled || version === 'current'

  if (isDefaultLocale && isCurrentVersion) {
    return DOCS_DIR
  }
  if (isDefaultLocale && !isCurrentVersion) {
    return path.join(process.cwd(), 'versioned_docs', version)
  }
  if (!isDefaultLocale && isCurrentVersion) {
    return path.join(process.cwd(), 'content/i18n', locale, 'docs')
  }
  // Non-default locale + old version
  return path.join(process.cwd(), 'content/i18n', locale, 'versioned_docs', version)
}

export interface DocMeta {
  title: string
  description?: string
  keywords?: string[]
  last_update?: { date: string; author: string }
  hide_title?: boolean
  hide_table_of_contents?: boolean
  doc_type?: string
  role?: string[]
  draft?: boolean
  slug: string
}

export interface DocEntry {
  meta: DocMeta
  content: string
  filePath: string
}

async function getFilesRecursive(dir: string, base = ''): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    // Skip _prefixed files/dirs (partials/includes, like Docusaurus)
    if (entry.name.startsWith('_')) continue
    const rel = base ? `${base}/${entry.name}` : entry.name
    if (entry.isDirectory()) {
      files.push(...await getFilesRecursive(path.join(dir, entry.name), rel))
    } else if (/\.mdx?$/.test(entry.name)) {
      files.push(rel)
    }
  }

  return files
}

function fileToSlug(file: string): string[] {
  return file
    .replace(/\.mdx?$/, '')
    .replace(/\/index$/, '')
    .split('/')
    .filter(Boolean)
}

export async function getAllDocSlugs(
  locale = 'en',
  version = 'current'
): Promise<string[][]> {
  const dir = getContentDir(locale, version)
  try {
    const files = await getFilesRecursive(dir)
    const slugs: string[][] = []
    for (const file of files) {
      const raw = await fs.readFile(path.join(dir, file), 'utf-8')
      const { data } = matter(raw)
      if (data.draft === true) continue
      slugs.push(fileToSlug(file))
    }
    return slugs
  } catch {
    // Directory doesn't exist (e.g. no translations for this locale/version)
    return []
  }
}

async function loadDoc(
  slug: string[],
  locale: string,
  version: string
): Promise<DocEntry> {
  const dir = getContentDir(locale, version)
  const slugPath = slug.join('/')

  const candidates = [
    path.join(dir, `${slugPath}.mdx`),
    path.join(dir, `${slugPath}.md`),
    path.join(dir, `${slugPath}/index.mdx`),
    path.join(dir, `${slugPath}/index.md`),
  ]

  let filePath: string | null = null
  for (const candidate of candidates) {
    try {
      await fs.access(candidate)
      filePath = candidate
      break
    } catch {
      continue
    }
  }

  if (!filePath) {
    throw new Error(`Doc not found: ${slugPath} (locale=${locale}, version=${version})`)
  }

  const raw = await fs.readFile(filePath, 'utf-8')
  const { data, content } = matter(raw)

  // Resolve @include directives (inline partials before MDX compilation)
  const resolvedContent = await resolveIncludes(content, path.dirname(filePath))
  // Convert :::type title → :::type[title] for remark-directive compatibility
  const processedContent = preprocessAdmonitions(resolvedContent)

  return {
    meta: {
      title: data.title || slug[slug.length - 1],
      description: data.description,
      keywords: data.keywords,
      last_update: data.last_update,
      hide_title: data.hide_title === true,
      hide_table_of_contents: data.hide_table_of_contents,
      doc_type: data.doc_type,
      role: data.role,
      draft: data.draft === true,
      slug: '/' + slugPath,
    },
    content: processedContent,
    filePath: path.relative(process.cwd(), filePath).replace(/\\/g, '/'),
  }
}

export async function getDocBySlug(
  slug: string[],
  locale = 'en',
  version = 'current'
): Promise<DocEntry & { isFallback: boolean }> {
  const defaultLocale = siteConfig.i18n?.defaultLocale || 'en'

  // Try requested locale first
  try {
    const entry = await loadDoc(slug, locale, version)
    return { ...entry, isFallback: false }
  } catch {
    // If non-default locale, fall back to default locale
    if (locale !== defaultLocale) {
      try {
        const entry = await loadDoc(slug, defaultLocale, version)
        return { ...entry, isFallback: true }
      } catch {
        throw new Error(
          `Doc not found: ${slug.join('/')} (locale=${locale}, version=${version})`
        )
      }
    }
    throw new Error(`Doc not found: ${slug.join('/')} (version=${version})`)
  }
}

export async function getAllDocsMeta(
  locale = 'en',
  version = 'current'
): Promise<DocMeta[]> {
  const dir = getContentDir(locale, version)
  let files: string[]
  try {
    files = await getFilesRecursive(dir)
  } catch {
    return []
  }
  const metas: DocMeta[] = []

  for (const file of files) {
    const raw = await fs.readFile(path.join(dir, file), 'utf-8')
    const { data } = matter(raw)
    if (data.draft === true) continue
    const slugArr = fileToSlug(file)
    metas.push({
      title: data.title || slugArr[slugArr.length - 1],
      description: data.description,
      keywords: data.keywords,
      last_update: data.last_update,
      doc_type: data.doc_type,
      role: data.role,
      draft: false,
      slug: '/' + slugArr.join('/'),
    })
  }

  return metas
}

// Blog content loading

export interface BlogAuthor {
  name: string
  role?: string
  bio?: string
  img?: string
  url?: string
}

export interface BlogMeta {
  title: string
  description?: string
  slug: string
  date: string
  authors?: BlogAuthor[]
  category?: string
  featured?: boolean
  coverImage?: string
  coverColor?: string
}

/**
 * Resolve an author entry from frontmatter.
 * - String → look up from config/authors.ts
 * - Object → merge with config profile (inline overrides config)
 */
function resolveAuthor(entry: unknown): BlogAuthor | null {
  if (typeof entry === 'string') {
    const profile = authorProfiles[entry]
    return profile ? { ...profile } : null
  }
  if (entry && typeof entry === 'object') {
    const obj = entry as Record<string, unknown>
    // If it has a name, check if there's a matching config profile to merge
    const name = obj.name as string | undefined
    if (!name) return null
    // Find matching profile by key or by name
    const profileKey = Object.keys(authorProfiles).find(
      (k) => authorProfiles[k].name === name
    )
    const base: AuthorProfile = profileKey ? authorProfiles[profileKey] : { name }
    return {
      ...base,
      ...Object.fromEntries(
        Object.entries(obj).filter(([, v]) => v != null && v !== '')
      ),
    } as BlogAuthor
  }
  return null
}

export interface BlogEntry {
  meta: BlogMeta
  content: string
  excerpt: string
}

export async function getAllBlogPosts(): Promise<BlogEntry[]> {
  let files: string[]
  try {
    files = (await fs.readdir(BLOG_DIR)).filter((f) => /\.mdx?$/.test(f))
  } catch {
    return []
  }

  const posts: BlogEntry[] = []

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file)
    const raw = await fs.readFile(filePath, 'utf-8')
    const { data, content } = matter(raw)

    // Resolve @include directives
    const resolvedContent = await resolveIncludes(content, path.dirname(filePath))
    const processedContent = preprocessAdmonitions(resolvedContent)

    // Parse date from filename: YYYY-MM-DD-slug.md
    const match = file.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.mdx?$/)
    const date = match ? match[1] : data.date || ''
    const fileSlug = match ? match[2] : file.replace(/\.mdx?$/, '')

    // Handle {/* truncate */} marker (MDX comment syntax)
    const parts = processedContent.split(/\{\/\*\s*truncate\s*\*\/\}/)
    const excerpt = parts[0].trim()

    posts.push({
      meta: {
        title: data.title || fileSlug,
        description: data.description,
        slug: data.slug || fileSlug,
        date,
        authors: Array.isArray(data.authors)
          ? data.authors.map(resolveAuthor).filter((a): a is BlogAuthor => a !== null)
          : undefined,
        category: data.category,
        featured: data.featured === true,
        coverImage: data.coverImage,
        coverColor: data.coverColor,
      },
      content: processedContent,
      excerpt,
    })
  }

  return posts.sort((a, b) => b.meta.date.localeCompare(a.meta.date))
}

export async function getBlogPostBySlug(slug: string): Promise<BlogEntry | null> {
  const posts = await getAllBlogPosts()
  return posts.find((p) => p.meta.slug === slug) || null
}

// Release notes content loading

export interface ReleaseNoteMeta {
  title: string
  version: string
  date: string
  description?: string
  slug: string
}

export interface ReleaseNoteEntry {
  meta: ReleaseNoteMeta
  content: string
}

function compareSemver(a: string, b: string): number {
  const pa = a.split('.').map(Number)
  const pb = b.split('.').map(Number)
  for (let i = 0; i < 3; i++) {
    if ((pa[i] || 0) !== (pb[i] || 0)) return (pb[i] || 0) - (pa[i] || 0)
  }
  return 0
}

export async function getAllReleaseNotes(): Promise<ReleaseNoteEntry[]> {
  let files: string[]
  try {
    files = (await fs.readdir(RELEASE_NOTES_DIR)).filter((f) => /\.mdx?$/.test(f))
  } catch {
    return []
  }

  const notes: ReleaseNoteEntry[] = []

  for (const file of files) {
    const filePath = path.join(RELEASE_NOTES_DIR, file)
    const raw = await fs.readFile(filePath, 'utf-8')
    const { data, content } = matter(raw)

    // Resolve @include directives
    const resolvedContent = await resolveIncludes(content, path.dirname(filePath))
    const processedContent = preprocessAdmonitions(resolvedContent)

    const fileSlug = file.replace(/\.mdx?$/, '')

    notes.push({
      meta: {
        title: data.title || fileSlug,
        version: data.version || fileSlug.replace(/^v/, ''),
        date: data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date ? String(data.date).split('T')[0] : '',
        description: data.description,
        slug: fileSlug,
      },
      content: processedContent,
    })
  }

  return notes.sort((a, b) => compareSemver(a.meta.version, b.meta.version))
}

export async function getReleaseNoteBySlug(slug: string): Promise<ReleaseNoteEntry | null> {
  const notes = await getAllReleaseNotes()
  return notes.find((n) => n.meta.slug === slug) || null
}
