import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';
import { trustStats } from '../data/products';
import './BulkOrders.css';

/* ── Animated Section ── */
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

/* ── Animated Counter ── */
function AnimCounter({ value, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {value.toLocaleString('en-IN')}{suffix}
        </motion.span>
      ) : '0'}
    </motion.span>
  );
}

/* ── Data: Bulk product categories ── */
const bulkCategories = [
  {
    icon: '🛏️',
    title: 'Beds',
    keywords: 'Bulk Bed Supplier · Hostel Bed · Hotel Bed · Engineered Wood Bed Wholesale',
    desc: 'Single, double & bunk beds in engineered wood and particle board. Hydraulic storage beds also available in bulk.',
    startPrice: '4,999',
  },
  {
    icon: '🛋️',
    title: 'Sofas & Seating',
    keywords: 'Bulk Sofa Supplier · Hotel Sofa · Cafe Sofa · Office Sofa · Reception Sofa',
    desc: 'Reception sofas, café seating, office chairs, and living-room sets in solid wood and engineered wood.',
    startPrice: '8,999',
  },
  {
    icon: '🗄️',
    title: 'Wardrobes',
    keywords: 'Wardrobe Wholesale · Bulk Wardrobe · Hostel Wardrobe · Hotel Wardrobe',
    desc: '2-door and 3-door wardrobes with lockable compartments for hostel rooms, hotel suites, and apartments.',
    startPrice: '4,499',
  },
  {
    icon: '🖥️',
    title: 'Tables & Desks',
    keywords: 'Bulk Table Supplier · Office Table · Study Table Wholesale · Computer Table · Dining Table Bulk',
    desc: 'Office desks, computer tables, study tables, and dining tables for schools, colleges, and offices.',
    startPrice: '2,999',
  },
  {
    icon: '📺',
    title: 'TV Units & Storage',
    keywords: 'Bulk TV Unit · Shoe Rack Wholesale · Entertainment Unit',
    desc: 'Wall-mounted TV units and shoe rack cabinets for furnished apartments and guest houses.',
    startPrice: '2,499',
  },
  {
    icon: '🛕',
    title: 'Pooja Mandirs',
    keywords: 'Bulk Mandir · Wooden Temple Wholesale · LED Mandir',
    desc: 'LED-backlit wooden mandirs with storage. Popular for builder projects and retail reselling.',
    startPrice: '5,999',
  },
];

/* ── Data: Industries ── */
const industries = [
  { icon: '🏨', title: 'Hotels & Resorts', desc: 'Complete room packages — beds, wardrobes, desks, TV units & sofas.' },
  { icon: '🏠', title: 'Hostels & PG Rooms', desc: 'Budget beds, wardrobes & study tables for shared living spaces.' },
  { icon: '🏢', title: 'Offices & Co-Working', desc: 'Executive desks, reception sofas, meeting tables & cabinets.' },
  { icon: '🏫', title: 'Schools & Colleges', desc: 'Classroom tables, library furniture, and hostel beds at scale.' },
  { icon: '🏗️', title: 'Builders & Apartments', desc: 'Flat-ready packages — bed, wardrobe, TV unit, shoe rack per unit.' },
  { icon: '☕', title: 'Cafés & Restaurants', desc: 'Dining tables, counter furniture & accent seating for F&B.' },
  { icon: '🏡', title: 'Guest Houses', desc: 'Complete guest room sets — budget and premium options.' },
  { icon: '🏘️', title: 'Rental Properties', desc: 'Durable, cost-effective furniture for service apartments.' },
];

/* ── Data: Materials ── */
const materials = [
  {
    title: 'Engineered Wood',
    desc: 'Our most popular bulk range — excellent durability, premium look, lower cost than solid wood. Top choice for hotels, hostels, offices, and apartments.',
    tags: ['Engineered Wood Bed', 'Engineered Wood Wardrobe', 'Engineered Wood TV Unit', 'Engineered Wood Study Table', 'Engineered Wood Dining Table', 'Engineered Wood Office Furniture'],
    color: '#C1603F',
  },
  {
    title: 'Particle Board',
    desc: 'The most affordable option for high-volume orders. Lightweight, easy to install, available in a wide range of finishes. Ideal for budget hotel rooms and PG hostels.',
    tags: ['Particle Board Bed', 'Particle Board Wardrobe', 'Particle Board Table', 'Particle Board Office Desk', 'Affordable Particle Board Furniture'],
    color: '#8A7D6B',
  },
  {
    title: 'Premium Solid Wood',
    desc: 'For luxury hotels, resorts, and executive offices demanding the finest craftsmanship. Handcrafted from Sheesham, Teak, Mango Wood, and Rosewood.',
    tags: ['Sheesham Wood', 'Teak Wood', 'Rosewood', 'Mango Wood'],
    color: '#A9784F',
  },
];

