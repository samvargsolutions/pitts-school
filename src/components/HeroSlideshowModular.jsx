import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { routeLinks, useSiteContent } from '../context/siteContent';

const DEFAULT_HERO_SLIDES = [
  '/hero/2.png',
  '/hero/4.png',
  '/hero/7.png',
  '/hero/1.png',
  '/hero/8.png',
];

export default function HeroSlideshowModular() {
  const siteContent = useSiteContent();
  const hero = siteContent.hero || {};
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = Array.isArray(hero.slides) && hero.slides.length > 0
    ? hero.slides
    : DEFAULT_HERO_SLIDES;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Ensure target text matches the design reference even if old local storage exists
  const isOldText = !hero.title || hero.title === 'Nurturing Minds.';
  
  const titleLine1 = isOldText ? 'An Entrance to' : hero.title;
  const titleLine2 = isOldText ? 'Opportunity.' : (hero.subtitle || 'Opportunity.');
  const bodyText = (isOldText || hero.body?.includes('committed to academic') || hero.body?.includes('A confident first impression'))
    ? 'Pitts Modern School, Gomia, Jharkhand'
    : hero.body;
  const primaryLabel = (isOldText || hero.primaryLabel === 'Explore Our School') ? 'Discover Pitts' : hero.primaryLabel;
  const primaryHref = hero.primaryHref || routeLinks.about;
  const secondaryLabel = (isOldText || hero.secondaryLabel === 'Admissions Open') ? 'Admissions' : hero.secondaryLabel;
  const secondaryHref = hero.secondaryHref || routeLinks.admissions;

  return (
    <section className="hero-slideshow-section" aria-label="Pitts Modern School Hero Slideshow">
      {/* Background Slideshow Layer */}
      <div className="hero-slides-wrapper">
        {heroSlides.map((slideImg, index) => (
          <div
            key={slideImg}
            className={`hero-slide-bg ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(5, 18, 38, 0.45) 0%, rgba(5, 18, 38, 0.2) 28%, transparent 38%), url('${slideImg}')`,
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="hero-clean-container">
        <div className="hero-clean-content">
          <h1 className="hero-clean-title">
            <span>{titleLine1}</span>
            <span>{titleLine2}</span>
          </h1>

          <p className="hero-clean-subtitle">
            {bodyText}
          </p>

          <div className="hero-clean-actions">
            <a href={primaryHref} className="hero-btn-primary">
              <span>{primaryLabel}</span>
              <ArrowRight size={18} className="hero-btn-arrow" />
            </a>

            <a href={secondaryHref} className="hero-btn-secondary">
              <span>{secondaryLabel}</span>
              <ArrowRight size={18} className="hero-btn-arrow" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="hero-slide-nav">
        <button onClick={goToPrev} className="hero-nav-arrow" aria-label="Previous Slide">
          <ChevronLeft size={18} />
        </button>
        <div className="hero-slide-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button onClick={goToNext} className="hero-nav-arrow" aria-label="Next Slide">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}



