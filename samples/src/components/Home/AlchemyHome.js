import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types'; // PropTypes for type checking
import { Row, Col } from 'antd';
import { Card, CardContent, Typography, Grid, CardActionArea } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import './AlchemyHome.css';

// Create theme for consistent styling across components
const theme = createTheme({
  palette: {
    primary: {
      main: '#065e8f',
    },
    secondary: {
      main: '#71c258',
      light: '#83ca6d',
      contrastText: '#e3f3ef',
    },
  },
});

// Hero component displays the main intro section
const Hero = () => {
  return (
    <div className="hero-section cover">
      <div className='intro-visual'>
        <Row wrap={true}>
          <Col flex="auto">
            <div className="intro-text">
              <h5 className="extra-padding">Discover.</h5>
              <h5>Build.</h5>
              <h5>Deploy.</h5>
              <h5>Manage.</h5>
              <p>
                Welcome to Alchemy, Cigna's Internal Developer Portal (IDP). Find resources and use cases to help you build your applications.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

// Define PropTypes for Hero component
Hero.propTypes = {};

// Card data for HeroCards component
const heroCardData = [
  {
    title: 'New to Alchemy?',
    description: 'Learn about Cigna\'s internal developer portal (IDP) and why you should be using it.',
    href: '/foundations',
  },
  {
    title: 'Curious about entity definitions?',
    description: 'Discover the catalog-info.yaml file, a crucial manifest for registering and cataloging entities within Alchemy.',
    href: 'software-catalog/descriptor-format',
  },
  {
    title: 'Ready to dive in?',
    description: 'Onboard a project into Alchemy to leverage features like Software Catalog, templates, and CI/CD integration.',
    href: '/software-catalog/create-project/onboard-project',
  },
];

// HeroCards component displays a grid of information cards
const HeroCards = () => {
  return (
    <div>
      <Grid container spacing={3} className="card-gallery">
        {heroCardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: '20px' }} className="card"> {/* Remove onClick here */}
              <CardActionArea href={card.href}>
                <CardContent>
                  <Typography sx={{ fontSize: '24px', lineHeight: '120%' }} variant='subtitle1' component="div" mt={2} align='center' theme={theme} color='primary'>
                    {card.title}
                  </Typography>
                  <Typography mt={2} mb={2} align='center' variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

// Define PropTypes for HeroCards component
HeroCards.propTypes = {
  heroCardData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

// Error Boundary component to catch runtime errors
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught in Error Boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Lazy load components to improve performance
const LazyHero = lazy(() => import('./Hero'));
const LazyHeroCards = lazy(() => import('./HeroCards'));

// AlchemyHome component serves as the application root
const AlchemyHome = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHero />
        <LazyHeroCards />
      </Suspense>
    </ErrorBoundary>
  );
};

// Export consolidated AlchemyHome component
export default AlchemyHome;
