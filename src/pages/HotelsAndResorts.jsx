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

/* ── Data: Hotel & Resort Products ── */
const hotelProducts = [
  {
    icon: '🛏️',
    title: 'Hotel Beds & Headboards',
    keywords: 'King Size Bed · Queen Size Bed · Engineered Wood Bed · Upholstered Headboards',
    desc: 'Luxurious and durable beds designed for high-turnover guest rooms. Available with hydraulic storage.',
    startPrice: '8,999',
  },
  {
    icon: '🛋️',
    title: 'Reception & Lounge Sofas',
    keywords: 'Lobby Sofa · Waiting Area Seating · Accent Chairs · Premium Sofas',
    desc: 'Make a lasting first impression with our premium reception and lounge seating options.',
    startPrice: '12,999',
  },
  {
    icon: '🗄️',
    title: 'Hotel Wardrobes',
    keywords: '2-Door Wardrobe · Luggage Rack · Safe Compatible Wardrobes',
    desc: 'Spacious, elegant wardrobes built to accommodate guest luggage and secure items.',
    startPrice: '6,499',
  },
  {
    icon: '📺',
    title: 'TV Units & Consoles',
    keywords: 'Wall-mounted TV Unit · Entertainment Console · Mini-Fridge Cabinets',
    desc: 'Sleek wall-mounted TV units and consoles to maximize space and aesthetics in guest rooms.',
    startPrice: '3,499',
  },
  {
    icon: '🪑',
    title: 'Dining & Cafe Furniture',
    keywords: 'Restaurant Tables · Dining Chairs · Buffet Tables · Bar Stools',
    desc: 'Commercial-grade dining tables and chairs for your in-house restaurant, cafe, or bar.',
    startPrice: '2,999',
  },
  {
    icon: '🪞',
    title: 'Dressing Tables & Mirrors',
    keywords: 'Vanity Mirrors · Dressing Table with Storage · LED Mirrors',
    desc: 'Elegant vanity and dressing solutions to complete your guest room setup.',
    startPrice: '3,999',
  },
];

/* ── Data: Process ── */
const processSteps = [
  { step: '01', title: 'Consultation', desc: 'Discuss your hotel\'s theme, room layouts, and specific requirements.' },
  { step: '02', title: 'Design & Sampling', desc: 'We provide CAD layouts and physical samples of the furniture finishes.' },
  { step: '03', title: 'Bulk Manufacturing', desc: 'Production begins in our Ayodhya facility using automated machinery.' },
  { step: '04', title: 'Delivery & Setup', desc: 'Safe transport and on-site assembly for all rooms.' },
];

export default function HotelsAndResorts({ city = 'Ayodhya' }) {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 250]);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: 'Do you offer custom designs for boutique hotels?', a: 'Yes, we can customize dimensions, finishes, and fabrics to match your exact interior design theme.' },
    { q: 'What is the standard delivery time for 50 rooms?', a: 'For a 50-room setup, our typical turnaround time is 3-4 weeks from final design approval.' },
    { q: 'Do you provide installation services?', a: 'Yes, we have a dedicated installation team that will assemble and place all furniture on-site.' },
  ];

  return (
    <div className="industry-page industry-page--hotel">
      <SEO 
        title={`Hotel & Resort Furniture Manufacturer in ${city} | Furniture Hub`}
        description={`Premium bulk furniture for hotels and resorts. Factory-direct beds, wardrobes, TV units, and lounge seating manufactured for ${city}.`}
        keywords={`hotel furniture manufacturer, resort furniture ${city}, hotel beds wholesale, reception sofas, bulk hotel wardrobes`}
      />

      {/* ═══ HERO ═══ */}
      <section className="industry-hero">
        <motion.div className="industry-hero__bg" style={{ y: heroY }} />
        <div className="industry-hero__overlay" />
        
        <div className="container industry-hero__content">
          <AnimatedSection>
            <div className="industry-hero__badge">
              <span className="pulse-dot"></span>
              B2B Hospitality Solutions
            </div>
            <h1 className="industry-hero__title font-serif">
              Premium Furniture for <span>Hotels & Resorts</span>
            </h1>
            <p className="industry-hero__desc">
              Elevate your guest experience with durable, stylish, and factory-direct furniture. 
              From boutique guest houses to luxury resorts, we manufacture comprehensive room solutions.
            </p>
            <div className="industry-hero__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Request a Quote
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <WhatsAppButton message="Hi! I need bulk hotel furniture for my property. Can we discuss?" className="btn-lg">
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="industry-stats">
        <div className="stats-grid">
          {[
            { label: 'Hotel Rooms Furnished', value: 1200, suffix: '+' },
            { label: 'Years Durability Guarantee', value: 5, suffix: '' },
            { label: 'Cost Savings vs Retail', value: 40, suffix: '%' },
            { label: 'On-Time Delivery Rate', value: 99, suffix: '%' }
          ].map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="stat-card">
              <div className="stat-value">
                <AnimCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══ CATALOG ═══ */}
      <section className="section industry-catalog">
        <div className="container">
          <AnimatedSection className="section-header text-center">
            <span className="eyebrow">Hotel Furniture Catalog</span>
            <h2 className="font-serif section-title">Essential Hotel Furniture</h2>
            <p className="section-subtitle">
              Manufactured with high-grade engineered wood, solid wood, and commercial fabrics to withstand heavy daily usage.
            </p>
          </AnimatedSection>

          <div className="catalog-grid">
            {hotelProducts.map((cat, i) => (
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

      {/* ═══ PROCESS ═══ */}
      <section className="section industry-process">
        <div className="container">
          <AnimatedSection className="section-header text-center">
            <span className="eyebrow">How It Works</span>
            <h2 className="font-serif section-title">Our Project Execution Process</h2>
            <p className="section-subtitle">A seamless journey from initial layout planning to final room handover.</p>
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

      {/* ═══ FAQ ═══ */}
      <section className="section industry-faq">
        <div className="container">
          <div className="faq-layout">
            <AnimatedSection className="faq-intro">
              <h2 className="font-serif section-title">Frequently Asked Questions</h2>
              <p>Everything you need to know about our B2B hospitality orders.</p>
              <Link to="/contact" className="btn btn-outline-accent">Ask a Question</Link>
            </AnimatedSection>
            
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div 
                    className={`faq-item ${activeFaq === i ? 'active' : ''}`}
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
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

      {/* ═══ FINAL CTA ═══ */}
      <section className="section-sm industry-cta">
        <div className="container">
          <AnimatedSection className="cta-box">
            <h2 className="font-serif">Ready to furnish your hotel?</h2>
            <p>Share your floor plans or requirements with us to get a detailed commercial proposal.</p>
            <div className="cta-actions">
              <WhatsAppButton message="Hi! I need a bulk hotel furniture quote. Here are my requirements:" className="btn-lg">
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
