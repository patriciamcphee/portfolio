import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import Translate from '@docusaurus/Translate';
import LastUpdated from '@theme/LastUpdated';
import { BugFilled } from '@ant-design/icons';
import IconEdit from '@theme/Icon/Edit';
import styles from './styles.module.css';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';

function useSyntheticTitle() {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
  return shouldRender ? metadata.title : null;
}

// Component for the "Edit This Page" link
function EditThisPage({ editUrl }) {
  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noreferrer noopener"
      className={ThemeClassNames.common.editThisPage}
    >
      <IconEdit />
      <Translate
        id="theme.common.editThisPage"
        description="The link label to edit the current page"
      >
        Edit this page
      </Translate>
    </a>
  );
}

// Component for the "Open a Doc Issue" link
function DocIssueUrl() {
  const { metadata } = useDoc();
  const docIssueURL = `https://github.sys.cigna.com/cigna/alchemy-docs/issues/new?title=${encodeURIComponent(metadata.title)}&body=${encodeURIComponent(`Issue with the document: ${metadata.permalink}`)}`;
  return (
    <a
      href={docIssueURL}
      target="_blank"
      rel="noreferrer noopener"
      className={ThemeClassNames.common.editThisPage}
    >
      <BugFilled style={{ fontSize: '15px', paddingRight: '6px' }} />
      <Translate
        id="theme.common.openDocIssue"
        description="The link label to open a doc issue on the current page"
      >
        Open a doc issue
      </Translate>
    </a>
  );
}

// Component to display the last updated date and edit links, along with role
function LastUpdatedRow({ lastUpdatedAt, formattedLastUpdatedAt, editUrl, role }) {
  return (
    <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, styles.row)}>
      <div className={clsx(styles.lastUpdated)}>
        {lastUpdatedAt && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
          />
        )}
        {role && (
          <div className={clsx(styles.role)}>
            {role.map((p, index) => (
              <Chip
                key={index}
                color="info"
                size="small"
                icon={<FaceIcon />}
                label={p}
              />
            ))}
          </div>
        )}
      </div>
      <div className={clsx(styles.editThisPage)}>
        <DocIssueUrl />
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        {editUrl && <EditThisPage editUrl={editUrl} />}
      </div>
    </div>
  );
}

// Main header component to display the last updated date and edit links, along with role
function DocItemHeader() {
  const { metadata } = useDoc();
  const { lastUpdatedAt, formattedLastUpdatedAt, editUrl, frontMatter } = metadata;
  const { role } = frontMatter;
  const canDisplayLastUpdatedRow = !!lastUpdatedAt || !!editUrl;

  if (!canDisplayLastUpdatedRow) {
    return null;
  }

  return (
    <div className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      <LastUpdatedRow
        lastUpdatedAt={lastUpdatedAt}
        formattedLastUpdatedAt={formattedLastUpdatedAt}
        editUrl={editUrl}
        role={role}
      />
    </div>
  );
}

export default function DocItemContent({children}) {
  const syntheticTitle = useSyntheticTitle();
  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
          <DocItemHeader />
        </header>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
