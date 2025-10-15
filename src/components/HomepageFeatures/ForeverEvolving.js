import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { Col, Divider, Row, Card, Space, Button, ConfigProvider } from "antd";
const style = {
  padding: "6px 20px",
  color: '#fff',
};

import ForeverEvolvingSvg from '../../../static/img/forever-evolving.svg';



export default function ForeverEvolving() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div class="features-visual-two-col">
        <Row wrap={true}>
        <Col flex="1 1 800px">
            <div class="intro-text">
              <p>Pushing Boundaries, Pursuing Excellence</p>
              <h4>My commitment isn't confined to my current achievements. Being a lifelong learner, I'm ceaselessly broadening my horizons to stay ahead in the industry. My recent foray into Conversation Design stands testament to my never-ending quest for knowledge and improvement.</h4>                 
            </div>
           
          </Col>
          <Col flex="1 0 50px">
              <div class="card__image-2">
                  <ForeverEvolvingSvg />
              </div>  
          </Col>
        </Row>
      </div>
    </header>
  );
};