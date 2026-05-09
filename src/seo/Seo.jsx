import React from "react";
import { Helmet } from "react-helmet-async";

export default function Seo({
  title,
  description,
  keywords,
  canonical,
  image,
  type = "website",
  noindex = false,
  jsonLd = null,
}) {
  const site = "https://www.vellinfotech.com";
  const fullCanonical = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${site}${canonical}`
    : site;

  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${site}${image}`
    : `${site}/og-default.jpg`;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Vell InfoTech" />

      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {jsonLd &&
        (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((obj, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
          />
        ))}
    </Helmet>
  );
}
