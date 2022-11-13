import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import {
  Hero,
  Story,
  WhoWeAre,
} from './components';
import ContactPageCover from '../ContactPageCover/ContactPageCover';
import Typography from '@mui/material/Typography';


const About = () => {
  return (
    <Container  sx={{ alignItems: 'center', py: 2}}>
      <Typography
      variant="h3"
      component={'p'}
      align="left" 
      sx={{
        fontWeight: 500,
        fontFamily: 'NTR',
      }} 
    >About Me</Typography>
      <Container sx={{ alignItems: 'center'}}>
        <Story />
      </Container>

      <Container sx={{ alignItems: 'center', py: 6}}>
        <WhoWeAre />
      </Container>

      <Container sx={{ alignItems: 'center', py: 6}}>
      <Divider />
      </Container>
      


      


    </Container>
  );
};

export default About;
