import Image from 'next/image'
import Link from 'next/link'
import type { BlogEntry } from '@/lib/content'
import { getPostVisuals, formatBlogDate, estimateReadTime } from '@/lib/blog-utils'
import { BlogCardPattern } from './blog-card-pattern'
import { Clock } from 'lucide-react'

interface RelatedPostsProps {
  currentSlug: string
  currentCategory?: string
  allPosts: BlogEntry[]
}

export function RelatedPosts({ currentSlug, currentCategory, allPosts }: RelatedPostsProps) {
  const others = allPosts.filter((p) => p.meta.slug !== currentSlug)
  if (others.length === 0) return null

  // Prefer same category, then fill with most recent
  const sameCategory = currentCategory
    ? others.filter((p) => p.meta.category === currentCategory)
    : []
  const rest = others.filter((p) => !sameCategory.includes(p))
  const related = [...sameCategory, ...rest].slice(0, 2)

  return (
    <div className="max-w-3xl mx-auto px-6 mt-16 mb-12">
      <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Related Articles</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {related.map((post) => {
          const visuals = getPostVisuals(post.meta)
          const readTime = estimateReadTime(post.content)
          return (
            <Link
              key={post.meta.slug}
              href={`/blog/${post.meta.slug}/`}
              className="block bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden hover:shadow-lg transition-shadow no-underline group"
            >
              {visuals.coverImage ? (
                <div className="relative h-32">
                  <Image src={visuals.coverImage} alt="" fill className="object-cover" />
                </div>
              ) : visuals.coverColor ? (
                <div className="relative h-32 flex items-center justify-center" style={{ backgroundColor: visuals.coverColor }}>
                  <BlogCardPattern />
                </div>
              ) : (
                <div className={`relative h-32 bg-gradient-to-br ${visuals.gradient} flex items-center justify-center`}>
                  <BlogCardPattern />
                </div>
              )}
              <div className="p-4">
                {post.meta.category && (
                  <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded mb-2 ${visuals.badgeClass}`}>
                    {post.meta.category}
                  </span>
                )}
                <h4 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors mb-1">
                  {post.meta.title}
                </h4>
                <div className="flex items-center gap-3 text-xs text-[var(--muted-foreground)]">
                  <span>{formatBlogDate(post.meta.date)}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {readTime} min read
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
