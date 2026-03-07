import { codeToHtml } from 'shiki'
import {
  transformerMetaHighlight,
  transformerNotationHighlight,
  transformerNotationDiff,
  transformerNotationFocus,
} from '@shikijs/transformers'
import { CodeBlockClient } from './code-block-client'
import { MermaidRenderer } from './mermaid'

interface CodeBlockProps {
  children?: string
  className?: string
  meta?: string
}

export async function CodeBlock({ children, className, meta }: CodeBlockProps) {
  if (!children) return null

  const lang = className?.replace('language-', '') || 'text'

  // Handle mermaid code blocks specially
  if (lang === 'mermaid') {
    return <MermaidBlock code={children.trim()} />
  }

  const code = children.trim()

  // Extract title="..." from meta string
  const titleMatch = meta?.match(/title="([^"]*)"/)
  const title = titleMatch?.[1]

  const html = await codeToHtml(code, {
    lang,
    meta: { __raw: meta },
    themes: {
      light: 'github-light',
      dark: 'dracula',
    },
    transformers: [
      transformerMetaHighlight(),
      transformerNotationHighlight(),
      transformerNotationDiff(),
      transformerNotationFocus(),
    ],
  })

  return <CodeBlockClient html={html} code={code} title={title} />
}

function MermaidBlock({ code }: { code: string }) {
  return <MermaidRenderer chart={code} />
}
