import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { products } from '../src/data/products.js';
import { targetCities } from '../src/data/seoLocations.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found. Run npm run build first.');
  process.exit(1);
}

const template = fs.readFileSync(indexHtmlPath, 'utf-8');

// Define the routes and their specific SEO tags to hardcode for crawlers
const routes = [
  {
    path: '/',
    title: 'Best Furniture Shop in Ayodhya | Buy Solid Wood & Budget Furniture',
    description: 'Shop premium Sheesham, Teak & affordable engineered wood furniture directly from the factory. Upgrade your home with Furniture Hub Ayodhya. Pan-India Delivery.'
  },
  {
    path: '/budget',
    title: 'Buy Affordable Engineered Wood Furniture | Beds, Wardrobes, TV Units',
    description: 'Looking for cheap yet durable furniture? Shop our budget-friendly engineered wood collection. Get beds, wardrobes & shoe racks at factory prices. Pan-India Delivery.'
  },
  {
    path: '/premium',
    title: 'Premium Solid Wood Furniture | Handcrafted Sheesham & Teak',
    description: 'Discover luxury handcrafted solid wood furniture. Shop premium Sheesham, Teak, and Rosewood beds, sofas & dining sets. Built to last generations. Buy online today!'
  },
  {
    path: '/bulk-orders',
    title: 'Wholesale & Bulk Furniture Supplier | B2B Prices for Hotels & PGs',
    description: 'Need furniture for your hotel, PG, or school? Get exclusive B2B wholesale discounts on solid & engineered wood furniture from Furniture Hub Ayodhya. Contact us today!'
  },
  {
    path: '/custom-furniture',
    title: 'Custom Made Furniture Online | Bespoke & Tailor-Made Designs',
    description: 'Bring your dream furniture to life! We craft custom, made-to-order furniture tailored to your exact dimensions and wood preferences. Start designing with us today.'
  },
  {
    path: '/about',
    title: 'Our Story | Furniture Hub Ayodhya — Handcrafted Since 2010',
    description: 'Discover the journey of Furniture Hub Ayodhya. From a local workshop to a trusted Pan-India furniture brand, learn how we craft quality furniture for every home.'
  },
  {
    path: '/contact',
    title: 'Contact Us | Furniture Hub Ayodhya — Call or WhatsApp Today',
    description: 'Got questions or ready to order? Contact Furniture Hub Ayodhya via WhatsApp or phone. We\'re here to help with custom designs, bulk orders, and pan-India delivery.'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Furniture Hub Ayodhya',
    description: 'Learn how Furniture Hub Ayodhya handles and protects your personal information and custom furniture order details.'
  },
  {
    path: '/refund-policy',
    title: 'Refund & Cancellation Policy | Furniture Hub Ayodhya',
    description: 'Read Furniture Hub Ayodhya\'s transparent policy on transit damage protection, order cancellations, and refunds.'
  },
  {
    path: '/404',
    title: '404 - Page Not Found | Furniture Hub Ayodhya',
    description: 'The page you are looking for does not exist.'
  },
  {
    path: '/hotels-and-resorts',
    title: 'Hotel & Resort Furniture Manufacturer in Ayodhya | Bulk Orders',
    description: 'Premium bulk furniture for hotels and resorts. Factory-direct beds, wardrobes, TV units, and lounge seating manufactured in Ayodhya.'
  },
  {
    path: '/hostels-and-pg',
    title: 'Hostel & PG Furniture Manufacturer in Ayodhya | Bulk Beds & Wardrobes',
    description: 'Bulk hostel and PG room furniture in Ayodhya. Durable bunk beds, single beds, lockable wardrobes, and study tables at wholesale prices.'
  },
  {
    path: '/offices-and-coworking',
    title: 'Office & Co-Working Furniture in Ayodhya | Bulk Desks & Chairs',
    description: 'Transform your workspace with our ergonomic and modular office furniture. Bulk workstations, executive desks, and conference tables in Ayodhya.'
  },
  {
    path: '/schools-and-colleges',
    title: 'School & College Furniture Manufacturer in Ayodhya | Desks & Benches',
    description: 'Factory-direct educational furniture. We supply bulk classroom desks, benches, library racks, and playground furniture in Ayodhya.'
  },
  {
    path: '/sitemap',
    title: 'Visual Sitemap | Furniture Hub Ayodhya',
    description: 'Navigate through all pages of Furniture Hub Ayodhya. Find premium, budget, custom furniture, and B2B solutions easily.'
  }
];

// Dynamically add all product routes
products.forEach(product => {
  routes.push({
    path: `/product/${product.slug}`,
    title: `${product.name} | Furniture Hub Ayodhya`,
    description: product.description.substring(0, 160).replace(/\n/g, ' ') + '...',
    image: product.images && product.images.length > 0 ? product.images[0].src : null,
    ogType: 'product'
  });
});

// Dynamically add programmatic SEO city routes
const industries = [
  { slug: 'school-and-college-furniture', titlePrefix: 'School & College Furniture Manufacturer in', descPrefix: 'Factory-direct educational furniture. We supply bulk classroom desks, benches, library racks, and playground furniture in' },
  { slug: 'hotel-and-resort-furniture', titlePrefix: 'Hotel & Resort Furniture Manufacturer in', descPrefix: 'Premium bulk furniture for hotels and resorts. Factory-direct beds, wardrobes, TV units, and lounge seating manufactured for' },
  { slug: 'office-and-coworking-furniture', titlePrefix: 'Office & Co-Working Furniture in', descPrefix: 'Transform your workspace with our ergonomic and modular office furniture. Bulk workstations, executive desks, and conference tables in' },
  { slug: 'hostel-and-pg-furniture', titlePrefix: 'Hostel & PG Furniture Manufacturer in', descPrefix: 'Bulk hostel and PG room furniture in' }
];

targetCities.forEach(city => {
  const cityLower = city.toLowerCase();
  industries.forEach(ind => {
    routes.push({
      path: `/${ind.slug}-in-${cityLower}`,
      title: `${ind.titlePrefix} ${city} | Furniture Hub`,
      description: `${ind.descPrefix} ${city}.`
    });
  });
});

routes.forEach(route => {
  let html = template;
  
  // Replace title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  
  // Replace description
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`);

  // Replace Open Graph / Twitter Tags
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description}" />`);

  if (route.image) {
    const imageUrl = route.image.startsWith('http') ? route.image : `https://www.furniturehubayodhya.online${route.image}`;
    html = html.replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${imageUrl}" />`);
    html = html.replace(/<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${imageUrl}" />`);
  }

  if (route.ogType) {
    html = html.replace(/<meta property="og:type" content=".*?" \/>/, `<meta property="og:type" content="${route.ogType}" />`);
  }

  // Update canonical URL if it exists
  const canonicalPath = route.path === '/' ? '' : route.path;
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="https://www.furniturehubayodhya.online${canonicalPath}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="https://www.furniturehubayodhya.online${canonicalPath}" />`);
  html = html.replace(/<meta property="twitter:url" content=".*?" \/>/, `<meta property="twitter:url" content="https://www.furniturehubayodhya.online${canonicalPath}" />`);

  const routeDir = path.join(distDir, route.path);
  
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const outputPath = path.join(routeDir, 'index.html');
  fs.writeFileSync(outputPath, html);
  console.log(`Generated static HTML for route: ${route.path === '/' ? '/ (index.html)' : route.path}`);
});

console.log('Prerendering completed successfully.');
