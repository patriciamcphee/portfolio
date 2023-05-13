<!-- Secure Workforce documentation only -->

# Beyond Identity Secure Workforce documentation

Welcome to the Beyond Identity customer documentation repository! This repo is the source for [https://customer-docs.vercel.apps/](https://customer-docs.vercel.app/), also known as "Dev Docs"!

The Beyond Identity customer documentation is completely open-source and we appreciate contributions from the community.



## Provide feedback

Your feedback is essential in shaping the customer content experience. There are several ways to provide feedback:

- If you see something incorrect or confusing in the docs, or have an enhancement idea to make the docs better, you can edit a page by clicking **Edit this page** at the top of the page to [open a Pull Request](https://github.com/gobeyondidentity/customer-docs/pulls). You can also [open a GitHub issue](https://github.com/gobeyondidentity/customer-docs/issues/new) for the documentation team by clicking **Open doc issue**.

- If you have a question about docs, you can [join the discussion](https://github.com/gobeyondidentity/customer-docs/discussions) to reach out to the Beyond Identity Product team.

Only file issues about docs in this repository. For issues, questions, new feature requests, or enhancement ideas about a specific component or aspect of Beyond Identity, open an issue in the [corresponding code repository](https://github.com/gobeyondidentity/customer-docs/issues).

## Request improvements

You can request the documentation to be improved or clarified, report an error, or submit suggestions and ideas by opening an issue in GitHub. The Product team tracks the issues and works to address your feedback. 

## Contribute to the docs

Refer to the [contributor's guide](./contributor-guide/contributor-guide.md) for details on how to submit edits or additions to the website/documentation.



## Doc branches

Before you get started with the authoring work, it's necessary that you understand the different branches to work on.
* **`main`** -  protected branch

  Docs for [https://customer-docs.vercel.app](https://customer-docs.vercel.app). This branch contains the most recent stable release content.

* **`docs-staging`** - protected branch

  Docs for the upcoming `vNext` release. When Beyond Identity has a release, its `docs-staging` branch will be merged into `main`.

* **`active-development`** - protected branch

  Docs for a forward-version that includes features not yet included in the Beyond Identity stable version. Its content is published on [https://customer-docs.vercel.app/active-development](https://customer-docs.vercel.app/active-development) for early validation purpose.

* **`v<v.r>.x`** - protected branches

  Docs for an archived version, where `v` indicates the version, `r` indicates the release number. For example, `v1.0.x`, `v1.1.x`, `v1.6.x`.

* Branches that start with `release-` contain archived patch release documentation for historical tracking.
* You can have your own personal branch to work on content for a certain issue or feature. However, be sure to check and remove unused personal branches periodically for easy maintenance. Usually when your branch is merged, you can safely delete it.

## Site organization and files

- `/docs/` - Contains the Markdown files for the docs. Customize the order of the docs sidebar in `sidebars.js`. 
- `/docusaurus.config.js` - A config file containing the site configuration.
- `/sidebar.js` - Specify the order of documents in the sidebar. If you have a new file to add to the site, modify this file.
- `/src/` - Non-documentation files like pages or custom React components.
  - `/src/pages` - Any files within this directory will be converted into a website page.
- `/static/` - Static directory. Any contents inside here will be copied into the root of the final `build` directory.
- `/package.json` - A Docusaurus website is a React app. You can install and use any npm packages you like in them.

## Run the doc site locally

### Prerequisites

- Code editor, [VS Code](https://code.visualstudio.com) is recommended
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com) 


### Clone the repo

1. Clone the repo.  This creates a directory named `customer-docs` in your current working directory.

   ```bash
   git clone https://github.com/gobeyondidentity/customer-docs.git
   cd deverloper-docs
   ```

2. Next, create a new [branch](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) from `main` (always give your branch a meaningful, descriptive name). 

   ```bash
   git checkout -b <branch_name> main
   ```

### Start the development server

We're finally able to get to the fun stuff! Install the dependencies and start a local development server:

```bash
yarn
yarn start
```

The `http://localhost:3000` opens in your browser so you can see your changes reflected live.As you make changes to the source files, the preview build will be triggered automatically, and then you can refresh your browser to see the changes.

## Thank you!

We appreciate your contributions to our documentation!