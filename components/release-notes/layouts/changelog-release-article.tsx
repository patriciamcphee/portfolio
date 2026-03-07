import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { rehypeCodeMeta } from '@/lib/rehype-code-meta'
import { ChevronLeft } from 'lucide-react'
import { mdxComponents } from '@/components/docs/mdx'
import { formatReleaseDate } from '@/lib/release-notes-utils'
import type { ReleaseArticleLayoutProps } from './types'

const sectionColors: Record<string, string> = {
  Added: 'border-l-green-500',
  Changed: 'border-l-blue-500',
  Fixed: 'border-l-amber-500',
  Removed: 'border-l-red-500',
}

const sectionBadgeColors: Record<string, string> = {
  Added: 'bg-green-500/10 text-green-600 dark:text-green-400',
  Changed: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  Fixed: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  Removed: 'bg-red-500/10 text-red-600 dark:text-red-400',
}

function ReleaseNoteH2({ children, id, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { id?: string }) {
  const text = typeof children === 'string' ? children : ''
  const color = sectionColors[text] || ''
  const badge = sectionBadgeColors[text]

  if (badge) {
    return (
      <div className={`border-l-4 ${color} pl-4 mt-8 mb-4`}>
        <h2 id={id} {...props} className="flex items-center gap-2 text-xl font-bold m-0">
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${badge}`}>
            {children}
          </span>
        </h2>
      </div>
    )
  }

  return <h2 id={id} {...props} className="text-xl font-bold mt-8 mb-4">{children}</h2>
}

export function ChangelogReleaseArticle({ note }: ReleaseArticleLayoutProps) {
  const components = {
    ...mdxComponents,
    h2: ReleaseNoteH2 as any,
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <Link
        href="/release-notes/"
        className="inline-flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-4 no-underline"
      >
        <ChevronLeft size={16} />
        All Release Notes
      </Link>
      <article>
        <div className="flex items-center gap-3 mb-1">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-[var(--primary)] text-[var(--primary-foreground)]">
            {note.meta.title}
          </span>
          <span className="text-sm text-[var(--muted-foreground)]">
            {formatReleaseDate(note.meta.date)}
          </span>
        </div>
        {note.meta.description && (
          <p className="text-[var(--muted-foreground)] mb-6">{note.meta.description}</p>
        )}
        <div className="prose">
          <MDXRemote
            source={note.content}
            components={components}
            options={{
              blockJS: false,
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeCodeMeta],
              },
            }}
          />
        </div>

      </article>
    </div>
  )
}
