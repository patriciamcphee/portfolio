import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HeroImage from '@site/static/img/cms-development.svg';
import styles from './index.module.css';
import 'font-awesome/css/font-awesome.min.css';
import HomepageFeatures from '../components/HomepageFeatures';
/*import { Grid, Box } from '@site/src/components/Grid'*/
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header class="jumbotron align-items-center">
        <div class="container">
          <div class="row row--align-center">           
          <div class="col-md heroSvg">

           <HeroImage  />

          </div>

            <div class="col text--left">
              <h1>Hello! I'm {siteConfig.title}. </h1>
              <h2>Sr. Content Designer and UX Writer</h2>
              <p>I'm passionate about creating content experiences that help people navigate, use, and troubleshoot products. Fueled by curiosity and strong coffee, I gather information and design meaningful digital content experiences. </p>
              <p>Here, you'll find various writing samples, such as UI strings, error messages, KB articles, how-to's, and more.</p>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/about">
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
