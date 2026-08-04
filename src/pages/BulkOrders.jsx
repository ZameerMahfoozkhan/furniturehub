import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';
import './BulkOrders.css';

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

/* ── Bulk-available product categories ── */
const bulkCategories = [
  {
    icon: '🛏️',
    title: 'Beds',
    keywords: 'Bulk Bed Supplier · Hostel Bed Supplier · Hotel Bed Supplier · Engineered Wood Bed Wholesale',
    desc: 'Single, double & bunk beds in engineered wood and particle board. Ideal for hostels, PGs, hotels, and rental apartments. Hydraulic storage beds also available in bulk.',
  },
  {
    icon: '🛋️',
    title: 'Sofas & Seating',
    keywords: 'Bulk Sofa Supplier · Hotel Sofa Supplier · Cafe Sofa Supplier · Reception Sofa Supplier · Office Sofa Supplier',
    desc: 'Reception sofas, café seating, office waiting chairs, and living-room sets. Available in solid wood and engineered wood with custom upholstery options.',
  },
  {
    icon: '🗄️',
    title: 'Wardrobes',
    keywords: 'Wardrobe Wholesale · Bulk Wardrobe Supplier · Hostel Wardrobe · Hotel Wardrobe Supplier',
    desc: '2-door and 3-door wardrobes with lockable compartments — perfect for hostel rooms, hotel suites, PG accommodations, and builder-furnished apartments.',
  },
  {
    icon: '🖥️',
    title: 'Tables & Desks',
    keywords: 'Bulk Table Supplier · Office Table Supplier · Study Table Wholesale · Computer Table Wholesale · Dining Table Bulk Order',
    desc: 'Office desks, computer tables, study tables, and dining tables. Compact designs for schools and colleges; executive finishes for corporate offices.',
  },
  {
    icon: '📺',
    title: 'TV Units & Shoe Racks',
    keywords: 'Bulk TV Unit Supplier · Shoe Rack Wholesale',
    desc: 'Wall-mounted TV units and space-saving shoe rack cabinets in bulk. Great for furnished apartments, guest houses, and serviced accommodation.',
  },
  {
    icon: '🛕',
    title: 'Pooja Mandirs',
    keywords: 'Bulk Mandir Supplier · Wooden Temple Wholesale',
    desc: 'LED-backlit wooden mandirs with storage. Popular for builder projects, apartment complexes, and retail reselling.',
  },
];

/* ── Industries / B2B buyer types ── */
const industries = [
  { icon: '🏨', title: 'Hotels & Resorts', desc: 'Complete room packages — beds, wardrobes, desks, TV units & sofas for every room tier.' },
  { icon: '🏠', title: 'Hostels & PG Rooms', desc: 'Budget beds, wardrobes & study tables built to handle daily wear in shared living spaces.' },
  { icon: '🏢', title: 'Offices & Co-Working', desc: 'Executive desks, reception sofas, meeting-room tables & storage cabinets.' },
  { icon: '🏫', title: 'Schools & Colleges', desc: 'Classroom tables, library furniture, and hostel beds at institution-friendly pricing.' },
  { icon: '🏗️', title: 'Builders & Apartments', desc: 'Flat-ready furniture packages — beds, wardrobes, TV units, shoe racks — per unit pricing.' },
  { icon: '☕', title: 'Cafés & Restaurants', desc: 'Dining tables, chairs, counter furniture & accent seating for F&B interiors.' },
  { icon: '🏡', title: 'Guest Houses', desc: 'Complete guest room packages including bed, wardrobe, table and TV unit — budget and premium.' },
  { icon: '🏘️', title: 'Rental Properties', desc: 'Durable, cost-effective furniture for rental apartments, co-living spaces, and service apartments.' },
];

