// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Patricia McPhee',
  tagline: 'I\'m passionate about creating content experiences that help people navigate, use, and troubleshoot products. Relentlessly curious and fueled by strong coffee, I gather information and design meaningful digital content experiences.',
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
    jobTitle: 'Technical Writer / Content Strategist',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
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
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
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
            label: 'Work',           
          },
/*          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          }, */
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
/*        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Resume',
                to: '/docs/resume',
              },
              {
                label: 'Samples',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/patriciamcphee/',
              },
              {
                label: 'Slack',
                href: 'https://patricia-mcphee.slack.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/patriciamcphee/',
              },
            ],
          },
        ],
        */
        copyright: `Copyright © ${new Date().getFullYear()} Patricia McPhee`,
      },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      'plugin-image-zoom'
    ],
  themes: [
    '@docusaurus/theme-live-codeblock', 
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],


};

module.exports = config;