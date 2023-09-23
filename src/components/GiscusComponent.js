import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="patriciamcphee/portfolio"
      repoId="R_kgDOGZ8avA"
      category="General"
      categoryId="DIC_kwDOGZ8avM4CZkkc"  // E.g. id of "General"
      mapping="pathname"                        // Important! To map comments to URL
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}