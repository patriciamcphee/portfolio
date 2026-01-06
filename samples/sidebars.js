/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  mainSidebar: [  
    //    'welcome',
    // Style guide and writing guidelines for technical documentation.
    {
      type: 'category',
      label: 'Style Guide',  
      collapsed: false, 
      collapsible: true,     
      link: {
        type: 'doc',
        id: 'style-guide/style-guide',
      },  
      items: [ 
        'style-guide/voice-tone',
        'style-guide/common-mistakes',
        'style-guide/case-studies',
        'style-guide/writing-guidelines',
        'style-guide/content-types',
        'style-guide/content-quality',
        'style-guide/headings-titles',
        'style-guide/paragraphs',
        'style-guide/word-usage',
        'style-guide/hyperlinks',
        'style-guide/images-screenshots',
        'style-guide/ordered-unordered-lists',
        'style-guide/reusing-content',
        'style-guide/ai-generated-content',
        'style-guide/writing-effective-procedures',
        'style-guide/tips-for-effective-yaml-inputs',
        'style-guide/writing-effective-error-messages',
        'style-guide/writing-release-notes',
        // 'style-guide/tutorials',
      ],
    },

    // Basic markdown and Docusaurus-specific markdown reference guide.
    {
      type: 'html',
      value: '<hr>',
    },

    {
      type: 'category',
      label: 'Smart Search Plugin',  
      collapsed: false, 
      collapsible: true,     
      link: {
        type: 'doc',
        id: 'smart-search-plugin/plugin-introduction',
      },  
      items: [ 
        'smart-search-plugin/getting-started',
        'smart-search-plugin/document-configuration',
        'smart-search-plugin/plugin-troubleshooting',
        'smart-search-plugin/plugin-faq',
      ],
    },
    {
      type: 'html',
      value: '<hr>',
    },
    {
      type: 'category',
      label: 'Markdown Reference',  
      collapsed: true, 
      collapsible: true,     
      link: {
        type: 'doc',
        id: 'markdown-reference/markdown-reference',
      },  
      items: [ 
        'markdown-reference/basic-formatting',
        'markdown-reference/advanced-formatting',
      ],
    },

  ],

  // Content for maintaining the Alchemy Docs React project. This is maintained by Patricia McPhee (C8M3J6); patricia.mcphee@evernorth.com.
  maintainerHandbookSidebar: [
    'maintainer-handbook/maintainer-handbook',
    'maintainer-handbook/feedback-component',
    'maintainer-handbook/flipping-card-with-quiz-component',
    'maintainer-handbook/release-handbook',
  ],


contributingToAlchemySidebar: [
    {
      type: 'category',
      label: 'Using the Template Editor',
      collapsed: true,
      collapsible: true,
      link: {
        type: 'doc',
        id: 'template-editor/using-template-editor',
      },
      items: [
        'template-editor/load-template-directly',
        'template-editor/create-new-template',
        'template-editor/template-form-playground',
        'template-editor/custom-field-editor',        
      ],
    },     
  ],

};

module.exports = sidebars;