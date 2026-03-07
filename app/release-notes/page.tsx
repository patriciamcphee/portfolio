import { notFound } from 'next/navigation'
import { getAllReleaseNotes } from '@/lib/content'
import { siteConfig } from '@/config/site'
import { Navbar } from '@/components/docs/navbar'
import { Footer } from '@/components/docs/footer'
import { ModernReleaseIndex } from '@/components/release-notes/layouts/modern-release-index'
import { ChangelogReleaseIndex } from '@/components/release-notes/layouts/changelog-release-index'

export const metadata = {
  title: 'Release Notes',
}

export default async function ReleaseNotesIndex() {
  if (!(siteConfig as any).releaseNotes?.enabled) notFound()
  const notes = await getAllReleaseNotes()
  const layout = (siteConfig as any).releaseNotes?.layout ?? 'changelog'

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1" style={{ marginTop: 'var(--navbar-height)' }}>
        {layout === 'modern' ? (
          <ModernReleaseIndex notes={notes} />
        ) : (
          <ChangelogReleaseIndex notes={notes} />
        )}
      </main>
      <Footer />
    </div>
  )
}
