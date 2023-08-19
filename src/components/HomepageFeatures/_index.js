import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Col, Row } from 'antd';

const FeatureList = [
  {
    title: 'The Analytical Innovator',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Patricia has consistently demonstrated her prowess in content development through deep-dive content audits and her aptitude for tools like Docusaurus and MadCap Flare. Whether streamlining content for Beyond Identity or optimizing platforms for giants like GE Healthcare, Patricia's innovative spirit ensures that your developer doc site will be both user-centric and state-of-the-art.

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
];

function Feature({Svg, title, description}) {
  return (
    <Row>
    <Col span={24}>
    <div className="text--center">
      <Svg className={styles.featureSvg} role="img" />
    </div>
    <div className="text--center padding-horiz--lg">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    </Col>
  </Row>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
