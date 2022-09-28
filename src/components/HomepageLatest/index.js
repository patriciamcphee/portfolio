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
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CurrentProjectsImage from '@site/static/img/code-details-page-1.svg';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function HomepageLatest() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (

    <Container sx={{ py: 12, flexGrow: 1 }} spacing={4} maxWidth="lg">
      <Grid container >
      <Grid item xs={6}>

    <Typography variant="h3" align="left" gutterBottom={true}>Current Projects</Typography>
     <Typography variant="p" align="left" paragraph={true} gutterBottom={true}>Components are reusable UI building blocks, which you can assemble in various ways. They are groups or blocks of design tokens, other components, or a combination built together with a specific functional behavior serving a variety of applications. Each component meets a specific interaction or UI need and is created to work together to provide intuitive user experiences.</Typography>
     <Typography variant='p' align="left">
     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClick} href="/portfolio/docs/latest">
              <ListItemIcon>
              <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Browse components" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="Repo" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClick} href="https://www.figma.com/files/639936565468671000/project/12594923/Components---EGDS?fuid=1108408490962901297" target="_blank">
              <ListItemIcon>
                <img src="https://cdn.iconscout.com/icon/free/png-128/figma-3521426-2944870.png" height="24px"  />              </ListItemIcon>
              <ListItemText primary="Library" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
     </Box>
      </Typography>
  </Grid>
  <Grid item xs={6} px={6}>
    
    
  <Box
                component={'img'}

                src={
                  'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
                }
                width={1}
                height={1}

              />

  </Grid>
</Grid>

  </Container>
  );
}

