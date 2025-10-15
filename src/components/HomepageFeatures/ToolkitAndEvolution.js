import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { Col, Divider, Row, Card, Space, Button, ConfigProvider } from "antd";
const style = {
  padding: "6px 20px",
  color: '#fff',
};

import ToolkitSvg from '../../../static/img/toolkit.svg';



export default function ToolkitAndEvolution() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div class="features-visual-two-col">
        <Row wrap={true}>
        <Col flex="1 1 100px">
              <div class="card__image-2">
                <ToolkitSvg />
              </div>  
          </Col>
          <Col flex="1 0 700px">
            <div class="intro-text">
              <p class="intro-text">A Versatile Toolkit for Excellence</p>
              <h4 class="intro-text">Blending a background in Health Science and Computer Systems, my toolkit is extensive. It ranges from flawless technical writing to skillfulness with tools like Markdown, Docusaurus, and Confluence. This mix of abilities allows me to navigate the complexities of technical documentation effortlessly.</h4>                 
            </div>
            
          </Col>

        </Row>
      </div>
    </header>
  );
};