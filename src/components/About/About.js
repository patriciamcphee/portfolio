import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
  Hero,
  Story,
  WhoWeAre,
} from './components';
import ContactPageCover from '../ContactPageCover/ContactPageCover';


const About = () => {
  return (
    <Container  sx={{ alignItems: 'center', py: 2}}>
            <Container sx={{ alignItems: 'center', py: 6}}>
      <Divider />
      </Container>
      <Container sx={{ alignItems: 'center'}}>
      <Typography
      variant="h3"
      component={'p'}
      align="left" 

      sx={{
        fontWeight: 500,
        fontFamily: 'NTR',
      }} 
    >About Me</Typography>
        <Story />
      </Container>

      <Container sx={{ alignItems: 'center', py: 6}}>
        <WhoWeAre />
      </Container>


      


      


    </Container>
  );
};

export default About;
