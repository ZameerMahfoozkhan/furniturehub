import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, schema, path = "" }) {
  const siteUrl = `https://www.furniturehubayodhya.online${path}`;
  
  return (
    <Helmet>
      {/* Primary SEO Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
