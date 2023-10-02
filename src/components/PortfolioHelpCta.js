import React from 'react';
import { Col, Row, Button, ConfigProvider, Space, Card } from 'antd';
import CtaImage from '@site/static/img/cta-image.png';

const style = {
  textAlign: 'center',
  backgroundColor: '#fff',
  color: '#333',
  padding: '30px',
  marginTop: '30px',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const PortfolioHelpCta = () => (
  <>
    <div style={style}>
    <div class="container">
      <div class="row">
        <div class="col col--6">
          <div class="col-demo">
          <h2>Ready to dive in deeper and refine your portfolio?</h2>
          <h3>Or, are you beginning this exiting journey?</h3>
          <p>If so, feel free to reach out for more tailored advice and assistance.</p>
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
        <div class="col col--5 col--offset-1">
          <div class="col-demo">
            <img src={CtaImage} id="diagrams" alt="Example banner" />
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
);
export default PortfolioHelpCta;