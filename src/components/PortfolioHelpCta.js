import React from 'react';
import { Col, Row, Button, ConfigProvider, Space, Card } from 'antd';

const style = {
  padding: "6px 20px",
  textAlign: 'center',
  backgroundColor: '#5B495D',
  color: '#ccc',
  padding: '40px',
  borderRadius: '6px',

};

const PortfolioHelpCta = () => (
  <>
    <div style={style}>
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
  </>
);
export default PortfolioHelpCta;