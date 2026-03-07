import { mainSidebar, SidebarItem } from '@/config/sidebar'
import { getAllDocsMeta, DocMeta } from '@/lib/content'
import { DocCard } from './doc-card'

interface DocCardListItem {
  title: string
  description?: string
  href: string
}

interface DocCardListProps {
  /** Explicit list of card items. Takes priority over `category`. */
  items?: DocCardListItem[]
  /** Sidebar category label (case-insensitive). Resolves child docs automatically. */
  category?: string
}

function findCategory(
  nodes: SidebarItem[],
  label: string
): Extract<SidebarItem, { type: 'category' }> | null {
  const target = label.toLowerCase()
  for (const node of nodes) {
    if (node.type === 'category') {
      if (node.label.toLowerCase() === target) return node
      const found = findCategory(node.items, label)
      if (found) return found
    }
  }
  return null
}

function resolveCards(
  sidebarItems: SidebarItem[],
  allMeta: DocMeta[]
): DocCardListItem[] {
  const cards: DocCardListItem[] = []

  for (const item of sidebarItems) {
    if (item.type === 'doc') {
      const meta = allMeta.find((m) => m.slug === '/' + item.id)
      cards.push({
        title: item.label || meta?.title || item.id.split('/').pop() || item.id,
        description: meta?.description,
        href: '/' + item.id + '/',
      })
    } else if (item.type === 'category' && item.link) {
      const normalizedLink = '/' + item.link.replace(/\/$/, '')
      const meta = allMeta.find((m) => m.slug === normalizedLink)
      cards.push({
        title: item.label || meta?.title || item.link,
        description: meta?.description,
        href: '/' + item.link + '/',
      })
    }
  }

  return cards
}

export async function DocCardList({ items, category }: DocCardListProps) {
  let cards: DocCardListItem[]

  if (items) {
    cards = items
  } else if (category) {
    const allMeta = await getAllDocsMeta()
    const node = findCategory(mainSidebar, category)
    cards = node ? resolveCards(node.items, allMeta) : []
  } else {
    cards = []
  }

  if (cards.length === 0) return null

  return (
    <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      {cards.map((card) => (
        <DocCard key={card.href} {...card} />
      ))}
    </div>
  )
}
