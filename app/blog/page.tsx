import { notFound } from 'next/navigation'
import { getAllBlogPosts } from '@/lib/content'
import { siteConfig } from '@/config/site'
import { Navbar } from '@/components/docs/navbar'
import { Footer } from '@/components/docs/footer'
import { ModernBlogIndex } from '@/components/blog/layouts/modern-blog-index'
import { MinimalBlogIndex } from '@/components/blog/layouts/minimal-blog-index'

export const metadata = {
  title: 'Blog',
}

export default async function BlogIndex() {
  if (!(siteConfig as any).blog?.enabled) notFound()
  const posts = await getAllBlogPosts()
  const layout = (siteConfig as any).blog?.layout ?? 'modern'

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1" style={{ marginTop: 'var(--navbar-height)' }}>
        {layout === 'minimal' ? (
          <MinimalBlogIndex posts={posts} />
        ) : (
          <ModernBlogIndex posts={posts} />
        )}
      </main>
      <Footer />
    </div>
  )
}
