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
    'info-architect',
    {
      type: 'category',
      label: 'How-to samples',
      items: [ 'how-tos/how-tos' ],
    },
    {
      type: 'category',
      label: 'KB article samples',
      items: [ 'kb-articles/kb-article-samples' ],
    },
    {
      type: 'category',
      label: 'Quick start samples',
      items: [ 'quick-starts/quick-start-mobile-sdk-android' ],
    },
    {
      type: 'category',
      label: 'UX writing sampmles',
      items: [ 'ux-writing/ux-writing-samples' ],
    },
    {
      type: 'category',
      label: 'Voiceover script sampmles',
      items: [ 'voiceover-scripts/intro' ],
    },    
  ],
};

module.exports = sidebars;

