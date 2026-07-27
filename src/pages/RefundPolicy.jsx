import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer } from '../components/AnimatedSection';
import WhatsAppButton from '../components/WhatsAppButton';
import { BRAND_NAME, EMAIL } from '../data/products';
import './LegalPage.css';

export default function RefundPolicy() {
  useEffect(() => {
    document.title = `Refund & Cancellation Policy | ${BRAND_NAME}`;
  }, []);

  return (
    <div className="legal-page">
      {/* Hero */}
      <section className="legal-hero">
        <div className="container legal-hero__content">
          <motion.span
            className="legal-hero__badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            ⭐ Guaranteed Quality & Care
          </motion.span>
          <motion.h1
            className="font-serif legal-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Refund & Cancellation Policy
          </motion.h1>
          <motion.p
            className="legal-hero__subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Every piece crafted in Ayodhya is built with pride. Read our clear, transparent
            policy on transit damage protection, cancellations, and refunds.
          </motion.p>
        </div>
      </section>

      <div className="container">
        {/* Bento Highlights */}
        <StaggerContainer className="legal-highlights">
          <div className="legal-highlight-card">
            <span className="legal-highlight-card__icon">🚚</span>
            <h3 className="font-serif legal-highlight-card__title">100% Transit Protection</h3>
            <p className="legal-highlight-card__desc">
              Free repair or replacement if your furniture arrives damaged during transport.
            </p>
          </div>
          <div className="legal-highlight-card">
            <span className="legal-highlight-card__icon">⚡</span>
            <h3 className="font-serif legal-highlight-card__title">Easy 24h Cancellation</h3>
            <p className="legal-highlight-card__desc">
              Cancel catalog orders within 24 hours of placing for a full 100% refund.
            </p>
          </div>
          <div className="legal-highlight-card">
            <span className="legal-highlight-card__icon">💰</span>
            <h3 className="font-serif legal-highlight-card__title">5-7 Day Fast Refund</h3>
            <p className="legal-highlight-card__desc">
              Approved refunds are credited directly back to your original payment mode or UPI.
            </p>
          </div>
        </StaggerContainer>

        {/* Detailed Sections */}
        <div className="legal-body">
          {/* Card 1 */}
          <AnimatedSection className="legal-card">
            <div className="legal-card__header">
              <div className="legal-card__icon-badge">🛡️</div>
              <div>
                <h2 className="font-serif legal-card__title">1. Transit Damage Guarantee</h2>
              </div>
            </div>
            <p className="legal-card__text">
              We package every piece of furniture with heavy-duty multi-layer protection. However, in the rare event of transit damage, we stand by our products 100%:
            </p>

            <div className="legal-feature-grid">
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">📹 Step 1: Unboxing Proof</div>
                <p className="legal-feature-item__desc">Record a short unboxing video or take photos when receiving the shipment from our delivery executive.</p>
              </div>
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">📲 Step 2: Share Within 48h</div>
                <p className="legal-feature-item__desc">Send the photos/video on WhatsApp or email (<a href={`mailto:${EMAIL}`}>{EMAIL}</a>) within 48 hours of delivery.</p>
              </div>
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">🛠️ Step 3: Instant Resolution</div>
                <p className="legal-feature-item__desc">Our team will immediately ship replacement hardware, send a local carpenter, or dispatch a brand new piece.</p>
              </div>
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">💯 Zero Extra Cost</div>
                <p className="legal-feature-item__desc">You pay ₹0 for replacement freight or repairs due to transit damage.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2 */}
          <AnimatedSection className="legal-card">
            <div className="legal-card__header">
              <div className="legal-card__icon-badge">🔄</div>
              <div>
                <h2 className="font-serif legal-card__title">2. Order Cancellation Policy</h2>
              </div>
            </div>
            <p className="legal-card__text">
              Cancellation guidelines vary based on standard catalog items versus bespoke custom furniture:
            </p>

            <div className="legal-feature-grid">
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">📦 Standard Catalog Furniture</div>
                <p className="legal-feature-item__desc">
                  Full 100% refund for cancellations within 24 hours of ordering. If cancelled after courier dispatch, outward and return freight costs will be deducted.
                </p>
              </div>
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">✏️ Bespoke Custom Orders</div>
                <p className="legal-feature-item__desc">
                  We share raw wood and finish photos on WhatsApp before dispatch. Once wood cutting begins (after 48h), advance deposits are non-refundable as materials are custom-sized to your space.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 3 */}
          <AnimatedSection className="legal-card">
            <div className="legal-card__header">
              <div className="legal-card__icon-badge">💳</div>
              <div>
                <h2 className="font-serif legal-card__title">3. Refund Processing & Timelines</h2>
              </div>
            </div>
            <p className="legal-card__text">
              Once a return or cancellation request is verified and approved by our team:
            </p>

            <div className="legal-callout">
              <span className="legal-callout__icon">⏱️</span>
              <div className="legal-callout__content">
                <h4>5 to 7 Business Days Processing</h4>
                <p>
                  Approved refunds are credited directly to your original bank account, credit card, or UPI ID. You will receive an official digital refund receipt on WhatsApp and SMS as soon as the transaction is completed.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Support Banner */}
        <AnimatedSection className="legal-support-box">
          <h2 className="font-serif legal-support-box__title">Need Help With a Claim or Order?</h2>
          <p className="legal-support-box__desc">
            Our Ayodhya support desk is active 7 days a week. Reach out via WhatsApp or email for instant assistance with your order or delivery.
          </p>
          <div className="legal-support-box__actions">
            <WhatsAppButton message="Hi Furniture Hub Ayodhya, I need help regarding a return, replacement, or order issue.">
              Contact Support on WhatsApp
            </WhatsAppButton>
            <a href={`mailto:${EMAIL}`} className="btn btn-secondary btn-lg">
              Email Support
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
