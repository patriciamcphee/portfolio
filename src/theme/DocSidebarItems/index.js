import { ThemeClassNames } from "@docusaurus/theme-common"
// import latestRelease from "@site/latestRelease.json"
import DocSidebarItems from "@theme-original/DocSidebarItems"
import clsx from "clsx"
import React from "react"
import { Divider } from "antd"


export default function DocSidebarItemsWrapper(props) {
  

  return (
    <>
      {props.level === 1 ? (
        <li
          className={clsx(
            ThemeClassNames.docs.docSidebarItemLink,
            "theme-doc-sidebar-item-link-level-1",
          //  "version-selector",
            "margin-left--sm",
            "sidebar-title"
          )}
        >
         

        </li>
      ) : null}
      <DocSidebarItems {...props} />
    </>
  )
}