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
              <p class="intro-text">Passionate. Skilled. Your Go-To Technical Writer.</p>
              <h4 class="intro-text">I'm a highly skilled Senior Technical Writer passionate about optimizing user experiences. Writing is just the tip of the iceberg; I'm also a strategist. I create product documentation that users can navigate effortlessly and believe in the power of clear, intuitive user experiences, incorporating this belief into every project.</h4>                 
            </div>
    </div>
  </div>
      </div>

  );
};