/* ── Material options ── */
const materials = [
  {
    title: 'Engineered Wood Furniture',
    desc: 'Our most popular bulk range. Engineered wood offers excellent durability, a premium look, and a lower cost than solid wood — making it the top choice for hotels, hostels, offices, and apartment projects. Available as beds, wardrobes, desks, TV units, shoe racks, and dining tables.',
    tags: ['Engineered Wood Bed', 'Engineered Wood Wardrobe', 'Engineered Wood TV Unit', 'Engineered Wood Study Table', 'Engineered Wood Dining Table', 'Engineered Wood Sofa', 'Engineered Wood Office Furniture'],
  },
  {
    title: 'Particle Board Furniture',
    desc: 'The most affordable option for large-volume orders. Particle board furniture is lightweight, easy to install, and available in a wide range of finishes. Ideal for budget hotel rooms, PG hostels, rental apartments, and institutional projects.',
    tags: ['Particle Board Bed', 'Particle Board Wardrobe', 'Particle Board Table', 'Particle Board Office Desk', 'Affordable Particle Board Furniture', 'Commercial Particle Board Furniture'],
  },
  {
    title: 'Premium Solid Wood Furniture',
    desc: 'For luxury hotels, resorts, and executive offices that demand the finest craftsmanship. Handcrafted from Sheesham, Teak, Mango Wood, and Rosewood by Ayodhya\'s master artisans.',
    tags: ['Sheesham Wood', 'Teak Wood', 'Rosewood', 'Mango Wood'],
  },
];

