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
              <p>Ever-Evolving, Forever Adapting</p>
              <h4>Patricia's dedication goes beyond her current accolades. As a continuous learner, she's always expanding her horizons, ensuring she remains at the vanguard of her field. Her current exploration into Conversation Design is a testament to her relentless pursuit of excellence.</h4>                 
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