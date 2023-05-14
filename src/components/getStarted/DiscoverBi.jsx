import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  Container, Box, CardActionArea } from '@mui/material';
import styles from './LandingPage.module.css';
import clsx from 'clsx';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const DiscoverList = [
  {
    title: 'Get started',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        Install and configure Beyond Identity. 
      </>
    ),
    href: ('/get-started'),
    label: ('Learn more'),
  },
  {
    title: 'Integration guides',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         
      </>
    ),
    href: ('/integration-guides'),
    label: ('Learn more'),
  },
  {
    title: 'Rules & policies',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         
      </>
    ),
    href: ('/policy'),
    label: ('Learn more'),
  },
  {
    title: 'Monitoring',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         
      </>
    ),
    href: ('/data-events'),
    label: ('Learn more'),
  },
  {
    title: 'Admin console',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         
      </>
    ),
    href: ('/admin-console'),
    label: ('Learn more'),
  },
  {
    title: 'Platform authenticators',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         
      </>
    ),
    href: ('/platform-authenticator'),
    label: ('Learn more'),
  },
];

function Topic({ title, description, href }) {
  return (
    
  <div className={clsx('col col--6', styles. topic)}>
  <Card sx={{ minHeight: 'auto', p: 3, borderRadius: 4 }}  elevation={1}>
      <CardActionArea href={href}>
        <CardContent>
          <Typography
              gutterBottom 
              variant="h6" 
              component="div"
              sx={{
                fontWeight: 500,
                fontFamily: 'Overpass',
                textAlign: 'left',
                color: '#3e5fb8',
              }} 
            >
            {title} 
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'Overpass', lineHeight: 1.3 }}>
            {description}
          </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </div>
  );
}

export default function DiscoverBi() {
  return (
    <section className={styles.topics}>
      <div sx={{ marginLeft: 0, marginTop: -1 }}>
        <div className={clsx('row', styles.topicsRow)}>
          {DiscoverList.map((props, idx) => (
            <Topic key={idx} {...props} />
          ))}
        </div>
      
      </div>
    </section>
  );
}