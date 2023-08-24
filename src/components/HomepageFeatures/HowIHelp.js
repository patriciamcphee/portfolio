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



export default function HowIHelp() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div class="features-visual-one-col">
  <div class="row">
    <div class="col">
      <div class="intro-text">
              <p class="intro-text">How I Help</p>
              <h4 class="intro-text">\
              </h4>                 
            </div>
    </div>
  </div>
      </div>

  );
};