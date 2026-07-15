import './PlaceholderImage.css';

// Furniture type icons (simple SVG silhouettes)
const icons = {
  bed: (
    <svg viewBox="0 0 80 50" fill="currentColor" opacity="0.3">
      <rect x="2" y="30" width="76" height="6" rx="2" />
      <rect x="6" y="12" width="68" height="20" rx="3" />
      <rect x="2" y="36" width="8" height="12" rx="2" />
      <rect x="70" y="36" width="8" height="12" rx="2" />
      <rect x="4" y="4" width="12" height="28" rx="2" />
    </svg>
  ),
  sofa: (
    <svg viewBox="0 0 80 50" fill="currentColor" opacity="0.3">
      <rect x="8" y="14" width="64" height="22" rx="4" />
      <rect x="2" y="18" width="10" height="18" rx="3" />
      <rect x="68" y="18" width="10" height="18" rx="3" />
      <rect x="8" y="36" width="8" height="10" rx="2" />
      <rect x="64" y="36" width="8" height="10" rx="2" />
    </svg>
  ),
  table: (
    <svg viewBox="0 0 80 50" fill="currentColor" opacity="0.3">
      <rect x="4" y="14" width="72" height="5" rx="2" />
      <rect x="10" y="19" width="4" height="28" rx="1" />
      <rect x="66" y="19" width="4" height="28" rx="1" />
    </svg>
  ),
  dining: (
    <svg viewBox="0 0 80 50" fill="currentColor" opacity="0.3">
      <rect x="10" y="12" width="60" height="5" rx="2" />
      <rect x="16" y="17" width="4" height="26" rx="1" />
      <rect x="60" y="17" width="4" height="26" rx="1" />
      <rect x="36" y="17" width="4" height="26" rx="1" />
    </svg>
  ),
  wardrobe: (
    <svg viewBox="0 0 80 50" fill="currentColor" opacity="0.3">
      <rect x="10" y="2" width="60" height="42" rx="3" />
      <line x1="40" y1="2" x2="40" y2="44" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <circle cx="36" cy="24" r="2" />
      <circle cx="44" cy="24" r="2" />
      <rect x="14" y="44" width="8" height="4" rx="1" />
      <rect x="58" y="44" width="8" height="4" rx="1" />
    </svg>
  ),
  chair: (
    <svg viewBox="0 0 80 50" fill="currentColor" opacity="0.3">
      <rect x="20" y="2" width="40" height="4" rx="2" />
      <rect x="20" y="2" width="4" height="28" rx="1" />
      <rect x="56" y="2" width="4" height="28" rx="1" />
      <rect x="20" y="26" width="40" height="5" rx="2" />
      <rect x="22" y="31" width="4" height="16" rx="1" />
      <rect x="54" y="31" width="4" height="16" rx="1" />
    </svg>
  ),
  'tv-unit': (
    <svg viewBox="0 0 80 50" fill="currentColor" opacity="0.3">
      <rect x="4" y="18" width="72" height="20" rx="3" />
      <rect x="8" y="22" width="30" height="12" rx="2" opacity="0.5" />
      <rect x="42" y="22" width="14" height="12" rx="2" opacity="0.5" />
      <rect x="60" y="22" width="12" height="12" rx="2" opacity="0.5" />
      <rect x="14" y="38" width="8" height="6" rx="2" />
      <rect x="58" y="38" width="8" height="6" rx="2" />
    </svg>
  ),
  bookshelf: (
    <svg viewBox="0 0 80 50" fill="currentColor" opacity="0.3">
      <rect x="14" y="2" width="52" height="46" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
      <line x1="14" y1="14" x2="66" y2="14" stroke="currentColor" strokeWidth="2" />
      <line x1="14" y1="26" x2="66" y2="26" stroke="currentColor" strokeWidth="2" />
      <line x1="14" y1="38" x2="66" y2="38" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  storage: (
    <svg viewBox="0 0 80 50" fill="currentColor" opacity="0.3">
      <rect x="16" y="4" width="48" height="42" rx="3" />
      <rect x="20" y="8" width="40" height="10" rx="2" opacity="0.5" />
      <rect x="20" y="22" width="40" height="10" rx="2" opacity="0.5" />
      <rect x="20" y="36" width="40" height="6" rx="2" opacity="0.5" />
    </svg>
  ),
};

export default function PlaceholderImage({ productName, subType, imageLabel, category, className = '', src }) {
  const isPremium = category === 'premium';
  const icon = icons[subType] || icons.table;

  if (src) {
    return (
      <div className={`placeholder-image has-image ${className}`}>
        <img src={src} alt={`${productName} - ${imageLabel}`} className="placeholder-image__real-img" />
      </div>
    );
  }

  return (
    <div className={`placeholder-image ${isPremium ? 'placeholder-image--premium' : 'placeholder-image--budget'} ${className}`}>
      <div className="placeholder-image__grain" />
      <div className="placeholder-image__icon">
        {icon}
      </div>
      <div className="placeholder-image__text">
        <span className="placeholder-image__name">{productName}</span>
        <span className="placeholder-image__label">{imageLabel}</span>
      </div>
    </div>
  );
}
