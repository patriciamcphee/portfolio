import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Oops from '../../static/img/oops-404.svg';
import { Button, Space, ConfigProvider } from 'antd';
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">

          <div className="row">

            <div className="col col--6 col--offset-3">
            <p class="not-found-header">
            </p>
              <h1 className="hero__title not-found">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  Page Not Found
                </Translate>
              </h1>
              
              <p className='not-found'>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page">
                  The link you clicked may be broken or the page may have been removed.
                </Translate>
              </p>
              
              <p>
              <div class="intro-text-button">
              
        <ConfigProvider
    theme={{
      token: {
          colorPrimary: '#9ecd28',
          colorPrimaryHover: '#046b99',
        }
      }
    }
  >
    <Space wrap>
    <Button type="primary" shape="round" size='large' href="/portfolio/" >
            Go Home!
          </Button>
    <Button type="primary" shape="round" size='large' href="mailto:hi@patriciamcphee.com?subject=Page not found error" >
            Report error?
          </Button>
          </Space>
  </ConfigProvider>
  
  </div>
              </p>
            </div>
                      </div>
          
                     
          
        </main>
      </Layout>
    </>
  );
}
