import React from 'react'
import clsx from 'clsx';
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HeroImage from '../../static/img/hero-1.svg';
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
              <p>{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/resume">
                    Learn more about me
                </Link>
              </div> 
            </div>
            <div class="col-sm"></div>
            <div class="col-3 col-sm col-md">
              <p class="d-none d-sm-block">
              <HeroImage width="auto" />
              </p>
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
