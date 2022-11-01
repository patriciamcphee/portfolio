import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeroImage from '@site/static/img/hero03.svg';
import HomepageServices from '../components/HomepageServices';
import HomepageLatest from '../components/HomepageLatest';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Container sx={{ alignItems: 'center', py: 2}}>
    <Box
      bgcolor={'alternate.main'}
      padding={2}
      borderRadius={2}
    >
      <Grid container spacing={2}>
        <Grid
          item
          container
          xs={12}
          md={6}
          alignItems={'center'}
          sx={{ position: 'relative' }}
        >
          
            <Box marginBottom={2}>

                <Typography 
                variant='h3'
                component={'p'}
                class={styles.heroBannerTitle}
                >
                 {siteConfig.title}
                </Typography>
                <Typography
                variant="h5"
                component={'p'}
                class={styles.heroBannerSubTitle}
                gutterBottom={true}
              >
                Sr. Content Designer | Information Architect
              </Typography>
              <Typography 
                variant="p" 
                component={'p'}
                gutterBottom={true}
                class={styles.heroBannerContent}
              >
              {siteConfig.tagline} 
                
              </Typography>
              <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'inline', sm: 'inline' }}
              sx={{
                marginBottom: 4,
                marginTop: 4,
              }}
            >
              <Link
                className="button button--secondary button--lg"
                to="/docs/about">
                Learn more about me
              </Link>
            </Box>
            </Box>




        </Grid>
        <Grid item xs={12} md={6}>

            <Box
              height={1}
              width={1}
              maxWidth={{ xs: 500, md: '100%' }}
              maxHeight={500}
              sx={{ py: 2, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0.8)'
                    : 'none',
              }}
            >
              <HeroImage />
            </Box>

        </Grid>
      </Grid>
    </Box>
  </Container>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.description}`}>
        <main id="homePage">
          <section id="heroBanner" class="heroBanner">
        <HomepageHeader />
        </section>
       
      <section id="services">
      
      <HomepageServices />
      </section>
      <section id="current">
      <HomepageLatest />
      </section>
      </main>
    </Layout>
  );
}

