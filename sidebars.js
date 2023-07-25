

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  mySidebar: [

    {
      type: 'category',
      label: 'UX writing',
      collapsed: false, 
      collapsible: false,   
      link: {
        type: 'doc',
        id: 'ux-writing/ux-writing-samples',
      },          
      items: [ 
        'ux-writing/ui-strings', 
        'ux-writing/errors-warnings-confirmations', 
        'ux-writing/group-policies',     
      ],
    },

    {
      type: 'category',
      label: 'Guides',
      collapsed: false, 
      collapsible: false,   
      link: {
        type: 'doc',
        id: 'how-tos/how-to-samples',
      },      
      items: [ 
            'example-readme',
            'how-tos/contribution-guide/contributor-guide',
            'how-tos/contribution-guide/markdown-reference', 
        
      ],
    },
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
        'api/example',
//        'faq',
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
      label: 'Conversation Design',
      collapsed: false, 
      collapsible: false, 
      link: {
        type: 'doc',
        id: 'conversation-design/conversation-design',
      },
      items: [ 
        {
          type: 'category',
          label: 'Travel',
          collapsed: true, 
          collapsible: true, 
          items: [
            'conversation-design/luxury-villa-concierge',
            'conversation-design/pogo-airlines-book-flight',
          ]
        },
        {
          type: 'category',
          label: 'Healthcare',
          collapsed: true, 
          collapsible: true, 
          items: [
            'conversation-design/check-lab-results',
            'conversation-design/ivr-medical-office',
          ]
        },       
/*        {
          type: 'category',
          label: 'Banking',
          collapsed: true, 
          collapsible: true, 
          items: [
            'conversation-design/transfer-bank-funds',
            'conversation-design/ivr-credit-union',
          ]
        },
*/
      ], 
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

    /* need to improve this content so it's a real project */
    {
      type:'category',
      label: 'Content strategy',
      collapsed: false, 
      collapsible: false,   
      link: {
        type: 'doc',
        id: 'content-strategy',
      },      
      items: [ 
        'example-content-audit',
        'quality-content-matters',     
        'art-of-information-architecture',
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
