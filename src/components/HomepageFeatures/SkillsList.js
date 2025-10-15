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



export default function SkillsSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
<div class="features-visual-one-col">
  <div class="row">
    <div class="col col--3">
      <div class="intro-text">
        <h6 class="intro-visual-header">
        Skills & Tools
        </h6>
        <h4 class="intro-text">Equipped with Industry's Best Tools</h4>
      </div> 
    </div>
    <div class="col">
      <div class="how-i-can-help">
        <p><span class="list-bold-item">Content & Writing Mastery</span>: My expertise in content design ensures that the content I produce is well-planned, structured, and resonates with the target audience.</p>
        <p><span class="list-bold-item">User Experience & Information Design</span>: My skills in editing and simplification ensure that even complex ideas are presented in an easily understandable format, enhancing the overall user experience.</p>  
                        
      </div>
    </div>
        <div class="col">
        <div class="how-i-can-help">
        <p><span class="list-bold-item">Collaborative Teamwork</span>: My collaborative efforts contribute to creating content and interfaces that are functionally sound and intuitively satisfying for users.</p> 
        <p><span class="list-bold-item">Technical Adaptability & Simplification</span>: With a strong technical background, I can quickly understand and translate intricate technical concepts into accessible language. </p>                         
      </div>
    </div>
  </div>
  </div>

  );
};