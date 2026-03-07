# Test Docs v1.6.9

Built with [Trellis](https://pixlngrid.github.io/trellis-docs) — a documentation framework powered by Next.js.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── content/
│   ├── docs/             # Documentation pages (MDX)
│   ├── blog/             # Blog posts
│   └── release-notes/    # Release notes
├── app/                  # Next.js app directory (routes, layouts)
├── components/           # React components (theme, custom, brand)
├── config/
│   ├── site.ts           # Site configuration
│   ├── sidebar.ts        # Sidebar navigation
│   └── variables.ts      # Reusable doc variables
├── scripts/              # Build scripts (search index, tokens, etc.)
├── design-tokens.json    # Colors, spacing, typography tokens
└── public/               # Static assets (images, generated indexes)
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build static site to `out/` |
| `npm run build-tokens` | Regenerate CSS from design tokens |
| `npm run version:snapshot <v>` | Snapshot current docs as a version |
| `npm run export:sidebar` | Export sidebar structure as CSV |

## Writing Content

Add `.md` or `.mdx` files to `content/docs/`. Each file needs a `title` in its frontmatter:

```yaml
---
title: My Page
description: A short description.
---
```

The file path determines the URL: `content/docs/guides/setup.mdx` becomes `/guides/setup/`.

## Troubleshooting

**`Cannot find module '../lightningcss.<platform>.node'`**

Tailwind CSS v4 uses platform-specific native binaries (via `lightningcss`). If your `.npmrc` overrides the `os` setting to a value that doesn't match your actual platform, npm will skip the correct binaries. Fix by reinstalling with your real platform:

```bash
# macOS
npm install --os=darwin

# Windows
npm install --os=win32

# Linux
npm install --os=linux
```

> **Note:** The `create-trellis-docs` scaffolder handles this automatically. This only applies if you run `npm install` manually (e.g., after deleting `node_modules`).

## Learn More

- [Trellis Documentation](https://pixlngrid.github.io/trellis-docs)
- [Content Authoring Guide](https://pixlngrid.github.io/trellis-docs/guides/content-authoring/)
- [Next.js Documentation](https://nextjs.org/docs)
