import fs from 'fs/promises'
import path from 'path'

let cachedVersions: string[] | null = null

export async function getVersions(): Promise<string[]> {
  if (cachedVersions) return cachedVersions
  try {
    const raw = await fs.readFile(
      path.join(process.cwd(), 'versions.json'),
      'utf-8'
    )
    cachedVersions = JSON.parse(raw)
    return cachedVersions!
  } catch {
    return []
  }
}

export function isKnownVersion(segment: string, versions: string[]): boolean {
  return versions.includes(segment)
}
