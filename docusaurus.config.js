// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Patricia McPhee',
  tagline: 'I\'m passionate about creating content experiences that help people configure, use, and troubleshoot products. Relentlessly curious and fueled by strong coffee, I\'m a word nerd who loves to explain complex concepts in simple language. I can spot ambiguities and logical inconsistencies from a mile away, and I get a kick out of style guides and know when to follow the rules and when to break them.',
  url: 'https://patriciamcphee.github.io',
  baseUrl: '/portfolio/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'patriciamcphee', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.
  trailingSlash: false,
  
  customFields: {
    // Put your custom environment here
    jobTitle: 'UX Technical Writer / Content Strategist',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsed: true,
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
         // editUrl:
           // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        id: "apiv1",
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/api/v1.yaml',
            url: 'api/v1.yaml',
            route: 'api',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#5077c5',
        },
      },
    ],
  ],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,

        }
      },
      navbar: {
        style: 'primary',
        title: ' ',
        logo: {
          alt: '',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'resume',
            position: 'left',
            label: 'Resume',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Writing Samples',           
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          }, 
          {
            href: 'https://www.linkedin.com/in/patriciamcphee/',
            position: 'right',
            className: 'linkedin-logo',
            'aria-label': 'Linkedin',
           },
          {
            href: 'https://github.com/patriciamcphee/',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
           },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Patricia McPhee`,
      },
      prism: {
        theme: lightCodeTheme,
       darkTheme: darkCodeTheme, 
      },
    }),
    plugins: [
      'plugin-image-zoom',
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          indexDocs: true,
          indexBlog: false,
          indexPages: true,
          language: "en",
          hashed: true
        }
      ],
    ],
    themes: [
      '@docusaurus/theme-live-codeblock', 
      'docusaurus-theme-redoc',
    ],
};



module.exports = config;