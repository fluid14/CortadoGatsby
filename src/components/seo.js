import * as React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

function Seo({
  favicon,
  description,
  title,
  keywords,
  shareImage,
  preventIndexing,
  siteUrl,
  children,
}) {
  const {
    favicon: defaultFavicon,
    seo: {
      keywords: defaultKeywords,
      title: defaultMetaTitle,
      description: defaultMetaDescription,
      preventIndexing: defaultPreventIndexing,
      shareImage: defaultShareImageUrl,
    },
    siteUrl: defaultSiteUrl,
  } = useSiteMetadata();

  const metaFavicon = favicon?.localFile?.url || defaultFavicon?.localFile?.url;
  const metaTitle = title || defaultMetaTitle;
  const metaDescription = description || defaultMetaDescription;
  const metaKeywords = keywords || defaultKeywords;
  const metaPreventIndexing = preventIndexing || defaultPreventIndexing;
  const metaImage = defaultShareImageUrl?.localFile?.url || shareImage?.localFile?.url;
  const metaSiteUrl = siteUrl || defaultSiteUrl;

  return (
    <>
      <title>{metaTitle}</title>
      <link rel="icon" type="image/x-icon" href={metaFavicon} />
      <meta name="image" content={metaImage} />
      <meta name="description" key="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta property="og:title" key="og:title" content={metaTitle} />
      <meta property="og:description" key="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" key="og:url" content={metaSiteUrl} />
      <meta property="og:image" key="og:image" content={metaImage} />
      <link rel="canonical" href={metaSiteUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {metaPreventIndexing && (
        <>
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
        </>
      )}
      {children}
    </>
  );
}

export default Seo;
