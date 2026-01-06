---
id: troubleshooting-alchemy-docs
title: Troubleshooting
description: 'Troubleshoot local builds of the Alchemy user documentation.'
keywords:
 - contributing
last_update: 
   date: 09/01/2024
   author: Patricia McPhee
draft: true
doc_type: how-to
displayed_sidebar: mainSidebar
---

## Failed builds

### Broken links

If you have broken links, you can see them in the `broken-links-log.json` file.  This is a custom script that is not part of the base Docusaurus framework. 

```json title="Example output"
{
  "timestamp": "2024-08-31T16:56:09.495Z",
  "brokenLinks": [
    {
      "sourcePage": "/contributor-guide/edit-content-major-changes/",
      "brokenLink": "./style-guide.md/"
    },
    {
      "sourcePage": "/contributor-guide/style-guide/common-mistakes/",
      "brokenLink": "/contributor-guide/style-guide/headings-titles-paragraphs/#content-structure"
    }
  ]
}
```

## Markdown formatting

### Tabs


### Partial markdowns (includes)


### Numbered lists


