import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Col, Divider, Row, Card, Space, Button, ConfigProvider } from "antd";


const style = {
  padding: "6px 20px",
  color: '#fff',

};

export default function YouNeedATechWriterIf() {
  const {siteConfig} = useDocusaurusContext();
  return (
<div class="container-fluid features-visual-one-col features-visual-one-col-top-margin">
<div class="row">
    <div class="col col--3">
    <div class="intro-text">
        <h6 class="intro-visual-header">
        Unsung Heros
        </h6>
        <h4 class="intro-text">You need a technical writer if you...</h4>
        
      </div> 
    </div>
    <div class="col">
      <div class="col--demo">
        <div class="container docs-2col-container">
  <div class="row row--no-gutters">
    <div class="col col--1 docs-2col-number1-background">
      <div class="col-demo"></div>
    </div>
    <div class="col col--3 docs-h3-2col">
      <div class="col-demo"><h3>Develop complex products or services.</h3></div>
    </div>
    <div class="col">
      <div class="col-demo docs-h3-2col-content">Technical writers can create clear, concise documentation to help users use your products effectively.
      </div>
    </div>
  </div>
</div>

<div class="container docs-2col-container">
  <div class="row row--no-gutters">
    <div class="col col--1 docs-2col-number2-background">
      <div class="col-demo"></div>
    </div>
    <div class="col col--3 docs-h3-2col">
      <div class="col-demo"><h3>Have a diverse audience.</h3></div>
    </div>
    <div class="col">
      <div class="col-demo docs-h3-2col-content">They can tailor documentation to meet the needs of the different users with various technical backgrounds.</div>
    </div>
  </div>
</div>

<div class="container docs-2col-container">
  <div class="row row--no-gutters">
    <div class="col col--1 docs-2col-number3-background">
      <div class="col-demo"></div>
    </div>
    <div class="col col--3 docs-h3-2col">
      <div class="col-demo"><h3>Need to comply with industry regulations.</h3></div>
    </div>
    <div class="col">
      <div class="col-demo docs-h3-2col-content">They ensure that your documentation meets all applicable standards and regulations.</div>
    </div>
  </div>
</div>

<div class="container docs-2col-container">
  <div class="row row--no-gutters">
    <div class="col col--1 docs-2col-number4-background">
      <div class="col-demo"></div>
    </div>
    <div class="col col--3 docs-h3-2col">
      <div class="col-demo"><h3>Need to reduce customer support costs.</h3></div>
    </div>
    <div class="col">
      <div class="col-demo docs-h3-2col-content">Well-written documentation enables users to solve problems independently, reducing the number of support tickets received.</div>
    </div>
  </div>
</div>         

<div class="container docs-2col-container">
  <div class="row row--no-gutters">
    <div class="col col--1 docs-2col-number5-background">
      <div class="col-demo"></div>
    </div>
    <div class="col col--3">
      <div class="col-demo docs-h3-2col"><h3>Need to improve your company's reputation.</h3></div>
    </div>
    <div class="col">
      <div class="col-demo docs-h3-2col-content"> High-quality technical documentation showcases your commitment to providing excellent customer support and establishing a professional image for your company.</div>
    </div>
  </div>
</div>

<div class="container docs-2col-container-cta">
  <div class="row row--no-gutters">
    <div class="col">
      <div class="col-demo">
      <h3>Here are some situations where you might need a technical writer:</h3>
          <ul class="other-things-to-consider">
            <li>Developing a new software application and creating user manuals, API documentation, and other supporting documentation.</li>
            <li>Manufacturing a new medical device and creating instructions for use, training materials, and regulatory submissions.</li>
            <li>Onboarding new employees and creating training materials on your company's products, services, and processes.</li>
            <li>Providing customer support and creating documentation to help customers troubleshoot problems and maximize the value of your offerings.</li>
          </ul>
      </div>
    </div>
  </div>
</div>

<div class="container docs-2col-container-cta">
  <div class="row row--no-gutters">
    <div class="col">
      <div class="col-demo"><h3>If you're unsure whether or not you need a technical writer, <a href="/contact">reach out for a free consultation</a>. I can assess your needs and help you develop a documentation plan that meets your specific goals.</h3>
      <div class="center-button" style={style}>
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
          <Button type="primary" shape="round" size='large'  href="/contact">
          Get a Free Consultation!
          </Button>
        </ConfigProvider>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
    
  </div>
    
  </div>

  );
};