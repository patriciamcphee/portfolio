import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GitHubIcon from '@mui/icons-material/GitHub';
import CurrentProjectImage from '@site/static/img/circular-data-chart.svg';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function HomepageLatest() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const handleClick = () => {
    setOpen(!open);
  };
  return (

    <Container sx={{ alignItems: 'center', py: 6}}>
    <Box
      bgcolor={'alternate.main'}
      padding={{ xs: 2, md: 4, py: 2 }}
      borderRadius={2}
      
    >
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={6}>

    <Typography
      variant="h3"
      component={'p'}
      align="left" 
      gutterBottom={true}
      sx={{
        fontWeight: 500,
        fontFamily: 'NTR',
      }} 
    >Current Projects</Typography>
    <Typography variant="p" align="left" paragraph={true} gutterBottom={true}>I know these projects don't pertain to writing, but it's something fun. Plus, I realize that <b>I'm a web developer disguised as a Content Designer / Information Architect</b>.</Typography>
     <Typography variant="p" align="left" paragraph={true} gutterBottom={true}>My current projects have mostly been full-stack web development with MongoDB, Express, ReactJS/TS, and Node. I've been busy building a movie app, kind of like IMDB but for bad movies that have either been riffed or can be riffed.</Typography>
     <Typography variant="p" align="left" paragraph={true} gutterBottom={true}>Another fun project that I'm working on is a recipe site built using Docusaurus. This project leverages my passion for <b><a href="https://patriciamcphee.github.io/portfolio/blog/2022/10/04/information-architecture">Information Architecture.</a></b> </Typography>
     <Typography variant="p" align="left" paragraph={true} gutterBottom={true}>I'm also selecting scripts for new voiceover demos as my current demos are three years old. I might even start singing again! I'm itching to start belting out some tunes.</Typography>
     <Typography variant='p' align="left">
     <Box sx={{ width: '100%' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding divider>
            <ListItemButton onClick={handleClick} href="https://github.com/patriciamcphee/bflix-api">
            <ListItemIcon class="test-gh">
              <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="BFlix API" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding divider>
            <ListItemButton onClick={handleClick} href="https://github.com/patriciamcphee/bflix-client">
            <ListItemIcon class="test-gh">
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="BFlix frontend (WIP)" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding divider>
          <ListItemButton onClick={handleClick} href="https://patriciamcphee.github.io/to-do-list-app/">
            <ListItemIcon class="test-gh">
                <CheckBoxIcon />
              </ListItemIcon>
              <ListItemText primary="To Do List App" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding divider>
          <ListItemButton onClick={handleClick} href="https://patriciamcphee.github.io/to-do-list-app/">
            <ListItemIcon class="test-gh">
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="To Do List repo" />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>
     </Box>
      </Typography>
  </Grid>
  <Grid item xs={6}>
  <Box
      bgcolor={'alternate.main'}
      padding={{ xs: 2, md: 4, py: 2 }}
      borderRadius={2}
      
    >
  <Box
      component="div"

      class="heroSvg"
    >
  <CurrentProjectImage />
</Box>
</Box>
  </Grid>
</Grid>
</Box>
  </Container>
  );
}

