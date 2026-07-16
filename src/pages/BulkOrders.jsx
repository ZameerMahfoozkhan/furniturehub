import { motion } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';
import './BulkOrders.css';

const AnimatedSection = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function BulkOrders() {
  return (
    <div className="bulk-page">
      {/* Hero */}
      <section className="bulk-hero wood-texture">
        <div className="bulk-hero__bg" />
        <div className="container bulk-hero__content">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            B2B & Wholesale
          </motion.span>
          <motion.h1
            className="font-serif bulk-hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Bulk Orders for<br />Hotels, Offices & Projects.
          </motion.h1>
          <motion.p
            className="bulk-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Looking to furnish a commercial space, hostel, or hotel? We offer volume pricing on our entire catalog, plus custom manufacturing tailored to your project.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bulk-benefits">
        <div className="container">
          <AnimatedSection className="bulk-benefits__header text-center">
            <span className="eyebrow">The Furniture Hub Advantage</span>
            <h2 className="font-serif section-title">Why Partner With Us?</h2>
          </AnimatedSection>
          
          <div className="bulk-benefits__grid">
            <AnimatedSection className="benefit-card" delay={0.1}>
              <div className="benefit-card__icon">💰</div>
              <h3 className="font-serif benefit-card__title">Factory-Direct Pricing</h3>
              <p className="benefit-card__desc">By cutting out the middlemen, we offer highly competitive wholesale rates on bulk volume orders without compromising on quality.</p>
            </AnimatedSection>
            
            <AnimatedSection className="benefit-card" delay={0.2}>
              <div className="benefit-card__icon">🏭</div>
              <h3 className="font-serif benefit-card__title">Custom Manufacturing</h3>
              <p className="benefit-card__desc">Need a specific design replicated 50 times? Our Ayodhya workshop can custom-build engineered or solid wood furniture to your exact specs.</p>
            </AnimatedSection>
            
            <AnimatedSection className="benefit-card" delay={0.3}>
              <div className="benefit-card__icon">🚚</div>
              <h3 className="font-serif benefit-card__title">Reliable Pan-India Delivery</h3>
              <p className="benefit-card__desc">We handle the logistics. Whether your project is in Mumbai, Delhi, or Bangalore, we ensure safe and timely delivery.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bulk-cta-section">
        <div className="container">
          <AnimatedSection className="bulk-cta__inner">
            <h2 className="font-serif bulk-cta__title">Ready to discuss your project?</h2>
            <p className="bulk-cta__desc">
              Connect directly with our B2B sales team on WhatsApp. Share your requirements, quantities, and timelines, and we'll provide a custom quotation.
            </p>
            <div className="bulk-cta__actions">
              <WhatsAppButton message="Hi Furniture Hub team! I'm interested in placing a bulk order for a commercial project. Can we discuss?" className="btn-lg">
                Chat with B2B Sales on WhatsApp
              </WhatsAppButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
