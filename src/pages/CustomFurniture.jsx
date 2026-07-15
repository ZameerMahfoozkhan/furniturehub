import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, staggerItem } from '../components/AnimatedSection';
import WhatsAppButton from '../components/WhatsAppButton';
import { BRAND_NAME } from '../data/products';
import './CustomFurniture.css';

const steps = [
  {
    num: '01',
    title: 'Share Your Vision',
    desc: 'Send us a photo, sketch, Pinterest pin, or reference link on WhatsApp. Tell us the dimensions, wood type, and finish you want.',
    icon: '📸',
  },
  {
    num: '02',
    title: 'Get a Custom Quote',
    desc: 'Our team will review your design and respond with a detailed quote — including material options, pricing, and timeline.',
    icon: '💰',
  },
  {
    num: '03',
    title: 'Approve the Design',
    desc: "Confirm the material, dimensions, finish, and final price. We'll start crafting only after you're 100% satisfied with the plan.",
    icon: '✅',
  },
  {
    num: '04',
    title: 'Crafted & Delivered',
    desc: 'Our artisans handcraft your piece in Ayodhya and ship it safely to your doorstep — anywhere in India.',
    icon: '🚚',
  },
];

const faqs = [
  {
    q: 'How long does a custom piece take?',
    a: "Typical turnaround is 3–6 weeks depending on complexity, wood type, and current order volume. We'll give you a clear timeline before you confirm.",
  },
  {
    q: 'How does pricing work for custom furniture?',
    a: 'Pricing depends on the wood type, dimensions, finish, and design complexity. After reviewing your reference, we send a detailed quote with no hidden costs.',
  },
  {
    q: 'What materials can I choose from?',
    a: 'For solid wood: Sheesham, Teak, Mango Wood, and Rosewood. For budget pieces: high-quality plywood and engineered wood with a variety of laminate finishes.',
  },
  {
    q: 'Do you require a deposit?',
    a: 'Yes, we require a 40% advance to begin work. The remaining 60% is due before shipping. We share progress photos throughout the crafting process.',
  },
  {
    q: 'Can you ship custom furniture pan-India?',
    a: 'Absolutely. We ship custom pieces anywhere in India, carefully packaged and fully insured. Delivery cost is included in your quote.',
  },
  {
    q: "What if the final piece doesn't match my design?",
    a: "We share detailed progress photos at every stage. If something doesn't look right, we fix it before final finishing. Your satisfaction is our priority.",
  },
];

export default function CustomFurniture() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = `Custom Furniture — Made to Order | ${BRAND_NAME}`;
  }, []);

  return (
    <div className="custom-page">
      {/* Hero */}
      <section className="custom-hero wood-texture">
        <div className="custom-hero__bg" />
        <div className="container custom-hero__content">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Made Just for You
          </motion.span>
          <motion.h1
            className="font-serif custom-hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Your Vision,<br />Our Craftsmanship
          </motion.h1>
          <motion.p
            className="custom-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Have a unique design in mind? Send us a photo or sketch on WhatsApp and our artisans in
            Ayodhya will bring it to life — in solid wood or engineered wood, delivered anywhere in India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <WhatsAppButton
              message="Hi Furniture Hub Ayodhya! I'd like custom furniture made. I'll share a reference photo here."
              className="btn-lg"
            >
              Send Us a Photo on WhatsApp
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              Simple 4-Step Process
            </span>
            <h2 className="font-serif how-it-works__heading">How It Works</h2>
          </AnimatedSection>

          <StaggerContainer className="steps-timeline" staggerDelay={0.15}>
            {steps.map((step, i) => (
              <motion.div key={i} className="step-card" variants={staggerItem}>
                <div className="step-card__number font-serif">{step.num}</div>
                <div className="step-card__icon">{step.icon}</div>
                <h3 className="step-card__title font-serif">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
                {i < steps.length - 1 && <div className="step-card__connector" />}
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-sm custom-cta-banner">
        <div className="container">
          <AnimatedSection className="custom-cta-banner__inner">
            <h2 className="font-serif custom-cta-banner__title">Ready to Build Something Unique?</h2>
            <p>No complicated forms, no waiting. Just message us on WhatsApp with your idea and we'll take it from there.</p>
            <WhatsAppButton
              message="Hi Furniture Hub Ayodhya! I'd like custom furniture made. I'll share a reference photo here."
              className="btn-lg"
            >
              Start Your Custom Order
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="section custom-gallery">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              Past Custom Pieces
            </span>
            <h2 className="font-serif custom-gallery__heading">Our Custom Work</h2>
          </AnimatedSection>

          <StaggerContainer className="gallery-grid" staggerDelay={0.08}>
            {[
              'Custom Sheesham Bookshelf',
              'Bespoke Dining Table',
              'Handmade Console Table',
              'Custom Wardrobe Design',
              'Unique Coffee Table',
              'Made-to-Order Study Desk',
            ].map((title, i) => (
              <motion.div key={i} className="gallery-item" variants={staggerItem}>
                <div className="gallery-placeholder">
                  <span className="font-serif">{title}</span>
                  <span className="eyebrow">Custom Piece</span>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container container-narrow">
          <AnimatedSection>
            <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              Common Questions
            </span>
            <h2 className="font-serif faq-section__heading">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}>
                  <button
                    className="faq-item__question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{faq.q}</span>
                    <svg
                      className="faq-item__icon"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <motion.div
                    className="faq-item__answer"
                    initial={false}
                    animate={{
                      height: openFaq === i ? 'auto' : 0,
                      opacity: openFaq === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
