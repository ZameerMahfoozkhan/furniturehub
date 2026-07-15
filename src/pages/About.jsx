import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, staggerItem } from '../components/AnimatedSection';
import CountUp from '../components/CountUp';
import { BRAND_NAME, trustStats } from '../data/products';
import './About.css';

const milestones = [
  { year: '2010', title: 'The Beginning', desc: 'Started as a small workshop in Ayodhya, crafting furniture for local families with traditional techniques.' },
  { year: '2014', title: 'Growing Craft', desc: 'Expanded our workshop and team of artisans, taking on larger orders and developing signature joinery methods.' },
  { year: '2018', title: 'Pan-India Reach', desc: 'Launched our shipping network, delivering handcrafted furniture to homes across all major Indian cities.' },
  { year: '2021', title: 'Budget Range Launch', desc: 'Introduced our affordable engineered wood range — bringing quality design to every budget, without compromise.' },
  { year: '2024', title: 'Digital Storefront', desc: 'Brought our catalogue online and launched WhatsApp-based ordering for a seamless, personal buying experience.' },
  { year: 'Today', title: '2500+ Happy Homes', desc: 'Serving customers in 150+ cities with both premium solid wood and smart budget furniture. Our best chapter yet.' },
];

const values = [
  { icon: '🪵', title: 'Material Honesty', desc: 'We never mislead about what goes into our furniture. Solid wood means solid wood. Plywood is described as plywood. Transparency builds trust.' },
  { icon: '🤲', title: 'Artisan-First', desc: 'Our craftsmen are the heart of this brand. Fair wages, safe working conditions, and respect for their generational skills — always.' },
  { icon: '💰', title: 'Honest Pricing', desc: 'No middleman markups. Factory-to-home pricing on both our premium and budget ranges. You pay for quality, not overhead.' },
  { icon: '🌍', title: 'Accessible Quality', desc: "We believe every home in India deserves well-made furniture. That's why we offer two ranges — for every lifestyle and budget." },
];

export default function About() {
  useEffect(() => {
    document.title = `Our Story — Craftsmanship Rooted in Ayodhya | ${BRAND_NAME}`;
  }, []);

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero wood-texture">
        <div className="about-hero__bg" />
        <div className="container about-hero__content">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Our Story
          </motion.span>
          <motion.h1
            className="font-serif about-hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Rooted in Ayodhya's<br />Craft. Built for India.
          </motion.h1>
          <motion.p
            className="about-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            For over 15 years, we've been turning Ayodhya's rich woodworking heritage into
            furniture that homes across India love, use, and pass down.
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section brand-story">
        <div className="container">
          <div className="brand-story__layout">
            <AnimatedSection direction="left" className="brand-story__text">
              <span className="eyebrow">The Journey</span>
              <h2 className="font-serif brand-story__title">From a Small Workshop to Homes Across India</h2>
              <p>
                Furniture Hub Ayodhya started with a simple belief: that the woodworking traditions of
                Ayodhya — honed over centuries — deserve to be shared with the rest of India. What began
                as a small family workshop has grown into a brand that serves thousands of families from
                Kashmir to Kanyakumari.
              </p>
              <p>
                Our founder grew up surrounded by the sound of chisels and the scent of Sheesham shavings.
                That same passion drives us today. Every piece in our Premium collection passes through the
                hands of artisans who have inherited their craft through generations. Every piece in our Budget
                range is designed with the same eye for detail — made accessible through modern materials and
                efficient production.
              </p>
              <p>
                We don't just sell furniture. We deliver a piece of Ayodhya's heritage to your home.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className="brand-story__visual">
              <div className="brand-story__img">
                <div className="brand-story__placeholder" style={{ background: 'linear-gradient(rgba(15, 10, 7, 0.4), rgba(15, 10, 7, 0.8)), url(/Artisan-at-Work.png) center/cover' }}>
                  <span className="font-serif">Our Workshop</span>
                  <span className="eyebrow">Ayodhya, UP</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm about-stats">
        <div className="container">
          <div className="about-stats__grid">
            {trustStats.map((stat, i) => (
              <div key={i} className="about-stat">
                <span className="about-stat__value font-serif">
                  <CountUp end={stat.value} suffix="+" />
                </span>
                <span className="about-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              What We Stand For
            </span>
            <h2 className="font-serif about-values__heading">Our Values</h2>
          </AnimatedSection>

          <StaggerContainer className="about-values__grid" staggerDelay={0.1}>
            {values.map((v, i) => (
              <motion.div key={i} className="value-card" variants={staggerItem}>
                <span className="value-card__icon">{v.icon}</span>
                <h3 className="value-card__title font-serif">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline">
        <div className="container container-narrow">
          <AnimatedSection>
            <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              Our Journey
            </span>
            <h2 className="font-serif about-timeline__heading">Milestones</h2>
          </AnimatedSection>

          <div className="timeline">
            {milestones.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className="timeline-item">
                <div className="timeline-item__marker">
                  <span className="timeline-item__year font-serif">{m.year}</span>
                  <div className="timeline-item__dot" />
                </div>
                <div className="timeline-item__content">
                  <h3 className="timeline-item__title font-serif">{m.title}</h3>
                  <p className="timeline-item__desc">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section about-team">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              The People Behind the Brand
            </span>
            <h2 className="font-serif about-values__heading">Meet the Founders</h2>
          </AnimatedSection>

          <StaggerContainer className="about-team__grid" staggerDelay={0.15}>
            <motion.div className="team-card" variants={staggerItem}>
              <div className="team-card__icon">💻</div>
              <h3 className="team-card__name font-serif"><a href="https://zameerkhan.online" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Zameer Mahfooz Khan</a></h3>
              <span className="team-card__role">Founder &amp; Tech Lead</span>
              <p className="team-card__desc">
                Manages the website, all online operations, and brand presence across digital platforms.
                The driving force behind Furniture Hub Ayodhya's tech-first approach to traditional craftsmanship.
              </p>
              <a href="https://zameerkhan.online" target="_blank" rel="noopener noreferrer" className="team-card__link">
                zameerkhan.online →
              </a>
            </motion.div>

            <motion.div className="team-card" variants={staggerItem}>
              <div className="team-card__icon">🏭</div>
              <h3 className="team-card__name font-serif">Adnan Khan</h3>
              <span className="team-card__role">Co-Founder &amp; Operations Head</span>
              <p className="team-card__desc">
                Manages all offline operations — from logistics and quality control to production
                oversight. Ensures every piece that leaves the workshop meets the highest standards.
              </p>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      {/* Founder Note */}
      <section className="section founder-note">
        <div className="container container-narrow">
          <AnimatedSection className="founder-note__inner">
            <span className="eyebrow">A Note from Our Founders</span>
            <blockquote className="font-serif founder-note__quote">
              "Every piece of furniture that leaves our workshop carries a bit of Ayodhya with it —
              the patience of our artisans, the warmth of the wood, and a promise that it'll become
              part of your family's story."
            </blockquote>
            <div className="founder-note__author">
              <span className="founder-note__name"><a href="https://zameerkhan.online" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Zameer Mahfooz Khan</a> &amp; Adnan Khan</span>
              <span className="founder-note__role">Founders, {BRAND_NAME}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
