import Link from 'next/link'
import { formatBlogDate, estimateReadTime } from '@/lib/blog-utils'
import { SubscribeCTA } from '@/components/shared/ctas'
import type { BlogIndexLayoutProps } from './types'

export function MinimalBlogIndex({ posts }: BlogIndexLayoutProps) {
  const featuredPost = posts.find((p) => p.meta.featured) || posts[0]
  const regularPosts = posts.filter((p) => p !== featuredPost)

  return (
    <>
      {/* Header */}
      <div className="border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-medium text-[var(--foreground)] mb-1">Blog</h1>
          <p className="text-[var(--muted-foreground)]">Insights, tutorials, and updates</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {posts.length === 0 && (
          <p className="text-[var(--muted-foreground)]">No posts yet.</p>
        )}

        {/* Featured Post */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.meta.slug}/`}
            className="block mb-24 no-underline group"
          >
            {featuredPost.meta.category && (
              <span className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] font-medium">
                {featuredPost.meta.category}
              </span>
            )}
            <h2 className="text-4xl font-medium text-[var(--foreground)] mt-3 mb-4 group-hover:opacity-70 transition-opacity">
              {featuredPost.meta.title}
            </h2>
            {featuredPost.meta.description && (
              <p className="text-xl text-[var(--muted-foreground)] leading-relaxed mb-6">
                {featuredPost.meta.description}
              </p>
            )}
            <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
              {featuredPost.meta.authors?.[0] && (
                <>
                  <span>{featuredPost.meta.authors[0].name}</span>
                  <span>·</span>
                </>
              )}
              <span>{formatBlogDate(featuredPost.meta.date)}</span>
              <span>·</span>
              <span>{estimateReadTime(featuredPost.content)} min</span>
            </div>
          </Link>
        )}

        {/* Posts List */}
        {regularPosts.length > 0 && (
          <div className="space-y-12">
            {regularPosts.map((post) => (
              <article key={post.meta.slug} className="pb-12 border-b border-[var(--border)] last:border-0">
                <Link
                  href={`/blog/${post.meta.slug}/`}
                  className="block no-underline group"
                >
                  {post.meta.category && (
                    <span className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] font-medium">
                      {post.meta.category}
                    </span>
                  )}
                  <h3 className="text-2xl font-medium text-[var(--foreground)] mt-2 mb-3 group-hover:opacity-70 transition-opacity">
                    {post.meta.title}
                  </h3>
                  {post.meta.description && (
                    <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
                      {post.meta.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                    {post.meta.authors?.[0] && (
                      <>
                        <span>{post.meta.authors[0].name}</span>
                        <span>·</span>
                      </>
                    )}
                    <span>{formatBlogDate(post.meta.date)}</span>
                    <span>·</span>
                    <span>{estimateReadTime(post.content)} min</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        {/* Subscribe CTA */}
        {posts.length > 0 && (
          <div className="mt-16">
            <SubscribeCTA />
          </div>
        )}
      </main>
    </>
  )
}
