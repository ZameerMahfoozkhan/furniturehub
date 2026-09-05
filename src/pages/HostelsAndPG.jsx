import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import { cityData } from '../data/seoLocations';
import './IndustryPage.css';

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
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
      {isInView ? (
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          {value.toLocaleString('en-IN')}{suffix}
        </motion.span>
      ) : '0'}
    </motion.span>
  );
}

/* ── Data: Hostel & PG Products ── */
const pgProducts = [
  {
    icon: '🛏️',
    title: 'Bunk Beds & Single Beds',
    keywords: 'Metal Bunk Beds · Wooden Single Beds · Space Saving Beds · Hostel Beds',
    desc: 'Heavy-duty bunk beds and single beds designed specifically for dormitories, hostels, and PGs.',
    startPrice: '4,499',
  },
  {
    icon: '🗄️',
    title: 'Lockable Wardrobes',
    keywords: '2-Door Metal Almirah · Wooden PG Wardrobe · Locker Cabinets',
    desc: 'Secure storage solutions with individual locking mechanisms for shared living spaces.',
    startPrice: '3,999',
  },
  {
    icon: '🖥️',
    title: 'Study Tables',
    keywords: 'Compact Study Table · Folding Table · Computer Desk · Work-from-Home Desk',
    desc: 'Ergonomic and space-saving study tables for students and working professionals.',
    startPrice: '2,299',
  },
  {
    icon: '🪑',
    title: 'Study Chairs & Seating',
    keywords: 'Mesh Office Chair · Wooden Study Chair · Plastic Chairs',
    desc: 'Comfortable chairs designed for long hours of studying or remote working.',
    startPrice: '1,499',
  },
  {
    icon: '🛋️',
    title: 'Common Area Sofas',
    keywords: 'PG Lounge Sofa · Bean Bags · 3-Seater Budget Sofa',
    desc: 'Durable, easy-to-clean sofas and seating options for PG common rooms and lobbies.',
    startPrice: '7,999',
  },
  {
    icon: '🚪',
    title: 'Shoe Racks & Utility',
    keywords: 'Multi-tier Shoe Rack · Storage Cabinets · Ironing Boards',
    desc: 'Essential utility furniture to keep shared living environments organized and clutter-free.',
    startPrice: '1,999',
  },
];

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'We analyze your floor plan to maximize bed capacity without compromising comfort.' },
  { step: '02', title: 'Material Selection', desc: 'Choose between heavy-duty metal or cost-effective engineered wood options.' },
  { step: '03', title: 'Bulk Manufacturing', desc: 'Fast turnaround production at our Ayodhya facility.' },
  { step: '04', title: 'Delivery & Setup', desc: 'Complete installation across all rooms by our expert team.' },
];

