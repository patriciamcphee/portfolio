import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const MoreThanWordsList = [
  {
    title: 'Niche Knowledge Know-How',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Mastery over varied technical domains for potent, accurate content.
      </>
    ),
  },
  {
    title: 'Strategy Sorcery',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Conjuring a strategic narrative that enhances and aligns with your brand ethos.
      </>
    ),
  },
  {
    title: 'Visual Voyage',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A seamless expedition where visuals and text amalgamate to narrate a unified story.
      </>
    ),
  },
];

function Words({ title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={clsx('card')}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function MoreThanWords() {
  return (
    <section className={styles.cardContainer}>
      <div className={clsx('container', styles.introCard)}>
      <div className={clsx('row', styles.priceRowStyle)}>
          {MoreThanWordsList.map((props, idx) => (
            <Words key={idx} {...props} />
          ))}
      </div>
      </div>
    </section>
  );
}
