import Link from 'next/link'
import { formatReleaseDate } from '@/lib/release-notes-utils'
import { SubscribeCTA } from '@/components/shared/ctas'
import type { ReleaseIndexLayoutProps } from './types'

export function ChangelogReleaseIndex({ notes }: ReleaseIndexLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Release Notes</h1>
      <div className="space-y-6">
        {notes.map((note) => (
          <article key={note.meta.slug} className="border rounded-lg p-5 hover:border-[var(--primary)] transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Link
                href={`/release-notes/${note.meta.slug}/`}
                className="no-underline"
              >
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold bg-[var(--primary)] text-[var(--primary-foreground)]">
                  {note.meta.title}
                </span>
              </Link>
              <span className="text-sm text-[var(--muted-foreground)]">
                {formatReleaseDate(note.meta.date)}
              </span>
            </div>
            {note.meta.description && (
              <p className="text-sm text-[var(--muted-foreground)] mt-1">
                {note.meta.description}
              </p>
            )}
          </article>
        ))}
        {notes.length === 0 && (
          <p className="text-[var(--muted-foreground)]">No release notes yet.</p>
        )}
      </div>

      {/* Subscribe CTA */}
      {notes.length > 0 && (
        <div className="mt-8">
          <SubscribeCTA />
        </div>
      )}
    </div>
  )
}
