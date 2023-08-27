import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { Radio, Col, Divider, Row, Card, Space, Button, ConfigProvider } from "antd";
import {
  LinkedinFilled
} from '@ant-design/icons';

const style = {
  padding: "6px 20px",
  margin: '0 10px',
  color: '#fff',
};

<LinkedinFilled />


export default function ExperienceCareerMilestones() {
  const {siteConfig} = useDocusaurusContext();  
  return (
<div class="features-visual-one-col">
  <div class="row">
    <div class="col col--4">
      <div class="intro-text">
        <h6 class="intro-visual-header">
       Work Experience
        </h6>
        <h4 class="intro-text">A Journey Through Diverse Industries.</h4>
        <div class="learn-more-button">
        <ConfigProvider
        
          theme={{
            token: {
                colorPrimary: '#6e815e',
                colorPrimaryHover: '#244651',
                colorTextBase: '#fff',
              }
            }
          }
        >
          <Button type="primary" shape="round" size='large' style={style} href="/resume-functional">
            Learn more &#062;
          </Button>
        </ConfigProvider>
        </div>
            

        <h3 class="intro-text"><a href="https://www.linkedin.com/in/patriciamcphee/"><LinkedinFilled />  LinkedIn Profile</a></h3>
        
      </div> 
    </div>

        <div class="col col--8">
        <div class="how-i-can-help">
        <p><b>Content Development & Management</b>: I spearheaded content audits for Beyond Identity and Expedia. Took the lead developer role for Beyond Identity's developer doc site.</p>                         
      </div>
    </div>
  </div>
  </div>
  );
};