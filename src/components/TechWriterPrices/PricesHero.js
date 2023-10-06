import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


import { Col, Divider, Row, Card, Space, Button, ConfigProvider } from "antd";

const priceCard = {
  textAlign: 'center',
  border: '1px solid #ccc',
  borderRadius: '15px',
  marginBottom: '4px',
  padding: '2px',
  marginTop: '10px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};

const PricesPageHeader = () => (
  <>
    <div className={clsx('container', styles.container)}>
      <div className={clsx('row', styles.priceRowStyle)}>
        <div class="col col--6">
          <div class="col-demo">
          <h2 className="pageTitle">Ready to dive in deeper and refine your portfolio?</h2>
          <p className={styles.bodyText}>If so, feel free to reach out for more tailored advice and assistance.</p>
          <ConfigProvider
            theme={{
              token: {
                  colorPrimary: '#A4A359',
                        colorPrimaryHover: '#244651',
                        colorTextBase: '#fff',
                }
              }
            }
          >
            <Button type="primary" shape="round" size='medium' href="/contact" >
                    <b>Contact Me!</b>
                  </Button>
          </ConfigProvider>
          </div>
        </div>
        
      </div>

    <div className={clsx('row', styles.priceRowStyle)}>
    <div class="col col--4">
      <div class="col-demo">
      <h2>Project Priced to Perfection: Fixed Rates for Assured Excellence</h2>
      <p className={clsx(styles.pageTitle)}>Steer clear of fiscal uncertainties with our transparent, per-project pricing. Here’s a snapshot to help you anticipate your investment in definitive projects:</p>
      </div>
    </div>   

    <div class="col">
      <div class="col-demo">
        <Card class="card" style={priceCard}>
          <h5><b>User Guide Extravaganza (60-80 Pages)</b></h5>
          <p>$10,500 - $30,000</p>
        </Card>
      </div>
    </div>
    <div class="col">
      <div class="col-demo">
        <Card class="card" style={priceCard}>
        <h5><b>Online Help Haven (30-40 Topics)</b></h5>
          <p>$6,000 - $20,000</p>
        </Card>
      </div>
    </div>
    <div class="col">
      <div class="col-demo">
        <Card class="card" style={priceCard}>
        <h5><b>Whitepaper Wizardry (Tech Insight)</b></h5>
          <p>$5,000 - $15,000</p>
        </Card>
      </div>
    </div>
    <div class="col">
      <div class="col-demo">
        <Card class="card" style={priceCard}>
        <h5><b>UX Writing Wonders (10 Screens)</b></h5>
          <p>$800 - $3,000</p>
        </Card>
      </div>
    </div>
  </div>
  </div>

  <div className={clsx('container', styles.sectionContainer)}>
  <div className={clsx('row', styles.priceRowStyle)}>
        <div className={styles.card}>
            <h4>What is a Frontend Develoment?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam porro similique aliquid debitis ipsam soluta dolorum ipsa! Voluptate, suscipit iure.</p>
        </div>
        <div className={styles.card}>
            <h4>What is a Frontend Develoment?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam porro similique aliquid debitis ipsam soluta dolorum ipsa! Voluptate, suscipit iure.</p>
        </div>
    </div>
</div>

  </>
);
export default PricesPageHeader;
