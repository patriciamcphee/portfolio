import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  Container, Box, CardActionArea } from '@mui/material';
import styles from './WorkLandingPage.module.css';
import clsx from 'clsx';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const WorkList = [
  {
    title: 'Errors',
    Svg: require('@site/static/img/Details-page-02.svg').default,
    description: (
      <>
        Writing error messages can be challenging because you want them to be short but have enough information to help the user. Your overall goal is to guide the user to prevent dead ends. 
      </>
    ),
    href: ('/portfolio/docs/ux-writing/errors-warnings-confirmations'),
    label: ('Learn more'),
  },
  {
    title: 'UI strings',
    Svg: require('@site/static/img/Code-details-page-02.svg').default,
    description: (
      <>
        UX writing is the practice of designing the words people see and hear when they interact with software. It's the type of writing that guides users as they interact with the product.
      </>
    ),
    href: ('/portfolio/docs/ux-writing/ui-strings'),
    label: ('Learn more'),
  },
  {
    title: 'APIs',
    Svg: require('@site/static/img/Code-details-page-1.svg').default,
    description: (
      <>
        Application programming interfaces (APIs) provide a way for two or more computer programs to communicate with each other. It's a software interface offering a service to other pieces of software.
      </>
    ),
    href: ('/portfolio/docs/api/api-example-bflix'),
    label: ('Learn more'),
  },
  {
    title: 'Guides',
    Svg: require('@site/static/img/form-details-02.svg').default,
    description: (
      <>
        
      </>
    ),
    href: ('/portfolio/docs/how-tos/contribution-guide/contribute'),
    label: ('Learn more'),
  },
  {
    title: 'KB articles',
    Svg: require('@site/static/img/form-page.svg').default,
    description: (
      <>
        
      </>
    ),
    href: ('/portfolio/docs/kb-articles/kb-article-samples'),
    label: ('Learn more'),
  },
  {
    title: 'Video scripts',
    Svg: require('@site/static/img/pucture-details-page-01.svg').default,
    description: (
      <>
        
      </>
    ),
    href: ('/portfolio/docs/voiceover-scripts/intro'),
    label: ('Learn more'),
  },
];

function Work({ Svg, title, href }) {
  return (
    
    <div className={clsx('col col--4', styles.feature)}>
<Card sx={{  p: 2, borderRadius: 4 }} elevation={9}>
      <CardActionArea href={href}>
        

      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>

      


      <CardContent>

    <Typography
      gutterBottom 
      variant="h4" 
      component="div"
      align='center'
      sx={{
        fontWeight: 500,
        fontFamily: 'NTR',
      }} 
    >
          {title} 
        </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
  </div>
    
  );
}

export default function WorkLandingPage() {
  return (
    <section className={styles.features}>
      <div className="container">
        
        <div className={clsx('row', styles.featuresRow)}>
          {WorkList.map((props, idx) => (
            <Work key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}