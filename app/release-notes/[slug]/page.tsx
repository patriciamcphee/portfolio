import { notFound } from 'next/navigation'
import { getAllReleaseNotes, getReleaseNoteBySlug } from '@/lib/content'
import { siteConfig } from '@/config/site'
import { Navbar } from '@/components/docs/navbar'
import { Footer } from '@/components/docs/footer'
import { ModernReleaseArticle } from '@/components/release-notes/layouts/modern-release-article'
import { ChangelogReleaseArticle } from '@/components/release-notes/layouts/changelog-release-article'

export async function generateStaticParams() {
  if (!(siteConfig as any).releaseNotes?.enabled) return [{ slug: '_placeholder' }]
  const notes = await getAllReleaseNotes()
  if (notes.length === 0) return [{ slug: '_placeholder' }]
  return notes.map((note) => ({ slug: note.meta.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const note = await getReleaseNoteBySlug(slug)
  if (!note) return { title: 'Not Found' }
  return { title: `${note.meta.title} — Release Notes`, description: note.meta.description }
}

export default async function ReleaseNotePage({ params }: { params: Promise<{ slug: string }> }) {
  if (!(siteConfig as any).releaseNotes?.enabled) notFound()
  const { slug } = await params
  const note = await getReleaseNoteBySlug(slug)
  if (!note) notFound()

  const allNotes = await getAllReleaseNotes()
  const layout = (siteConfig as any).releaseNotes?.layout ?? 'changelog'

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1" style={{ marginTop: 'var(--navbar-height)' }}>
        {layout === 'modern' ? (
          <ModernReleaseArticle note={note} allNotes={allNotes} />
        ) : (
          <ChangelogReleaseArticle note={note} allNotes={allNotes} />
        )}
      </main>
      <Footer />
    </div>
  )
}
