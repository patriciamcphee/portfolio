import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Card, Space, Row, Col } from 'antd';

import AnalyticalInnovatorSvg from '@site/static/img/analytical-innovator.svg';
import CollaborativeSpiritSvg from '@site/static/img/collaborative-spirit.svg';
import LifelongLearnerSvg from '@site/static/img/life-long-learner.svg';





const TheSymphony = () => (

  <div class="features-visual-3-col">
  <div class="row">
    <div class="col col--4">
      <div class="col-demo">
<div class="card-demo">
  <div class="card">
  <div class="card__image">
      <AnalyticalInnovatorSvg />
    </div>
    <div class="card__header">
      <h3>The Analytical Innovator</h3>
    </div>
    <div class="card__body">
      <p>
      Patricia has consistently demonstrated her prowess in content development through deep-dive content audits and her aptitude for tools like Docusaurus and MadCap Flare. Whether streamlining content for tech startups or optimizing platforms for giants like GE Healthcare, her innovative spirit ensures that your doc site will be user-centric.
      </p>
    </div>
  </div>
</div>
      </div>
    </div>
    <div class="col col--4">
      <div class="col-demo">
<div class="card-demo">
  <div class="card">
  <div class="card__image">
      <CollaborativeSpiritSvg />
    </div>
    <div class="card__header">
      <h3>The Collaborative Spirit in Action</h3>
    </div>
    <div class="card__body">
      <p>
      Patricia believes the best content is born from synergy. Her extensive experience collaborating with cross-functional teams, from Oculus's VR specialists to Microsoft's core networking teams, assures that your documentation will be comprehensive and resonant, bridging the gap between tech experts and end-users.
      </p>
    </div>
  </div>
</div>
      </div>
    </div>
    <div class="col col--4">
      <div class="col-demo">
<div class="card-demo">
  <div class="card">
  <div class="card__image">
      <LifelongLearnerSvg />
    </div>
    <div class="card__header">
      <h3>The Lifelong Learner</h3>
    </div>
    <div class="card__body">
      <p>
      The tech world is in perpetual motion, and Patricia moves in tandem. Not only does she bring over two decades of technical writing expertise, but her dedication to continuous learning ensures that she's always on the cutting edge. Currently, she's diving deep into Conversation Design, reflecting her commitment to adapting and evolving.
      </p>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>  
</div>

);
export default TheSymphony;