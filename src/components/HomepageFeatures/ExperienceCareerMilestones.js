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



export default function ExperienceCareerMilestones() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div class="features-visual-one-col">
  <div class="row">
    <div class="col">
      <div class="intro-text">
              <p class="intro-text">Turning Words into Impact</p>
              <h4 class="intro-text"><ul><li><b>Content Development & Management</b>: I spearheaded content audits for Beyond Identity and Expedia. Took the lead developer role for Beyond Identity's developer doc site.</li>
              <li><b>Technical Writing</b>: Pioneered cross-functional documentation for Oculus/Facebook and redefined legacy documentation for GE Healthcare. Championed UX microcopy.</li>
              <li><b>Collaboration</b>: I've teamed up with product designers, engineers, UX Research, and support teams for Beyond Identity, Expedia, Keyavi, and Microsoft.</li>
              <li><b>Automation & Marketing</b>: Automated content publishing for Extreme Networks' API documentation and crafted marketing campaign e-books for ZPE Systems.</li>
              </ul></h4>                 
            </div>
    </div>
  </div>
      </div>

  );
};