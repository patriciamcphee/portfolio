import React from 'react';
import { useLocation } from "react-router-dom";
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import LastUpdatedDateHeader from '../Footer/index';
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Col, Divider, Row } from "antd";
import { LikeTwoTone, DislikeTwoTone } from '@ant-design/icons';

import NutShell from '@site/src/components/HomepageFeatures/Nutshell';
const style = {
  padding: "6px 0"
};

/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}


export default function DocItemContent({children}) {
  const syntheticTitle = useSyntheticTitle();
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  const openDocIssueURL =
    "https://github.com/patriciamcphee/portfolio/issues/new?assignees=&labels=&template=---doc-error-report.md&title=Issue with Beyond Identity Developer Docs" +
    `${location.pathname}`;
  const bugIconUrl = useBaseUrl("img/bug-icon.svg");

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
          <LastUpdatedDateHeader />
        </header>        
      )}          
      <MDXContent>{children}</MDXContent>
       <NutShell />
    </div>
  );
}