/* ── Data: Process steps ── */
const steps = [
  { num: '01', title: 'Share Requirements', desc: 'Product types, quantities, material preference, dimensions & delivery location.', icon: '📋' },
  { num: '02', title: 'Custom Quotation', desc: 'Volume-based wholesale pricing with specs & delivery timeline — within 24 hours.', icon: '💲' },
  { num: '03', title: 'Manufacturing', desc: 'Our Ayodhya workshop builds your order. Progress updates via WhatsApp throughout.', icon: '🏭' },
  { num: '04', title: 'Pan-India Delivery', desc: 'Professionally packed, insured transit, real-time tracking — anywhere in India.', icon: '🚚' },
];

/* ── Data: FAQs ── */
const faqs = [
  { q: 'What is the minimum order quantity for bulk furniture?', a: 'We keep our MOQ flexible. Whether you need 10 beds for a guest house or 500 wardrobes for a builder project, we accommodate orders of every scale with competitive wholesale pricing.' },
  { q: 'Do you supply engineered wood furniture in bulk?', a: 'Yes! We are one of India\'s leading engineered wood furniture suppliers. Our bulk range includes beds, wardrobes, TV units, study tables, dining tables, office desks, and sofas — all at wholesale prices.' },
  { q: 'Can you supply particle board furniture for hotels and hostels?', a: 'Absolutely. Our particle board furniture range is designed for high-volume commercial projects — hostel beds, hotel wardrobes, PG room tables, and office desks at the lowest cost per unit.' },
  { q: 'Do you deliver bulk furniture orders across India?', a: 'Yes, we offer pan-India delivery. We\'ve delivered to 150+ cities including Mumbai, Delhi, Bangalore, Hyderabad, Pune, Kolkata, Chennai, and numerous tier-2 and tier-3 cities.' },
  { q: 'What industries do you supply furniture to?', a: 'Hotels, resorts, hostels, PG rooms, offices, co-working spaces, schools, colleges, builders, apartments, cafés, restaurants, guest houses, and rental properties.' },
  { q: 'Do you offer budget furniture for rental properties?', a: 'Yes. Our budget range is specifically designed for rental properties, PG accommodations, and serviced apartments — durable, cost-effective engineered wood and particle board furniture.' },
];

