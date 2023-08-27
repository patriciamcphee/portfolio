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
        <Col flex="1 0 450px">
            <div class="intro-text">
              <h5 class="intro-visual-header">
              Your Technical Writing Expert
              </h5>
              <p class="intro-text">Empowering Users Through Well-Crafted Content and Design.</p>
              <h4 class="intro-text">Hi! I'm Patricia McPhee. I'm a highly skilled Senior Technical Writer passionate about optimizing user experiences. Writing is just the tip of the iceberg; I'm also a strategist. I create product documentation that users can navigate effortlessly. I firmly believe in the power of clear, intuitive user experiences and incorporate this belief into every project.</h4>        
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
                  See My Portfolio
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
      title={`Crafting Technical Content Excellence`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <Divider />
      <HowIHelp />
      <Divider />
      <ExperienceCareerMilestones />

      <Divider />
      <EducationCourses />     
      <Divider />
      <Nutshell />
      </main>
    </Layout>
  );
}
