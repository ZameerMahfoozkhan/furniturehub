import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, staggerItem } from '../components/AnimatedSection';
import TrustBar from '../components/TrustBar';
import ProductCard from '../components/ProductCard';
import CountUp from '../components/CountUp';
import WhatsAppButton from '../components/WhatsAppButton';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { products, testimonials, trustStats, BRAND_NAME, TAGLINE } from '../data/products';
import './Home.css';

export default function Home() {
  useEffect(() => {
    document.title = `${BRAND_NAME} — ${TAGLINE}`;
  }, []);

  const featuredProducts = [
    ...products.filter(p => p.category === 'budget').slice(0, 5),
    ...products.filter(p => p.category === 'premium').slice(0, 2),
  ];

  // Double testimonials for marquee
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="home">
      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__content container">
          <motion.span
            className="eyebrow hero__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Crafted in Ayodhya · Delivered Across India
          </motion.span>

          <h1 className="hero__title font-serif">
            {['Smart.', 'Sturdy.', 'Beautiful.', 'Furniture.'].map((word, i) => (
              <motion.span
                key={i}
                className="hero__word"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Durable, well-designed furniture at prices that make sense — shipped
            to your doorstep anywhere in India. Looking for solid wood? We do that too.
          </motion.p>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link to="/budget" className="btn btn-primary btn-lg">Explore Budget Range</Link>
            <Link to="/premium" className="btn btn-secondary btn-lg">Explore Premium Wood →</Link>
          </motion.div>

          <motion.div
            className="hero__trust-pills"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <span className="hero__trust-pill">
              <span className="hero__trust-pill-icon">🚚</span> Pan India Delivery
            </span>
            <span className="hero__trust-pill">
              <span className="hero__trust-pill-icon">🏠</span> 2,500+ Happy Homes
            </span>
            <span className="hero__trust-pill">
              <span className="hero__trust-pill-icon" style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '6px' }}><WhatsAppIcon size={16} fill="#25D366" /></span> WhatsApp Support
            </span>
          </motion.div>

          <motion.div
            className="hero__scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <span>Scroll to explore</span>
            <div className="hero__scroll-line" />
          </motion.div>
        </div>
      </section>

      {/* ─── Trust Bar ─── */}
      <TrustBar />

      {/* ─── Choose Your Range ─── */}
      <section className="section range-split">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              Two Collections, One Promise of Quality
            </span>
            <h2 className="font-serif range-split__heading">Choose Your Range</h2>
          </AnimatedSection>

          <div className="range-split__panels">
            <AnimatedSection delay={0.1} direction="left">
              <Link to="/budget" className="range-panel range-panel--budget">
                <div className="range-panel__content">
                  <span className="range-panel__specialty-badge">★ Our Specialty</span>
                  <span className="eyebrow">Smart Design, Honest Price</span>
                  <h3 className="font-serif range-panel__title">Budget Range</h3>
                  <p className="range-panel__desc">
                    Durable engineered wood & particle board furniture with modern laminate finishes — designed for everyday living. Great quality, honest prices.
                  </p>
                  <span className="btn btn-primary">Explore Budget Range →</span>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <Link to="/premium" className="range-panel range-panel--premium wood-texture">
                <div className="range-panel__content">
                  <span className="eyebrow">For Those Who Want to Go Further</span>
                  <h3 className="font-serif range-panel__title">Premium Wood Collection</h3>
                  <p className="range-panel__desc">
                    Solid Sheesham, Teak, Mango Wood & Rosewood — crafted by artisans, built to last generations.
                  </p>
                  <span className="btn btn-secondary">Explore Premium →</span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Featured Products ─── */}
      <section className="section featured">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              Handpicked for You
            </span>
            <h2 className="font-serif featured__heading">Bestsellers & New Arrivals</h2>
          </AnimatedSection>

          <StaggerContainer className="featured__grid">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </StaggerContainer>

          <AnimatedSection className="featured__cta-wrap">
            <Link to="/budget" className="btn btn-primary">View All Budget Range</Link>
            <Link to="/premium" className="btn btn-secondary">View All Premium</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="section why-us">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              The Furniture Hub Difference
            </span>
            <h2 className="font-serif why-us__heading">Why Choose Us</h2>
          </AnimatedSection>

          <StaggerContainer className="why-us__grid" staggerDelay={0.08}>
            {[
              { icon: '🪵', title: 'Solid Wood Sourcing', desc: 'Premium Sheesham, Teak, Mango & Rosewood — handpicked for grain quality and durability from trusted sources.' },
              { icon: '🏗️', title: 'High-Grade Engineered Wood', desc: 'Our budget range uses only ISI-certified engineered wood with high-quality laminate finishes built for daily use.' },
              { icon: '🚚', title: 'Pan-India Logistics', desc: 'From Ayodhya to every corner of India. Carefully packaged and delivered to your doorstep, wherever you are.' },
              { icon: '🤲', title: 'Handcrafted by Artisans', desc: 'Every piece passes through the hands of skilled craftsmen in Ayodhya, continuing a legacy of woodworking excellence.' },
              { icon: '✏️', title: 'Custom Orders Welcome', desc: "Have a unique design in mind? Share a photo on WhatsApp and we'll build it exactly to your specifications." },
              { icon: '🛡️', title: 'Quality Assured', desc: 'Multi-point quality checks, durable finishes, and warranty coverage on every piece we deliver to your home.' },
            ].map((usp, i) => (
              <motion.div key={i} className="usp-card" variants={staggerItem}>
                <span className="usp-card__icon">{usp.icon}</span>
                <h3 className="usp-card__title font-serif">{usp.title}</h3>
                <p className="usp-card__desc">{usp.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="section-sm stats">
        <div className="container">
          <div className="stats__grid">
            {trustStats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="stat-item__value font-serif">
                  <CountUp end={stat.value} suffix="+" />
                </span>
                <span className="stat-item__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Craftsmanship ─── */}
      <section className="section craftsmanship wood-texture">
        <div className="container">
          <div className="craftsmanship__layout">
            <AnimatedSection direction="left" className="craftsmanship__text">
              <span className="eyebrow">Built for Real Homes</span>
              <h2 className="font-serif craftsmanship__title">
                Born in Ayodhya.<br />Built for India.
              </h2>
              <p>
                At Furniture Hub, we believe great furniture shouldn't cost a fortune. Our Budget
                Range is designed with the same care and attention as our solid wood pieces —
                using ISI-certified engineered wood and premium laminate finishes that are built
                to handle real life, every day.
              </p>
              <p>
                For those who want to go further, our Premium Range carries forward Ayodhya's
                centuries-old woodworking tradition — every piece hand-selected, naturally seasoned,
                and shaped by artisans who have inherited their craft through generations.
              </p>
              <p>
                From our workshop in Ayodhya to your living room in Mumbai, Bengaluru, Delhi, or
                anywhere in India — we ensure every piece arrives exactly as intended: beautiful,
                sturdy, and ready to become part of your home's story.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className="craftsmanship__visual">
              <div className="craftsmanship__image-stack">
                <div className="craftsmanship__img craftsmanship__img--1">
                  <div className="craftsmanship__placeholder" style={{ background: 'linear-gradient(rgba(43, 35, 32, 0.4), rgba(43, 35, 32, 0.7)), url(/Artisan-at-Work.png) center/cover' }}>
                    <span className="font-serif">Artisan at Work</span>
                    <span className="eyebrow">Heritage Craftsmanship</span>
                  </div>
                </div>
                <div className="craftsmanship__img craftsmanship__img--2">
                  <div className="craftsmanship__placeholder" style={{ background: 'linear-gradient(rgba(43, 35, 32, 0.4), rgba(43, 35, 32, 0.7)), url(/Wood-Selection.png) center/cover' }}>
                    <span className="font-serif">Wood Selection</span>
                    <span className="eyebrow">Raw Materials</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Custom Furniture Teaser ─── */}
      <section className="section custom-teaser">
        <div className="container">
          <AnimatedSection className="custom-teaser__inner">
            <span className="eyebrow">Made Just for You</span>
            <h2 className="font-serif custom-teaser__title">
              Have a design in mind?
            </h2>
            <p className="custom-teaser__desc">
              Send us a photo, sketch, or reference on WhatsApp — and we'll craft it for you in
              solid wood or engineered wood. Delivered anywhere in India.
            </p>
            <div className="custom-teaser__ctas">
              <WhatsAppButton message="Hi Furniture Hub Ayodhya! I'd like custom furniture made. I'll share a reference photo here." className="btn-lg">
                Send Us a Photo on WhatsApp
              </WhatsAppButton>
              <Link to="/custom-furniture" className="btn btn-secondary btn-lg">Learn More →</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section-sm testimonials">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              Love from Across India
            </span>
            <h2 className="font-serif testimonials__heading">What Our Customers Say</h2>
          </AnimatedSection>
        </div>
        <div className="testimonials__marquee">
          <div className="testimonials__track marquee-track" style={{ animationDuration: '40s' }}>
            {doubledTestimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__city">{t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pan-India Map ─── */}
      <section className="section delivery-map">
        <div className="container">
          <AnimatedSection className="delivery-map__inner">
            <div className="delivery-map__text">
              <span className="eyebrow">Nationwide Reach</span>
              <h2 className="font-serif delivery-map__title">
                From Ayodhya to<br />Every Corner of India
              </h2>
              <p>
                We've delivered happiness to homes in 150+ cities and counting. Carefully packaged,
                fully insured, and tracked — your furniture arrives safe, no matter the distance.
              </p>
              <div className="delivery-map__cities">
                {['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Pune', 'Kolkata', 'Chennai', 'Ahmedabad', 'Jaipur', 'Lucknow'].map((city) => (
                  <span key={city} className="delivery-map__city badge">{city}</span>
                ))}
                <span className="delivery-map__city badge">+ 140 more</span>
              </div>
            </div>
            <div className="delivery-map__visual">
              <svg viewBox="-30 -30 672 756" className="india-delivery-map" aria-label="Pan India Delivery from Ayodhya">
                <defs>
                  {/* Arrow marker for delivery route endpoints */}
                  <marker id="delivery-arrow" viewBox="0 0 12 12" refX="10" refY="6"
                    markerWidth="8" markerHeight="8" orient="auto">
                    <path d="M 0 1 L 11 6 L 0 11 L 3 6 Z" fill="var(--color-accent)" opacity="0.8" />
                  </marker>
                  {/* Subtle glow filter for Ayodhya center */}
                  <filter id="center-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Real India map silhouette */}
                <image href="/india-map.svg" x="0" y="0" width="612" height="696" opacity="0.9" />

                {/* Curved delivery routes from Ayodhya → cities */}
                {[
                  { x: 200, y: 185, name: 'Delhi',      curve: 35  },
                  { x: 155, y: 235, name: 'Jaipur',     curve: -25 },
                  { x: 90,  y: 320, name: 'Ahmedabad',  curve: 45  },
                  { x: 100, y: 415, name: 'Mumbai',     curve: -55 },
                  { x: 210, y: 445, name: 'Hyderabad',  curve: 40  },
                  { x: 200, y: 545, name: 'Bengaluru',  curve: -50 },
                  { x: 260, y: 540, name: 'Chennai',    curve: 40  },
                  { x: 415, y: 330, name: 'Kolkata',    curve: -45 },
                  { x: 480, y: 240, name: 'Guwahati',   curve: 35  },
                  { x: 175, y: 610, name: 'Kochi',      curve: 45  },
                ].map((city, i) => {
                  const ax = 310, ay = 260;
                  const mx = (ax + city.x) / 2;
                  const my = (ay + city.y) / 2;
                  const dx = city.x - ax;
                  const dy = city.y - ay;
                  const len = Math.sqrt(dx * dx + dy * dy);
                  const cpx = mx + (-dy / len) * city.curve;
                  const cpy = my + (dx / len) * city.curve;
                  return (
                    <g key={i}>
                      <path
                        d={`M ${ax} ${ay} Q ${cpx} ${cpy} ${city.x} ${city.y}`}
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="1.4"
                        strokeDasharray="8 5"
                        strokeLinecap="round"
                        markerEnd="url(#delivery-arrow)"
                        opacity="0.45"
                      >
                        <animate attributeName="stroke-dashoffset" values="0;-26" dur="2s" repeatCount="indefinite" />
                      </path>
                      {/* City destination dot */}
                      <circle cx={city.x} cy={city.y} r="4" fill="var(--color-accent)" opacity="0.7" />
                      <circle cx={city.x} cy={city.y} r="2" fill="var(--color-accent)" />
                    </g>
                  );
                })}

                {/* Ayodhya marker — concentric rings */}
                <circle cx="310" cy="260" r="22" fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0.25">
                  <animate attributeName="r" values="22;36;22" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.25;0;0.25" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="310" cy="260" r="15" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.55" />
                <circle cx="310" cy="260" r="9" fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0.4" />
                <circle cx="310" cy="260" r="4.5" fill="#C6634A" filter="url(#center-glow)" />

                {/* Ayodhya label */}
                <text x="332" y="256" fill="var(--color-accent)" fontSize="16" fontWeight="700" fontFamily="var(--font-sans)">
                  Ayodhya
                </text>
              </svg>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
