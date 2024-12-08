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
          Explore Further &#062;
          </Button>
        </ConfigProvider>
        </div>
            

        <h3 class="intro-text"><a href="https://www.linkedin.com/in/patriciamcphee/"><LinkedinFilled />  LinkedIn Profile</a></h3>
        
      </div> 
    </div>

        <div class="col col--8">
        <div class="how-i-can-help">
        
        <div class="Yearly-timeline">
            <div class="timeline">
                <a href="" class="timeline-content">
                    <div class="timeline-icon"><i class="fa fa-instagram"></i></div>
                    <h3 class="title">Software</h3>
                    <p class="description">
                      <ul>
                        <li><span class="list-bold-item-plain">Cigna</span> <br /><i>Technical Content Manager</i>, REMOTE</li>
                        <li><span class="list-bold-item-plain">Beyond Identity</span> <br /><i>Sr. Technical Writer</i>, REMOTE</li>
                        <li><span class="list-bold-item-plain">Expedia Group</span> <br /><i>Contract Content Designer</i>, REMOTE</li>
                        <li><span class="list-bold-item-plain">Keyavi Data</span> <br /><i>Sr. Technical Writer</i>, REMOTE</li>
                        <li><span class="list-bold-item-plain">Extreme Networks</span> <br /><i>Contract Technical Writer</i>, REMOTE</li>
                        <li><span class="list-bold-item-plain">Microsoft</span> <br /><i>Technical Writer II</i>, REDMOND WA<br /><i>Contract Technical Writer</i>, REMOTE</li>
                        <li><span class="list-bold-item-plain">LivePerson</span> <br /><i>Technical Writer II</i>, SEATTLE WA</li>    
                        <li><span class="list-bold-item-plain">GE Healthcare</span><br /><i>Technical Writer</i>, SEATTLE WA</li>  
                        <li><span class="list-bold-item-plain">Sybase/SAP</span> <br /><i>Contract Technical Writer</i>, BROOMFIELD CO</li>
                      </ul>
                  </p>
                </a>
            </div>
            <div class="timeline">
                <a href="" class="timeline-content">
                    <div class="timeline-icon"><i class="fa fa-twitter"></i></div>    
                    <h3 class="title">Computer Hardware</h3>
                    <p class="description">
                        <ul>
                        <li><span class="list-bold-item-plain">Extreme Networks</span> <br /><i>Contract Technical Writer</i>, REMOTE</li>
                        <li><span class="list-bold-item-plain">ZPE Systems</span> <br /><i>Contract Copywriter</i>, REMOTE</li> 
                        <li><span class="list-bold-item-plain">Pillar Data (an Oracle company)</span> <br /><i>Contract Technical Writer</i>, LONGMONT CO</li>
                        <li><span class="list-bold-item-plain">LSI Logic</span> <br /><i>Contract Technical Writer</i>, BOULDER CO</li>                                 
                        </ul>
                    </p>
                </a>
            </div>
            <div class="timeline">
                <a href="" class="timeline-content">
                    <div class="timeline-icon"><i class="fa fa-facebook"></i></div>    
                    <h3 class="title">Healthcare</h3>
                    <p class="description">
                        <ul>
                        <li><span class="list-bold-item-plain">GE Healthcare</span><br /><i>Technical Writer</i>, SEATTLE WA</li>
                        <li><span class="list-bold-item-plain">GHX</span><br /><i>Contract Technical Writer</i>, LOUISVILLE CO</li>
                        <li><span class="list-bold-item-plain"><a href="https://www.medtronic.com/covidien/en-us/products.html">Covidien</a> </span>(Medtronic)<br /><i> Contract Technical Writer</i>, BOULDER CO</li>                                    
                        </ul>
                    </p>
                </a>
            </div>
            <div class="timeline">
                <a href="" class="timeline-content">
                    <div class="timeline-icon"><i class="fa fa-linkedin"></i></div>    
                    <h3 class="title">Manufacturing</h3>
                    <p class="description">
                        <ul>
                        <li><span class="list-bold-item-plain">Oculus AR/VR</span> <br /><i>Contract Technical Writer</i>, REDMOND WA</li>
                        <li><span class="list-bold-item-plain"><a href="https://www.medtronic.com/covidien/en-us/products.html">Covidien</a> </span>(Medtronic)<br /><i> Contract Technical Writer</i>, BOULDER CO</li>                                    
                        </ul>
                    </p>
                </a>
            </div>
            <div class="timeline">
                <a href="" class="timeline-content">
                    <div class="timeline-icon"><i class="fa fa-linkedin"></i></div>    
                    <h3 class="title">Retail</h3>
                    <p class="description">
                        <ul>
                        <li><span class="list-bold-item-plain">Amazon</span><br /><i>Technical Writer II</i>, SEATTLE WA</li>      
                        <li><span class="list-bold-item-plain">Sports Authority</span><br /><i>Contract Technical Writer</i>, DENVER CO</li>                                                           
                        </ul>
                    </p>
                </a>
            </div>
            <div class="timeline">
                <a href="" class="timeline-content">
                    <div class="timeline-icon"><i class="fa fa-linkedin"></i></div>    
                    <h3 class="title">Telecommunications</h3>
                    <p class="description">

                        <ul>
                        <li><span class="list-bold-item-plain">Charter Communications</span><br /><i>Contract Technical Writer</i>, DENVER CO</li>
                        <li><span class="list-bold-item-plain">Level 3 Communications</span><br /><i>Contract Technical Writer</i>, DENVER CO</li>  
                        <li><span class="list-bold-item-plain">AT&T Broadband</span><br /><i>Contract Technical Writer</i>, DENVER CO</li>                                                              
                        </ul>
                    </p>
                </a>
            </div>
        </div>                       
      </div>
    </div>
  </div>
  </div>
  );
};