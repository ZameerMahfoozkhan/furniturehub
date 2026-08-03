import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PlaceholderImage from './PlaceholderImage';
import WhatsAppButton from './WhatsAppButton';
import './ProductCard.css';

export default function ProductCard({ product, index = 0 }) {
  const { slug, name, category, subType, material, badge, images } = product;

  const badgeClass = badge === 'Best Seller' ? 'badge-bestseller' :
                     badge === 'New' ? 'badge-new' :
                     badge === 'Great Value' ? 'badge-value' : '';

  const categoryLabel = category === 'premium' ? 'Premium Wood' : 'Budget Range';
  const categoryIcon = category === 'premium' ? '🪵' : '🏷️';

  return (
    <motion.div
      className={`product-card product-card--${category}`}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {/* Accent top line */}
      <div className="product-card__accent-line" />

      <Link to={`/product/${slug}`} className="product-card__image-wrap">
        <PlaceholderImage
          productName={name}
          subType={subType}
          imageLabel={images[0]?.label || 'Image 1'}
          category={category}
          src={images[0]?.src}
        />
        {badge && (
          <span className={`product-card__badge ${badgeClass}`}>{badge}</span>
        )}
        {/* Shimmer on hover */}
        <div className="product-card__shimmer" />
        <div className="product-card__overlay">
          <span className="product-card__view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            View Details
          </span>
        </div>
      </Link>

      <div className="product-card__body">
        <div className="product-card__info">
          <div className="product-card__meta">
            <span className="product-card__material-pill">
              {material}
            </span>
            <span className="product-card__category-pill">
              {categoryIcon} {categoryLabel}
            </span>
          </div>
          <Link to={`/product/${slug}`} className="product-card__name font-serif">
            {name}
          </Link>
        </div>

        <div className="product-card__actions">
          <WhatsAppButton
            message={`Hi, I'm interested in ${name}. Can you share more details?`}
            className="product-card__enquire"
          >
            Enquire Now
          </WhatsAppButton>
          <Link to={`/product/${slug}`} className="product-card__details-link">
            View Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
