import { mainSidebar, type SidebarItem } from '@/config/sidebar'

export type { SidebarItem }

export interface ResolvedSidebarItem {
  type: 'doc' | 'category' | 'html'
  label: string
  href?: string
  collapsed?: boolean
  items?: ResolvedSidebarItem[]
  html?: string
}

const WORD_MAP: Record<string, string> = {
  ai: 'AI',
  api: 'API',
  apis: 'APIs',
  faq: 'FAQ',
  sdk: 'SDK',
  yaml: 'YAML',
  cosmosdb: 'CosmosDB',
}

const SMALL_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'from', 'if',
  'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'vs', 'yet',
])

function titleFromId(id: string): string {
  const last = id.split('/').pop() || id
  const segment = last === 'index'
    ? id.split('/').slice(-2, -1)[0] || 'Index'
    : last
  const raw = segment.replace(/-/g, ' ').replace(/\b\w+/g, (word, index) =>
    index === 0 || !SMALL_WORDS.has(word.toLowerCase())
      ? word.charAt(0).toUpperCase() + word.slice(1)
      : word.toLowerCase()
  )
  return raw.replace(/\b\w+\b/g, (word) => WORD_MAP[word.toLowerCase()] ?? word)
}

export function resolveSidebar(
  docTitles?: Record<string, string>,
  urlPrefix = '',
  sidebarItems?: SidebarItem[]
): ResolvedSidebarItem[] {
  const items = sidebarItems || mainSidebar

  function resolve(item: SidebarItem): ResolvedSidebarItem {
    if (item.type === 'doc') {
      const slug = item.id.replace(/\/index$/, '')
      return {
        type: 'doc',
        label: item.label || docTitles?.[item.id] || titleFromId(item.id),
        href: `${urlPrefix}/${slug}/`,
      }
    }

    if (item.type === 'api') {
      return {
        type: 'doc',
        label: item.label || titleFromId(item.id),
        href: `${urlPrefix}/api/${item.id}/`,
      }
    }

    if (item.type === 'link') {
      return {
        type: 'doc',
        label: item.label,
        href: item.href,
      }
    }

    if (item.type === 'html') {
      return {
        type: 'html',
        label: '',
        html: item.value,
      }
    }

    const resolved: ResolvedSidebarItem = {
      type: 'category',
      label: item.label,
      collapsed: item.collapsed,
      items: item.items.map(resolve),
    }
    if (item.link) {
      const slug = item.link.replace(/\/index$/, '')
      resolved.href = `${urlPrefix}/${slug}/`
    }
    return resolved
  }

  return items.map(resolve)
}

