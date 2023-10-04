import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const MoreThanWordsList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Words({ title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <div className={clsx('card', 'shadow--tl', styles.introCard)}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function MoreThanWords() {
  return (
    <section className={styles.introCard}>
      <div className={clsx('container', styles.container)}>
      <div className={clsx('row', styles.priceRowStyle)}>
          {MoreThanWordsList.map((props, idx) => (
            <Words key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
