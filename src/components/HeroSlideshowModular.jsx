import React from 'react';
import { useSiteContent } from '../context/siteContent';

const heroSticker = '/image/hero_sticker.png';

export default function HeroSlideshowModular() {
  const { hero } = useSiteContent();
  return (
    <section className="hero-showcase-section" aria-labelledby="hero-showcase-title">
      <div className="hero-pillar" aria-hidden="true"><span /></div>
      <div className="hero-showcase-inner">
        <div className="hero-showcase-copy">
          <h1 id="hero-showcase-title"><span>{hero.title}</span><em>{hero.subtitle}</em></h1>
          <div className="hero-showcase-rule" aria-hidden="true"><span /></div>
          <p>{hero.body}</p>
          <div className="hero-showcase-actions">
            <a className="hero-primary-action" href={hero.primaryHref}>{hero.primaryLabel}<span aria-hidden="true">-&gt;</span></a>
            <a className="hero-secondary-action" href={hero.secondaryHref}>{hero.secondaryLabel}<span>{hero.secondaryMeta}</span></a>
          </div>
        </div>
        <div className="hero-showcase-media" aria-hidden="true"><img src={heroSticker} alt="" /></div>
      </div>
      <div className="hero-values-band" aria-hidden="true"><span>Discipline</span><i /><span>Dedication</span><i /><span>Discovery</span><i /><span>Destiny</span></div>
    </section>
  );
}
