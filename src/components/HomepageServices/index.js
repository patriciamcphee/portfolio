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
import { CardMedia, Container, Link, Box, CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { positions, position, right } from '@mui/system';
import Layout from '@theme/Layout';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const ServiceList = [
  {
    title: 'UX writing',
    img: 'https://raw.githubusercontent.com/patriciamcphee/ds-doc-site-prototype/1683f779030a3194abc683eca14ef7553a695019/static/img/logo.img',
    alt: 'alt text for image',
    description: (
      <>
        UX writing is the practice of designing the words people see and hear when they interact with software. It's the type of writing that guides users as they interact with the product.
      </>
    ),
    href: ('/portfolio/docs/ux-writing/ux-writing-samples'),
    label: ('Learn more'),
  },
  {
    title: 'How-to\'s',
    img: 'https://raw.githubusercontent.com/patriciamcphee/ds-doc-site-prototype/1683f779030a3194abc683eca14ef7553a695019/static/img/design.img',
    alt: 'alt text for image',
    description: (
      <>
        How-tos are easy-to-follow instructions that explain step-by-step how to perform a task or use a specific feature in an app. How-tos are focused procedural articles that help you complete a task.
      </>
    ),
    href: ('/portfolio/docs/how-tos/how-to-samples'),
    label: ('Learn more'),
  },
  {
    title: 'KB articles',
    img: 'https://raw.githubusercontent.com/patriciamcphee/ds-doc-site-prototype/1683f779030a3194abc683eca14ef7553a695019/static/img/toggle.img',
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

function Service({ img, alt, title, description, href, label}) {
  return (

    <Card sx={{ maxWidth: 345, p:1 }} elevation={4}>
      <CardActionArea href={href}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt={alt}
      />
      <CardContent>

    <Typography gutterBottom variant="h5" component="div">
          {title} 
        </Typography>

      

        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography align='right'>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        </Typography>
      </CardActions>

</CardActionArea>
</Card>

  );
}

export default function HomepageServices() {
  return (

<Container 
  justifyContent="center"
  alignItems="center" 
  sx={{ py: 6 }}>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} py={4}>
  {ServiceList.map((props, idx) => (
    <Grid item>
      <Service key={idx} {...props} />
    </Grid>
  ))}
</Grid>

  </Container>

  );
}
