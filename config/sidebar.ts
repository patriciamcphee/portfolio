export type SidebarItem =
  | { type: 'doc'; id: string; label?: string }
  | { type: 'category'; label: string; link?: string; collapsed?: boolean; items: SidebarItem[] }
  | { type: 'link'; label: string; href: string }
  | { type: 'api'; id: string; label?: string }
  | { type: 'html'; value: string }

export const mainSidebar: SidebarItem[] = [

  {
    type: 'category',
    label: 'Smart Search Plugin',
    link: 'smart-search-plugin',
    collapsed: true,
    items: [
      { type: 'doc', id: 'smart-search-plugin/getting-started' },
      { type: 'doc', id: 'smart-search-plugin/document-configuration' },
      { type: 'doc', id: 'smart-search-plugin/plugin-troubleshooting' },
      { type: 'doc', id: 'smart-search-plugin/plugin-faq' },
    ],
  },
      {
    type: 'html',
    value: '<hr class="my-4 border-(--border)" />',
  },
  {
    type: 'category',
    label: 'APIs & SDKs',
    link: 'api/',
    collapsed: true,
    items: [
      {
        type: 'category',
        label: 'CosmosDB Service Module',
        link: 'api/cosmosdb/',
        collapsed: true,
        items: [
          { type: 'doc', id: 'api/cosmosdb/database-utilities' },
          { type: 'doc', id: 'api/cosmosdb/organizations' },
          { type: 'doc', id: 'api/cosmosdb/teams' },
          { type: 'doc', id: 'api/cosmosdb/projects' },
          { type: 'doc', id: 'api/cosmosdb/participants-and-research' },
          { type: 'doc', id: 'api/cosmosdb/synthesis' },
          { type: 'doc', id: 'api/cosmosdb/documents' },
          { type: 'doc', id: 'api/cosmosdb/feedback-and-surveys' },
          { type: 'doc', id: 'api/cosmosdb/billing-and-plans' },
          { type: 'doc', id: 'api/cosmosdb/authentication' },
          { type: 'doc', id: 'api/cosmosdb/helpers' },
        ],
      },
      { type: 'doc', id: 'api/document-comments-api' },
      { type: 'doc', id: 'api/feedback-api' },
      { type: 'doc', id: 'api/invitations-api' },
      { type: 'doc', id: 'api/scout-ai-rest-api' },
      { type: 'doc', id: 'sdk/scout-ai-client-sdk' },
    ],
    
  },
   
   {
    type: 'html',
    value: '<hr class="my-4 border-(--border)" />',
  },
  {
    type: 'category',
    label: 'Developer Portal',
    link: 'developer-portal/',
    collapsed: true,
    items: [
      { type: 'doc', id: 'developer-portal/techdocs-and-mkdocs-plugins' },
      { type: 'doc', id: 'template-editor/using-template-editor', label: 'Backstage Template Editor' },
      { type: 'doc', id: 'template-editor/template-form-playground' },
      { type: 'doc', id: 'template-editor/create-new-template' },
    ],
  },
  {
    type: 'html',
    value: '<hr class="my-4 border-(--border)" />',
  },
  {
    type: 'category',
    label: 'AI Toolkit',
    link: 'portfolio/jira-toolkit',
    collapsed: true,
    items: [
      { type: 'doc', id: 'portfolio/jira-toolkit' },
      
    ],
  },
  {
    type: 'html',
    value: '<hr class="my-4 border-(--border)" />',
  },
  {
    type: 'category',
    label: 'UX/UI',
    link: 'portfolio/sidebar-redesign',
    collapsed: true,
    items: [
      { type: 'doc', id: 'portfolio/sidebar-redesign' },
      { type: 'doc', id: 'portfolio/create-page-redesign' },
      
    ],
  },
  {
    type: 'html',
    value: '<hr class="my-4 border-(--border)" />',
  },
  {
    type: 'category',
    label: 'Style Guide',
    link: 'style-guide/',
    collapsed: true,
    items: [
      { type: 'doc', id: 'style-guide/voice-tone' },
      { type: 'doc', id: 'style-guide/common-mistakes' },
      {
        type: 'category',
        label: 'Writing Guidelines',
        link: 'style-guide/writing-guidelines',
        collapsed: false,
        items: [
          { type: 'doc', id: 'style-guide/headings-titles' },
          { type: 'doc', id: 'style-guide/paragraphs' },
          { type: 'doc', id: 'style-guide/word-usage' },
          { type: 'doc', id: 'style-guide/hyperlinks' },
          { type: 'doc', id: 'style-guide/images-screenshots' },
          { type: 'doc', id: 'style-guide/ordered-unordered-lists' },
          { type: 'doc', id: 'style-guide/ai-generated-content' },
          { type: 'doc', id: 'style-guide/writing-effective-procedures' },
          { type: 'doc', id: 'style-guide/tips-for-effective-yaml-inputs' },
          { type: 'doc', id: 'style-guide/writing-effective-error-messages' },
        ],
      },
    ],
  },
]