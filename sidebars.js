

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  secureWorkforceSidebar: [
    {
      type: 'category',
      label: 'API',
      collapsed: false, 
      collapsible: false,   
      link: {
        type: 'doc',
        id: 'api/api-overview',
      },      
      items: [ 
        'api/api-example-bflix', 
/*        {
          type: 'link',
          label: 'bFlix API',
          href: '/portfolio/api',
        }, 
*/
        'how-tos/mobile-sdk', 
        'api/clone-volume-api', 
        'api/get-async-results',   
      ],
    },

    {
      type: 'category',
      label: 'UX writing',
      collapsed: false, 
      collapsible: false,   
      link: {
        type: 'doc',
        id: 'ux-writing/ux-writing-samples',
      },          
      items: [ 'ux-writing/ui-strings', 'ux-writing/errors-warnings-confirmations', 'ux-writing/group-policies', 'ux-writing/user-persona'     ],
    },
/*    {
      type: 'category',
      label: 'Guides',
      collapsed: false, 
      collapsible: false,   
      link: {
        type: 'doc',
        id: 'how-tos/how-to-samples',
      },      
      items: [ 
        {
          type: 'category',
          label: 'Contributor\'s guide',
          collapsed: false, 
          collapsible: false,   
          link: {
            type: 'doc',
            id: 'how-tos/contribution-guide/contribute',
          },      
          items: [ 
            'how-tos/contribution-guide/onboard',
            'how-tos/contribution-guide/markdown-reference' ],
        },
        'how-tos/get-started/get-started',
        
      ],
    },
*/
    {
      type: 'category',
      label: 'KB articles',
      collapsed: false, 
      collapsible: false,   
      link: {
        type: 'doc',
        id: 'kb-articles/kb-article-samples',
      },         
      items: [ 'kb-articles/slow-logon-issue', 'kb-articles/routing-error-outbound-shipment' ],
    },
    {
      type: 'category',
      label: 'Voiceover scripts',
      collapsed: false, 
      collapsible: false,   
      link: {
        type: 'doc',
        id: 'voiceover-scripts/intro',
      },       
      items: [ 'voiceover-scripts/tech-software-training',
        {
          type: 'link',
          label: 'Professional demos',
          href: 'https://patriciamcphee.github.io/pmcphee-voiceover/',
        }, 
      ],
    },

  ],

  /*
  releaseNotesSidebar: [
    {
      type: 'category',
      label: 'Release Notes',  
      link: {
        type: 'doc',
        id: 'release-notes/release-notes-main',
      },
      collapsible: false,    
      items: [ 
        'release-notes/v2-77-0',
        'release-notes/v2-76-0',
        'release-notes/v2-75-0',
      ],
    },    
  ],
*/

};

module.exports = sidebars;
