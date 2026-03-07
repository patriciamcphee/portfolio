export interface ReleaseSection {
  type: 'added' | 'changed' | 'fixed' | 'removed' | 'other'
  heading: string
  content: string
  itemCount: number
}

const SECTION_TYPE_MAP: Record<string, ReleaseSection['type']> = {
  Added: 'added',
  Changed: 'changed',
  Fixed: 'fixed',
  Removed: 'removed',
}

export function formatReleaseDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function parseReleaseSections(content: string): ReleaseSection[] {
  const sections: ReleaseSection[] = []
  const parts = content.split(/^## /m)

  for (const part of parts) {
    if (!part.trim()) continue
    const newlineIndex = part.indexOf('\n')
    if (newlineIndex === -1) continue

    const heading = part.slice(0, newlineIndex).trim()
    const sectionContent = part.slice(newlineIndex + 1).trim()
    const type = SECTION_TYPE_MAP[heading] || 'other'
    const itemCount = (sectionContent.match(/^- /gm) || []).length

    sections.push({ type, heading, content: sectionContent, itemCount })
  }

  return sections
}

export function countTotalChanges(content: string): number {
  return (content.match(/^- /gm) || []).length
}

export function getSectionCounts(content: string): { added: number; changed: number; fixed: number; removed: number } {
  const sections = parseReleaseSections(content)
  return {
    added: sections.find((s) => s.type === 'added')?.itemCount || 0,
    changed: sections.find((s) => s.type === 'changed')?.itemCount || 0,
    fixed: sections.find((s) => s.type === 'fixed')?.itemCount || 0,
    removed: sections.find((s) => s.type === 'removed')?.itemCount || 0,
  }
}
