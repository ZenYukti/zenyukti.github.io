import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
  noindex?: boolean;
}

const SEO = ({
  title = "ZenYukti - Community of Tech Enthusiasts",
  description = "ZenYukti is a vibrant community of developers, designers, and tech enthusiasts collaborating to build innovative projects and learn together.",
  keywords = "zenyukti, tech community, developers, open source, coding, programming, technology, student community",
  author = "ZenYukti Team",
  ogImage = "https://zenyukti.in/assets/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonical,
  noindex = false,
}: SEOProps) => {
  const siteUrl = "https://zenyukti.in";
  const fullTitle = title.includes("ZenYukti") ? title : `${title} | ZenYukti`;
  const canonicalUrl = canonical || siteUrl + window.location.pathname;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href={canonicalUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="ZenYukti" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ZenYukti" />
      <meta name="twitter:creator" content="@ZenYukti" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
};

export default SEO;
