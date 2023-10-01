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
tagline: 'Your Technical Writing Expert',
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
  keywords: ['technical writing expert, tech writing expert, sr. technical writer, senior technical writer, hire a senior technical writer, docusaurus technical writer website, technical writer website, technical writer portfolio, technical writing rates, technical writing contract rates, resume for technical writer, madcap flare online help, writer portfolio online, writer portfolio, technical writer portfolio examples, writer portfolio examples, content writer portfolio sample, hire a technical writer, writers portfolio website, technical writer portfolio website, writing portfolio examples, portfolio sites for writers, portfolio sites for technical writers'],
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
        sitemap: {
          changefreq: 'hourly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarCollapsed: true,
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
//          editUrl:
//            'https://github.com/patriciamcphee/portfolio/edit/main/',
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
        gtag: {
          trackingID: 'G-JN0H6J9GGZ',
          anonymizeIP: true,
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
      metadata: [{name: 'keywords', content: 'technical writing expert, tech writing expert, sr. technical writer, senior technical writer, hire a senior technical writer, docusaurus technical writer website, technical writer website, technical writer portfolio, technical writing rates, technical writing contract rates, resume for technical writer, madcap flare online help, writer portfolio online, writer portfolio, technical writer portfolio examples, writer portfolio examples, content writer portfolio sample, hire a technical writer, writers portfolio website, technical writer portfolio website, writing portfolio examples, portfolio sites for writers, portfolio sites for technical writers, Where can I hire a senior technical writer for my project?, Where can I find a writer portfolio online examples?, How to design a captivating writer portfolio?, Can you show me some technical writer portfolio examples?, What makes writer portfolio examples stand out?, How do I hire the right technical writer for my company?, What are the features of the best writers\' portfolio websites?, Are there any exemplary writing portfolio examples I should look at?, What are the best portfolio sites for writers in general?, Which portfolio sites are preferred by technical writers?, How do I go about hiring a Senior Technical Writer for my project?, How can I find reputable Technical Writer websites?, Where can I find a Writer\'s Portfolio online?, Can you provide examples of a high-quality Technical Writer portfolio?, What are some inspiring Writer Portfolio examples across industries?, How do I find the best technical writer to hire?, Where can I hire freelance technical writers online?, How much does it cost to hire a professional technical writer?, What are the benefits of hiring an experienced technical writer?, How to find a qualified freelance technical writer?, What skills should I look for in a freelance technical writer?, How do I find a qualified technical writer for my software company?, How can a technical writer improve my product documentation?, How to find a technical writer to create user manuals?, How to hire a technical writer for medical device documentation?, Can a technical writer also produce video tutorials?, Where can I find a technical writer who understands DevOps methodologies?, How to hire a technical writer for SaaS products?, How do I find a technical writer who can work on a tight deadline? '}],
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
          {
            to: 'contact', 
            label: 'Contact', 
            position: 'right'
          }, 
        ],
      },
      footer: {
        style: 'dark',
        
        copyright: `© ${new Date().getFullYear()} Patricia McPhee | Powered by <a href="https://www.docusaurus.io" target="_blank">Docusaurus</a>`,
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
