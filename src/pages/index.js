import React from 'react'
import clsx from 'clsx';
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HeroImage from '@site/static/img/hero-2.svg';
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures';
/*import { Grid, Box } from '@site/src/components/Grid'*/
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header class="jumbotron align-items-center">
        <div class="container">
          <div class="row row-content row--align-center">           

          <div class="col col-sm col-md heroSvg flex">

           <HeroImage  />

          </div>

            <div class="col col-sm col-md text--left">
              <h1>{siteConfig.title}</h1>
              <h2>{siteConfig.tagline}</h2>
              <p>Here, you'll find various writing samples, such as UI strings, error messages, KB articles, how-to's, and more. I built this site using <a href="https://docusaurus.io">Docusaurus</a> for the authoring platform, GitHub Pages for hosting, and markdown for content development. The purpose of the site is to showcase my writing samples in an online format common in today's enterprises. </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/resume">
                    Learn more about me
                </Link>
              </div> 
            </div>


        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}'s UX and Tech Writing Samples`}
      description="Here you'll find a variety of my writing samples, such as UI strings, KB articles, how-to's, and more. It's a way for me to showcase my writing samples in an online format that is common in today's enterprises.  ">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
