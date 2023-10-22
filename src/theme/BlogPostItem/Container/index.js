import React from 'react';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import {useBlogPost} from '@docusaurus/theme-common/internal';
export default function BlogPostItemContainer({children, className}) {
  const {
    frontMatter,
    assets,
    metadata: {description},
  } = useBlogPost();
  const {withBaseUrl} = useBaseUrlUtils();
  const image = assets.image ?? frontMatter.image;
  const keywords = frontMatter.keywords ?? [];


  window.erxesSettings = {
    messenger: {
      brand_id: "_-LCq3",
    },
  };
  
  (() => {
    const script = document.createElement('script');
    script.src = "https://pscmdesigns.app.erxes.io/widgets/build/messengerWidget.bundle.js";
    script.async = true;

    const entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);
  })();


  return (
    
    <article
      className={className}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting">
      {description && <meta itemProp="description" content={description} />}
      {image && (
        <link itemProp="image" href={withBaseUrl(image, {absolute: true})} />
      )}
      {keywords.length > 0 && (
        <meta itemProp="keywords" content={keywords.join(',')} />
      )}
      {children}
    </article>
  );
}
