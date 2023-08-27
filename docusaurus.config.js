// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
tagline: 'I\'m not your typical technical writer; I\'m a storyteller for the digital age. In my role as The Analyzer, I examine every facet of content to make sure each word hits the mark. As The Innovator, I shape digital experiences that capture attention. As The Collaborative Spirit, I unite teams to produce content that genuinely connects. As The Efficiency Expert, I streamline workflows to ensure everything runs as smoothly as the finished product. And as The Multimedia Maven, I know that sometimes stories extend beyond mere words.',
url: 'https://www.patriciamcphee.com',
baseUrl: '/',
onBrokenLinks: 'throw',
onBrokenMarkdownLinks: 'warn',
favicon: 'img/favicon.png',
organizationName: 'patriciamcphee', // Usually your GitHub org/user name.
projectName: 'portfolio', // Usually your repo name.
trailingSlash: false,
customFields: {
  // Put your custom environment here
  jobTitle: 'Sr. Technical Writer | Content Designer',
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
        title: '',
        logo: {
          alt: '',
          src: 'img/navbar-4.png',
        },
        items: [ 
          {
            to: "/",
            label: "Home",
            position: "right",
          },
          {
            to: "about",
            label: "About",
            position: "right",
          },
          { 
            to: "writing-samples", 
            label: "Portfolio", 
            position: "right" 
          },

          {
            type: 'doc',
            docId: 'resume-functional',
            position: 'right',
            label: 'Resume',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'right'
          }, 
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
