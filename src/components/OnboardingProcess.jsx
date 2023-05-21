import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Alert, Divider } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { ThemeProvider, createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      light: '#b1d753',
      main: '#9ecd28',
      dark: '#046b99',
      contrastText: '#fff',
    },
    secondary: {
      light: '#3688ad',
      main: '#046b99',
      dark: '#024a6b',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Nunito Sans', 
      'sans-serif',
    ].join(','),
  },
  custom: {
    light: '#ffa726',
    main: '#f57c00',
    dark: '#ef6c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
      // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
});




import { Col, Row, ConfigProvider } from 'antd';


const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `macOS`,
    children: (
      <>
        <ol>
              <li><a href="https://nodejs.org/en/download/">NodeJS</a><p></p></li>
              
              <li><a href="https://git-scm.com/download/mac">Git client</a><p>Alternatively, you can also install Git using <code>xcode-select --install</code> from the terminal.</p></li><p></p>
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
    key: '2',
    label: `Windows`,
    children: (
      <>
        <ol>
              <li><a href="https://nodejs.org/en/download/">NodeJS</a><p></p></li>
              
              <li><a href="https://git-scm.com/download/win">Git client</a><p></p>

              </li><p></p>
              <li><a href="https://code.visualstudio.com/">Visual Studio Code (VS Code)</a><p>You can use Atom, but these instructions are VS Code-specific.</p>  
              <p></p>
                
              </li><p></p>
              <li>Yarn package manager <p>You'll use the <code>yarn</code> and <code>yarn start</code> when you work locally. </p>
              <p>
                <pre><code>npm install --global yarn</code></pre>
              </p>
  
              </li>
            </ol>
      </>
    ),
  },
];




const steps = [
  {
    label: 'Prerequisites',
    description: (
      <>
        <Alert severity="warning" sx={{ ml: 2 }}>
           <AlertTitle>IMPORTANT</AlertTitle>
             This is an info alert — <strong>check it out!</strong>
        </Alert>


      </>
    ),
  },
  {
    label: 'Install the tools',
    description: (
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
              <li>Yarn package manager.
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
        
        <Grid container wrap="nowrap" spacing={2} sx={{ px: 2}}>
          <Grid item>
          <p><CheckCircleOutlineIcon style={{ fontSize: '24px', color: '#9ecd28' }} /></p>
          </Grid>
          <Grid item xs>
          <p>At this point in your journey....If using macOS, you may have to authorize the global installation of packages. To do this you can use the sudo command: If using macOS, you may have to authorize the global installation of packages. To do this you can use the sudo command: If using macOS, you may have to authorize the global installation of packages. To do this you can use the sudo command:</p>
          </Grid>
        </Grid>

      </>
    ),
  },
  {
    label: 'Set up the GitHub repo locally',
    description: (
      <>

      <ol>
        <li>Open Git Bash to the folder where you're cloning the doc site repo (this should be workspace if macOS).</li><p></p>
        <li>Clone the scooby-docs-next repo.
          <pre><code>https://github.com/goscooby/scooby-docs-next.git</code></pre>

        </li>
        <li>Change directories to scooby-docs-next.
        <pre><code>cd scooby-docs-next</code></pre>
          </li>

          <li>Create a new <a href="https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell">branch</a> from <code>main</code> (always give your branch a meaningful, descriptive name). <p>
            <pre><code>git checkout -b &#060;branch_name&#062; main</code></pre>
          </p></li>

      </ol>

            
              <Grid container wrap="nowrap" spacing={2} sx={{ p: 2}}>
          <Grid item>
          <p><CheckCircleOutlineIcon style={{ fontSize: '24px', color: '#9ecd28' }} /></p>
          </Grid>
          <Grid item xs>
          <p>You now have the tools installed, your workspace or working directory set up, and the scooby-docs-next repo cloned. You're done!</p>
          </Grid>
        </Grid>            

      </>
    ),
  },
  {
    label: 'Start the development server',
    description: (
      <>
        <p>We're finally able to get to the fun stuff! Install the dependencies and start a local development server.</p>
<p>
<pre><code>yarn<br />
  yarn start</code></pre></p>
        <p>The <code>http://localhost:3000</code> opens in your browser so you can see your changes reflected live.As you make changes to the source files, the preview build will be triggered automatically, and then you can refresh your browser to see the changes.</p>

          <Grid container wrap="nowrap" spacing={2} sx={{ p: 2}}>
          <Grid item>
          <p><CheckCircleOutlineIcon style={{ fontSize: '24px', color: '#9ecd28' }} /></p>
          </Grid>
          <Grid item xs>
          <p>Up to this point, you now have your tools installed and your working directory established. Keep going. You're almost done!</p>
          </Grid>
        </Grid>

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
    <ThemeProvider theme={theme}>
    <Box sx={{ maxWidth: '100%', mb: 2 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              <Typography variant='h6'>
              {step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2, ml: 2, alignItems: 'center' }}>
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
          <Typography variant="h5" align="center" sx={{ py: 1 }}>You&apos;re finished!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
    </ThemeProvider>
  );
}