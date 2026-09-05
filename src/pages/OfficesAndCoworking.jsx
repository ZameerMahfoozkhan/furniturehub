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

/* ── Data: Office Products ── */
const officeProducts = [
  {
    icon: '🖥️',
    title: 'Workstation Desks',
    keywords: 'Linear Workstations · L-Shaped Desks · Partition Desks · Standing Desks',
    desc: 'Modular workstations designed for open-plan offices and co-working spaces.',
    startPrice: '5,999',
  },
  {
    icon: '💺',
    title: 'Ergonomic Chairs',
    keywords: 'Mesh Office Chairs · Executive Chairs · Visitor Chairs · Revolving Chairs',
    desc: 'High-quality ergonomic seating to ensure employee comfort and productivity.',
    startPrice: '3,499',
  },
  {
    icon: '🏢',
    title: 'Conference Tables',
    keywords: 'Meeting Tables · Boardroom Tables · Round Discussion Tables',
    desc: 'Professional conference tables available in various sizes with cable management solutions.',
    startPrice: '12,999',
  },
  {
    icon: '🗄️',
    title: 'Office Storage',
    keywords: 'Filing Cabinets · Pedestals · Credenzas · Open Shelving',
    desc: 'Secure and organized storage units, from mobile pedestals to full-height cabinets.',
    startPrice: '4,999',
  },
  {
    icon: '🛋️',
    title: 'Reception & Breakout',
    keywords: 'Reception Desks · Lounge Sofas · Cafe Chairs · Bar Tables',
    desc: 'Welcoming reception counters and comfortable breakout area furniture.',
    startPrice: '9,999',
  },
  {
    icon: '💼',
    title: 'Executive Cabins',
    keywords: 'Director Tables · Premium Veneer Desks · Executive Storage',
    desc: 'Premium cabin furniture sets for directors and senior management.',
    startPrice: '18,999',
  },
];

const processSteps = [
  { step: '01', title: 'Space Planning', desc: 'We assist with 2D/3D layouts to optimize your office floor plate.' },
  { step: '02', title: 'Modular Design', desc: 'Select modular systems that allow for future scalability and easy reconfiguration.' },
  { step: '03', title: 'Manufacturing', desc: 'Precision manufacturing using CNC routers and edge-banding machines.' },
  { step: '04', title: 'Installation', desc: 'Seamless weekend installations to minimize your business downtime.' },
];

export default function OfficesAndCoworking({ city = 'Ayodhya' }) {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 250]);
  const [activeFaq, setActiveFaq] = useState(null);

  const localData = cityData[city] || cityData['Ayodhya'];

  const faqs = [
    { q: 'Can you match our corporate brand colors?', a: 'Yes, we offer custom laminates and fabrics to align with your corporate identity.' },
    { q: 'Do you provide cable management solutions?', a: 'All our workstations and conference tables come with integrated wire managers and power sockets.' },
    { q: 'What is the warranty on office chairs?', a: 'Our ergonomic mesh chairs come with a standard 1-year warranty on the hydraulic lift and mechanism.' },
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
    <div className="industry-page industry-page--office">
      <SEO 
        title={`Office & Co-Working Furniture Manufacturer in ${city} | Desks & Chairs`}
        description={`Premium ergonomic office furniture. Factory-direct workstations, executive desks, conference tables, and ergonomic chairs for ${city} businesses.`}
        keywords={`office furniture manufacturer, coworking desks ${city}, ergonomic office chairs, conference tables, corporate furniture bulk`}
        schema={schema}
      />

      <section className="industry-hero">
        <motion.div className="industry-hero__bg" style={{ y: heroY }} />
        <div className="industry-hero__overlay" />
        <div className="container industry-hero__content">
          <AnimatedSection>
            <div className="industry-hero__badge">
              <span className="pulse-dot"></span>
              B2B Corporate Solutions
            </div>
            <h1 className="industry-hero__title font-serif">
              Modern Furniture for <span>Offices & Co-Working</span>
            </h1>
            <p className="industry-hero__desc">
              Design productive workspaces with our ergonomic and modular office furniture. 
              We supply high-quality desks, workstations, and seating for modern corporate environments.
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
              <WhatsAppButton message="Hi! I need bulk office furniture for my workspace. Can we discuss?" className="btn-lg">
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="industry-stats">
        <div className="stats-grid">
          {[
            { label: 'Workstations Installed', value: 8500, suffix: '+' },
            { label: 'Corporate Clients', value: 200, suffix: '+' },
            { label: 'Ergonomic Support', value: 100, suffix: '%' },
            { label: 'On-Site Warranty', value: 3, suffix: ' Yrs' }
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
            <span className="eyebrow">Office Furniture Catalog</span>
            <h2 className="font-serif section-title">Corporate Product Portfolio</h2>
            <p className="section-subtitle">Sleek, modular, and highly functional furniture designed to boost productivity.</p>
          </AnimatedSection>
          <div className="catalog-grid">
            {officeProducts.map((cat, i) => (
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
            <h2 className="font-serif section-title">End-to-End Office Setup</h2>
            <p className="section-subtitle">We manage everything from manufacturing to final assembly.</p>
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
              <p>Common questions about corporate bulk orders.</p>
              <Link to="/contact" className="btn btn-outline-accent">Speak to an Expert</Link>
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
            <h2 className="font-serif">Setting up a new office?</h2>
            <p>Share your carpet area and headcount to get a customized furniture proposal.</p>
            <div className="cta-actions">
              <WhatsAppButton message="Hi! I need a bulk office furniture quote. Here are my requirements:" className="btn-lg">
                Request Layout & Quote
              </WhatsAppButton>
              <Link to="/contact" className="btn btn-white btn-lg">Contact Sales</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
