import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import Hero from '../../static/img/flat-sketch.svg';


import { Col, Divider, Row, Card, Space, Button, ConfigProvider } from "antd";
const style = {
  padding: "6px 20px",
  color: '#fff',
};


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div class="intro-visual">
        <Row wrap={false}>
        <Col flex="1 0 750px">
            <div class="intro-text">
              <h5 class="intro-visual-header">
              Hi! I'm Patricia.
              </h5>
              <p class="intro-text"> I'm a Technical Writer / Content Designer based in Redmond, WA.
              </p>
              <h4 class="intro-text">I craft meaningful content experiences to help users achieve more with the software products and technologies they use.</h4>                 
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
                <Button type="primary" shape="round" size='large' style={style} href="#" >
                        View My Resume!
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
