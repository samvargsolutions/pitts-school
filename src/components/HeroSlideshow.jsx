import React from 'react';

const heroSticker = '/image/hero_sticker.webp';

export default function HeroSlideshow() {
  return (
    <section className="hero-showcase-section" aria-labelledby="hero-showcase-title">
      <div className="hero-pillar" aria-hidden="true">
        <span />
      </div>

      <div className="hero-showcase-inner">
        <div className="hero-showcase-copy">
          <h1 id="hero-showcase-title">
            <span>Nurturing Minds.</span>
            <em>Shaping Futures.</em>
          </h1>

          <div className="hero-showcase-rule" aria-hidden="true">
            <span />
          </div>

          <p>
            Pitts Modern School, Gomia is committed to academic excellence,
            character building, and holistic development in a culture of values
            and innovation.
          </p>

          <div className="hero-showcase-actions">
            <a className="hero-primary-action" href="/about-us">
              Explore Our School
              <span aria-hidden="true">→</span>
            </a>
            <a className="hero-secondary-action" href="/news/admission-classes-xi-2026-27">
              Admissions Open
              <span>2025-26</span>
            </a>
          </div>
        </div>

        <div className="hero-showcase-media" aria-hidden="true">
          <img src={heroSticker} alt="" />
        </div>
      </div>

      <div className="hero-values-band" aria-hidden="true">
        <span>Discipline</span>
        <i />
        <span>Dedication</span>
        <i />
        <span>Discovery</span>
        <i />
        <span>Destiny</span>
      </div>
    </section>
  );
}
