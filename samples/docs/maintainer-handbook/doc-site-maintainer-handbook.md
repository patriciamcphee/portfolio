---
id: maintainer-handbook
title: Doc Site Maintainer Handbook
slug: 'maintainer-handbook'
description: 'Learn how to maintain the Alchemy user documentation.'
keywords:
 - keyword
last_update: 
   date: 08/22/2024
   author: Patricia McPhee
draft: true
doc_type: how-to
displayed_sidebar: maintainerHandbookSidebar
---



## Explore the site organization

| Directory/File | Description |
| --- | --- |
| `/docs`  | Contains the Markdown files for the documents. In `sidebars.js,` you can customize the order of the site's sidebar.    |
| `/docs/images`  | Images used in the documentation.   |
| `/docs/includes`  | Reusable content such as feature descriptions, notes, shared steps, etc.   |
| `docusaurus.config.js`  | A config file containing the site configuration.   |
| `sidebar.js`  | Left navbar (table of contents) for the doc site. The `mainSidebar` object is the primary one and contains several categories and documents used for all Alchemy-based user documentation.  |
| `/src`  | Non-documentation files like pages, custom React components, and Docusaurus native components.   |
| `/src/components`  | Custom React components used for the website or included in the documentation, such as the video gallery and feedback.   |
| `/src/css`  | Primary stylesheet for the project.   |
| `/src/data`  | JSON files for data ingestion for custom components, like the video library.   |
| `/src/pages`  | Not used   |
| `/src/theme`  | Docusaurus native components such as the sidebar, content page, and content page footer designs. The native components in this directory were customized. For example, moving the last updated date from the bottom of the page to the top so it's visible.   |
| `/static`  | Any contents inside here will be copied into the root of the final `build` directory.    |
| `/static/img`  | Images site assets, such as Alchemy and third-party brand logos.   |
| `package.json`  | Contains the dependencies of the project.   |
