import React from 'react';
import clsx from 'clsx';
import { Details as DetailsGeneric } from '@docusaurus/theme-common/Details';
import styles from './styles.module.css';

const InfimaClasses = 'alert alert--info';

export default function Details({ ...props }) {
  return (
    <div className={styles.padding}>
    <DetailsGeneric
      {...props}
      className={clsx(
        InfimaClasses,
        styles.details,
        styles.detailsContainer,
        styles.summaryHeading,
        props.className
      )}
    />
    </div>
  );
}