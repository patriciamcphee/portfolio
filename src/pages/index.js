import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import TheTechMaestrosSymphony from '@site/src/components/HomepageFeatures/TheTechMaestrosSymphony.js';
import TheSymphony from '@site/src/components/HomepageFeatures/TheSymphony.js';
import ToolkitAndEvolution from '@site/src/components/HomepageFeatures/ToolkitAndEvolution.js';
import ForeverEvolving from '../components/HomepageFeatures/ForeverEvolving';
import Nutshell from '../components/HomepageFeatures/Nutshell';
import Projects from '../components/HomepageFeatures/WritingSamples';
import ExperienceCareerMilestones from '@site/src/components/HomepageFeatures/ExperienceCareerMilestones';
import HowIHelp from '@site/src/components/HomepageFeatures/HowIHelp';

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
        <Col flex="1 1 70%">
            <div class="intro-text">
              <h5 class="intro-visual-header">
              Your Solution to Complex Technical Challenges
              </h5>
              <p class="intro-text">Transforming Complex Information Into User-Friendly Experiences.</p>
              <h4 class="intro-text">Hi! I'm Patricia McPhee. I'm a highly skilled Senior Technical Writer passionate about optimizing user experiences. Writing is just the tip of the iceberg; I'm also a strategist. I create product documentation that users can navigate effortlessly and believe in the power of clear, intuitive user experiences, incorporating this belief into every project.</h4>    
              <h4 class="intro-text">Over the years, I've showcased my skills in content development, from thorough content audits to mastering tools like Docusaurus and MadCap Flare. Whether I'm refining content for budding tech startups or enhancing platforms for industry titans like Microsoft or GE Healthcare, I prioritize a user-centric approach.</h4>        
              <h4 class="intro-text">I'm a firm believer that impactful content is born from teamwork. My rich experience, from partnering with Oculus's VR experts to Microsoft's Azure and networking professionals, ensures the documentation is comprehensive and resonates with both tech experts and end-users.</h4>    
              <h4 class="intro-text">The tech realm is ever-evolving, and so am I. I bring more than two decades of technical writing experience to the table, but I'm also committed to continuous growth and adaptation. Presently, I'm immersing myself in Conversation Design.</h4>      
            </div>
            <div class="intro-text-button">
              <ConfigProvider
                theme={{
                  token: {
                      colorPrimary: '#a4a359',
                      colorPrimaryHover: '#244651',
                      colorTextBase: '#fff',
                    }
                  }
                }
              >
                <Button type="primary" shape="round" size='large' style={style} href="#projects" >
                        See My Portfolio
                      </Button>
                      <Button type="primary" shape="round" size='large' style={style} href="/resume-functional" >
                        View My Resume
                      </Button>
              </ConfigProvider>
          </div>
          </Col>
          <Col flex="0 1 30%">
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
      <hr />
      <section class="container">
      <div class="intro-cards">
      <h1 class="intro-text"><a name="projects"></a>Portfolio</h1>
      </div>
      <Projects />
      </section>
      
        <hr />
        <Nutshell />
      </main>
    </Layout>
  );
}
