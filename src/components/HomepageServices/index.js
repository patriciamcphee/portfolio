import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  Container, Box, CardActionArea } from '@mui/material';
import styles from './HomepageServices.module.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const ServiceList = [
  {
    title: 'Writing for errors',
    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        Writing error messages can be challenging because you want them to be short but have enough information to help the user. Your overall goal is to provide guidance to the user to prevent dead ends. 
      </>
    ),
    href: ('/portfolio/docs/ux-writing/errors-warnings-confirmations'),
    label: ('Learn more'),
  },
  {
    title: 'APIs',
    Svg: require('@site/static/img/Code-details-page-1.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        Application programming interfaces (APIs) provide a way for two or more computer programs to communicate with each other. It's a software interface offering a service to other pieces of software.
      </>
    ),
    href: ('/portfolio/docs/api/api-example-bflix'),
    label: ('Learn more'),
  },
  {
    title: 'KB articles',
    Svg: require('@site/static/img/Search-details-page.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        A knowledge base article is a "self-service" online document that solves issues with products or services. Article types include informational articles, how-tos, troubleshooting guides, and FAQs.
      </>
    ),
    href: ('/portfolio/docs/kb-articles/kb-article-samples'),
    label: ('Learn more'),
  },
];

function Service({ Svg, alt, title, description, href, label}) {
  return (

    <Card sx={{ maxWidth: 350, p: 2, minHeight: 400, borderRadius: 4 }} elevation={12}>
      <CardActionArea href={href}>
        
        <Box
      component="div"
      sx={{  justifyContent: 'center',  display: 'flex' } }

    >
      <Svg className={styles.featureSvg} alt={title} />
    </Box>
      


      <CardContent>

    <Typography gutterBottom variant="h5" component="div">
          {title} 
        </Typography>

      

        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>


</CardActionArea>
</Card>

  );
}

export default function HomepageServices() {
  return (

    <Container sx={{ alignItems: 'center', maxWidth: 400,  }}>
    <Box
      bgcolor={'alternate.main'}
      padding={{ p: 2 }}
      sx={{ flexWrap: 'wrap' }}
    >
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} py={4}>
  {ServiceList.map((props, idx) => (
    <Grid item>
      <Service key={idx} {...props} />
    </Grid>
  ))}
</Grid>
</Box>
  </Container>

  );
}
