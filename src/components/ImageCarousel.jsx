import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlaceholderImage from './PlaceholderImage';
import './ImageCarousel.css';

export default function ImageCarousel({ images, productName, subType, category }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setLightbox(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <>
      <div className="carousel">
        {/* Main Image */}
        <div className="carousel__main" onClick={() => setLightbox(true)} role="button" tabIndex={0} aria-label="View fullscreen">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="carousel__slide"
            >
              <PlaceholderImage
                productName={productName}
                subType={subType}
                imageLabel={images[current]?.label || `Image ${current + 1}`}
                category={category}
                className="carousel__image"
                src={images[current]?.src}
              />
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button className="carousel__arrow carousel__arrow--prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="carousel__arrow carousel__arrow--next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 6 15 12 9 18"/></svg>
          </button>

          {/* Expand icon */}
          <div className="carousel__expand">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
              <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
            </svg>
          </div>
        </div>

        {/* Dots */}
        <div className="carousel__dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot ${i === current ? 'carousel__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>

        {/* Thumbnails */}
        <div className="carousel__thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`carousel__thumb ${i === current ? 'carousel__thumb--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Thumbnail ${i + 1}: ${img.label}`}
            >
              <PlaceholderImage
                productName=""
                subType={subType}
                imageLabel={img.label}
                category={category}
                src={img.src}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
          >
            <button className="lightbox__close" onClick={() => setLightbox(false)} aria-label="Close lightbox">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <PlaceholderImage
                    productName={productName}
                    subType={subType}
                    imageLabel={images[current]?.label || `Image ${current + 1}`}
                    category={category}
                    className="lightbox__image"
                    src={images[current]?.src}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <button className="lightbox__arrow lightbox__arrow--prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="lightbox__arrow lightbox__arrow--next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 6 15 12 9 18"/></svg>
            </button>

            <div className="lightbox__counter">
              {current + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
