import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { Col, Divider, Row, Card, Space, Button, ConfigProvider } from "antd";
const style = {
  padding: "6px 20px",
  margin: '0 10px',
  color: '#fff',
};


export default function Projects() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section class="container">
            <h3 class="projects-header">As a seasoned technical writer passionate about user-centric content development, I'm on a mission to create clear, efficient, and impactful communications.</h3>           

      <div class="intro-cards">

  <div class="row">
    <div class="col col--4">
      <div class="col-demo">
      <div class="card-demo">
        <a href="/content-strategy-dev-doc-redesign">
        <div class="card intro-card shadow--md">
          <div class="card__header">
            <h3>Content Strategy</h3>           
          </div>
          <div class="card__body">
          <p><strong>Developer Doc Site Redesign</strong></p>
            <p>In today's digital age, content is king. Quality content is crucial for establishing a brand's authority and for remaining competitive. 
            </p>
          </div>
        </div>
        </a>
      </div>
      </div>
    </div>
    <div class="col col--4">
      <div class="col-demo">
      <div class="card-demo">
        <a href="/api/">
        <div class="card intro-card shadow--md">
          <div class="card__header">
            <h3>API Documentation</h3>
          </div>
          <div class="card__body">
           <p><strong>Movie App API</strong></p>
            <p>This API lets users access information about different B-movies, such as directors, actors, genre, and year of release. 
            </p>
          </div>
        </div>
        </a>
      </div>
      </div>
    </div>
    <div class="col col--4">
      <div class="col-demo">
      <div class="card-demo">
        <a href="/fitfuel-personalized-workout-plan">
        <div class="card intro-card shadow--md">
          <div class="card__header">
            <h3>Conversation Design</h3>
          </div>
          <div class="card__body">
            <p><strong>Certification Project</strong></p>
            <p>Sarah wants to make lifestyle changes in retirement. She considers incorporating tailored exercises into her daily routine.  
            </p>
          </div>
        </div>
        </a>
      </div>
      </div>
    </div>
  </div>
</div>
<div class="container intro-cards">
  <div class="row">
    <div class="col col--4">
      <div class="col-demo">
      <div class="card-demo">
        <a href="/ux-writing/errors-warnings-confirmations">
        <div class="card intro-card shadow--md">
          <div class="card__header">
            <h3>UX Writing</h3>           
          </div>
          <div class="card__body">
          <p><strong>Error Messages</strong></p>
            <p>Effective error message UX design explains why it occurred and then provides the next steps for users to fix the problem.
            </p>
          </div>
        </div>
        </a>
      </div>
      </div>
    </div>
    <div class="col col--4">
      <div class="col-demo">
      <div class="card-demo">
        <a href="voiceover-scripts/tech-software-training">
        <div class="card intro-card shadow--md">
          <div class="card__header">
            <h3>Copywriting</h3>
          </div>
          <div class="card__body">
           <p><strong>Video How-to Script</strong></p>
            <p>A voiceover script is just as important as a video because it sets the tone. The audience will hear the words instead of reading them. 
            </p>
          </div>
        </div>
        </a>
      </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};



