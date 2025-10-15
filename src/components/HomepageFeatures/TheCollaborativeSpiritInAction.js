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
      <div class="features-visual-reverse">
        <Row wrap={false}>
        <Col flex="0 1 400px">
              <div className="intro-image">

              </div>  
          </Col>
        <Col flex="1 0 650px">
            <div class="intro-text">
              <p class="intro-text">The Collaborative Spirit in Action</p>
              <h4 class="intro-text">Patricia believes the best content is born from synergy. Her extensive experience collaborating with cross-functional teams, from Oculus's VR specialists to Microsoft's core networking teams, assures that your developer documentation will be comprehensive and resonant, bridging the gap between tech experts and end-users.</h4>                 
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

        </Row>
      </div>
    </header>
  );
};