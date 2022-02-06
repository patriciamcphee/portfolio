// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Patricia McPhee',
  tagline: 'UX & Tech Writing Samples',
  url: 'https://patriciamcphee.github.io',
  baseUrl: '/portfolio/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'patriciamcphee', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
      navbar: {
        style: 'primary',
        title: ' ',
        logo: {
          alt: '',
          src: 'img/pm-moniker.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Samples',           
          },
          {
            type: 'doc',
            docId: 'resume',
            position: 'left',
            label: 'Resume',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.pscmdesigns.com/',
            label: 'Portfolio',
            position: 'left',
          },
          {
            href: 'https://github.com/patriciamcphee/portfolio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
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
        copyright: `Copyright © ${new Date().getFullYear()} Patricia McPhee`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
