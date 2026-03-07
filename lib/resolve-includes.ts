import fs from 'fs/promises'
import fsSync from 'fs'
import path from 'path'
import matter from 'gray-matter'

const INCLUDE_RE = /^@include\s+(.+)$/gm
const MAX_DEPTH = 5
const CONTENT_ROOT = path.join(process.cwd(), 'content')

// Split content into prose and code-fence segments.
// Even indices are prose (processable), odd indices are code blocks (skip).
const FENCE_SPLIT = /(````[\s\S]*?````|```[\s\S]*?```)/g

/**
 * Resolve an include path to an absolute path.
 * - Paths starting with `/` are root-relative (resolved from `content/`)
 * - All other paths are resolved relative to the file's directory
 */
function resolveIncludePath(includePath: string, dirPath: string): string {
  if (includePath.startsWith('/')) {
    return path.join(CONTENT_ROOT, includePath)
  }
  return path.resolve(dirPath, includePath)
}

/**
 * Resolve `@include path/to/_partial.mdx` directives in MDX content.
 *
 * Reads the referenced file, strips its frontmatter, and inlines the
 * content in place of the directive.  Nested includes are supported up
 * to a depth of 5.  Directives inside fenced code blocks are ignored.
 *
 * Paths starting with `/` resolve from the `content/` directory, allowing
 * shared partials across docs, blog, and release notes:
 *   @include /docs/_includes/shared-note.mdx
 *
 * Relative paths resolve from the directory of the file containing the
 * directive (the existing behavior):
 *   @include ./_local-partial.mdx
 *
 * @param content  Raw MDX string (frontmatter already stripped)
 * @param dirPath  Absolute directory of the file containing the directives
 * @param depth    Current recursion depth (internal)
 */
export async function resolveIncludes(
  content: string,
  dirPath: string,
  depth = 0,
): Promise<string> {
  if (depth >= MAX_DEPTH) return content

  const parts = content.split(FENCE_SPLIT)

  for (let i = 0; i < parts.length; i++) {
    if (i % 2 !== 0) continue // skip code blocks

    const matches = [...parts[i].matchAll(INCLUDE_RE)]
    if (matches.length === 0) continue

    let text = parts[i]

    // Process in reverse so replacement indices stay valid
    for (const match of matches.reverse()) {
      const includePath = match[1].trim()
      const absPath = resolveIncludePath(includePath, dirPath)

      let partialContent: string
      try {
        const raw = await fs.readFile(absPath, 'utf-8')
        const { content: body } = matter(raw)
        partialContent = await resolveIncludes(body, path.dirname(absPath), depth + 1)
      } catch {
        throw new Error(
          `Include not found: "${includePath}" (resolved to ${absPath})`,
        )
      }

      const start = match.index!
      const end = start + match[0].length
      text = text.slice(0, start) + partialContent.trim() + text.slice(end)
    }

    parts[i] = text
  }

  return parts.join('')
}

/**
 * Synchronous version for use in build scripts (CommonJS).
 */
export function resolveIncludesSync(
  content: string,
  dirPath: string,
  depth = 0,
): string {
  if (depth >= MAX_DEPTH) return content

  const parts = content.split(FENCE_SPLIT)

  for (let i = 0; i < parts.length; i++) {
    if (i % 2 !== 0) continue // skip code blocks

    parts[i] = parts[i].replace(INCLUDE_RE, (_match, rawPath: string) => {
      const includePath = rawPath.trim()
      const absPath = resolveIncludePath(includePath, dirPath)

      if (!fsSync.existsSync(absPath)) {
        throw new Error(
          `Include not found: "${includePath}" (resolved to ${absPath})`,
        )
      }

      const raw = fsSync.readFileSync(absPath, 'utf-8')
      const { content: body } = matter(raw)
      return resolveIncludesSync(body.trim(), path.dirname(absPath), depth + 1)
    })
  }

  return parts.join('')
}
