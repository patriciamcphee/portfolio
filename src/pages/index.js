import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Nutshell from '../components/HomepageFeatures/Nutshell';
import ExperienceCareerMilestones from '@site/src/components/HomepageFeatures/ExperienceCareerMilestones';
import HowIHelp from '@site/src/components/HomepageFeatures/HowIHelp';
import EducationCourses from '@site/src/components/HomepageFeatures/EducationCourses';
import PortfolioAndProjects from '@site/src/components/PortfolioAndProjects/PortfolioAndProjects';
import SkillsSection from '@site/src/components/HomepageFeatures/SkillsList';

import LinkedInIcon from '@site/static/img/Linkedin.svg';
import EmailIcon from '@site/static/img/email.svg';
import SendIcon from '@site/static/img/Send.svg';

import styles from './index.module.css';

import { Col, Divider, Row, Card, Space, Button, ConfigProvider } from "antd";
const style = {
  padding: "6px 20px",
  margin: '0 10px',
  color: '#fff',
};


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div class="intro-visual">
        <Row wrap={false}>
        <Col flex="1 0 650px">
            <div class="intro-text">
              <h5 class="intro-visual-header">
              Your Technical Writing Expert
              </h5>
              <p class="intro-text">Empowering Users Through Well-Crafted Content and Design.</p>
              <h4 class="intro-text">Hi! I'm Patricia McPhee. I'm a highly skilled Senior Technical Writer passionate about optimizing user experiences. Writing is just the tip of the iceberg; I'm also a strategist. I create product documentation that users can navigate effortlessly. I firmly believe in the power of clear, intuitive user experiences and incorporate this belief into every project. I'm brimming with untapped potential, just waiting to be unleashed. </h4>        
            </div>
            <div class="intro-text-button">
              <Space wrap align='center' direction="vertical">
              <ConfigProvider
              
                theme={{
                  token: {
                      colorPrimary: '#6e815e',
                      colorPrimaryHover: '#244651',
                      colorTextBase: '#fff',
                    }
                  }
                }
              >
                <Button type="primary" shape="round" size='large' style={style} href="/writing-samples">
                Get to Know My Work
                </Button>
              </ConfigProvider>
              </Space>
          </div>
          </Col>
          <Col flex="0 1 450px">
              <div className="intro-image">
                
              </div>  
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Technical Writing Expert`}
      description="Highly skilled Senior Technical Writer passionate about optimizing user experiences. Writing is just the tip of the iceberg; I'm also a strategist. I create product documentation that users can navigate effortlessly. I firmly believe in the power of clear, intuitive user experiences and incorporate this belief into every project.">
      <HomepageHeader />
      <main>

      <HowIHelp />
      <Divider />
      <ExperienceCareerMilestones />

      <Divider />
      <EducationCourses />     
      <Divider />
      <div class="features-visual-nutshell-index-container">
      <div class="row">
    <div class="col">
      <div class="col-demo cta-footer">
      <h3>Interested in enhancing your project with user-centric technical writing and content design?</h3>
        
      </div>
    </div>
    <div class="col col--3 col--offset-1">
      <div class="col-demo">
      <h3>Let's talk.</h3>
        <ul>
          <li class="no-style-footer"><sub><LinkedInIcon /></sub> <a href="https://www.linkedin.com/in/patriciamcphee/" target="_blank">Find me on <span class="list-bold-item-plain">LinkedIn</span></a></li>
          <li class="no-style-footer"><sub><EmailIcon /></sub> <a href="mailto:contact@patriciamcphee.com?subject=Mail from portfolio website">Send an email</a></li>
          <li class="no-style-footer"><sub><SendIcon /></sub> <a href="/contact">Submit an inquiry</a></li>
        </ul>
      </div>
    </div>
    <div class="col col--4">
      <div class="col-demo">
      <h3>Helpful links.</h3>
      <div class="row">
        <div class="col">
          <div class="col-demo">
          <ul>
            <li class="no-style-footer-helpful-links"><a href="/about">About</a></li>
            <li class="no-style-footer-helpful-links"><a href="/resume-functional">Resume</a></li>
            <li class="no-style-footer-helpful-links"><a href="/writing-samples">Portfolio</a></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="col-demo">
          <ul>
            <li class="no-style-footer-helpful-links"><a href="/blog">Blog</a></li>
            <li class="no-style-footer-helpful-links"><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      </div>
    </div>
  </div>
      </div>
      <br />
      <br />
      </main>
    </Layout>
  );
}
