import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import { remarkCallout } from '@/lib/remark-callout'
import rehypeSlug from 'rehype-slug'
import { rehypeCodeMeta } from '@/lib/rehype-code-meta'
import { formatBlogDate, estimateReadTime, getInitials } from '@/lib/blog-utils'
import { mdxComponents } from '@/components/docs/mdx'
import { BlogArticleHeader } from '@/components/blog/blog-article-header'
import { docVariables } from '@/config/variables'
import type { BlogArticleLayoutProps } from './types'

export function MinimalBlogArticle({ post, allPosts }: BlogArticleLayoutProps) {
  const readTime = estimateReadTime(post.content)

  return (
    <>
      {/* Sticky sub-header */}
      <BlogArticleHeader title={post.meta.title} slug={post.meta.slug} />

      {/* Article */}
      <article className="max-w-2xl mx-auto px-6 py-16">
        {/* Meta */}
        <div className="mb-8">
          {post.meta.category && (
            <span className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] font-medium">
              {post.meta.category}
            </span>
          )}
          <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)] mt-2">
            <span>{formatBlogDate(post.meta.date)}</span>
            <span>·</span>
            <span>{readTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-medium text-[var(--foreground)] mb-12 leading-tight">
          {post.meta.title}
        </h1>

        {/* Author */}
        {post.meta.authors?.[0] && (
          <a href="#about-author" className="flex items-center gap-3 pb-12 mb-12 border-b border-[var(--border)] no-underline group/author">
            {post.meta.authors[0].img ? (
              <Image src={post.meta.authors[0].img} alt={post.meta.authors[0].name} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
            ) : (
              <div className="w-12 h-12 bg-[var(--foreground)] rounded-full flex items-center justify-center text-[var(--background)] text-sm font-medium">
                {getInitials(post.meta.authors[0].name)}
              </div>
            )}
            <div>
              <div className="font-medium text-[var(--foreground)] group-hover/author:text-[var(--primary)] transition-colors">{post.meta.authors[0].name}</div>
              {post.meta.authors[0].role && (
                <div className="text-sm text-[var(--muted-foreground)]">{post.meta.authors[0].role}</div>
              )}
            </div>
          </a>
        )}

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

      {/* Author Bio */}
      {post.meta.authors && post.meta.authors.length > 0 && (
        <div id="about-author" className="max-w-2xl mx-auto px-6 py-12 border-t border-[var(--border)] scroll-mt-24">
          <div className="flex items-start gap-4">
            {post.meta.authors[0].img ? (
              <Image src={post.meta.authors[0].img} alt={post.meta.authors[0].name} width={64} height={64} className="w-16 h-16 rounded-full object-cover shrink-0" />
            ) : (
              <div className="w-16 h-16 bg-[var(--foreground)] rounded-full flex items-center justify-center text-[var(--background)] font-medium shrink-0">
                {getInitials(post.meta.authors[0].name)}
              </div>
            )}
            <div>
              <h3 className="font-medium text-[var(--foreground)] mb-2">
                About {post.meta.authors[0].name}
              </h3>
              {post.meta.authors[0].role && (
                <p className="text-sm text-[var(--muted-foreground)]">{post.meta.authors[0].role}</p>
              )}
              {post.meta.authors[0].bio && (
                <p className="text-[var(--muted-foreground)] leading-relaxed mt-2">
                  {post.meta.authors[0].bio}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
