import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer } from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import { budgetProducts, BRAND_NAME } from '../data/products';
import './RangePage.css';

const finishTypes = ['All', 'Walnut Laminate', 'Oak Laminate', 'White Laminate', 'Beech Laminate', 'Teak Laminate', 'Maple Laminate', 'Wenge Laminate'];
const furnitureTypes = ['All', 'bed', 'dining', 'wardrobe', 'table', 'tv-unit', 'bookshelf', 'storage'];
const furnitureLabels = { bed: 'Beds', dining: 'Dining', wardrobe: 'Wardrobes', table: 'Tables', 'tv-unit': 'TV Units', bookshelf: 'Bookshelves', storage: 'Storage' };

export default function Budget() {
  const [finishFilter, setFinishFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    document.title = `Budget Furniture Range — Great Design, Honest Price | ${BRAND_NAME}`;
  }, []);

  const filtered = useMemo(() => {
    let result = [...budgetProducts];
    if (finishFilter !== 'All') result = result.filter(p => p.finish === finishFilter);
    if (typeFilter !== 'All') result = result.filter(p => p.subType === typeFilter);
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    return result;
  }, [finishFilter, typeFilter, sortBy]);

  return (
    <div className="range-page range-page--budget" data-theme="budget">
      {/* Hero */}
      <section className="range-hero range-hero--budget">
        <div className="range-hero__bg" />
        <div className="container range-hero__content">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Smart Design, Honest Price
          </motion.span>
          <motion.h1
            className="font-serif range-hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Budget-Friendly<br />Furniture Range
          </motion.h1>
          <motion.p
            className="range-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Modern engineered wood & plywood furniture with premium laminate finishes.
            Great design doesn't have to cost a fortune.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="filters-bar">
        <div className="container filters-bar__inner">
          <div className="filter-group">
            <label className="filter-label eyebrow">Finish</label>
            <div className="filter-chips">
              {finishTypes.map((f) => (
                <button
                  key={f}
                  className={`filter-chip ${finishFilter === f ? 'filter-chip--active' : ''}`}
                  onClick={() => setFinishFilter(f)}
                >
                  {f}
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
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
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
              <button className="btn btn-secondary" onClick={() => { setFinishFilter('All'); setTypeFilter('All'); }}>
                Clear Filters
              </button>
            </AnimatedSection>
          ) : (
            <StaggerContainer className="products-grid products-grid--budget">
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
