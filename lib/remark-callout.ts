import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'

const ADMONITION_TYPES = 'note|tip|info|caution|danger|warning'
const FENCE_SPLIT = /(````[\s\S]*?````|```[\s\S]*?```)/g

/**
 * Preprocess admonition titles from Docusaurus space syntax to remark-directive bracket syntax.
 * Converts `:::tip Custom Title` → `:::tip[Custom Title]` (outside of code blocks).
 */
export function preprocessAdmonitions(content: string): string {
  const re = new RegExp(`^(:::(?:${ADMONITION_TYPES}))[ \\t]+(?![\\[{])(.+)$`, 'gm')
  const parts = content.split(FENCE_SPLIT)
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 !== 0) continue // skip code blocks
    parts[i] = parts[i].replace(re, '$1[$2]')
  }
  return parts.join('')
}

/**
 * Remark plugin to transform Docusaurus-style admonitions (:::tip, :::note, etc.)
 * into JSX <Callout> components.
 *
 * Input:  :::tip[Optional Title]
 *         Some content
 *         :::
 *
 * Output: <Callout type="tip" title="Optional Title">
 *         Some content
 *         </Callout>
 */
export const remarkCallout: Plugin = () => {
  return (tree: any) => {
    visit(tree, 'containerDirective', (node: any) => {
      const types = ['note', 'tip', 'info', 'caution', 'danger', 'warning']
      if (!types.includes(node.name)) return

      const data = node.data || (node.data = {})
      const attributes = node.attributes || {}

      // Get title from [title] syntax or attributes
      const title = node.children?.[0]?.type === 'paragraph' &&
        node.children[0].data?.directiveLabel
        ? node.children[0].children.map((c: any) => c.value || '').join('')
        : attributes.title || ''

      data.hName = 'Callout'
      data.hProperties = {
        type: node.name,
        title: title || undefined,
      }

      // Remove the directive label paragraph if present
      if (node.children?.[0]?.data?.directiveLabel) {
        node.children = node.children.slice(1)
      }
    })
  }
}
