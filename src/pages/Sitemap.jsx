import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './Sitemap.css';

const sitemapData = [
  {
    category: 'Main Pages',
    icon: '🏠',
    links: [
      { name: 'Home', path: '/' },
      { name: 'Premium Furniture', path: '/premium' },
      { name: 'Budget Furniture', path: '/budget' },
      { name: 'Custom Furniture', path: '/custom-furniture' },
      { name: 'Bulk Orders', path: '/bulk-orders' },
    ],
  },
  {
    category: 'B2B Solutions',
    icon: '🏢',
    links: [
      { name: 'Hotels & Resorts', path: '/hotels-and-resorts' },
      { name: 'Hostels & PG Rooms', path: '/hostels-and-pg' },
      { name: 'Offices & Co-Working', path: '/offices-and-coworking' },
      { name: 'Schools & Colleges', path: '/schools-and-colleges' },
    ],
  },
  {
    category: 'Company',
    icon: 'ℹ️',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
  {
    category: 'Legal',
    icon: '⚖️',
    links: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Refund & Returns', path: '/refund-policy' },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="sitemap-page">
      <SEO 
        title="Visual Sitemap | Furniture Hub Ayodhya"
        description="Navigate through all pages of Furniture Hub Ayodhya. Find premium, budget, custom furniture, and B2B solutions easily."
        keywords="sitemap, furniture hub sitemap, website navigation"
      />
      
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sitemap-header"
        >
          <h1>Visual Sitemap</h1>
          <p>Quickly find what you're looking for.</p>
        </motion.div>

        <div className="sitemap-grid">
          {sitemapData.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="sitemap-section"
            >
              <h2>
                <span className="section-icon">{section.icon}</span>
                {section.category}
              </h2>
              <ul className="sitemap-list">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