export default function BulkOrders() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    document.title = 'Bulk Furniture Supplier in Ayodhya | Wholesale Engineered Wood & Particle Board Furniture for Hotels, Hostels, Offices — Furniture Hub';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Furniture Hub Ayodhya — India\'s trusted bulk furniture supplier & wholesale furniture manufacturer. Engineered wood & particle board beds, wardrobes, tables, sofas for hotels, hostels, PG rooms, offices, schools, builders. Factory-direct pricing, pan-India delivery.');
    }
  }, []);

  return (
    <div className="bulk-page" itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content="Furniture Hub Ayodhya — Bulk Furniture Supplier" />
      <meta itemProp="description" content="Wholesale bulk furniture supplier in Ayodhya — engineered wood and particle board furniture for hotels, offices, hostels, schools, and builders." />
      <meta itemProp="areaServed" content="India" />

      {/* ═══════════════════════════════════════
           HERO — Full-bleed parallax
           ═══════════════════════════════════════ */}
      <section className="bulk-hero" ref={heroRef}>
        <motion.div className="bulk-hero__bg" style={{ y: heroY }} />
        <div className="bulk-hero__overlay" />
        <motion.div className="container bulk-hero__content" style={{ opacity: heroOpacity }}>
          <motion.div
            className="bulk-hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <span className="bulk-hero__badge-dot" />
            Accepting Bulk Orders — Pan India Delivery
          </motion.div>

          <motion.h1
            className="font-serif bulk-hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Wholesale Furniture<br />
            <span className="bulk-hero__title-accent">at Factory Prices.</span>
          </motion.h1>

          <motion.p
            className="bulk-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Engineered wood &amp; particle board beds, wardrobes, sofas, tables &amp; TV&nbsp;units — manufactured in Ayodhya and delivered to hotels, hostels, offices, schools &amp; apartments across India.
          </motion.p>

          <motion.div
            className="bulk-hero__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <WhatsAppButton message="Hi! I'm interested in bulk furniture order for my project. Can we discuss pricing?" className="btn-lg">
              Get Wholesale Quote
            </WhatsAppButton>
            <a href="#bulk-catalog" className="btn btn-secondary btn-lg">
              View Catalog ↓
            </a>
          </motion.div>

          {/* Floating trust stats */}
          <motion.div
            className="bulk-hero__stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {[
              { value: 15, suffix: '+', label: 'Years' },
              { value: 2500, suffix: '+', label: 'Clients' },
              { value: 150, suffix: '+', label: 'Cities' },
            ].map((stat) => (
              <div className="bulk-hero__stat" key={stat.label}>
                <span className="bulk-hero__stat-value">
                  <AnimCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="bulk-hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="bulk-hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="bulk-hero__scroll-line" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
           SOCIAL PROOF MARQUEE
           ═══════════════════════════════════════ */}
      <section className="bulk-marquee-section">
        <div className="bulk-marquee-track">
          {[...Array(2)].map((_, setIdx) => (
            <div className="bulk-marquee-set" key={setIdx}>
              {['Hotel Furniture Supplier', 'Hostel Furniture', 'Office Furniture Wholesale', 'Bulk Bed Supplier', 'Particle Board Furniture', 'Engineered Wood Wholesale', 'Apartment Furniture', 'School Furniture Supplier', 'Builder Furniture', 'Café & Restaurant Furniture'].map((text) => (
                <span className="bulk-marquee-item" key={`${setIdx}-${text}`}>
                  {text} <span className="bulk-marquee-dot">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
           WHY PARTNER WITH US
           ═══════════════════════════════════════ */}
      <section className="section bulk-benefits">
        <div className="container">
          <AnimatedSection className="bulk-section-header">
            <span className="eyebrow">The Furniture Hub Advantage</span>
            <h2 className="font-serif section-title">Why India's Top Buyers<br />Choose Us for Bulk Orders</h2>
          </AnimatedSection>

          <div className="bulk-benefits__grid">
            {[
              { icon: '💰', title: 'Factory-Direct Pricing', desc: 'Zero middlemen. As a direct furniture wholesale manufacturer, we offer the most competitive rates on bulk volume — whether you need 10 beds or 500 wardrobes.' },
              { icon: '🏭', title: 'Custom Manufacturing', desc: 'Need a specific design replicated across 50 hotel rooms? Our Ayodhya workshop custom-builds engineered wood and particle board furniture to your exact specs.' },
              { icon: '🚚', title: 'Pan-India Delivery', desc: 'Insured, professionally packed furniture shipped to 150+ cities — Mumbai, Delhi, Bangalore, or any tier-2 city. Safe, on-time, every time.' },
              { icon: '📦', title: 'Flexible MOQ', desc: 'No rigid minimums. Whether you\'re stocking 20 pieces for a guest house or furnishing 200 apartments for a builder project — we serve every scale.' },
              { icon: '🤝', title: 'Dedicated B2B Support', desc: 'Direct WhatsApp line to our B2B team — custom quotations, sample approvals, timeline planning & on-site coordination through one contact.' },
              { icon: '🏅', title: 'Proven Quality', desc: '15+ years of craftsmanship, 2500+ happy clients, and rigorous quality checks on every single piece — from budget particle board to premium Sheesham.' },
            ].map((card, i) => (
              <AnimatedSection className="benefit-card" delay={i * 0.08} key={card.title}>
                <div className="benefit-card__icon-wrap">
                  <span className="benefit-card__icon">{card.icon}</span>
                </div>
                <h3 className="font-serif benefit-card__title">{card.title}</h3>
                <p className="benefit-card__desc">{card.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           INLINE CTA — Midpage conversion
           ═══════════════════════════════════════ */}
      <section className="section-sm bulk-inline-cta">
        <div className="container">
          <AnimatedSection className="bulk-inline-cta__inner">
            <div className="bulk-inline-cta__text">
              <h2 className="font-serif bulk-inline-cta__title">Need a custom quote<br />for your project?</h2>
              <p className="bulk-inline-cta__desc">Share your requirements on WhatsApp and receive a detailed wholesale quotation within 24&nbsp;hours.</p>
            </div>
            <div className="bulk-inline-cta__action">
              <WhatsAppButton message="Hi! I need a bulk furniture quote for my project. Here are my requirements:" className="btn-lg">
                Get Free Quote on WhatsApp
              </WhatsAppButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           PRODUCT CATALOG
           ═══════════════════════════════════════ */}
      <section className="section bulk-products" id="bulk-catalog">
        <div className="container">
          <AnimatedSection className="bulk-section-header">
            <span className="eyebrow">Bulk Furniture Catalog</span>
            <h2 className="font-serif section-title">What You Can Order in Bulk</h2>
            <p className="section-subtitle">From engineered wood beds wholesale to particle board office desks — everything at volume pricing.</p>
          </AnimatedSection>

          <div className="bulk-products__grid">
            {bulkCategories.map((cat, i) => (
              <AnimatedSection className="bulk-product-card" delay={i * 0.07} key={cat.title}>
                <div className="bulk-product-card__header">
                  <span className="bulk-product-card__icon">{cat.icon}</span>
                  <span className="bulk-product-card__price">from ₹{cat.startPrice}</span>
                </div>
                <h3 className="font-serif bulk-product-card__title">{cat.title}</h3>
                <p className="bulk-product-card__desc">{cat.desc}</p>
                <p className="bulk-product-card__tags">{cat.keywords}</p>
                <WhatsAppButton
                  message={`Hi! I need a bulk quote for ${cat.title}. Quantity: ___, Material: ___, Delivery Location: ___`}
                  className="bulk-product-card__cta"
                >
                  Enquire for {cat.title}
                </WhatsAppButton>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center" delay={0.2}>
            <div className="bulk-products__browse">
              <Link to="/budget" className="btn btn-secondary">Browse Budget Range</Link>
              <Link to="/premium" className="btn btn-secondary">Browse Premium Range</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           INDUSTRIES WE SERVE
           ═══════════════════════════════════════ */}
      <section className="section bulk-industries">
        <div className="container">
          <AnimatedSection className="bulk-section-header">
            <span className="eyebrow">Industries We Serve</span>
            <h2 className="font-serif section-title">Built for Every Commercial Space</h2>
            <p className="section-subtitle">Trusted institutional &amp; commercial furniture supplier for businesses across India.</p>
          </AnimatedSection>

          <div className="bulk-industries__grid">
            {industries.map((ind, i) => (
              <AnimatedSection className="industry-card" delay={i * 0.05} key={ind.title}>
                <span className="industry-card__icon">{ind.icon}</span>
                <div className="industry-card__body">
                  <h3 className="industry-card__title">{ind.title}</h3>
                  <p className="industry-card__desc">{ind.desc}</p>
                </div>
                <span className="industry-card__arrow">→</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           MATERIAL OPTIONS
           ═══════════════════════════════════════ */}
      <section className="section bulk-materials">
        <div className="container">
          <AnimatedSection className="bulk-section-header">
            <span className="eyebrow">Material Options</span>
            <h2 className="font-serif section-title">Choose Your Material,<br />We'll Handle the Rest</h2>
            <p className="section-subtitle">Leading engineered wood furniture supplier, particle board furniture manufacturer, and premium solid wood dealer in Ayodhya.</p>
          </AnimatedSection>

          <div className="bulk-materials__grid">
            {materials.map((mat, i) => (
              <AnimatedSection className="material-card" delay={i * 0.1} key={mat.title}>
                <div className="material-card__accent" style={{ background: mat.color }} />
                <h3 className="font-serif material-card__title">{mat.title}</h3>
                <p className="material-card__desc">{mat.desc}</p>
                <div className="material-card__tags">
                  {mat.tags.map(tag => (
                    <span className="material-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           HOW IT WORKS — Visual process
           ═══════════════════════════════════════ */}
      <section className="section bulk-process">
        <div className="container">
          <AnimatedSection className="bulk-section-header">
            <span className="eyebrow">Simple 4-Step Process</span>
            <h2 className="font-serif section-title">From Enquiry to Delivery</h2>
          </AnimatedSection>

          <div className="bulk-process__steps">
            {steps.map((step, i) => (
              <AnimatedSection className="process-step" delay={i * 0.1} key={step.num}>
                <div className="process-step__icon">{step.icon}</div>
                <div className="process-step__number">{step.num}</div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
                {i < steps.length - 1 && <div className="process-step__connector" />}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           FAQ — Schema.org
           ═══════════════════════════════════════ */}
      <section className="section bulk-faq" itemScope itemType="https://schema.org/FAQPage">
        <div className="container">
          <AnimatedSection className="bulk-section-header">
            <span className="eyebrow">Common Questions</span>
            <h2 className="font-serif section-title">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="bulk-faq__list">
            {faqs.map((faq, i) => (
              <AnimatedSection className="faq-item" delay={i * 0.04} key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="faq-item__q" itemProp="name">{faq.q}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="faq-item__a" itemProp="text">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           FINAL CTA — Full-width conversion
           ═══════════════════════════════════════ */}
      <section className="section bulk-final-cta">
        <div className="container">
          <AnimatedSection className="bulk-final-cta__inner">
            <div className="bulk-final-cta__grain" />
            <motion.h2
              className="font-serif bulk-final-cta__title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Place a<br />Bulk Furniture Order?
            </motion.h2>
            <p className="bulk-final-cta__desc">
              Share your requirements, quantities &amp; timelines — we'll send a custom wholesale quotation within 24&nbsp;hours.
            </p>
            <div className="bulk-final-cta__actions">
              <WhatsAppButton message="Hi Furniture Hub team! I'm interested in placing a bulk furniture order. Can we discuss wholesale pricing?" className="btn-lg">
                Chat with B2B Sales on WhatsApp
              </WhatsAppButton>
              <a href="tel:+919580659559" className="btn btn-outline-light btn-lg">
                📞 Call +91 95806 59559
              </a>
            </div>
            <p className="bulk-final-cta__trust">Trusted by 2500+ clients across 150+ Indian cities</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
