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



export default function EducationCourses() {
  const {siteConfig} = useDocusaurusContext();
  return (
<div class="features-visual-one-col">
<div class="row">
  <div class="col">
    <div class="intro-text">
        <h6 class="intro-visual-header">
        Courses
        </h6>
        <div class="how-i-can-help">
        <h4 class="intro-text">Always Evolving.</h4>  
        <h3 class="intro-text">The tech realm is ever-evolving, and so am I. Presently, I'm immersing myself in Conversation Design.</h3> 
         <ul>
          <li class="homepage-no-style"><b>Conversation Design for Chatbots</b><br />UX Content Collective</li>
          <li class="homepage-no-style"><b>Conversation Design</b><br />Conversation Design Institute</li>
          <li class="homepage-no-style"><b>Designing Conversations with Voiceflow</b><br />Conversation Design Institute</li>
          <li class="homepage-no-style"><b>Front-end Web Development</b><br />CareerFoundry<br />Date issued: March 2022</li>
          </ul>             
      </div>
      </div>
  </div>
  <div class="col">
  <div class="intro-text">
        <h6 class="intro-visual-header">
        Education
        </h6>
        <h4 class="intro-text">Foundational Learning.</h4>
        <h3 class="intro-text">Blending a background in Health Science and Computer Systems, my knowledge is extensive.</h3>
        <ul>
          <li class="homepage-no-style"><b>Bachelor's in Health Science</b><br />Environmental Health and Public Health <br />Kaplan University - Remote<br />May 2012</li>
          <li class="homepage-no-style"><b>Associate's of Applied Science</b><br />Computer Science and Information Technology<br />DeVry University - Denver, CO<br />April 2001</li>

          </ul> 
      </div>
  </div>
  <div class="col">
    <div class="intro-text">
        <h6 class="intro-visual-header">
        Skills & Tools
        </h6>
        <h4 class="intro-text">Where Skill Meets Application.</h4>
        <h3 class="intro-text">Equipped to navigate the complexities of technical documentation with skill and agility.</h3>
        <ul>
          <li class="homepage-no-style"><b>Technical Writing</b>: Expert</li>
          <li class="homepage-no-style"><b>Content Design</b>: 80%</li>
          <li class="homepage-no-style"><b>Figma</b>: 80%</li>
          <li class="homepage-no-style"><b>Docusaurus</b>: 95%</li>
          <li class="homepage-no-style"><b>MadCap Flare</b>: 90%</li>
          <li class="homepage-no-style"><b>JavaScript/Node.js</b>: 80%</li>
          <li class="homepage-no-style"><b>Markdown</b>: 90%</li>
          <li class="homepage-no-style"><b>Git/GitHub</b>: 90%</li>
          </ul> 
      </div> 
  </div>
</div>
  </div>

  );
};