export default function BulkOrders() {
  useEffect(() => {
    document.title = 'Bulk Furniture Supplier in Ayodhya | Wholesale Engineered Wood & Particle Board Furniture for Hotels, Hostels, Offices — Furniture Hub';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Furniture Hub Ayodhya — India\'s trusted bulk furniture supplier & wholesale furniture manufacturer. Engineered wood & particle board beds, wardrobes, tables, sofas & TV units for hotels, hostels, PG rooms, offices, schools, builders & apartments. Factory-direct pricing, pan-India delivery.');
    }
  }, []);

  return (
    <div className="bulk-page" itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content="Furniture Hub Ayodhya — Bulk Furniture Supplier" />
      <meta itemProp="description" content="Wholesale bulk furniture supplier in Ayodhya — engineered wood and particle board furniture for hotels, offices, hostels, schools, and builders." />
      <meta itemProp="areaServed" content="India" />

      {/* ═══ Hero ═══ */}
      <section className="bulk-hero wood-texture">
        <div className="bulk-hero__bg" />
        <div className="container bulk-hero__content">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            B2B &amp; Wholesale — Bulk Furniture Supplier in Ayodhya
          </motion.span>
          <motion.h1
            className="font-serif bulk-hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Bulk Furniture Supplier<br />for Hotels, Offices &amp; Projects.
          </motion.h1>
          <motion.p
            className="bulk-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Wholesale furniture manufacturer in Ayodhya — engineered wood &amp; particle board beds, wardrobes, sofas, tables &amp; TV&nbsp;units at factory-direct prices. Bulk orders for hotels, hostels, PG&nbsp;rooms, offices, schools, builders &amp; apartments — delivered pan&#8209;India.
          </motion.p>
          <motion.div
            className="bulk-hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <WhatsAppButton message="Hi! I'm interested in bulk furniture order for my project. Can we discuss pricing and availability?" className="btn-lg">
              Get Wholesale Quote on WhatsApp
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>

      {/* ═══ Why Choose Us ═══ */}
      <section className="section bulk-benefits">
        <div className="container">
          <AnimatedSection className="bulk-benefits__header text-center">
            <span className="eyebrow">The Furniture Hub Advantage</span>
            <h2 className="font-serif section-title">Why Partner With India's Trusted Wholesale Furniture Supplier?</h2>
            <p className="section-subtitle">As a leading <strong>bulk furniture dealer</strong> and <strong>commercial furniture supplier</strong> based in Ayodhya, we serve hotels, hostels, offices, schools, builders, and institutional buyers across India.</p>
          </AnimatedSection>

          <div className="bulk-benefits__grid">
            <AnimatedSection className="benefit-card" delay={0.1}>
              <div className="benefit-card__icon">💰</div>
              <h3 className="font-serif benefit-card__title">Factory-Direct Wholesale Pricing</h3>
              <p className="benefit-card__desc">Cut out the middlemen. As a <strong>furniture wholesale</strong> manufacturer, we offer the most competitive rates on bulk volume — whether you need 10 beds or 500 wardrobes. The more you order, the more you save.</p>
            </AnimatedSection>

            <AnimatedSection className="benefit-card" delay={0.2}>
              <div className="benefit-card__icon">🏭</div>
              <h3 className="font-serif benefit-card__title">Custom Manufacturing at Scale</h3>
              <p className="benefit-card__desc">Need a specific design replicated across 50 hotel rooms? Our Ayodhya workshop custom-builds <strong>engineered wood furniture</strong>, <strong>particle board furniture</strong>, and solid wood pieces to your exact specifications.</p>
            </AnimatedSection>

            <AnimatedSection className="benefit-card" delay={0.3}>
              <div className="benefit-card__icon">🚚</div>
              <h3 className="font-serif benefit-card__title">Reliable Pan-India Delivery</h3>
              <p className="benefit-card__desc">We handle all logistics. Whether your project is in Mumbai, Delhi, Bangalore, or any tier-2 city, we ensure safe, timely, and insured delivery of your <strong>bulk furniture order</strong>.</p>
            </AnimatedSection>

            <AnimatedSection className="benefit-card" delay={0.4}>
              <div className="benefit-card__icon">📦</div>
              <h3 className="font-serif benefit-card__title">Flexible MOQ</h3>
              <p className="benefit-card__desc">No rigid minimum order requirements. Whether you're an <strong>affordable furniture supplier</strong> looking to stock 20 pieces or a builder furnishing 200 flats, we accommodate orders of every scale.</p>
            </AnimatedSection>

            <AnimatedSection className="benefit-card" delay={0.5}>
              <div className="benefit-card__icon">🤝</div>
              <h3 className="font-serif benefit-card__title">Dedicated B2B Support</h3>
              <p className="benefit-card__desc">Direct WhatsApp line to our B2B team. Get custom quotations, bulk sample approvals, timeline planning, and on-site coordination — all through a single point of contact.</p>
            </AnimatedSection>

            <AnimatedSection className="benefit-card" delay={0.6}>
              <div className="benefit-card__icon">🏅</div>
              <h3 className="font-serif benefit-card__title">Proven Quality Standards</h3>
              <p className="benefit-card__desc">15+ years of craftsmanship, 2500+ happy families, 150+ cities served. Every piece — from <strong>budget beds in bulk</strong> to premium Sheesham sofas — passes rigorous quality checks.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ Product Categories for Bulk ═══ */}
      <section className="section bulk-products">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="eyebrow">Bulk Furniture Catalog</span>
            <h2 className="font-serif section-title">What You Can Order in Bulk</h2>
            <p className="section-subtitle">From <strong>engineered wood beds wholesale</strong> to <strong>particle board office desks</strong> — browse our complete range of bulk-available furniture categories.</p>
          </AnimatedSection>

          <div className="bulk-products__grid">
            {bulkCategories.map((cat, i) => (
              <AnimatedSection className="bulk-product-card" delay={i * 0.08} key={cat.title}>
                <div className="bulk-product-card__icon">{cat.icon}</div>
                <h3 className="font-serif bulk-product-card__title">{cat.title}</h3>
                <p className="bulk-product-card__desc">{cat.desc}</p>
                <p className="bulk-product-card__tags">{cat.keywords}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center" delay={0.3}>
            <div className="bulk-products__browse">
              <Link to="/budget" className="btn btn-secondary">Browse Budget Range</Link>
              <Link to="/premium" className="btn btn-secondary">Browse Premium Range</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ Industries We Serve ═══ */}
      <section className="section bulk-industries">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="eyebrow">Industries We Serve</span>
            <h2 className="font-serif section-title">Institutional &amp; Commercial Furniture Supplier</h2>
            <p className="section-subtitle">Trusted by <strong>hotel furniture suppliers</strong>, <strong>hostel furniture suppliers</strong>, <strong>office furniture suppliers</strong>, <strong>school furniture suppliers</strong>, and <strong>builder furniture suppliers</strong> across India.</p>
          </AnimatedSection>

          <div className="bulk-industries__grid">
            {industries.map((ind, i) => (
              <AnimatedSection className="industry-card" delay={i * 0.06} key={ind.title}>
                <span className="industry-card__icon">{ind.icon}</span>
                <div>
                  <h3 className="industry-card__title">{ind.title}</h3>
                  <p className="industry-card__desc">{ind.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Material Options ═══ */}
      <section className="section bulk-materials">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="eyebrow">Material Options</span>
            <h2 className="font-serif section-title">Engineered Wood, Particle Board &amp; Solid Wood</h2>
            <p className="section-subtitle">Choose the right material for your project budget. We are a leading <strong>engineered wood furniture supplier</strong>, <strong>particle board furniture manufacturer</strong>, and <strong>premium solid wood furniture dealer</strong> in Ayodhya.</p>
          </AnimatedSection>

          <div className="bulk-materials__grid">
            {materials.map((mat, i) => (
              <AnimatedSection className="material-card" delay={i * 0.1} key={mat.title}>
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

      {/* ═══ How It Works ═══ */}
      <section className="section bulk-process">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="eyebrow">Simple Process</span>
            <h2 className="font-serif section-title">How Bulk Ordering Works</h2>
          </AnimatedSection>

          <div className="bulk-process__steps">
            <AnimatedSection className="process-step" delay={0.1}>
              <div className="process-step__number">01</div>
              <h3 className="process-step__title">Share Your Requirements</h3>
              <p className="process-step__desc">Tell us what you need — product types, quantities, material preference (engineered wood, particle board, or solid wood), dimensions, and delivery location.</p>
            </AnimatedSection>

            <AnimatedSection className="process-step" delay={0.2}>
              <div className="process-step__number">02</div>
              <h3 className="process-step__title">Get a Custom Quotation</h3>
              <p className="process-step__desc">Our B2B team sends you a detailed wholesale quote with volume-based pricing, material specs, and delivery timeline — within 24 hours.</p>
            </AnimatedSection>

            <AnimatedSection className="process-step" delay={0.3}>
              <div className="process-step__number">03</div>
              <h3 className="process-step__title">Approve &amp; We Manufacture</h3>
              <p className="process-step__desc">Once you confirm, our Ayodhya workshop begins manufacturing your order. You receive progress updates via WhatsApp throughout.</p>
            </AnimatedSection>

            <AnimatedSection className="process-step" delay={0.4}>
              <div className="process-step__number">04</div>
              <h3 className="process-step__title">Pan-India Delivery</h3>
              <p className="process-step__desc">Professionally packed and shipped to your doorstep — anywhere in India. Insured transit with real-time tracking updates.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ Long-Tail Keywords — FAQ-style ═══ */}
      <section className="section bulk-faq" itemScope itemType="https://schema.org/FAQPage">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="eyebrow">Common Questions</span>
            <h2 className="font-serif section-title">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="bulk-faq__list">
            {[
              {
                q: 'What is the minimum order quantity for bulk furniture?',
                a: 'We keep our MOQ flexible. Whether you need 10 beds for a guest house or 500 wardrobes for a builder project, we accommodate orders of every scale with competitive wholesale pricing.',
              },
              {
                q: 'Do you supply engineered wood furniture in bulk?',
                a: 'Yes! We are one of India\'s leading engineered wood furniture suppliers. Our bulk range includes engineered wood beds, wardrobes, TV units, study tables, dining tables, office desks, and sofas — all available at wholesale prices.',
              },
              {
                q: 'Can you supply particle board furniture for hotels and hostels?',
                a: 'Absolutely. Our particle board furniture range is designed for high-volume commercial projects — hostel beds, hotel wardrobes, PG room tables, and office desks. Particle board offers the lowest cost per unit while maintaining a premium look.',
              },
              {
                q: 'Do you deliver bulk furniture orders across India?',
                a: 'Yes, we offer pan-India delivery for all bulk orders. We\'ve delivered to 150+ cities including Mumbai, Delhi, Bangalore, Hyderabad, Pune, Kolkata, Chennai, and numerous tier-2 and tier-3 cities.',
              },
              {
                q: 'What industries do you supply furniture to?',
                a: 'We supply furniture to hotels, resorts, hostels, PG rooms, offices, co-working spaces, schools, colleges, builders, apartments, cafés, restaurants, guest houses, and rental properties. We are a trusted institutional and commercial furniture supplier.',
              },
              {
                q: 'Do you offer budget furniture for rental properties and PG rooms?',
                a: 'Yes. Our budget furniture range is specifically designed for rental properties, PG accommodations, and serviced apartments — durable, cost-effective, and good-looking engineered wood and particle board furniture that tenants love and landlords can afford.',
              },
            ].map((faq, i) => (
              <AnimatedSection className="faq-item" delay={i * 0.05} key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 className="faq-item__q" itemProp="name">{faq.q}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="faq-item__a" itemProp="text">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section bulk-cta-section">
        <div className="container">
          <AnimatedSection className="bulk-cta__inner">
            <h2 className="font-serif bulk-cta__title">Ready to Place a Bulk Furniture Order?</h2>
            <p className="bulk-cta__desc">
              Connect directly with our B2B sales team on WhatsApp. Share your requirements, quantities, material preference, and timelines — we'll send a custom wholesale quotation within 24&nbsp;hours.
            </p>
            <div className="bulk-cta__actions">
              <WhatsAppButton message="Hi Furniture Hub team! I'm interested in placing a bulk furniture order for a commercial project. Can we discuss wholesale pricing and availability?" className="btn-lg">
                Chat with B2B Sales on WhatsApp
              </WhatsAppButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
