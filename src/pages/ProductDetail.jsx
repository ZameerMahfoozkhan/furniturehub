import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedSection, { StaggerContainer } from '../components/AnimatedSection';
import ImageCarousel from '../components/ImageCarousel';
import ProductCard from '../components/ProductCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { getProductBySlug, getRelatedProducts, BRAND_NAME, PHONE_DISPLAY } from '../data/products';
import './ProductDetail.css';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | ${BRAND_NAME}`;
    }
  }, [product]);

  if (!product) {
    return (
      <div className="not-found section container">
        <h1 className="font-serif">Product Not Found</h1>
        <p>The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    );
  }


  const related = getRelatedProducts(product);
  const isPremium = product.category === 'premium';
  const categoryLabel = isPremium ? 'Premium Wood' : 'Engineered Wood';
  const categoryPath = isPremium ? '/premium' : '/budget';

  // Dummy variants
  const variants = isPremium
    ? ['Natural Finish', 'Honey Teak', 'Dark Walnut', 'Mahogany']
    : ['Walnut Laminate', 'Oak Laminate', 'White Matte', 'Beech'];

  const whatsappMsg = selectedVariant
    ? `Hi, I'm interested in ${product.name} in ${selectedVariant} finish. Can you share more details?`
    : `Hi, I'm interested in ${product.name}. Can you share more details?`;

  return (
    <div className={`product-detail ${isPremium ? '' : 'product-detail--budget'}`} data-theme={isPremium ? undefined : 'budget'}>
      {/* Breadcrumb */}
      <div className="breadcrumb container">
        <Link to="/">Home</Link>
        <span className="breadcrumb__sep">/</span>
        <Link to={categoryPath}>{categoryLabel}</Link>
        <span className="breadcrumb__sep">/</span>
        <span className="breadcrumb__current">{product.name}</span>
      </div>

      {/* Product Layout */}
      <section className="product-layout container">
        <div className="product-layout__left">
          <ImageCarousel
            images={product.images}
            productName={product.name}
            subType={product.subType}
            category={product.category}
          />
        </div>

        <div className="product-layout__right">
          <AnimatedSection>
            <span className={`badge ${isPremium ? '' : 'badge-value'}`}>{categoryLabel}</span>
            <span className="eyebrow product-detail__material">{product.material}</span>
            <h1 className="font-serif product-detail__name">{product.name}</h1>



            <p className="product-detail__desc">{product.description}</p>

            {/* Specs */}
            <div className="product-detail__specs">
              <h3 className="eyebrow">Specifications</h3>
              <table className="specs-table">
                <tbody>
                  <tr><td>Dimensions</td><td>{product.specs.dimensions}</td></tr>
                  <tr><td>Finish</td><td>{product.specs.finish}</td></tr>
                  <tr><td>Delivery</td><td>{product.specs.deliveryEstimate}</td></tr>
                  <tr><td>Warranty</td><td>{product.specs.warranty}</td></tr>
                </tbody>
              </table>
            </div>

            {/* Variant Selector */}
            <div className="product-detail__variants">
              <h3 className="eyebrow">Select Finish</h3>
              <div className="variant-chips">
                {variants.map((v) => (
                  <button
                    key={v}
                    className={`variant-chip ${selectedVariant === v ? 'variant-chip--active' : ''}`}
                    onClick={() => setSelectedVariant(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="product-detail__ctas">
              <WhatsAppButton message={whatsappMsg} className="btn-lg product-detail__cta-primary">
                Enquire on WhatsApp
              </WhatsAppButton>
              <a href={`tel:+${PHONE_DISPLAY.replace(/\s/g, '')}`} className="btn btn-secondary btn-lg">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Call to Order
              </a>
            </div>

            {/* Trust Badges */}
            <div className="product-detail__trust">
              {['🚚 Pan India Delivery', '🔄 Easy Exchange', '🛡️ Quality Assured'].map((badge, i) => (
                <span key={i} className="trust-badge">{badge}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section related-section">
          <div className="container">
            <AnimatedSection>
              <h2 className="font-serif related-section__heading">You May Also Like</h2>
            </AnimatedSection>
            <StaggerContainer className="related-grid">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </div>
  );
}
