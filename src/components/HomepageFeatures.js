import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'UX writing',
    Svg: require('../../static/img/ux-writing.svg').default,
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
    Svg: require('../../static/img/kb-articles.svg').default,
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
    Svg: require('../../static/img/faq.svg').default,
    description: (
      <>
        A knowledge base article is a "self-service" online document that solves issues with products or services. Article types include informational articles, how-tos, troubleshooting guides, and FAQs.
      </>
    ),
    href: ('/portfolio/docs/kb-articles/kb-article-samples'),
    label: ('Learn more'),
  },
];

function Feature({Svg, title, description, href, label}) {
  return (
    <div className={clsx('col col--4 padding--md')}>

      <div class="card features-card">
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--lg">
      <h3><a href={href}>{title}</a></h3>
      <p>{description}</p>

        <a className="button button--primary button--sm text--center" href={href}>{label}</a> 

    </div>
    <div class="col"><p></p></div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (

    <section className={styles.features}>
      <div className="container overflow-hidden">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

  );
}
