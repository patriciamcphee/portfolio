import type { BlogMeta } from './content'

const CATEGORY_GRADIENTS: Record<string, { gradient: string; badge: string }> = {
  Engineering: {
    gradient: 'from-violet-500 to-purple-600',
    badge: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  },
  Product: {
    gradient: 'from-blue-500 to-cyan-500',
    badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  Design: {
    gradient: 'from-pink-500 to-rose-500',
    badge: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  },
  Tutorial: {
    gradient: 'from-emerald-500 to-teal-500',
    badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  Announcement: {
    gradient: 'from-amber-500 to-orange-500',
    badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  Writing: {
    gradient: 'from-indigo-500 to-blue-600',
    badge: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  },
  Feature: {
    gradient: 'from-sky-500 to-blue-600',
    badge: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
  },
}

const FALLBACK_GRADIENTS = [
  'from-slate-500 to-slate-700',
  'from-indigo-500 to-blue-600',
  'from-teal-500 to-cyan-600',
  'from-fuchsia-500 to-purple-600',
]

export interface PostVisuals {
  gradient: string
  badgeClass: string
  coverImage?: string
  coverColor?: string
}

export function getPostVisuals(meta: BlogMeta): PostVisuals {
  const base = meta.category && CATEGORY_GRADIENTS[meta.category]
    ? {
        gradient: CATEGORY_GRADIENTS[meta.category].gradient,
        badgeClass: CATEGORY_GRADIENTS[meta.category].badge,
      }
    : {
        gradient: FALLBACK_GRADIENTS[
          meta.slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % FALLBACK_GRADIENTS.length
        ],
        badgeClass: 'bg-[var(--muted)] text-[var(--muted-foreground)]',
      }

  return {
    ...base,
    coverImage: meta.coverImage,
    coverColor: meta.coverColor,
  }
}

export function estimateReadTime(content: string): number {
  const stripped = content
    .replace(/```[\s\S]*?```/g, '')              // remove fenced code blocks
    .replace(/<[^>]+>/g, ' ')                    // remove HTML/JSX tags
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')        // remove images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')     // keep link text only
    .replace(/[|:~`#*>\-]/g, ' ')                // remove markdown symbols
  const words = stripped.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 230))
}

export function formatBlogDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}
