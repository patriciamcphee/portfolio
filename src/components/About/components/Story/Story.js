/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MyAvatar from '@site/static/img/what-i-do.svg';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();
  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={8}>
          <Box>

          <Typography variant="p" align="left" paragraph={true} gutterBottom={true}>
            I've been in the Tech Industry since the late 1990s, starting in support and moving to network system administration. However, for the past two decades, I've been taking the guesswork out of complex technical content and helping people navigate, use and troubleshoot products. 
            </Typography>
            <Typography variant="p" align="left" paragraph={true} gutterBottom={true}>
            My journey into {customFields.jobTitle} started with the Human-Centered Design & Engineering team at a large telecommunications company. There I learned how to conduct usability tests (participant observation and user behavior) to uncover and solve user experience challenges with end-user documentation.  
            </Typography>
            <Typography variant="p" align="left" paragraph={true} gutterBottom={true}>
            Over the past two decades, I've helped organizations reduce, simplify, and restructure their digital end-user documentation, ensuring quality and accuracy and increasing customer satisfaction rates.  
            </Typography>

          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={4}
        >
          <Box maxWidth={500} width={1} alignItems="center">
            <MyAvatar />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
