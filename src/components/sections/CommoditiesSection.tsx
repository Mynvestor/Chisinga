import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { commodities, type Commodity } from '../../data/commodities';
import { revealGroupVariants, revealItemVariants } from './motionVariants';

interface CommoditiesSectionProps {
  isPage?: boolean;
}

export function CommoditiesSection({ isPage = false }: CommoditiesSectionProps) {
  const [selectedCommodity, setSelectedCommodity] = useState<Commodity | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const Heading = isPage ? 'h1' : 'h2';
  const pageCount = Math.ceil(commodities.length / visibleCount);
  const currentStart = currentPage * visibleCount;

  useEffect(() => {
    function updateVisibleCount() {
      if (window.matchMedia('(max-width: 430px)').matches) {
        setVisibleCount(1);
      } else if (window.matchMedia('(max-width: 760px)').matches) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    }

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, pageCount - 1));
  }, [pageCount]);

  useEffect(() => {
    if (!selectedCommodity) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    function handleDialogKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') setSelectedCommodity(null);
      if (event.key === 'Tab') {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    window.addEventListener('keydown', handleDialogKeydown);
    return () => {
      window.removeEventListener('keydown', handleDialogKeydown);
      previouslyFocused?.focus();
    };
  }, [selectedCommodity]);

  return (
    <section
      className={`commodities-section${isPage ? ' commodities-section--page' : ''}`}
      id={isPage ? undefined : 'commodities'}
    >
      <motion.div
        className="commodities-heading"
        variants={revealGroupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.span className="eyebrow" variants={revealItemVariants}>
          {isPage ? 'What we supply' : 'Our commodities'}
        </motion.span>
        <motion.div variants={revealItemVariants}>
          <Heading>Essential commodities, responsibly sourced</Heading>
          <p>
            We coordinate agricultural commodity sourcing for institutional, commercial, and
            regional buyers.
          </p>
        </motion.div>
      </motion.div>
      <div className="commodity-carousel content-width">
        <motion.div
          className="commodities-grid"
          variants={revealGroupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {commodities.slice(currentStart, currentStart + visibleCount).map((commodity) => (
            <article
              className="commodity-card"
              key={commodity.name}
            >
              <img
                className="commodity-card__image"
                src={commodity.image}
                alt={commodity.imageAlt}
                loading="lazy"
              />
              <div className="commodity-card__body">
                <h2>{commodity.name}</h2>
                <button
                  className="commodity-card__button"
                  type="button"
                  onClick={() => setSelectedCommodity(commodity)}
                >
                  View details
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </motion.div>
        <div className="commodity-carousel__controls" aria-label="Commodity carousel controls">
          <button
            className="commodity-carousel__arrow"
            type="button"
            aria-label="Previous commodities"
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((page) => Math.max(0, page - 1))}
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className="commodity-carousel__dots" role="group" aria-label="Choose commodity page">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                className={`commodity-carousel__dot${currentPage === index ? ' is-active' : ''}`}
                key={index}
                type="button"
                aria-label={`Show commodity page ${index + 1}`}
                aria-current={currentPage === index ? 'true' : undefined}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>
          <button
            className="commodity-carousel__arrow"
            type="button"
            aria-label="Next commodities"
            disabled={currentPage === pageCount - 1}
            onClick={() => setCurrentPage((page) => Math.min(pageCount - 1, page + 1))}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {selectedCommodity && (
        <div
          className="commodity-modal__backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedCommodity(null);
          }}
        >
          <div
            className="commodity-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="commodity-modal-title"
            aria-describedby="commodity-modal-description"
          >
            <button
              className="commodity-modal__close"
              ref={closeButtonRef}
              type="button"
              aria-label="Close commodity details"
              onClick={() => setSelectedCommodity(null)}
            >
              <span aria-hidden="true">×</span>
            </button>
            <img
              className="commodity-modal__image"
              src={selectedCommodity.image}
              alt=""
            />
            <div className="commodity-modal__content">
              <span className="eyebrow">Commodity</span>
              <h2 id="commodity-modal-title">{selectedCommodity.name}</h2>
              <p id="commodity-modal-description">{selectedCommodity.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
