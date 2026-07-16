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

  return (
    <motion.div
      className="product-card"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      <Link to={`/product/${slug}`} className="product-card__image-wrap">
        <PlaceholderImage
          productName={name}
          subType={subType}
          imageLabel={images[0]?.label || 'Image 1'}
          category={category}
          src={images[0]?.src}
        />
        {badge && (
          <span className={`product-card__badge badge ${badgeClass}`}>{badge}</span>
        )}
        <div className="product-card__overlay">
          <span className="product-card__view">View Details →</span>
        </div>
      </Link>

      <div className="product-card__info">
        <span className="product-card__material eyebrow">{material}</span>
        <Link to={`/product/${slug}`} className="product-card__name font-serif">
          {name}
        </Link>
        <div className="product-card__actions">
          <WhatsAppButton
            message={`Hi, I'm interested in ${name}. Can you share more details?`}
            className="product-card__enquire"
          >
            Enquire Now
          </WhatsAppButton>
        </div>
      </div>
    </motion.div>
  );
}
