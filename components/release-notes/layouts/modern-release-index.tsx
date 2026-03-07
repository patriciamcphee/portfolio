import Link from 'next/link'
import { Sparkles, Zap, Bug, Trash2, Calendar, ChevronRight, ArrowUpRight } from 'lucide-react'
import { formatReleaseDate, getSectionCounts, countTotalChanges } from '@/lib/release-notes-utils'
import { SubscribeCTA } from '@/components/shared/ctas'
import type { ReleaseIndexLayoutProps } from './types'

export function ModernReleaseIndex({ notes }: ReleaseIndexLayoutProps) {
  const featuredNote = notes[0]
  const olderNotes = notes.slice(1)

  return (
    <>
      {/* Header */}
      <div className="bg-[var(--card)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="text-blue-500" size={24} />
            <span className="text-sm font-semibold text-blue-500 uppercase tracking-wide">What&apos;s New</span>
          </div>
          <h1 className="text-4xl font-bold text-[var(--foreground)]">Release Notes</h1>
          <p className="text-[var(--muted-foreground)] mt-2">Stay up to date with new features, improvements, and fixes</p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {notes.length === 0 && (
          <p className="text-[var(--muted-foreground)]">No release notes yet.</p>
        )}

        {/* Featured Release */}
        {featuredNote && <FeaturedReleaseHero note={featuredNote} />}

        {/* Previous Releases */}
        {olderNotes.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">Previous Releases</h3>

            {olderNotes.map((note) => {
              const counts = getSectionCounts(note.content)
              return (
                <Link
                  key={note.meta.slug}
                  href={`/release-notes/${note.meta.slug}/`}
                  className="block bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 hover:shadow-lg hover:border-blue-400 transition-all no-underline group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2.5 py-1 bg-[var(--muted)] text-[var(--foreground)] text-xs font-bold rounded">
                          {note.meta.version}
                        </span>
                        <span className="text-sm text-[var(--muted-foreground)]">{formatReleaseDate(note.meta.date)}</span>
                      </div>
                      <h4 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-blue-500 transition-colors">
                        {note.meta.title}
                      </h4>
                      {note.meta.description && (
                        <p className="text-[var(--muted-foreground)] mb-4">
                          {note.meta.description}
                        </p>
                      )}
                      <SectionCountBadges counts={counts} />
                    </div>
                    <ChevronRight className="text-[var(--muted-foreground)] group-hover:text-blue-500 transition-colors shrink-0 mt-1" size={20} />
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        {/* Subscribe CTA */}
        {notes.length > 0 && (
          <div className="mt-12">
            <SubscribeCTA />
          </div>
        )}
      </main>
    </>
  )
}

function FeaturedReleaseHero({ note }: { note: import('@/lib/content').ReleaseNoteEntry }) {
  const counts = getSectionCounts(note.content)

  return (
    <div className="mb-12">
      <Link
        href={`/release-notes/${note.meta.slug}/`}
        className="block bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl overflow-hidden shadow-xl no-underline group"
      >
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
              LATEST RELEASE
            </span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
              {note.meta.version}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-3 group-hover:opacity-90 transition-opacity">
            {note.meta.title}
          </h2>
          {note.meta.description && (
            <p className="text-blue-100 text-lg mb-6 max-w-3xl">
              {note.meta.description}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/90">
              <Calendar size={16} />
              <span className="text-sm">{formatReleaseDate(note.meta.date)}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/90">
              {counts.added > 0 && (
                <span className="flex items-center gap-1.5">
                  <Sparkles size={14} />
                  {counts.added} new
                </span>
              )}
              {counts.changed > 0 && (
                <span className="flex items-center gap-1.5">
                  <Zap size={14} />
                  {counts.changed} improved
                </span>
              )}
              {counts.fixed > 0 && (
                <span className="flex items-center gap-1.5">
                  <Bug size={14} />
                  {counts.fixed} fixed
                </span>
              )}
            </div>
          </div>
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg group-hover:bg-blue-50 transition-colors">
            View Full Release Notes
            <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>
    </div>
  )
}

function SectionCountBadges({ counts }: { counts: { added: number; changed: number; fixed: number; removed: number } }) {
  return (
    <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
      {counts.added > 0 && (
        <span className="flex items-center gap-1.5">
          <Sparkles size={14} className="text-purple-500" />
          {counts.added} new
        </span>
      )}
      {counts.changed > 0 && (
        <span className="flex items-center gap-1.5">
          <Zap size={14} className="text-blue-500" />
          {counts.changed} improved
        </span>
      )}
      {counts.fixed > 0 && (
        <span className="flex items-center gap-1.5">
          <Bug size={14} className="text-green-500" />
          {counts.fixed} fixed
        </span>
      )}
      {counts.removed > 0 && (
        <span className="flex items-center gap-1.5">
          <Trash2 size={14} className="text-red-500" />
          {counts.removed} removed
        </span>
      )}
    </div>
  )
}
