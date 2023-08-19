import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { Col, Divider, Row, Card, Space, Button, ConfigProvider } from "antd";
const style = {
  padding: "6px 20px",
  color: '#fff',
};

import Grid from '../../../static/img/Grid.svg';



export default function TheAnalyticalInnovator() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div class="features-visual">
        <Row wrap={false}>
        <Col flex="1 0 550px">
            <div class="intro-text">
              <p class="intro-text">The Analytical Innovator</p>
              <h4 class="intro-text">Patricia has consistently demonstrated her prowess in content development through deep-dive content audits and her aptitude for tools like Docusaurus and MadCap Flare. Whether streamlining content for Beyond Identity or optimizing platforms for giants like GE Healthcare, Patricia's innovative spirit ensures that your developer doc site will be both user-centric and state-of-the-art.</h4>                 
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
                        Button to somewhere?
                      </Button>
              </ConfigProvider>
          </div>
          </Col>
          <Col flex="0 1 400px">
              <div className="intro-image">

              </div>  
          </Col>
        </Row>
      </div>
    </header>
  );
};