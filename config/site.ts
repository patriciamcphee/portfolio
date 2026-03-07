export const siteConfig = {
  title: 'Patricia McPhee Portfolio',
  tagline: 'Technical Content Manager & Developer Experience',
  url: 'https://www.patriciamcphee.com',
  baseUrl: '/',
  favicon: '/img/favicon.svg',
  organizationName: '',
  projectName: 'portfolio',
  repoUrl: 'https://github.com/patriciamcphee/portfolio',
  editBaseUrl: '',
  logo: {
    navbar: '/img/favicon.svg',
    hero: null,
    alt: 'PM Moniker',
    useBuiltIn: false,
  },
  lastUpdated: {
    showAuthor: false,
  },
  colorMode: {
    defaultMode: 'dark' as const,
    respectPrefersColorScheme: true,
  },
  search: {
    excludedFolders: ['includes', '_includes'],
    excludedPrefixes: ['_'],
    weights: {
      title: 1.0,
      'sections.heading': 1.0,
      keywords: 0.8,
      description: 0.6,
      'sections.content': 0.5,
      content: 0.4,
    },
  },
  faq: {
    faqDir: 'content/docs/faq',
    basePermalink: '/faq',
  },

  // Subscribe CTA — shown on blog index & release notes when enabled
  subscribe: {
    enabled: false,
    url: '', // external URL to subscription form (e.g., Mailchimp, Buttondown, ConvertKit)
  },

  // Blog — set enabled: false to disable /blog routes and hide nav link
  blog: {
    enabled: true,
    layout: 'modern' as 'modern' | 'minimal',
  },

  // Release notes — set enabled: false to disable /release-notes routes and hide nav link
  releaseNotes: {
    enabled: false,
    layout: 'changelog' as 'modern' | 'changelog',
  },

  // OpenAPI / API documentation — set enabled: true and place specs in api/
  apiDocs: {
    enabled: false,
    specDir: 'content/api',
    routeBasePath: 'api',
    viewerOptions: {} as Record<string, unknown>,
  },

  // Internationalization — set enabled: true and add locales to activate
  i18n: {
    enabled: false,
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', dir: 'ltr' as const },
    ],
  },

  // Documentation versioning — set enabled: true to activate
  versioning: {
    enabled: false,
    currentLabel: 'Latest',
  },
}
