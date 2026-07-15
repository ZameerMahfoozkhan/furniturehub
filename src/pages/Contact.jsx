import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppButton from '../components/WhatsAppButton';
import { BRAND_NAME, EMAIL, PHONE_DISPLAY, WHATSAPP_NUMBER } from '../data/products';
import './Contact.css';

export default function Contact() {
  useEffect(() => {
    document.title = `Contact Us | ${BRAND_NAME}`;
  }, []);

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__bg" />
        <div className="container contact-hero__content">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Get in Touch
          </motion.span>
          <motion.h1
            className="font-serif contact-hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            We'd Love to<br />Hear from You
          </motion.h1>
          <motion.p
            className="contact-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Whether you have a question about our furniture, need help choosing the right piece,
            or want to discuss a custom order — we're just a message away.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section contact-methods">
        <div className="container">
          <div className="contact-grid">
            {/* WhatsApp */}
            <AnimatedSection delay={0.1} className="contact-card contact-card--whatsapp">
              <div className="contact-card__icon">💬</div>
              <h3 className="contact-card__title font-serif">WhatsApp</h3>
              <p className="contact-card__desc">
                The fastest way to reach us. Send a message and we'll respond within minutes during business hours.
              </p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to know more about Furniture Hub Ayodhya's products.")}`}
                 target="_blank" rel="noopener noreferrer" className="contact-card__value">
                {PHONE_DISPLAY}
              </a>
              <WhatsAppButton
                message="Hi, I'd like to know more about Furniture Hub Ayodhya's products."
                className="contact-card__btn"
              >
                Chat on WhatsApp
              </WhatsAppButton>
            </AnimatedSection>

            {/* Phone */}
            <AnimatedSection delay={0.2} className="contact-card">
              <div className="contact-card__icon">📞</div>
              <h3 className="contact-card__title font-serif">Phone</h3>
              <p className="contact-card__desc">
                Prefer a call? Ring us during business hours and we'll be happy to assist.
              </p>
              <a href={`tel:+919580659559`} className="contact-card__value">
                {PHONE_DISPLAY}
              </a>
            </AnimatedSection>

            {/* Email */}
            <AnimatedSection delay={0.3} className="contact-card">
              <div className="contact-card__icon">✉️</div>
              <h3 className="contact-card__title font-serif">Email</h3>
              <p className="contact-card__desc">
                For detailed enquiries, bulk orders, or business collaborations.
              </p>
              <a href={`mailto:${EMAIL}`} className="contact-card__value">
                {EMAIL}
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Business Hours + Location */}
      <section className="section contact-details">
        <div className="container">
          <div className="contact-details__grid">
            <AnimatedSection direction="left" className="contact-details__hours">
              <span className="eyebrow">Business Hours</span>
              <h3 className="font-serif contact-details__title">When We're Available</h3>
              <table className="hours-table">
                <tbody>
                  <tr><td>Monday – Saturday</td><td>10:00 AM – 8:00 PM</td></tr>
                  <tr><td>Sunday</td><td>11:00 AM – 5:00 PM</td></tr>
                  <tr><td>WhatsApp</td><td>Available 24/7</td></tr>
                </tbody>
              </table>
            </AnimatedSection>

            <AnimatedSection direction="right" className="contact-details__location">
              <span className="eyebrow">Location</span>
              <h3 className="font-serif contact-details__title">Based in Ayodhya, UP</h3>
              <p>
                Our workshop and showroom are located in the heart of Ayodhya, Uttar Pradesh.
                While we welcome walk-in visits, most of our customers shop via WhatsApp from
                across India — and we deliver to all states.
              </p>
              <p className="contact-details__highlight">
                🚚 <strong>We deliver Pan India.</strong> From metropolitan cities to smaller towns,
                your furniture reaches you safely, fully insured and tracked.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="section contact-delivery">
        <div className="container container-narrow">
          <AnimatedSection className="contact-delivery__inner">
            <span className="eyebrow">Shipping Information</span>
            <h2 className="font-serif contact-delivery__title">How Delivery Works</h2>

            <div className="delivery-info-grid">
              <div className="delivery-info-item">
                <h4 className="font-serif">Metro Cities</h4>
                <p>Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad</p>
                <span className="delivery-info-timeline">7–14 business days</span>
              </div>
              <div className="delivery-info-item">
                <h4 className="font-serif">Tier 2 Cities</h4>
                <p>Jaipur, Lucknow, Chandigarh, Indore, Bhopal, Nagpur, and 100+ more</p>
                <span className="delivery-info-timeline">10–18 business days</span>
              </div>
              <div className="delivery-info-item">
                <h4 className="font-serif">Other Locations</h4>
                <p>We deliver to all pin codes across India. Remote areas may take slightly longer.</p>
                <span className="delivery-info-timeline">14–25 business days</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form (UI only) */}
      <section className="section contact-form-section">
        <div className="container container-narrow">
          <AnimatedSection>
            <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              Send Us a Message
            </span>
            <h2 className="font-serif contact-form__heading">Contact Form</h2>
            <p className="contact-form__note">
              For the fastest response, we recommend reaching out via WhatsApp. This form is for reference only.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form__row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" id="name" className="form-input" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" id="phone" className="form-input" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-input" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <select id="subject" className="form-input">
                  <option>Product Enquiry</option>
                  <option>Custom Furniture Order</option>
                  <option>Delivery Question</option>
                  <option>Bulk / Corporate Order</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-input form-textarea" placeholder="Tell us how we can help..." rows="5" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
