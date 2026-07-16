import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer } from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import { premiumProducts, BRAND_NAME } from '../data/products';
import './RangePage.css';

const woodTypes = ['All', 'Sheesham', 'Teak', 'Mango Wood', 'Rosewood'];
const furnitureTypes = ['All', 'bed', 'dining', 'wardrobe', 'table', 'chair', 'sofa', 'tv-unit', 'bookshelf'];
const furnitureLabels = { bed: 'Beds', dining: 'Dining', wardrobe: 'Wardrobes', table: 'Tables', chair: 'Chairs', sofa: 'Sofas', 'tv-unit': 'TV Units', bookshelf: 'Bookshelves' };

export default function Premium() {
  const [woodFilter, setWoodFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    document.title = `Premium Solid Wood Furniture | ${BRAND_NAME}`;
  }, []);

  const filtered = useMemo(() => {
    let result = [...premiumProducts];
    if (woodFilter !== 'All') result = result.filter(p => p.woodType === woodFilter);
    if (typeFilter !== 'All') result = result.filter(p => p.subType === typeFilter);

    return result;
  }, [woodFilter, typeFilter]);

  return (
    <div className="range-page range-page--premium" data-theme="premium">
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
                  onClick={() => setWoodFilter(w)}
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
                  onClick={() => setTypeFilter(t)}
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
              <button className="btn btn-secondary" onClick={() => { setWoodFilter('All'); setTypeFilter('All'); }}>
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
