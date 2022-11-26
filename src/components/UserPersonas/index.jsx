import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  List, ListItem, ListItemButton, ListItemIcon, InboxIcon, ListItemText, DraftsIcon, Divider, Box, CardActionArea } from '@mui/material';
import styles from './UserPersonas.module.css';
import clsx from 'clsx';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const PersonaList = [
  {
    title: 'System Admin',
    Svg: require('@site/static/img/kevin.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         Maintain the health of the network and server infrastructure, as well as ongoing maintenance, upgrades, and replacements. Detect problems and faults on the network, understand the cause of the fault, and ensure proper resolution.
      </>
    ),
    name: 'Kevin',
    age: '28',
    location: 'Brooklyn, NY',
    experience:  '7 years',
    industry: 'Healthcare',
    level: 'Intermediate',
  },
  {
    title: 'Network Engineer',
    Svg: require('@site/static/img/gretchen.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        Develop solutions to improve an existing system by responding to troubleshooting results. Leads a team of network engineers whose primary goal is to design and implement global network solutions that boost business productivity and continuity 24/7.
      </>
    ),
    name: 'Gretchen',
    age: '43',
    location: 'Lincoln, NE',
    experience:  '12 years',
    industry: 'Retail',
    level: 'Advanced',
  },
  {
    title: 'IT Architect',
    Svg: require('@site/static/img/tim.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        Identify the required infrastructure components. Then, design the data center and deploy and maintain applications/services across the organization. Work with the Solutions Architect to design for scalability, reliability, security, and performance of the Enterprise Architect.
      </>
    ),
    name: 'Tim',
    age: '48',
    location: 'Austin, TX',
    experience:  '17 years',
    industry: 'FinTech',
    level: 'Expert/MacGyver',
  },
];

function Persona({ Svg, title, description, name, age, location, experience, industry, level }) {
  return (
    
    <div className={clsx('col col--4', styles.feature)}>
<Card sx={{  p: 2, borderRadius: 4, minHeight: 655 }} elevation={9}>
    
        

      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>

      


      <CardContent>
      <Box sx={{ width: '100%',  bgcolor: 'background.paper' }}>
      
      <nav>
      <Typography
      gutterBottom 
      variant="h5" 
      component="div"
      align='center'
      sx={{
        fontWeight: 500,
        fontFamily: 'NTR',
      }} 
    >
          {title} 
        </Typography>
        <List>
          <ListItem disablePadding>

              <ListItemText 
                primary={name}
                secondary={age}

               />
                  

          </ListItem>
          <ListItem disablePadding>

              <ListItemText primary={location} />

          </ListItem>
          <ListItem disablePadding>

              <ListItemText primary={level}
              secondary={experience} />

          </ListItem>
          <ListItem disablePadding>

              <ListItemText primary={industry} />

          </ListItem>
        </List>
      </nav>
    </Box>

        
        <Typography variant="body2">
          {description}
        </Typography>

        
      </CardContent>

    </Card>
  </div>
    
  );
}

export default function UserPersonas() {
  return (
    <section className={styles.features}>
      <div className="container">
        
        <div className={clsx('row', styles.featuresRow)}>
          {PersonaList.map((props, idx) => (
            <Persona key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}