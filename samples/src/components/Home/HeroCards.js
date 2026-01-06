import React from 'react';
import { Grid } from '@mui/material';
import './AlchemyHome.css';



const heroCardData = [
  {
    title: 'New to Alchemy?',
    subtitle: '',
    description: 'Learn about Cigna\'s developer platform and how to get the most out of it.',
    href: 'foundations/what-is-alchemy',
  },
  {
    title: 'What\'s the Software Catalog?',
    subtitle: '',
    description: 'Discover Cigna\'s unified repository for tracking and managing all software assets. ',
    href: '/software-catalog',
  },

  {
    title: 'Ready to dive in?',
    subtitle: '',
    description: 'Seamlessly onboard your code repository to Alchemy, our powerful development platform. ',
    href: '/software-catalog/create-project/onboard-project',
  },
  {
    title: 'What are entity definitions?',
    subtitle: '',
    description: 'Discover the catalog-info.yaml file, which is used for registering entities within Alchemy. ',
    href: 'software-catalog/core-entity-types/descriptor-format',
  },
  {
    title: 'Ready to author a YAML file?',
    subtitle: '',
    description: 'Learn how to author your catalog-info.yaml file with references to TechDocs, Jenkins, and more. ',
    href: 'software-catalog/create-project/authoring-files',
  },
  {
    title: 'Want to build a template?',
    subtitle: '',
    description: 'Learn how to create and manage templates in Alchemy or the software-template repo.',
    href: 'software-templates/creating-template',
  },
  // Add other card objects similarly
];

const HeroCards = () => {

  return (
    <div>
      <Grid container spacing={3} className="card-gallery">
        {heroCardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div className="card-demo">
              <a href={card.href} className="card-link">
                <div className="card cardContainer">
                  <div className="card__header cardTitle text--center">
                    <h3>{card.title}</h3>
                  </div>
                  <div className="card__body cardDescription text--center">
                    <p>{card.description}</p>
                  </div>
                </div>
              </a>
            </div>
          </Grid>
        ))}
      </Grid>
      
    </div>
  );
};

export default HeroCards;