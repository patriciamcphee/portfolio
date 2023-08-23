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
        <Col flex="1 0 700px">
            <div class="intro-text">
              <h5 class="intro-visual-header">
              Hi! I'm Patricia McPhee.
              </h5>
              <p class="intro-text">Sr. Technical Writer | Crafting Technical Content Excellence</p>
              <h4 class="intro-text">Dive deeper into my universe, where precision and narrative meet.</h4>                 
            </div>
            <div class="intro-text-button">
              <ConfigProvider
                theme={{
                  token: {
                      colorPrimary: '#86ae22',
                      colorPrimaryHover: '#0476a8',
                      colorTextBase: '#1890ff',
                    }
                  }
                }
              >
                <Button type="primary" shape="round" size='large' style={style} href="#projects" >
                        Projects
                      </Button>
                      <Button type="primary" shape="round" size='large' style={style} href="/resume-functional" >
                        Resume
                      </Button>
              </ConfigProvider>
          </div>
          </Col>
          <Col flex="0 1 100px">
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
      <TheTechMaestrosSymphony />
      <TheSymphony />
      <hr />
      <Projects />
        <hr />
        <Nutshell />
      </main>
    </Layout>
  );
}
