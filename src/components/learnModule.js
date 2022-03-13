import React from 'react'
import clsx from 'clsx';
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import HeroImage from '@site/static/img/online-learning.svg';
import styles from '../pages/index.module.css';
import 'font-awesome/css/font-awesome.min.css';
/*import { Grid, Box } from '@site/src/components/Grid'*/
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

function LearnHeader() {
  return (
    <header class="jumbotron align-items-center">
        <div class="container">
          <div class="row row-content row--align-center">           

          <div class="col col-sm col-md heroSvg flex">

           <HeroImage  />

          </div>

            <div class="col col-sm col-md text--left">
              <h2>Technical Writing Demystified</h2>
              <p>Within the next several months, I'll be announcing the launch of a course that takes the mystery out of the Technical Writing field. It starts in late July 2022 and you'll have the option to purchase one or both add-on modules and 1:1 mentoring. You'll also have the opportunity to join a community and do this solo or in a cohort with others like yourself.  </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="https://forms.gle/zSQYap2RW81o5jzy9">
                    Join the waiting list
                </Link>
              </div> 
            </div>


        </div>
      </div>
    </header>
  );
}

export default function Learn() {
  return (
    
      
      <main>
      <LearnHeader />
      </main>
    
  );
}
