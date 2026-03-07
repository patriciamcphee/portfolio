import { H1, H2, H3, H4, H5, H6 } from './heading'
import { CodeBlock } from './code-block'
import { Callout } from './callout'
import { Tabs, TabItem } from './tabs'
import { ImageLightbox } from './image-lightbox'
import { Glossary } from '@/components/custom/glossary'
import { Feedback } from '@/components/custom/feedback'
import { FlippingCard } from '@/components/custom/flipping-card'
import { FaqTableOfContents } from '@/components/custom/faq-table-of-contents'
import { Tooltip } from '@/components/docs/tooltip'
import { DocCard } from '@/components/custom/doc-card'
import { DocCardList } from '@/components/custom/doc-card-list'
import { Chip } from '@/components/custom/chip'
import { JiraToolkit } from '@/components/custom/jira-toolkit'
import { UxSidebarRedesign } from '@/components/custom/ux-sidebar-redesign'
import { UxCreatePageRedesign } from '@/components/custom/ux-create-page-redesign'

// Colored symbols for comparison tables
function Check() {
  return <span className="text-utility-green-100 font-bold">✓</span>
}
function Cross() {
  return <span className="text-utility-red-100 font-bold">✗</span>
}
function Partial() {
  return <span className="text-utility-yellow-100 font-bold">◐</span>
}

// Prevents hydration errors when MDX wraps block-level elements (e.g. Callout)
// inside a <p> tag — which is invalid HTML (<div> cannot be a descendant of <p>).
function hasBlockChild(children: React.ReactNode): boolean {
  const BLOCK_TAGS = new Set(['div', 'section', 'aside', 'article', 'ul', 'ol', 'table', 'blockquote', 'pre', 'hr'])
  const arr = Array.isArray(children) ? children : [children]
  return arr.some((child) => {
    if (child == null || typeof child !== 'object') return false
    const el = child as any
    // Custom components (functions/classes) render block-level elements
    if (typeof el.type === 'function' || typeof el.type === 'object') return true
    if (typeof el.type === 'string' && BLOCK_TAGS.has(el.type)) return true
    return false
  })
}

function SafeParagraph(props: React.HTMLAttributes<HTMLParagraphElement>) {
  if (hasBlockChild(props.children as React.ReactNode)) {
    return <div {...props} />
  }
  return <p {...props} />
}

export const mdxComponents: Record<string, React.ComponentType<any>> = {
  p: SafeParagraph,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  pre: ({ children }: any) => {
    // Extract code element props
    const codeEl = children?.props
    if (codeEl) {
      return (
        <CodeBlock className={codeEl.className} meta={codeEl.meta}>
          {codeEl.children}
        </CodeBlock>
      )
    }
    return <pre>{children}</pre>
  },
  img: ImageLightbox as any,
  Callout,
  Tabs,
  TabItem,
  Glossary,
  Feedback,
  FlippingCard,
  FaqTableOfContents,
  Tooltip,
  DocCard,
  DocCardList,
  Check,
  Cross,
  Partial,
  Chip,
  JiraToolkit,
  UxSidebarRedesign,
  UxCreatePageRedesign,
}
