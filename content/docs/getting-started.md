---
title: Getting Started
description: Get up and running with the Trellis docs framework.
keywords: [getting-started, setup, introduction]
last_update:
  date: 02/20/2026
  author: Trellis
---

Welcome to your documentation site powered by **{vars.productName}**.

## Quick Start

Edit files in `content/docs/` to update your documentation. The site will automatically rebuild when you save changes during development.

## Features

- **MDX Support** — Write documentation in Markdown with JSX components
- **Syntax Highlighting** — Code blocks with Shiki for beautiful highlighting
- **Dark/Light Mode** — Theme toggle with system preference detection
- **Search** — Built-in Cmd+K search powered by Fuse.js
- **Design Tokens** — Centralized design token system
- **Callouts** — Tip, note, info, caution, and danger admonitions

## Writing Content

Create `.md` or `.mdx` files in the `content/docs/` directory. Each file needs frontmatter:

```yaml
---
title: Page Title
sidebar_position: 1
---
```

## Callout Examples

:::tip
This is a helpful tip for your readers.
:::

:::note
Important information to keep in mind.
:::

:::caution
Be careful with this action.
:::
