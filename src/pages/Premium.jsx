import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import AnimatedSection, { StaggerContainer } from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import { premiumProducts } from '../data/products';
import './RangePage.css';

const woodTypes = ['All', 'Sheesham', 'Teak', 'Mango Wood', 'Rosewood'];
const furnitureTypes = ['All', 'bed', 'dining', 'wardrobe', 'table', 'chair', 'sofa', 'tv-unit', 'bookshelf'];
const furnitureLabels = { bed: 'Beds', dining: 'Dining', wardrobe: 'Wardrobes', table: 'Tables', chair: 'Chairs', sofa: 'Sofas', 'tv-unit': 'TV Units', bookshelf: 'Bookshelves' };

export default function Premium() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get('category') || searchParams.get('type') || 'All';
  const currentWood = searchParams.get('wood') || 'All';

  const [woodFilter, setWoodFilter] = useState(currentWood);
  const [typeFilter, setTypeFilter] = useState(currentCategory);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    const cat = searchParams.get('category') || searchParams.get('type') || 'All';
    const wood = searchParams.get('wood') || 'All';
    setTypeFilter(cat);
    setWoodFilter(wood);
  }, [searchParams]);

  const handleWoodFilter = (w) => {
    setWoodFilter(w);
    const params = new URLSearchParams(searchParams);
    if (w === 'All') params.delete('wood');
    else params.set('wood', w);
    setSearchParams(params);
  };

  const handleTypeFilter = (t) => {
    setTypeFilter(t);
    const params = new URLSearchParams(searchParams);
    if (t === 'All') {
      params.delete('category');
      params.delete('type');
    } else {
      params.set('category', t);
    }
    setSearchParams(params);
  };

  const filtered = useMemo(() => {
    let result = [...premiumProducts];
    if (woodFilter !== 'All') result = result.filter(p => p.woodType === woodFilter);
    if (typeFilter !== 'All') result = result.filter(p => p.subType === typeFilter);

    if (sortBy === 'low-to-high') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'high-to-low') result.sort((a, b) => b.price - a.price);

    return result;
  }, [woodFilter, typeFilter, sortBy]);

  const clearAllFilters = () => {
    setWoodFilter('All');
    setTypeFilter('All');
    setSearchParams({});
  };

  return (
    <div className="range-page range-page--premium" data-theme="premium">
      <SEO 
        title="Premium Solid Wood Furniture | Handcrafted Sheesham & Teak"
        description="Discover luxury handcrafted solid wood furniture. Shop premium Sheesham, Teak, and Rosewood beds, sofas & dining sets. Built to last generations. Buy online today!"
        keywords="solid wood furniture, premium furniture, sheesham wood beds, teak wood dining, rosewood furniture"
        path="/premium"
      />
      {/* Hero */}
      <section className="range-hero range-hero--premium wood-texture">
        <div className="range-hero__bg" />
        <div className="container range-hero__content">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Handcrafted Heirloom Quality
          </motion.span>
          <motion.h1
            className="font-serif range-hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Premium Solid Wood<br />Collection
          </motion.h1>
          <motion.p
            className="range-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Sheesham, Teak, Mango Wood & Rosewood — handcrafted by Ayodhya's finest artisans.
            Each piece is an heirloom in the making.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="filters-bar">
        <div className="container filters-bar__inner">
          <div className="filter-group">
            <label className="filter-label eyebrow">Wood Type</label>
            <div className="filter-chips">
              {woodTypes.map((w) => (
                <button
                  key={w}
                  className={`filter-chip ${woodFilter === w ? 'filter-chip--active' : ''}`}
                  onClick={() => handleWoodFilter(w)}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <label className="filter-label eyebrow">Category</label>
            <div className="filter-chips">
              {furnitureTypes.map((t) => (
                <button
                  key={t}
                  className={`filter-chip ${typeFilter === t ? 'filter-chip--active' : ''}`}
                  onClick={() => handleTypeFilter(t)}
                >
                  {t === 'All' ? 'All' : furnitureLabels[t] || t}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <label className="filter-label eyebrow">Sort</label>
            <select className="filter-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section products-section">
        <div className="container">
          {filtered.length === 0 ? (
            <AnimatedSection className="no-results">
              <p className="font-serif">No products match your filters.</p>
              <button className="btn btn-secondary" onClick={clearAllFilters}>
                Clear Filters
              </button>
            </AnimatedSection>
          ) : (
            <StaggerContainer className="products-grid products-grid--premium">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>
    </div>
  );
}
