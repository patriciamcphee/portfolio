import * as React from 'react';
import { Button, Divider, message, Steps, theme, Col, Row, ConfigProvider, Alert, Space, Result } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { SmileOutlined } from '@ant-design/icons';

const steps = [
  {
    title: 'Install the tools',
    content: (
      <>
      
        <p>Before you can contribute to the SCOOBY documentation, you'll need to install and set up the tools.</p>
            <ol>
              <li><a href="https://nodejs.org/en/download/">NodeJS</a><p></p></li>
              <li>Git client<p></p>
                  <ul>
                      <li><a href="https://git-scm.com/download/win">Windows</a><br /></li>
                      <li><a href="https://git-scm.com/download/mac">macOS</a>
                      <p>For macOS users, you can also install Git using <code>xcode-select --install</code> from the terminal.</p></li>
                    </ul>
              </li><p></p>
              <li><a href="ttps://code.visualstudio.com/">Visual Studio Code (VS Code)</a><p>You can use Atom, but these instructions are VS Code-specific.</p>  
              <p></p>

              </li><p></p>
              <li>Yarn package manager <p>You'll use the <code>yarn</code> and <code>yarn start</code> when you work locally. </p>
              <p>
                <pre><code>npm install --global yarn</code></pre>
              </p>
              <p>If using macOS, you may have to authorize the global installation of packages. To do this you can use the sudo command:
              
                <pre>
                  <code>sudo npm install --global yarn</code>
                </pre>
                
                </p>
              </li>
            </ol>
      </>
    ),
  },
  {
    title: 'Establish your workspace',
    content: (
      <>
        <p>If this is your first time downloading a GitHub repository, it's crucial to establish a workspace folder to store the repo.</p> <p>In this step, you'll create a new folder as your working directory, for example, <b>github</b>. You can create the folder anywhere on your system, including in your <b>Documents</b> directory for Windows users.</p>

        <ol>
          <li>From your home directory, open your terminal.
            
          <ConfigProvider
          theme={{
              components: {
                Alert: {
                  colorInfo: '#0476a8',
                },
              },
            }
          }
        >
          <Space
    direction="vertical"
    style={{
      width: '100%',
      marginTop: 12,
      marginBottom: 12,
    }}
  >
         
    <Alert message="Ensure that you are in your home directory." type="info" showIcon />

  </Space>
  </ConfigProvider>

          </li>
          <li>Create a new folder called <b>workspace</b>.
          <p><pre><code>mkdir workspace</code></pre></p>
          </li>
          <li>Navigate to your new workspace folder.
            <p><pre><code>cd workspace</code></pre></p>
          </li>
        </ol>

        <Row justify="space-between">
                <Col span={1} offset={1}><p><CheckCircleFilled style={{ fontSize: '24px', color: '#9ecd28' }} /></p></Col>
                <Col span={22}><p>Up to this point, you now have your tools installed and your working directory established. Keep going. You're almost done!</p></Col>
              </Row>

      </>
    ),
  },
  {
    title: 'Set up the GitHub repo locally',
    content: (
      <>

      <ol>
        <li>Open Git Bash to the folder where you're cloning the doc site repo (this should be workspace if macOS).</li><p></p>
        <li>Clone the docs-next repo.
          <pre><code>https://github.io/scooby/docs-next.git</code></pre>

        </li>
        <li>Change directories to docs-next.
        <pre><code>cd docs-next</code></pre>
          </li>

      </ol>


<Row justify="space-between">
                <Col span={1} offset={1}><p><CheckCircleFilled style={{ fontSize: '24px', color: '#9ecd28' }} /></p></Col>
                <Col span={22}><p>You now have the tools installed, your workspace or working directory set up, and the docs-next repo cloned. You're done!</p></Col>
              </Row>
            

      </>
    ),
  },

];


const App = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = React.useState(0);
  const next = () => {
    setCurrent((current) => current + 1);
  };
  const prev = () => {
    setCurrent((current) => current - 1);
  };
  const handleReset = () => {
    setCurrent(0);
  };
  const handleResult = () => {
    setCurrent(current);
    <>
    <div>
    <Result
            icon={<SmileOutlined />}
            title="Great, we have done all the operations!"
            extra={<Button type="text" onClick={handleReset}>Reset</Button>}
          />
          </div>
    </>
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    color: token.colorText,
    borderRadius: token.borderRadiusLG,
    border: `0px dashed ${token.colorBorder}`,
    marginTop: 24,
    marginLeft: 32,
  };
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };






  return (
    <>
      <ConfigProvider
          theme={{
            token: {
                colorPrimary: '#9ecd28',
                colorPrimaryHover: '#3688ad',
                colorSuccessText: '#8eb924',
                colorBgContainer: '#ffffff',
              },
              
            }
          }
        >
      <Steps size="small" onChange={onChange} current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      
      <hr />
      <div
        style={{
          marginBottom: 36,
          textAlign: 'right',
        }}
      >
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => handleResult()}>
          Finish  
          </Button>
        )}

      </div>
      

      </ConfigProvider>
    </>
  );
};
export default App;