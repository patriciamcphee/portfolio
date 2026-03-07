import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbsProps {
  slug: string[]
  title: string
}

const SMALL_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'from', 'if',
  'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'vs', 'yet',
])

function titleCase(str: string): string {
  return str
    .replace(/-/g, ' ')
    .replace(/\b\w+/g, (word, index) =>
      index === 0 || !SMALL_WORDS.has(word.toLowerCase())
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word.toLowerCase()
    )
}

export function Breadcrumbs({ slug, title }: BreadcrumbsProps) {
  const crumbs = slug.map((segment, i) => {
    const href = '/' + slug.slice(0, i + 1).join('/') + '/'
    const isLast = i === slug.length - 1
    const label = isLast
      ? title
      : titleCase(segment)

    return { href, label, isLast }
  })

  return (
    <nav className="flex items-center gap-1 text-sm text-[var(--muted-foreground)] mb-6">
      <Link href="/" className="hover:text-[var(--foreground)] no-underline">
        Home
      </Link>
      {crumbs.map((crumb) => (
        <span key={crumb.href} className="flex items-center gap-1">
          <ChevronRight size={12} />
          {crumb.isLast ? (
            <span className="text-[var(--foreground)]">{crumb.label}</span>
          ) : (
            <span className="text-[var(--muted-foreground)]">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
