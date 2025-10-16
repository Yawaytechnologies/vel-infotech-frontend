import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

/**
 * Usage:
 * <Seo
 *   title="Java Full-Stack Developer Course — Vel InfoTech"
 *   description="Learn Core & Advanced Java, Spring Boot, REST APIs, React.js and more."
 *   canonical="/courses/java-fullstack"
 *   image="/images/courses/java-og.jpg"
 *   type="article"
 *   noindex={false}
 *   jsonLd={{ "@context":"https://schema.org", "@type":"Course", name:"Java Full-Stack" }}
 * />
 */
export default function Seo({
  title,
  description,
  canonical,
  image,
  type = "website",
  noindex = false,
  jsonLd = null,
}) {
  const site = "https://YOUR_DOMAIN.com"; // ← change to your domain
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
    <HelmetProvider>
      <Helmet>
        {/* Basic */}
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {fullCanonical && <link rel="canonical" href={fullCanonical} />}
        {noindex && <meta name="robots" content="noindex,nofollow" />}

        {/* Open Graph */}
        {title && <meta property="og:title" content={title} />}
        {description && <meta property="og:description" content={description} />}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={fullCanonical} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {title && <meta name="twitter:title" content={title} />}
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD */}
        {jsonLd &&
          (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((obj, i) => (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
            />
          ))}
      </Helmet>
    </HelmetProvider>
  );
}
