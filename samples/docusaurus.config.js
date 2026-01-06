// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const version = '2.0';

const path = require('path');

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Technical Documentation Style Guide',
  tagline: 'This site serves a dual purpose:',
  url: 'https://www.patriciamcphee.com/',
  baseUrl: '/samples',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: '',
  projectName: '',
  
  customFields: {
    version: version,
  },

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
    '@docusaurus/theme-live-codeblock',
  ],

  staticDirectories: ['static'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          path: 'docs',
          showLastUpdateTime: true,
          editUrl: 'https://github.com/patriciamcphee/portfolio/samples/edit/main',
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

  plugins: [
    function webpackPlugin(context, options) {
      return {
        name: 'webpack-config-plugin',
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
              extensionAlias: {
                '.js': ['.js', '.jsx'],
                '.mjs': ['.mjs', '.mjs'],
                '.cjs': ['.cjs', '.cjs'],
              },
            },
          };
        },
      };
    },

    [
      'redirects-plugin',  
      {
        redirectsFile: 'redirects.json'
      }
    ],
    [
      'smart-search-plugin',
      {
        // Optional configuration
        excludedFolders: ['contributor-guide', 'includes', '_includes'],
        excludedPrefixes: ['_'],
        searchWeights: {
          title: 1.0,
          'sections.heading': 1.0,
          keywords: 0.8,
          description: 0.6,
          'sections.content': 0.5,
          content: 0.4
        }
      }
    ],
    [
      'lightbox-image-plugin',
      {
        selector: '.markdown img',           // CSS selector for images
        background: 'rgba(0, 0, 0, 0.8)',   // Overlay background
        zIndex: 999,                        // Overlay z-index
        margin: 10,                          // Margin around zoomed image
        scrollOffset: 10                     // Scroll offset threshold
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      }
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Logo',
        src: 'img/favicon.svg',
        className: 'header-logo',
      },
      items: [
        {
          to: 'welcome',
          position: 'left',
          label: 'Style Guide',
          
        },
                {
          to: 'smart-search-plugin/plugin-introduction',
          position: 'left',
          label: 'Smart Search Plugin',
          
        },
        {
          to: 'template-editor/using-template-editor',
          position: 'left',
          label: 'Backstage Template Editor',
        },
        {
          to: 'api',
          position: 'left',
          label: 'API Reference',
        },
//        {
//          to: 'training-for-engineers',
//          position: 'left',
//          label: 'Training',
//        },
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
        {
          type: 'search',
          position: 'right',
        },
      ],      
    },
    footer: {
      style: 'dark',        
      copyright: `© ${new Date().getFullYear()}&nbsp;&nbsp;&nbsp;<a href="https://www.patriciamcphee.com/" target="_blank">Patricia McPhee</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Powered by Docusaurus 3.8.1`,
    },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
