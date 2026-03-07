---
title: Writing Documentation
last_update:
  date: 02/20/2026
  author: Trellis
---

Learn how to write and organize your documentation content.

## File Structure

Place your documentation files in `content/docs/`. Files can be organized in subdirectories.

## Frontmatter

Every documentation page should have frontmatter at the top:

```yaml
---
title: Page Title
description: A brief description
sidebar_position: 1
keywords: [keyword1, keyword2]
---
```

## Code Blocks

Use fenced code blocks with language identifiers for syntax highlighting:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

```python
def greet(name):
    return f"Hello, {name}!"
```

## Tables

| Feature | Status |
|---------|--------|
| MDX Support | Available |
| Search | Available |
| Dark Mode | Available |

## Links

Use standard Markdown links to reference other pages:

```markdown
[Getting Started](/getting-started)
```
