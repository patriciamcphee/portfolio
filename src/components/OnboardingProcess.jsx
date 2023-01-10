import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const steps = [
  {
    label: 'Install the tools',
    description: (
      <>
        <p>Before you can contribute to the SCOOBY documentation, you'll need to install and set up the tools.</p>
            <ol>
              <li><a href="https://nodejs.org/en/download/">NodeJS</a><p></p></li>
              <li>Git client<p></p>
                <h4>Git Bash</h4>

                    <ul>
                      <li><a href="https://git-scm.com/download/win">Windows</a><br /></li>
                      <li><a href="https://git-scm.com/download/mac">macOS</a>
                      <p>For macOS users, you can also install Git using <code>xcode-select --install</code> from the terminal.</p></li>
                    </ul>

                  <h4>GitHub Desktop</h4>
                      <ul>
                        <li><a href="https://desktop.github.com/">Windows</a><br /></li>
                        <li><a href="https://central.github.com/deployments/desktop/desktop/latest/darwin">macOS</a></li>
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
            <div class="hangingindent check-point"><Checkbox {...label} defaultChecked />Up to this point in your onboarding journey, you should have NodeJS, a Git client, VS Code, and the yarn package manager installed.</div>

      </>
    ),
  },
  {
    label: 'Establish your workspace',
    description: (
      <>
        <p>If this is your first time downloading a GitHub repository, it's crucial to establish a workspace folder to store the repo.</p>
        <h4>Windows</h4>
        <p>Create a new folder as your working directory, for example, <b>github</b>. You can create the folder anywhere on your system, including in your <b>Documents</b> folder.</p>
        <h4>macOS</h4>
        <ol>
          <li>From your home directory, open your terminal.
            <p><b>IMPORTANT:</b> Ensure that you are in your <b>home</b> directory.</p>
          </li>
          <li>Create a new folder called <b>workspace</b>.
          <p><pre><code>mkdir workspace</code></pre></p>
          </li>
          <li>Navigate to your new workspace folder.
            <p><pre><code>cd workspace</code></pre></p>
          </li>
        </ol>
        <div class="hangingindent check-point"><Checkbox {...label} defaultChecked /> Up to this point, you now have your tools installed and your working directory established. Keep going. You're almost done!</div>

      </>
    ),
  },
  {
    label: 'Set up the GitHub repo locally',
    description: (
      <>
      <br />
      <details><summary><b>GitHub Desktop</b></summary>
<br />

<ol>
        <li>Select <b>File > Clone repository</b>.
        
          <p><img src="https://github.com/patriciamcphee/portfolio/blob/main/static/img/readme/image1.png?raw=true" /></p>
        </li>
        <li>Select the <b>URL</b> tab and enter the following URL in the <b>Repository URL or GitHub username and repository</b> field:
          <pre><code>https://github.io/scooby/docs-next.git</code></pre>

        <p><img src="https://github.com/patriciamcphee/portfolio/blob/main/static/img/readme/image2.png?raw=true" /></p>
        </li>
        <li>For the <b>Local path</b>, browse to your established workspace or working directory. Select <b>Clone</b> when you're ready.</li><p></p>
        <li>Select <b>Open in Visual Studio Code</b>.

        <p><img src="https://github.com/patriciamcphee/portfolio/blob/main/static/img/readme/image3.png?raw=true" /></p>
        </li>
        <li>Select <b>View > Terminal</b>. 
        <p>You'll use the terminal for configuring the remote connection between your local repo and the main repo. You'll also use the terminal to finalize the last bit of installation required.</p>

        <p><img src="https://github.com/patriciamcphee/portfolio/blob/main/static/img/readme/image4.png?raw=true" /></p>
        </li>
      </ol>    

</details>

<p></p>

<details>
<summary><b>Git Bash</b></summary>
<ol>
        <li>Open Git Bash to the folder where you're cloning the doc site repo (this should be workspace if macOS).</li><p></p>
        <li>Clone the docs-next repo.
          <pre><code>https://github.io/scooby/docs-next.git</code></pre>

        </li>
        <li>Change directories to docs-next.
        <pre><code>cd docs-next</code></pre>
          </li>

      </ol>

</details>
<p></p>
<div class="hangingindent check-point"><Checkbox {...label} defaultChecked />Up to this point, you have the tools installed, your workspace or working directory set up, and the docs-next repo cloned. You're done! </div>
            

      </>
    ),
  },

];

export default function OnboardingProcessStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: '100%' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography variant="h5" align="center" sx={{ py: 1 }}>Yah! You&apos;re finished!<br />You can now <a href="https://patriciamcphee.github.io/portfolio/docs/how-tos/contribution-guide/contribute">contribute</a> until your heart's content.</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}