import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'UX Writing',
    Svg: require('../../static/img/d126220ad0f941e80e15108aade273dc.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    href: ('../../docs/ux-writing/ux-writing-samples'),
    label: ('Learn more'),
  },
  {
    title: 'How-to\'s',
    Svg: require('../../static/img/5.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    href: ('../../docs/how-tos/how-to-samples'),
    label: ('Learn more'),
  },
  {
    title: 'KB articles',
    Svg: require('../../static/img/illustration.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    href: ('../../docs/kb-articles/kb-article-samples'),
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
