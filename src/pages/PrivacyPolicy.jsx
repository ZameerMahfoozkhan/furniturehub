import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer } from '../components/AnimatedSection';
import WhatsAppButton from '../components/WhatsAppButton';
import { BRAND_NAME, EMAIL } from '../data/products';
import SEO from '../components/SEO';
import './LegalPage.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <SEO 
        title={`Privacy Policy | ${BRAND_NAME}`}
        description="Learn how Furniture Hub Ayodhya handles and protects your personal information and custom furniture order details."
        path="/privacy-policy"
      />
      {/* Hero */}
      <section className="legal-hero">
        <div className="container legal-hero__content">
          <motion.span
            className="legal-hero__badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            🛡️ Transparency & Trust
          </motion.span>
          <motion.h1
            className="font-serif legal-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="legal-hero__subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            At {BRAND_NAME}, we value your privacy as much as our woodworking craft.
            Here is how we handle, protect, and respect your personal information.
          </motion.p>
        </div>
      </section>

      <div className="container">
        {/* Bento Highlights */}
        <StaggerContainer className="legal-highlights">
          <div className="legal-highlight-card">
            <span className="legal-highlight-card__icon">🔒</span>
            <h3 className="font-serif legal-highlight-card__title">Zero Data Selling</h3>
            <p className="legal-highlight-card__desc">
              We never sell, trade, or rent your personal information to third-party marketing companies.
            </p>
          </div>
          <div className="legal-highlight-card">
            <span className="legal-highlight-card__icon">🛡️</span>
            <h3 className="font-serif legal-highlight-card__title">Secure Processing</h3>
            <p className="legal-highlight-card__desc">
              Your details and custom furniture specifications are handled with bank-grade security protocols.
            </p>
          </div>
          <div className="legal-highlight-card">
            <span className="legal-highlight-card__icon">🚚</span>
            <h3 className="font-serif legal-highlight-card__title">Verified Delivery Only</h3>
            <p className="legal-highlight-card__desc">
              Address data is shared strictly with verified Pan-India logistics partners for order fulfillment.
            </p>
          </div>
        </StaggerContainer>

        {/* Detailed Sections */}
        <div className="legal-body">
          {/* Card 1 */}
          <AnimatedSection className="legal-card">
            <div className="legal-card__header">
              <div className="legal-card__icon-badge">📋</div>
              <div>
                <h2 className="font-serif legal-card__title">1. Information We Collect</h2>
              </div>
            </div>
            <p className="legal-card__text">
              When you interact with {BRAND_NAME} — whether exploring our catalog, requesting a custom quote on WhatsApp, or placing an order — we collect only the necessary details required to fulfill your request smoothly:
            </p>
            <div className="legal-feature-grid">
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">👤 Contact Information</div>
                <p className="legal-feature-item__desc">Your name, phone number, delivery address, and email address for order confirmation and shipping.</p>
              </div>
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">📐 Custom Order Specs</div>
                <p className="legal-feature-item__desc">Dimensions, reference photos, wood choice (Sheesham, Teak, Mango Wood), and laminate finish preferences.</p>
              </div>
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">💳 Payment Confirmation</div>
                <p className="legal-feature-item__desc">Transaction receipts and payment confirmation (we do NOT store raw card details or banking passwords).</p>
              </div>
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">🌐 Technical Analytics</div>
                <p className="legal-feature-item__desc">Basic performance metrics to ensure our website loads fast and smoothly across desktop and mobile.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2 */}
          <AnimatedSection className="legal-card">
            <div className="legal-card__header">
              <div className="legal-card__icon-badge">💡</div>
              <div>
                <h2 className="font-serif legal-card__title">2. How We Use Your Information</h2>
              </div>
            </div>
            <p className="legal-card__text">
              We process your data strictly to provide an exceptional furniture buying and custom crafting experience:
            </p>
            <div className="legal-feature-grid">
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">🔨 Crafting & Manufacturing</div>
                <p className="legal-feature-item__desc">Passing your precise dimensions and finish preferences to our artisans in Ayodhya.</p>
              </div>
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">📸 Progress Updates</div>
                <p className="legal-feature-item__desc">Sending real-time crafting photos and videos on WhatsApp before final polishing and packing.</p>
              </div>
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">🚚 Doorstep Shipping</div>
                <p className="legal-feature-item__desc">Coordinating with courier partners to schedule safe, insured doorstep delivery across India.</p>
              </div>
              <div className="legal-feature-item">
                <div className="legal-feature-item__title">🤝 Dedicated Support</div>
                <p className="legal-feature-item__desc">Answering queries, offering care advice, and providing warranty assistance for years to come.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 3 */}
          <AnimatedSection className="legal-card">
            <div className="legal-card__header">
              <div className="legal-card__icon-badge">🔑</div>
              <div>
                <h2 className="font-serif legal-card__title">3. Data Confidentiality & Security</h2>
              </div>
            </div>
            <p className="legal-card__text">
              We employ strict organizational and technical safeguards to keep your information private and protected from unauthorized access or disclosure.
            </p>

            <div className="legal-callout">
              <span className="legal-callout__icon">💬</span>
              <div className="legal-callout__content">
                <h4>Direct Support Promise</h4>
                <p>
                  If you ever wish to update your details, request data deletion, or inquire about how your order details are stored, simply send us a message on WhatsApp or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and our team in Ayodhya will assist you immediately.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Support Banner */}
        <AnimatedSection className="legal-support-box">
          <h2 className="font-serif legal-support-box__title">Have Privacy Questions?</h2>
          <p className="legal-support-box__desc">
            Our team is always here to assist. Chat with us on WhatsApp or reach out via email for any inquiries regarding your privacy or orders.
          </p>
          <div className="legal-support-box__actions">
            <WhatsAppButton message="Hi Furniture Hub Ayodhya, I have a question regarding my order privacy or data.">
              Chat with Support on WhatsApp
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
