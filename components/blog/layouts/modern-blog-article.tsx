import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import { remarkCallout } from '@/lib/remark-callout'
import rehypeSlug from 'rehype-slug'
import { rehypeCodeMeta } from '@/lib/rehype-code-meta'
import { Calendar, Clock } from 'lucide-react'
import { getPostVisuals, formatBlogDate, estimateReadTime, getInitials } from '@/lib/blog-utils'
import { mdxComponents } from '@/components/docs/mdx'
import { BlogArticleHeader } from '@/components/blog/blog-article-header'
import { BlogCardPattern } from '@/components/blog/blog-card-pattern'
import { BlogAuthorCard } from '@/components/blog/blog-author-card'
import { RelatedPosts } from '@/components/blog/related-posts'
import { docVariables } from '@/config/variables'
import type { BlogArticleLayoutProps } from './types'

export function ModernBlogArticle({ post, allPosts }: BlogArticleLayoutProps) {
  const visuals = getPostVisuals(post.meta)
  const readTime = estimateReadTime(post.content)

  return (
    <>
      {/* Sticky sub-header */}
      <BlogArticleHeader title={post.meta.title} slug={post.meta.slug} />

      {/* Hero banner */}
      {visuals.coverImage ? (
        <div className="relative h-48 md:h-64">
          <Image src={visuals.coverImage} alt="" fill className="object-cover" />
        </div>
      ) : visuals.coverColor ? (
        <div className="relative h-48 md:h-64" style={{ backgroundColor: visuals.coverColor }}>
          <BlogCardPattern />
        </div>
      ) : (
        <div className={`relative bg-gradient-to-r ${visuals.gradient} h-48 md:h-64`}>
          <BlogCardPattern />
        </div>
      )}

      {/* Article content */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Category badge */}
        {post.meta.category && (
          <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-6 ${visuals.badgeClass}`}>
            {post.meta.category}
          </span>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6 leading-tight">
          {post.meta.title}
        </h1>

        {/* Author meta */}
        <div className="flex items-start gap-4 pb-8 mb-8 border-b border-[var(--border)]">
          {post.meta.authors?.[0] && (
            <>
              <a href="#about-author" className="shrink-0 no-underline">
                {post.meta.authors[0].img ? (
                  <Image src={post.meta.authors[0].img} alt={post.meta.authors[0].name} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                  <div className={`w-12 h-12 bg-gradient-to-br ${visuals.gradient} rounded-full flex items-center justify-center text-white font-bold`}>
                    {getInitials(post.meta.authors[0].name)}
                  </div>
                )}
              </a>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <a href="#about-author" className="font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors no-underline">
                    {post.meta.authors[0].name}
                  </a>
                  <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {formatBlogDate(post.meta.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {readTime} min read
                    </span>
                  </div>
                </div>
                {post.meta.authors[0].role && (
                  <div className="text-sm text-[var(--muted-foreground)] mt-0.5">
                    {post.meta.authors[0].role}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* MDX body */}
        <div className="prose">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              scope: { vars: docVariables },
              blockJS: false,
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkDirective, remarkCallout],
                rehypePlugins: [rehypeSlug, rehypeCodeMeta],
              },
            }}
          />
        </div>
      </article>

      {/* Author bio card */}
      {post.meta.authors && post.meta.authors.length > 0 && (
        <BlogAuthorCard authors={post.meta.authors} gradient={visuals.gradient} />
      )}

      {/* Related posts */}
      <RelatedPosts
        currentSlug={post.meta.slug}
        currentCategory={post.meta.category}
        allPosts={allPosts}
      />
    </>
  )
}
