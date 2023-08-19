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
        <Col flex="1 1 50px">
              <div class="card__image-2">
                <ToolkitSvg />
              </div>  
          </Col>
          <Col flex="1 0 800px">
            <div class="intro-text">
              <p class="intro-text">Toolkit of Excellence</p>
              <h4 class="intro-text">Armed with a unique blend of Health Science and Computer Systems, Patricia wields an extensive toolkit, from impeccable technical writing to adeptness with tools like Markdown, Docusaurus, and Confluence. It's this combination that allows her to navigate the intricate labyrinth of technical documentation with ease and finesse.</h4>                 
            </div>
            
          </Col>

        </Row>
      </div>
    </header>
  );
};