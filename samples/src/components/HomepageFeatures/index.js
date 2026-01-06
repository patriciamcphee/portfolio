import React from 'react';

const heroCardData = [
  {
    title: 'Test Locally with Ease',
    description: 'Our smart search plugin can be easily integrated into your development environment (e.g., localhost:3000), allowing developers to test and refine search functionality in real-time. This flexibility ensures you can optimize the search experience before deployment, making it perfect for iterative development.'
  },
  {
    title: 'Enhanced Search Accuracy',
    description: 'Our smart search plugin utilizes metadata keywords to refine search results, ensuring users receive the most relevant content quickly. Say goodbye to irrelevant results and hello to precision in information retrieval.'
  },
  {
    title: 'User-Centric Experience',
    description: 'The intuitive interface is tailored specifically for technical documentation users. Focusing on simplicity and accessibility, our plugin makes it easy for everyone—from developers to technical writers—to find the information they need without hassle.'
  },
  {
    title: 'Intelligent Use of Metadata',
    description: 'Unlike traditional crawl-based indexing services that rely on APIs to scan entire pages, our plugin leverages metadata keywords. This targeted approach improves search speed and enhances relevance, allowing users to find specific information without sifting through unnecessary content.'
  }
];

const HomepageFeatures = () => {
  return (
    <section className="container margin-vert--lg">
      <div className="row">
        {heroCardData.map((card, index) => (
          <div key={index} className="col col--6 col--md-3">
            <div className="card">
              <div className="card__header">
                <h3 className="text--center">{card.title}</h3>
              </div>
              <div className="card__body">
                <p className="text--center">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomepageFeatures;