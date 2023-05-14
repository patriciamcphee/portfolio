import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import LastUpdated from '@theme/LastUpdated';
import EditThisPage from '@theme/EditThisPage';
import styles from './styles.module.css';

function EditMetaRow({
  lastUpdatedAt,
  formattedLastUpdatedAt,
  editUrl, 
  ...props
}) {
  return (
    <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, 'row')}>

      <div className={clsx('col', styles.lastUpdated)}>
        {(lastUpdatedAt || editUrl) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
            editUrl={editUrl}
           
          />
          
        )}

      </div>

    </div>
  );
}
export default function LastUpdatedDateHeader() {
  
  const {metadata} = useDoc();
  const {lastUpdatedAt, formattedLastUpdatedAt, editUrl} =
    metadata;
  const canDisplayEditMetaRow = !!( lastUpdatedAt || editUrl);
  const canDisplayFooter = canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return (
    <div
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-md')}>

      {canDisplayEditMetaRow && (
        <EditMetaRow
          lastUpdatedAt={lastUpdatedAt}
          formattedLastUpdatedAt={formattedLastUpdatedAt}
          editUrl={editUrl}
        />
      )}
    </div>
    
  );
}