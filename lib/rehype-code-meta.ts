import { visit } from 'unist-util-visit'

/**
 * Rehype plugin that preserves fenced code block meta strings.
 *
 * MDX strips `node.data.meta` during JSX compilation. This plugin
 * copies the raw meta string (e.g. `{2,4-5}` or `title="file.ts"`)
 * to `node.properties.meta` so it reaches the CodeBlock component.
 */
export function rehypeCodeMeta() {
  return (tree: any) => {
    visit(tree, 'element', (node: any) => {
      if (node.tagName === 'code' && node.data?.meta) {
        node.properties.meta = node.data.meta
      }
    })
  }
}
