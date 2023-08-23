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



export default function TheTechMaestrosSymphony() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div class="features-visual-one-col">
  <div class="row">
    <div class="col">
      <div class="intro-text">
              <p class="intro-text">More Than Just Words</p>
              <h4 class="intro-text">I'm not your typical technical writer; I'm a storyteller for the digital age. In my role as The Analyzer, I examine every facet of content to make sure each word hits the mark. As The Innovator, I shape digital experiences that capture attention. As The Collaborative Spirit, I unite teams to produce content that genuinely connects. As The Efficiency Expert, I streamline workflows to ensure everything runs as smoothly as the finished product. And as The Multimedia Maven, I know that sometimes stories extend beyond mere words.</h4>                 
            </div>
    </div>
  </div>
      </div>

  );
};