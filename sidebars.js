/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],






  // But you can create a sidebar manually


  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'How-to\'s',
      link: {
        type: 'doc',
        id: 'how-tos/how-to-samples',
      },      
      items: [ 'how-tos/mobile-sdk' ],
    },
    {
      type: 'category',
      label: 'KB articles',
      link: {
        type: 'doc',
        id: 'kb-articles/kb-article-samples',
      },         
      items: [ 'kb-articles/slow-logon-issue', 'kb-articles/routing-error-outbound-shipment' ],
    },
/*    {
      type: 'category',
      label: 'Quick starts',
      link: {
        type: 'doc',
        id: 'quick-starts/quick-starts',
      },         
      items: [ 'quick-starts/quick-start-mobile-sdk-android' ],
    },
*/  
    {
      type: 'category',
      label: 'UX writing',
      link: {
        type: 'doc',
        id: 'ux-writing/ux-writing-samples',
      },          
      items: [ 'ux-writing/ui-strings', 'ux-writing/errors-warnings-confirmations', 'ux-writing/group-policies' ],
    },
    {
      type: 'category',
      label: 'Voiceover scripts',
      link: {
        type: 'doc',
        id: 'voiceover-scripts/intro',
      },       
      items: [ 'voiceover-scripts/tech-software-training' ],
    },    
  ],
};

module.exports = sidebars;

