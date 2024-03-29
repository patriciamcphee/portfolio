import React from "react";
import { useLocation } from "react-router-dom";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import ShareButton from "./ShareButton";

function DocsInfo({ docsPluginId, ...props }) {
  const { siteConfig } = useDocusaurusContext();


  const location = useLocation();
  const openDocIssueURL =
    "https://github.com/patriciamcphee/next-docs/issues/new?assignees=&labels=&template=---doc-error-report.md&title=Issue with Beyond Identity Developer Docs" +
    `${location.pathname}`;
  const bugIconUrl = useBaseUrl("img/bug-icon.svg");

  return (
    <div className="margin-bottom--lg margin-top-md">
      <div className="row margin-left--none navbar__inner">
        {/* Last Updated at */}
        <div className="user-options">
          {(props.lastUpdatedAt || props.lastUpdatedBy) && (
            <div className="text--left avatar">
              <div className={styles.docLastUpdatedAt}>Last updated </div>
              {props.lastUpdatedAt && (
                <>
                  :&nbsp;{" "}
                  <time
                    className="margin-right--sm"
                    dateTime={new Date(
                      props.lastUpdatedAt * 1000
                    ).toISOString()}
                  >
                    {new Date(props.lastUpdatedAt * 1000).toLocaleDateString()}
                  </time>
                  {props.lastUpdatedBy && " "}
                </>
              )}
              |
              {/* TODO:(perf) Reading time renders once the content component is mounted, thus it takes some time to load*/}
              <div className="margin-left--sm margin-right--sm">
                {props.readingTimeInWords ? (
                  <>{props.readingTimeInWords}</>
                ) : (
                  <>0 min read</>
                )}
              </div>
              |
              {props.lastUpdatedBy && (
                <>
                  by <strong>{props.lastUpdatedBy}</strong>
                </>
              )}
            </div>
          )}

        </div>

        <div className="user-options">
          
          {/* Edit URL */}
          <div className="margin-left--sm edit-this-page">
            {props.editUrl && (
              <a href={props.editUrl} target="_blank" rel="noreferrer noopener">
                Edit this page
              </a>
            )}
          </div>
          

          {/* Open Doc Issue Button*/}
          <div className="margin-right--md display-flex">
            {openDocIssueURL && (
              <a
                href={openDocIssueURL}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="padding-right--sm"
                  src={bugIconUrl}
                  style={{
                    width: "16px",
                    verticalAlign: "-0.125em",
                  }}
                ></img>
                Open doc issue
              </a>
            )}
          </div>

          {/* Share Button*/}
          <div className="display-flex">
            <ShareButton title={props.title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocsInfo;