export type SidebarItem =
  | { type: 'doc'; id: string; label?: string }
  | { type: 'category'; label: string; link?: string; collapsed?: boolean; items: SidebarItem[] }
  | { type: 'link'; label: string; href: string }
  | { type: 'api'; id: string; label?: string }

export const mainSidebar: SidebarItem[] = [
  {
    type: 'category',
    label: 'Style Guide',
    link: 'style-guide/style-guide',
    collapsed: false,
    items: [
      { type: 'doc', id: 'style-guide/voice-tone' },
      { type: 'doc', id: 'style-guide/common-mistakes' },
      { type: 'doc', id: 'style-guide/case-studies' },
      { type: 'doc', id: 'style-guide/writing-guidelines' },
      { type: 'doc', id: 'style-guide/content-types' },
      { type: 'doc', id: 'style-guide/content-quality' },
      { type: 'doc', id: 'style-guide/headings-titles' },
      { type: 'doc', id: 'style-guide/paragraphs' },
      { type: 'doc', id: 'style-guide/word-usage' },
      { type: 'doc', id: 'style-guide/hyperlinks' },
      { type: 'doc', id: 'style-guide/images-screenshots' },
      { type: 'doc', id: 'style-guide/ordered-unordered-lists' },
      { type: 'doc', id: 'style-guide/reusing-content' },
      { type: 'doc', id: 'style-guide/ai-generated-content' },
      { type: 'doc', id: 'style-guide/writing-effective-procedures' },
      { type: 'doc', id: 'style-guide/tips-for-effective-yaml-inputs' },
      { type: 'doc', id: 'style-guide/writing-effective-error-messages' },
      { type: 'doc', id: 'style-guide/writing-release-notes' },
    ],
  },
  {
    type: 'category',
    label: 'Smart Search Plugin',
    link: 'smart-search-plugin/plugin-introduction',
    collapsed: false,
    items: [
      { type: 'doc', id: 'smart-search-plugin/getting-started' },
      { type: 'doc', id: 'smart-search-plugin/document-configuration' },
      { type: 'doc', id: 'smart-search-plugin/plugin-troubleshooting' },
      { type: 'doc', id: 'smart-search-plugin/plugin-faq' },
    ],
  },
  {
    type: 'category',
    label: 'Markdown Reference',
    link: 'markdown-reference/markdown-reference',
    collapsed: true,
    items: [
      { type: 'doc', id: 'markdown-reference/basic-formatting' },
      { type: 'doc', id: 'markdown-reference/advanced-formatting' },
    ],
  },
]
