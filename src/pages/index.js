import React from 'react'
import clsx from 'clsx';
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HeroImage from '../../static/img/hero-2.svg';
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
            <div class="col col-sm col-md">
              <h1>{siteConfig.title}</h1>
              <p>Here you'll find a variety of my samples, such as UI strings, KB articles, how-to's, and more. This site was built using React, GitHub pages for hosting, and markdown to write the content. Around 2015, I started using markdown more as the primary format for content mostly in Confluence and other wiki platforms. In 2018, I started using static-site generators like Jekyll, Hugo,Docusaurus, Jekyll, and DocFx as a primary authoring envinronment .</p>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/resume">
                    Learn more about me
                </Link>
              </div> 
            </div>
            <div class="col-sm"></div>
            <div class="col-3 col-sm col-md heroSvg">

              <HeroImage width="auto" />

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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
