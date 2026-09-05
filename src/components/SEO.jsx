import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, schema, path = "", image = "/hero.png", ogType = "website" }) {
  const siteUrl = `https://www.furniturehubayodhya.online${path}`;
  const imageUrl = image.startsWith('http') ? image : `https://www.furniturehubayodhya.online${image}`;
  
  // Automatically generate Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.furniturehubayodhya.online/"
      }
    ]
  };

  if (path && path !== "/") {
    const pathParts = path.split('/').filter(Boolean);
    let currentPath = "https://www.furniturehubayodhya.online";
    
    pathParts.forEach((part, index) => {
      currentPath += `/${part}`;
      // Clean up the URL slug for the breadcrumb name
      const name = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');
      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": currentPath
      });
    });
  }

  // Combine user-provided schema with breadcrumb schema
  const schemasToRender = [];
  if (Array.isArray(schema)) {
    schemasToRender.push(...schema);
  } else if (schema) {
    schemasToRender.push(schema);
  }
  schemasToRender.push(breadcrumbSchema);

  return (
    <Helmet>
      {/* Primary SEO Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Furniture Hub Ayodhya" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FurnitureHub" />
      <meta property="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD Schema Markup */}
      {schemasToRender.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(schemasToRender.length === 1 ? schemasToRender[0] : schemasToRender)}
        </script>
      )}
    </Helmet>
  );
}
