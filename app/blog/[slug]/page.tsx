import { notFound } from 'next/navigation'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/content'
import { siteConfig } from '@/config/site'
import { Navbar } from '@/components/docs/navbar'
import { Footer } from '@/components/docs/footer'
import { ModernBlogArticle } from '@/components/blog/layouts/modern-blog-article'
import { MinimalBlogArticle } from '@/components/blog/layouts/minimal-blog-article'

export async function generateStaticParams() {
  if (!(siteConfig as any).blog?.enabled) return [{ slug: '_placeholder' }]
  const posts = await getAllBlogPosts()
  if (posts.length === 0) return [{ slug: '_placeholder' }]
  return posts.map((post) => ({ slug: post.meta.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) return { title: 'Not Found' }
  return { title: post.meta.title, description: post.meta.description }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  if (!(siteConfig as any).blog?.enabled) notFound()
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) notFound()

  const allPosts = await getAllBlogPosts()
  const layout = (siteConfig as any).blog?.layout ?? 'modern'

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1" style={{ marginTop: 'var(--navbar-height)' }}>
        {layout === 'minimal' ? (
          <MinimalBlogArticle post={post} allPosts={allPosts} />
        ) : (
          <ModernBlogArticle post={post} allPosts={allPosts} />
        )}
      </main>
      <Footer />
    </div>
  )
}
