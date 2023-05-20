// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const baseUrl = process.env.BASE_URL ?? '/';

/** @type {import('@docusaurus/types').Config} */
const config = {

  plugins: [

    require.resolve("docusaurus-plugin-image-zoom"),



//    'plugin-image-zoom',
//    '@chatwoot/docusaurus-plugin',
//    [
//      require.resolve("@easyops-cn/docusaurus-search-local"),
//      {
//        indexDocs: true,
//        indexBlog: false,
//        indexPages: true,
//        language: "en",
//        hashed: true
//      }
//    ],
  ],
  markdown: {
    mermaid: true,
  },
themes: [
  '@docusaurus/theme-mermaid',
  '@docusaurus/theme-live-codeblock', 
  'docusaurus-theme-redoc',
],


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

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
          routeBasePath: '/',
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/patriciamcphee/portfolio/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            spec: 'static/api/v2.yaml',
            url: 'api/v2.yaml',
            route: 'api',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#046b99',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,

        }
      },
      navbar: {
        title: 'Patricia McPhee\'s Writing Portfolio',
        logo: {
          alt: '',
          src: 'img/favicon.png',
        },
        items: [ 
/*         { 
          to: "/api/", 
          label: "API", 
          position: "left" 
        },
*/
        {
          type: 'doc',
          docId: 'resume',
          position: 'right',
          label: 'Resume',
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'right'
        }, 
/*
           {
            label: 'Support',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                to: 'https://github.com/gobeyondidentity',
                label: 'GitHub',
               },
               {
                to: 'https://stackoverflow.com/questions/tagged/beyondidentity',
                label: 'Stack Overflow',
               },
               {
                to: 'https://join.slack.com/t/byndid/shared_invite/zt-1anns8n83-NQX4JvW7coi9dksADxgeBQ',
                label: 'Slack',
               },
               {
                to: 'https://twitter.com/BI_Developers',
                label: 'Twitter',
               },
               {
                to: 'https://dev.to/beyondidentity',
                label: 'DevTo',
               },
            ],
          }, 
*/
        ],
      },
      footer: {
        style: 'dark',
        
        copyright: `© ${new Date().getFullYear()} Patricia McPhee`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      }
    }),
};

module.exports = config;
