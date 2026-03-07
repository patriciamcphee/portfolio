import { docVariables } from '@/config/variables'

export interface TocItem {
  id: string
  text: string
  level: number
}

/** Replace {vars.xxx} expressions with their resolved values. */
export function resolveVars(text: string, vars: Record<string, string> = docVariables): string {
  return text.replace(/\{vars\.(\w+)\}/g, (_, key) => vars[key] ?? '')
}

export function extractToc(content: string): TocItem[] {
  // Strip fenced code blocks so headings inside them aren't picked up
  const lines = content.split('\n')
  const filtered: string[] = []
  let inFence = false
  for (const line of lines) {
    if (/^(`{3,}|~{3,})/.test(line)) {
      inFence = !inFence
      continue
    }
    if (!inFence) filtered.push(line)
  }
  const stripped = filtered.join('\n')

  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const items: TocItem[] = []
  let match

  while ((match = headingRegex.exec(stripped)) !== null) {
    const level = match[1].length
    const text = resolveVars(
      match[2]
        .trim()
        .replace(/\*{1,3}(.*?)\*{1,3}/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    )

    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')

    items.push({ id, text, level })
  }

  return items
}
