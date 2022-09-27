import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import clsx from 'clsx';
import { CardMedia, Container } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const ServiceList = [
  {
    title: 'Introduction',
    img: 'https://raw.githubusercontent.com/patriciamcphee/ds-doc-site-prototype/1683f779030a3194abc683eca14ef7553a695019/static/img/logo.img',
    alt: 'alt text for image',
    description: (
      <>
        Start here if you’re new to EGDS, new to design systems, or simply need a refresher. 
      </>
    ),
    href: ('/pmcphee/egds-docs/docs/intro'),
    label: ('Learn more'),
  },
  {
    title: 'For Designers',
    img: 'https://raw.githubusercontent.com/patriciamcphee/ds-doc-site-prototype/1683f779030a3194abc683eca14ef7553a695019/static/img/design.img',
    alt: 'alt text for image',
    description: (
      <>
        Learn how to use the design system Figma library.  You’ll find information on variants, auto-layout, breakpoints, practical plugins, “unwritten rules,” and more.
      </>
    ),
    href: ('/pmcphee/egds-docs/docs/intro/for-designers-intro'),
    label: ('Learn more'),
  },
  {
    title: 'For Developers',
    img: 'https://raw.githubusercontent.com/patriciamcphee/ds-doc-site-prototype/1683f779030a3194abc683eca14ef7553a695019/static/img/toggle.img',
    alt: 'alt text for image',
    description: (
      <>
        Learn about everything you need to get up and running with the code.  You’ll find code, samples and documentation, useful tools, and more. 
      </>
    ),
    href: ('/pmcphee/egds-docs/docs/intro/for-developers-intro/'),
    label: ('Learn more'),
  },
];

function Service({ img, alt, title, description, href, label}) {
  return (

    <Paper sx={{ maxWidth: 345, padding: 2, minHeight: 235 }}  elevation={4} >

      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions variant="bottom">
        <Button size="small" color="secondary" href={href}>{label}</Button>
      </CardActions>
    </Paper>

  );
}

export default function HomepageServices() {
  return (

<Container 
  fixed     
  justifyContent="center"
  alignItems="center" 
  sx={{ py: 6 }}>

<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} py={4}>
  {ServiceList.map((props, idx) => (
    <Grid item p={2}>
      <Service key={idx} {...props} />
    </Grid>
  ))}
</Grid>
  </Container>

  );
}
