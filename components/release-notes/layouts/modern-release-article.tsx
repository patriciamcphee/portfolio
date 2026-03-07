import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { rehypeCodeMeta } from '@/lib/rehype-code-meta'
import { ArrowLeft, Calendar, Sparkles, Zap, Bug, Trash2 } from 'lucide-react'
import { mdxComponents } from '@/components/docs/mdx'
import { formatReleaseDate, parseReleaseSections, countTotalChanges } from '@/lib/release-notes-utils'
import type { ReleaseArticleLayoutProps } from './types'
import type { ReleaseSection } from '@/lib/release-notes-utils'

const sectionConfig: Record<string, { icon: typeof Sparkles; label: string; countLabel: string; iconBg: string; iconColor: string }> = {
  added: { icon: Sparkles, label: 'New Features', countLabel: 'new additions', iconBg: 'bg-purple-100 dark:bg-purple-500/20', iconColor: 'text-purple-600 dark:text-purple-400' },
  changed: { icon: Zap, label: 'Improvements', countLabel: 'enhancements', iconBg: 'bg-blue-100 dark:bg-blue-500/20', iconColor: 'text-blue-600 dark:text-blue-400' },
  fixed: { icon: Bug, label: 'Bug Fixes', countLabel: 'issues resolved', iconBg: 'bg-green-100 dark:bg-green-500/20', iconColor: 'text-green-600 dark:text-green-400' },
  removed: { icon: Trash2, label: 'Removed', countLabel: 'removals', iconBg: 'bg-red-100 dark:bg-red-500/20', iconColor: 'text-red-600 dark:text-red-400' },
}

export function ModernReleaseArticle({ note }: ReleaseArticleLayoutProps) {
  const sections = parseReleaseSections(note.content)
  const totalChanges = countTotalChanges(note.content)

  return (
    <>
      {/* Sticky header */}
      <div className="sticky top-[var(--navbar-height)] z-40 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <Link
            href="/release-notes/"
            className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors no-underline"
          >
            <ArrowLeft size={18} />
            Back to All Releases
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
              VERSION {note.meta.version}
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            {note.meta.title}
          </h1>
          {note.meta.description && (
            <p className="text-xl text-blue-100 mb-6 max-w-3xl">
              {note.meta.description}
            </p>
          )}
          <div className="flex items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{formatReleaseDate(note.meta.date)}</span>
            </div>
            {totalChanges > 0 && (
              <>
                <span className="text-white/50">·</span>
                <span>{totalChanges} changes</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content sections */}
      <article className="max-w-5xl mx-auto px-6 py-12">
        {sections.map((section, index) => (
          <SectionCard key={index} section={section} />
        ))}

      </article>
    </>
  )
}

function SectionCard({ section }: { section: ReleaseSection }) {
  const config = sectionConfig[section.type]

  if (!config) {
    // Render unrecognized sections as plain MDX
    return (
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">{section.heading}</h2>
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <div className="prose">
            <MDXRemote
              source={section.content}
              components={mdxComponents}
              options={{ blockJS: false, mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, rehypeCodeMeta] } }}
            />
          </div>
        </div>
      </section>
    )
  }

  const Icon = config.icon

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className={`w-10 h-10 ${config.iconBg} rounded-lg flex items-center justify-center`}>
          <Icon className={config.iconColor} size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[var(--foreground)]">{config.label}</h2>
          <p className="text-sm text-[var(--muted-foreground)]">{section.itemCount} {config.countLabel}</p>
        </div>
      </div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
        <div className="prose">
          <MDXRemote
            source={section.content}
            components={mdxComponents}
            options={{ blockJS: false, mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, rehypeCodeMeta] } }}
          />
        </div>
      </div>
    </section>
  )
}
