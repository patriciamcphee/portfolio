import fs from 'fs'
import path from 'path'

const INDEX_PATH = path.join(process.cwd(), 'public/api-specs/_index.json')

export interface ApiSpecEntry {
  slug: string
  title: string
  description: string
  version: string
  specFile: string
}

export interface ApiIndex {
  [version: string]: ApiSpecEntry[]
}

let cachedIndex: ApiIndex | null = null

export function getApiIndex(): ApiIndex {
  if (cachedIndex) return cachedIndex
  try {
    const raw = fs.readFileSync(INDEX_PATH, 'utf-8')
    cachedIndex = JSON.parse(raw)
    return cachedIndex!
  } catch {
    return {}
  }
}

export function getAllApiSlugs(version = 'current'): string[] {
  const index = getApiIndex()
  return (index[version] || []).map((e) => e.slug)
}

export function getApiSpecMeta(slug: string, version = 'current'): ApiSpecEntry | null {
  const index = getApiIndex()
  const entries = index[version] || []
  return entries.find((e) => e.slug === slug) || null
}
