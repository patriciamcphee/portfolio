import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import rehypeSlug from 'rehype-slug'
import { rehypeCodeMeta } from '@/lib/rehype-code-meta'
import { getDocBySlug } from '@/lib/content'
import { extractToc } from '@/lib/toc'
import { mdxComponents } from '@/components/docs/mdx'
import { TableOfContents, MobileTableOfContents } from '@/components/docs/toc'
import { Breadcrumbs } from '@/components/docs/breadcrumbs'
import { remarkCallout } from '@/lib/remark-callout'
import { siteConfig } from '@/config/site'
import { docVariables } from '@/config/variables'
import { parseSlug, buildUrlPrefix } from '@/lib/route-context'
import { generateAllParams } from '@/lib/static-params'
import { getVersions } from '@/lib/versions'
import { DocContextWrapper } from './doc-context-wrapper'
import { FallbackBanner } from '@/components/docs/fallback-banner'
import { LocaleHtmlAttrs } from '@/components/docs/locale-html-attrs'
import { RoleChips } from '@/components/docs/role-chips'
import { Feedback } from '@/components/custom/feedback'

export async function generateStaticParams() {
  return generateAllParams()
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: rawSlug } = await params
  const ctx = await parseSlug(rawSlug)

  try {
    const { meta } = await getDocBySlug(ctx.slug, ctx.locale, ctx.version)

    const metadata: Record<string, unknown> = {
      title: meta.title,
      description: meta.description,
    }

    // Add hreflang alternates when i18n is enabled
    if (siteConfig.i18n?.enabled && siteConfig.i18n.locales.length > 1) {
      const defaultLocale = siteConfig.i18n.defaultLocale || 'en'
      const baseUrl = siteConfig.url
      const docPath = ctx.slug.join('/')
      const versionPrefix = ctx.version !== 'current' ? `/${ctx.version}` : ''

      metadata.alternates = {
        canonical: `${baseUrl}${versionPrefix}/${docPath}/`,
        languages: Object.fromEntries(
          siteConfig.i18n.locales.map((l: { code: string }) => {
            const localePrefix = l.code !== defaultLocale ? `/${l.code}` : ''
            return [l.code, `${baseUrl}${localePrefix}${versionPrefix}/${docPath}/`]
          })
        ),
      }
    }

    return metadata
  } catch {
    return { title: 'Not Found' }
  }
}

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: rawSlug } = await params
  const ctx = await parseSlug(rawSlug)

  let doc
  try {
    doc = await getDocBySlug(ctx.slug, ctx.locale, ctx.version)
  } catch {
    notFound()
  }

  const toc = extractToc(doc.content)
  const urlPrefix = buildUrlPrefix(ctx.locale, ctx.version)
  const versions = await getVersions()
  const locales = siteConfig.i18n?.enabled ? siteConfig.i18n.locales : []

  return (
    <DocContextWrapper
      locale={ctx.locale}
      version={ctx.version}
      urlPrefix={urlPrefix}
      versions={versions}
      locales={locales}
    >
      <LocaleHtmlAttrs />
      <div className="flex">
        <article className="flex-1 min-w-0 px-6 py-8 lg:px-12">
          <Breadcrumbs slug={ctx.slug} title={doc.meta.title} />

          {doc.isFallback && <FallbackBanner locale={ctx.locale} />}

          {!doc.meta.hide_title && (
            <h1 className="text-3xl font-bold tracking-tight mb-2">{doc.meta.title}</h1>
          )}

          {!doc.meta.hide_title && (doc.meta.last_update || siteConfig.editBaseUrl) && (
            <div className="flex items-center flex-wrap gap-x-4 text-sm text-[var(--muted-foreground)] mb-4">
              {doc.meta.last_update && (
                <span>
                  Last updated: {doc.meta.last_update.date}
                  {siteConfig.lastUpdated.showAuthor && doc.meta.last_update.author && ` by ${doc.meta.last_update.author}`}
                </span>
              )}
              {siteConfig.editBaseUrl && (
                <a
                  href={`${siteConfig.editBaseUrl}/${doc.filePath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--primary)] hover:underline no-underline shrink-0 ml-auto"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                  Edit this page
                </a>
              )}
            </div>
          )}

          {doc.meta.role && doc.meta.role.length > 0 && (
            <RoleChips roles={doc.meta.role} />
          )}

          {!doc.meta.hide_table_of_contents && toc.length > 0 && (
            <MobileTableOfContents items={toc} />
          )}

          <div className="prose max-w-none">
            <MDXRemote
              source={doc.content}
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

        {!doc.meta.hide_table_of_contents && toc.length > 0 && (
          <aside className="hidden lg:block w-64 shrink-0">
            <TableOfContents items={toc} />
          </aside>
        )}
      </div>
    </DocContextWrapper>
  )
}
