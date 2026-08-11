import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { BRAND_NAME } from '../data/products';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <SEO 
        title={`404 - Page Not Found | ${BRAND_NAME}`}
        description="The page you are looking for does not exist."
      />
      <div className="container not-found__content">
        <motion.h1 
          className="font-serif not-found__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>
        <motion.h2 
          className="font-serif not-found__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Oops! Looks like you're lost.
        </motion.h2>
        <motion.p 
          className="not-found__text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        <motion.div 
          className="not-found__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link to="/" className="btn btn-primary btn-lg">Back to Home</Link>
          <Link to="/budget" className="btn btn-secondary btn-lg">Shop Budget</Link>
          <Link to="/premium" className="btn btn-secondary btn-lg">Shop Premium</Link>
        </motion.div>
      </div>
    </div>
  );
}
