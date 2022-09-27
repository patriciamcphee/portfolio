import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeroImage from '@site/static/img/cms-development.svg';
import HomepageSkills from '../components/HomepageSkills';
import HomepageServices from '../components/HomepageServices';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Container>
    <Box
      bgcolor={'alternate.main'}
      padding={{ xs: 2, md: 4 }}
      borderRadius={2}
    >
      <Grid container spacing={12}>
        <Grid
          item
          container
          xs={12}
          md={6}
          alignItems={'center'}
          sx={{ position: 'relative' }}
        >
          <Box marginBottom={4}>
            <Box marginBottom={2}>
              <Typography 
                variant='h3'
                component={'p'}
                gutterBottom={true}
                >
                  {siteConfig.title}
                </Typography>
              <Typography
                variant="h5"
                component={'p'}
                sx={{
                  fontWeight: 700,
                }}
              >
                Sr. Content Designer and UX Writer
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="p" component="p">
              I'm passionate about creating content experiences that help people navigate, use, and troubleshoot products. Relentlessly curious and fueled by strong coffee, I gather information and design meaningful digital content experiences. 
                
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="p" component="p">
              Here, you'll find various writing samples, such as UI strings, error messages, KB articles, how-to's, and more.
                
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <Link
                className="button button--primary button--md"
                to="/docs/about">
                Learn more about me
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              background: theme.palette.background.paper,
              [theme.breakpoints.up('md')]: {
                position: 'absolute',
                bottom: 0,
                transform: 'translateY(100%)',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: '0 !important',
              },
            }}
          >

          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            height={1}
            width={1}
            display={'flex'}
            justifyContent={'center'}
          >
            <Box
              height={1}
              width={1}
              maxWidth={{ xs: 500, md: '100%' }}
              maxHeight={500}
            >
              <Box
                component={'img'}
                class='heroBanner'
                src={
                  'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
                }
                width={1}
                height={1}
                sx={{
                  filter:
                    theme.palette.mode === 'dark'
                      ? 'brightness(0.8)'
                      : 'none',
                }}
              />
            </Box>
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
        <main id="heroBanner">
        <HomepageHeader />
        </main>
      <section id="servives">
      <HomepageServices />
      </section>

    </Layout>
  );
}