export default function HostelsAndPG({ city = 'Ayodhya' }) {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 250]);
  const [activeFaq, setActiveFaq] = useState(null);

  const localData = cityData[city] || cityData['Ayodhya'];

  const faqs = [
    { q: 'Can you manufacture custom-sized bunk beds for small rooms?', a: 'Yes, we can customize the dimensions of our metal and wooden bunk beds to maximize space in your PG.' },
    { q: 'Do your hostel beds come with storage?', a: 'We offer options for under-bed storage drawers and attached study shelves.' },
    { q: 'What is the lead time for 100 hostel beds?', a: 'For a bulk order of 100 units, we generally require 2-3 weeks for manufacturing and delivery.' },
  ];

  if (localData && localData.faq) {
    const [q, a] = localData.faq.split('? ');
    if (q && a) {
      faqs.push({ q: q + '?', a: a });
    }
  }

  const schema = localData && localData.coordinates ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Furniture Hub - ${city} Service Area`,
    "image": "https://furniturehubayodhya.online/hero.png",
    "areaServed": {
      "@type": "City",
      "name": city
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": localData.coordinates.split(',')[0].trim(),
      "longitude": localData.coordinates.split(',')[1].trim()
    }
  } : null;

  return (
    <div className="industry-page industry-page--hostel">
      <SEO 
        title={`Hostel & PG Room Furniture Manufacturer in ${city} | Beds & Lockers`}
        description={`Durable, space-saving furniture for Hostels and PGs. Wholesale bunk beds, study tables, and metal lockers supplied across ${city}.`}
        keywords={`hostel furniture manufacturer, pg beds ${city}, bunk beds wholesale, metal lockers, study tables bulk`}
        schema={schema}
      />

      <section className="industry-hero">
        <motion.div className="industry-hero__bg" style={{ y: heroY }} />
        <div className="industry-hero__overlay" />
        <div className="container industry-hero__content">
          <AnimatedSection>
            <div className="industry-hero__badge">
              <span className="pulse-dot"></span>
              B2B Accommodation Solutions
            </div>
            <h1 className="industry-hero__title font-serif">
              Durable Furniture for <span>Hostels & PGs</span>
            </h1>
            <p className="industry-hero__desc">
              Maximize your space with our durable, space-saving hostel and PG furniture. 
              We supply heavy-duty bunk beds, lockers, and study tables for student accommodations.
              {localData && localData.blurb && (
                <>
                  <br /><br />
                  <span className="local-blurb">{localData.blurb}</span>
                </>
              )}
            </p>
            <div className="industry-hero__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Request a Quote
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <WhatsAppButton message="Hi! I need bulk hostel/PG furniture. Can we discuss pricing?" className="btn-lg">
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="industry-stats">
        <div className="stats-grid">
          {[
            { label: 'Beds Supplied', value: 5000, suffix: '+' },
            { label: 'PGs & Hostels Furnished', value: 150, suffix: '+' },
            { label: 'Cost Savings vs Retail', value: 45, suffix: '%' },
            { label: 'Space Optimized', value: 30, suffix: '%' }
          ].map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="stat-card">
              <div className="stat-value"><AnimCounter value={stat.value} suffix={stat.suffix} /></div>
              <div className="stat-label">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section industry-catalog">
        <div className="container">
          <AnimatedSection className="section-header text-center">
            <span className="eyebrow">PG & Hostel Furniture</span>
            <h2 className="font-serif section-title">Essential PG & Hostel Furniture</h2>
            <p className="section-subtitle">Cost-effective, highly durable, and space-efficient designs for modern accommodations.</p>
          </AnimatedSection>
          <div className="catalog-grid">
            {pgProducts.map((cat, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className="catalog-card">
                <div className="catalog-card__icon">{cat.icon}</div>
                <div className="catalog-card__content">
                  <h3 className="font-serif">{cat.title}</h3>
                  <p className="catalog-card__keywords">{cat.keywords}</p>
                  <p className="catalog-card__desc">{cat.desc}</p>
                  <div className="catalog-card__price">
                    <span>Starting from</span>
                    <strong>₹{cat.startPrice}</strong>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section industry-process">
        <div className="container">
          <AnimatedSection className="section-header text-center">
            <span className="eyebrow">How It Works</span>
            <h2 className="font-serif section-title">Our Fulfillment Process</h2>
            <p className="section-subtitle">Efficient turnaround times to get your property ready for tenants.</p>
          </AnimatedSection>
          <div className="process-timeline">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15} className="process-step">
                <div className="process-step__number">{step.step}</div>
                <div className="process-step__content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section industry-faq">
        <div className="container">
          <div className="faq-layout">
            <AnimatedSection className="faq-intro">
              <h2 className="font-serif section-title">Frequently Asked Questions</h2>
              <p>Common queries regarding PG and hostel bulk orders.</p>
              <Link to="/contact" className="btn btn-outline-accent">Contact Sales</Link>
            </AnimatedSection>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                    <div className="faq-item__header">
                      <h3>{faq.q}</h3>
                      <button className="faq-toggle" aria-label="Toggle answer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={activeFaq === i ? "M5 12h14" : "M12 5v14M5 12h14"}/></svg>
                      </button>
                    </div>
                    <div className="faq-item__body" style={{ height: activeFaq === i ? 'auto' : 0 }}>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm industry-cta">
        <div className="container">
          <AnimatedSection className="cta-box">
            <h2 className="font-serif">Ready to upgrade your PG?</h2>
            <p>Contact us with your room counts for an unbeatable wholesale quote.</p>
            <div className="cta-actions">
              <WhatsAppButton message="Hi! I need a bulk PG/hostel furniture quote. Here are my requirements:" className="btn-lg">
                Get a Free Estimate
              </WhatsAppButton>
              <Link to="/contact" className="btn btn-white btn-lg">Contact Sales</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
