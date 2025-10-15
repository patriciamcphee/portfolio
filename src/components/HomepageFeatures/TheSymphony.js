import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Card, Space, Row, Col } from 'antd';

import AnalyticalInnovatorSvg from '@site/static/img/analytical-innovator.svg';
import CollaborativeSpiritSvg from '@site/static/img/collaborative-spirit.svg';
import LifelongLearnerSvg from '@site/static/img/life-long-learner.svg';
import ToolkitSvg from '@site/static/img/toolkit.svg';




const TheSymphony = () => (
<section>
<div class="features-visual-3-col">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card-demo">
          <div class="card">
          <div class="card__image">
              <AnalyticalInnovatorSvg />
            </div>
            <div class="card__header">
              <h3>Analytical and Innovative</h3>
            </div>
            <div class="card__body">
              <p>
              Over the years, I've showcased my skills in content development, from thorough content audits to mastering tools like Docusaurus and MadCap Flare. Whether I'm refining content for budding tech startups or enhancing platforms for industry titans like GE Healthcare, I prioritize a user-centric approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card-demo">
          <div class="card">
          <div class="card__image">
              <CollaborativeSpiritSvg />
            </div>
            <div class="card__header">
              <h3>Collaborating to Create</h3>
            </div>
            <div class="card__body">
              <p>
              I'm a firm believer that impactful content is born from teamwork. My rich experience, from partnering with Oculus's VR experts to Microsoft's Azure and networking professionals, ensures the documentation is comprehensive and resonates with both tech experts and end-users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</div>
<div class="features-visual-3-col">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card-demo">
          <div class="card">
          <div class="card__image">
              <LifelongLearnerSvg />
            </div>
            <div class="card__header">
              <h3>Always Adapting, Always Learning</h3>
            </div>
            <div class="card__body">
              <p>
              The tech realm is ever-evolving, and so am I. I bring more than two decades of technical writing experience to the table, but I'm also committed to continuous growth and adaptation. Presently, I'm immersing myself in Conversation Design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card-demo">
          <div class="card">
          <div class="card__image svg-image">
              <ToolkitSvg />
            </div>
            <div class="card__header">
              <h3>A Versatile Toolkit for Excellence</h3>
            </div>
            <div class="card__body">
              <p>
              Blending a background in Health Science and Computer Systems, my toolkit is extensive. It ranges from flawless technical writing to skillfulness with tools that allow me to navigate the complexities of technical documentation effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</div>
</section>


);
export default TheSymphony;