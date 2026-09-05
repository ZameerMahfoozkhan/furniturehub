import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
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

/* ── Data: Education Products ── */
const schoolProducts = [
  {
    icon: '🪑',
    title: 'Classroom Desks & Benches',
    keywords: 'Dual Desk Bench · Single Seater Desk · Wooden School Bench · Steel Frame Desk',
    desc: 'Ergonomic, sturdy dual and single-seater desks with storage compartments for students.',
    startPrice: '2,999',
  },
  {
    icon: '🧑‍🏫',
    title: 'Teacher Tables & Podiums',
    keywords: 'Faculty Desk · Lecture Podium · Lockable Teacher Table',
    desc: 'Functional tables with lockable drawers and presentation podiums for educators.',
    startPrice: '3,499',
  },
  {
    icon: '📚',
    title: 'Library Shelving & Tables',
    keywords: 'Library Racks · Reading Tables · Magazine Display · Book Shelves',
    desc: 'Heavy-duty bookshelves and collaborative reading tables for institutional libraries.',
    startPrice: '5,999',
  },
  {
    icon: '🛝',
    title: 'Playground & Pre-school',
    keywords: 'Kids Chairs · Activity Tables · Toy Storage Racks · Slide & Play Sets',
    desc: 'Safe, colorful, and durable furniture designed specifically for kindergartens and play schools.',
    startPrice: '1,499',
  },
  {
    icon: '🧫',
    title: 'Laboratory Furniture',
    keywords: 'Lab Tables · Stools · Chemical Resistant Workbenches',
    desc: 'Specialized lab workbenches with chemical-resistant tops and storage.',
    startPrice: '8,499',
  },
  {
    icon: '🏢',
    title: 'Auditorium & Admin',
    keywords: 'Auditorium Chairs · Principal Desk · Admin Workstations',
    desc: 'Comfortable auditorium seating and premium furniture for administrative blocks.',
    startPrice: '4,499',
  },
];

const processSteps = [
  { step: '01', title: 'Requirement Gathering', desc: 'We assess the age groups and space dimensions of your classrooms.' },
  { step: '02', title: 'Ergonomic Design', desc: 'Furniture is selected to ensure proper posture for growing students.' },
  { step: '03', title: 'Safe Manufacturing', desc: 'All edges are rounded and finished with non-toxic materials.' },
  { step: '04', title: 'Bulk Installation', desc: 'Rapid deployment across campus during school holidays or weekends.' },
];

export default function SchoolsAndColleges({ city = 'Ayodhya' }) {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 250]);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: 'Is the furniture safe for kindergarten kids?', a: 'Yes, our pre-school range features rounded edges, non-toxic paints, and anti-tipping designs.' },
    { q: 'Can we get a sample desk before placing a bulk order?', a: 'Absolutely. We provide physical samples to institutions for approval before commencing bulk production.' },
    { q: 'What materials do you use for school benches?', a: 'We use high-grade tubular steel frames paired with durable engineered wood or solid wood tops for longevity.' },
  ];

  return (
    <div className="industry-page industry-page--school">
      <SEO 
        title={`School & College Furniture Manufacturer in ${city} | Desks & Benches`}
        description={`Factory-direct educational furniture. We supply bulk classroom desks, benches, library racks, and playground furniture in ${city}.`}
        keywords={`school furniture manufacturer, college benches ${city}, classroom desks wholesale, library racks, kindergarten furniture`}
      />

      <section className="industry-hero">
        <motion.div className="industry-hero__bg" style={{ y: heroY }} />
        <div className="industry-hero__overlay" />
        <div className="container industry-hero__content">
          <AnimatedSection>
            <div className="industry-hero__badge">
              <span className="pulse-dot"></span>
              B2B Educational Solutions
            </div>
            <h1 className="industry-hero__title font-serif">
              Durable Furniture for <span>Schools & Colleges</span>
            </h1>
            <p className="industry-hero__desc">
              Foster better learning environments with our ergonomic, safe, and heavy-duty 
              educational furniture. Designed to withstand generations of students.
            </p>
            <div className="industry-hero__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Request a Quote
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <WhatsAppButton message="Hi! I need bulk school/college furniture. Can we discuss?" className="btn-lg">
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="industry-stats">
        <div className="stats-grid">
          {[
            { label: 'Classrooms Furnished', value: 3500, suffix: '+' },
            { label: 'Educational Institutions', value: 120, suffix: '+' },
            { label: 'Safety Compliant', value: 100, suffix: '%' },
            { label: 'Heavy Duty Durability', value: 10, suffix: ' Yrs' }
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
            <span className="eyebrow">Educational Furniture</span>
            <h2 className="font-serif section-title">Educational Furniture Catalog</h2>
            <p className="section-subtitle">From kindergarten play areas to university lecture halls, we cover it all.</p>
          </AnimatedSection>
          <div className="catalog-grid">
            {schoolProducts.map((cat, i) => (
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
            <h2 className="font-serif section-title">Institutional Procurement Process</h2>
            <p className="section-subtitle">A streamlined process for large-scale educational setups.</p>
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
              <p>Everything you need to know about outfitting your school or college.</p>
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
            <h2 className="font-serif">Building a new campus?</h2>
            <p>Get in touch with our institutional sales team for specialized pricing and tenders.</p>
            <div className="cta-actions">
              <WhatsAppButton message="Hi! I need a bulk school/college furniture quote. Here are my requirements:" className="btn-lg">
                Request a Proposal
              </WhatsAppButton>
              <Link to="/contact" className="btn btn-white btn-lg">Contact Sales</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
