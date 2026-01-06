import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}
          <ul className="hero__subtitle"><li className="hero__subtitle">A comprehensive <a href="/samples/welcome/">style guide</a> for creating clear, consistent, and user-friendly technical documentation.<br /></li><li className="hero__subtitle white">A demo site for my npm <a href="/samples/smart-search-plugin/plugin-introduction/">smart-search-plugin</a> designed for Docusaurus 3.x projects.</li></ul></p>
      </div>
    </header>
  );
}   

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}