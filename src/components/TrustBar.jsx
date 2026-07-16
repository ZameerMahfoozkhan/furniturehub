import './TrustBar.css';
import WhatsAppIcon from './WhatsAppIcon';

const trustItems = [
  { icon: '🚚', text: 'Pan India Delivery' },
  { icon: '🪵', text: 'Handcrafted Quality' },
  { icon: <WhatsAppIcon size={20} fill="#25D366" />, text: 'WhatsApp Support' },
  { icon: '🏆', text: '15+ Years of Craftsmanship' },
  { icon: '🛡️', text: 'Quality Assured' },
  { icon: '🏠', text: '2500+ Happy Homes' },
];

export default function TrustBar() {
  // Double the items for seamless infinite scroll
  const doubledItems = [...trustItems, ...trustItems];

  return (
    <div className="trust-bar">
      <div className="trust-bar__track marquee-track">
        {doubledItems.map((item, i) => (
          <div key={i} className="trust-bar__item">
            <span className="trust-bar__icon">{item.icon}</span>
            <span className="trust-bar__text">{item.text}</span>
            <span className="trust-bar__dot">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
