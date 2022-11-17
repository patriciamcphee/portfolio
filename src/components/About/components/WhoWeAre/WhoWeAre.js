/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GitHubIcon from '@mui/icons-material/GitHub';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const WhoWeAre = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
    
  });
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container

          xs={12}
          md={6}
        >
          <Box>
          <Typography
      variant="h4"
      component={'p'}
      align="left" 
      gutterBottom={true}
      sx={{
        fontWeight: 700,
        fontFamily: 'NTR',
      }} >
            Content writing
            </Typography>
            <Typography component={'p'}   
            sx={{
              fontWeight: 500,
              fontFamily: 'Nunito Sans',
            }}>
            I can give your product a competitive edge with powerful content targeted to any audience—novice to expert. No matter how large or complex the project is, I can help you implement a plan that maximizes your business's online exposure.
            </Typography>
            <Typography component={'p'} variant='p' align="left" 
            sx={{
              fontSize: '16px',
              marginTop: 2,
            }}>
          <ul>
            <li>Content Strategy</li>
            <li>End-user Documentation</li>
            <li>How-to's</li>
            <li>Knowledgebase Articles</li>
            <li>Voiceover Scripts</li>
            <li>eBooks</li>
            <li>eLearning</li>
            <li>Newsletters</li>
            <li>FAQs</li>
          </ul>
      </Typography>

          </Box>
        </Grid>
        <Grid
          item
          container

          xs={12}
          md={6}
        >
          <Box>
          <Typography
      variant="h4"
      component={'p'}
      align="left" 
      gutterBottom={true}
      sx={{
        fontWeight: 700,
        fontFamily: 'NTR',
      }} >
            UX Writing
            </Typography>
            <Typography component={'p'}
            sx={{
              fontWeight: 500,
              fontFamily: 'Nunito Sans',
            }} >
            I develop clear and helpful text in product interfaces to help users reach a specific goal, whether completing a form or tapping a button. This includes content from online help systems, user onboarding, and in-app messages to push notifications and tooltips.
            </Typography>
            <Typography component={'p'} variant='p' align="left"  
            sx={{
              fontSize: '16px',
              marginTop: 2,
            }}>
          <ul>
            <li>Microcopy</li>
            <li>Error messages</li>
            <li>Notifications</li>
            <li>Taxonomy & Labeling</li>
            <li>Content Style Guide</li>
            <li>Design Principles</li>
          </ul>
      </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
