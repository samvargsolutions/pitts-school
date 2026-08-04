import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// School Vision & Core Pillars of Excellence (From read.txt & Founding Heritage)
const visionPillars = [
  {
    id: 'academic',
    index: '01 / 05',
    title: 'Academic Excellence',
    badge: '100% BOARD SUCCESS HERITAGE',
    description:
      'Offering CBSE curriculum from Kindergarten through Class XII in English Medium, equipping over 2,200 students with critical inquiry, scientific temperament, and consistent top-ranking board achievements.',
    image: '/image/IMG_2137.jpg',
    bgColor: '#009951', // Emerald Green
    textColor: '#0B427E',
    arrowColor: '#0B427E',
    motifColor: '#ffc72c', // Warm Yellow
    motifSecondary: '#ffffff',
    illustration: '/icons-illustrations/yellow-stairs.png',
    link: '/infrastructure',
    motifType: 1
  },
  {
    id: 'leadership',
    index: '02 / 05',
    title: 'Character & Leadership',
    badge: 'VALUE-BASED HOLISTIC LEARNING',
    description:
      'We believe education extends beyond textbooks. We nurture integrity, empathy, civic responsibility, and ethical leadership so our alumni excel as global citizens.',
    image: '/image/inv2.jpg',
    bgColor: '#00a859', // Rich Emerald Green
    textColor: '#0B427E',
    arrowColor: '#0B427E',
    motifColor: '#ffc72c', // Warm Yellow
    motifSecondary: '#0B427E',
    illustration: '/icons-illustrations/bluegate.png',
    link: '/infrastructure',
    motifType: 2 // 2x2 Diagonal Grid Motif (Exact match to reference screenshot)
  },
  {
    id: 'inclusive',
    index: '03 / 05',
    title: 'Independent & Inclusive',
    badge: 'SELF-FINANCED AUTONOMOUS TRUST',
    description:
      'As an autonomous, self-financed institution under Gomia School Society, we reinvest directly into cutting-edge laboratories, sports infrastructure, and inclusive campus growth.',
    image: '/image/IMG_2190.jpg',
    bgColor: '#ffb800', // Warm Yellow / Gold
    textColor: '#0B427E',
    arrowColor: '#0B427E',
    motifColor: '#0B427E', // Deep Navy
    motifSecondary: '#930018',
    illustration: '/icons-illustrations/trippletriangle.png',
    link: '/infrastructure',
    motifType: 3
  },
  {
    id: 'cooperation',
    index: '04 / 05',
    title: 'Competition & Cooperation',
    badge: 'SPORTS • SCHOLARSHIP • ARTS',
    description:
      'Balancing competitive spirit with collaborative teamwork through integrated teaching, counseling, research, and national-level sports tournaments.',
    image: '/image/inv3.jpg',
    bgColor: '#075cff', // Electric Cobalt Blue
    textColor: '#ffffff',
    arrowColor: '#ffffff',
    motifColor: '#ffc72c', // Warm Yellow
    motifSecondary: '#ffffff',
    illustration: '/icons-illustrations/red-drop.png',
    link: '/infrastructure',
    motifType: 4
  },
  {
    id: 'diversity',
    index: '05 / 05',
    title: 'Diversity & Social Justice',
    badge: 'FOSTERING INDIVIDUAL UNIQUENESS',
    description:
      'Celebrating diversity, equality, and social integration across our township while fostering the distinct potential, dignity, and individual creativity of every student.',
    image: '/image/IMG_2203.jpg',
    bgColor: '#e03616', // Burnt Crimson / Red
    textColor: '#ffffff',
    arrowColor: '#ffffff',
    motifColor: '#ffc72c', // Warm Yellow
    motifSecondary: '#ffffff',
    illustration: '/icons-illustrations/triangle.png',
    link: '/infrastructure',
    motifType: 1
  }
];

// Swiss Modular Geometric Identity Motifs (Modular Grid Tiles)
function SwissGeometricMotif({ type, color, secondaryColor, isHovered }) {
  if (type === 2) {
    // 2x2 Diagonal Grid Motif
    return (
      <svg
        className={`swiss-geometric-motif motif-type-2 ${isHovered ? 'active' : ''}`}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Tile 1: Top-Left */}
        <path d="M0 80L80 0V80H0Z" fill={color} className="motif-tile tile-1" />
        <path d="M0 0H80L0 80V0Z" fill={color} className="motif-tile tile-1-b" />

        {/* Tile 2: Top-Right */}
        <path d="M80 80L160 0V80H80Z" fill={color} className="motif-tile tile-2" />
        <path d="M80 0H160L80 80V0Z" fill={color} className="motif-tile tile-2-b" />

        {/* Tile 3: Bottom-Left */}
        <path d="M0 160L80 80V160H0Z" fill={color} className="motif-tile tile-3" />
        <path d="M0 80H80L0 160V80Z" fill={color} className="motif-tile tile-3-b" />

        {/* Tile 4: Bottom-Right */}
        <path d="M80 160L160 80V160H80Z" fill={color} className="motif-tile tile-4" />
        <path d="M80 80H160L80 160V80Z" fill={color} className="motif-tile tile-4-b" />
      </svg>
    );
  }

  if (type === 3) {
    // Bauhaus Step / Stair Modular Grid
    return (
      <svg
        className={`swiss-geometric-motif motif-type-3 ${isHovered ? 'active' : ''}`}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="0" y="0" width="80" height="80" fill={color} className="motif-tile tile-1" />
        <path d="M80 0L160 80H80V0Z" fill={color} className="motif-tile tile-2" />
        <path d="M0 80L80 160V80H0Z" fill={color} className="motif-tile tile-3" />
        <rect x="80" y="80" width="80" height="80" fill={color} className="motif-tile tile-4" />
      </svg>
    );
  }

  if (type === 4) {
    // Circular / Quadrant Arch Modular Grid
    return (
      <svg
        className={`swiss-geometric-motif motif-type-4 ${isHovered ? 'active' : ''}`}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0 0H80V80H0Z" fill={color} className="motif-tile tile-1" />
        <path d="M80 0L160 80H80V0Z" fill={color} className="motif-tile tile-2" />
        <path d="M80 80L160 160H80V80Z" fill={color} className="motif-tile tile-3" />
        <path d="M0 80H80V160H0Z" fill={color} className="motif-tile tile-4" />
      </svg>
    );
  }

  // Type 1: Classic Swiss Modular 45-Degree Array
  return (
    <svg
      className={`swiss-geometric-motif motif-type-1 ${isHovered ? 'active' : ''}`}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0 0L80 80H0V0Z" fill={color} className="motif-tile tile-1" />
      <path d="M80 0L160 80H80V0Z" fill={color} className="motif-tile tile-2" />
      <path d="M0 80L80 160H0V80Z" fill={color} className="motif-tile tile-3" />
      <path d="M80 80L160 160H80V80Z" fill={color} className="motif-tile tile-4" />
    </svg>
  );
}

export default function LearningJourneySection() {
  const scrollRef = useRef(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag to scroll handlers
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollByAmount = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -460 : 460;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="learning-journey-wrapper" aria-label="Our Vision & Pillars of Excellence">
      {/* SECTION HEADER (White Background Top) */}
      <div className="learning-journey-header-container">
        <div className="learning-journey-header-inner">
          <div className="header-title-block">
            <span className="editorial-kicker">HOLISTIC PURPOSE • GOMIA SCHOOL SOCIETY</span>
            <h2 className="learning-journey-title">Our Vision &amp; Core Pillars</h2>
          </div>

          <div className="learning-journey-controls">
            <button
              onClick={() => scrollByAmount('left')}
              className="scroll-btn scroll-btn-prev"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scrollByAmount('right')}
              className="scroll-btn scroll-btn-next"
              aria-label="Scroll Right"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* HORIZONTAL CARDS TRACK & ELECTRIC BLUE BACKGROUND SECTION */}
      <div className="learning-journey-stage-wrapper">
        {/* Electric Blue Background Block sitting behind bottom half of cards */}
        <div className="electric-blue-block" aria-hidden="true" />

        {/* Scrollable Card Track */}
        <div
          className={`learning-cards-track ${isMouseDown ? 'is-dragging' : ''}`}
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {visionPillars.map((pillar) => {
            const isHovered = hoveredCardId === pillar.id;

            return (
              <div
                key={pillar.id}
                className={`journey-card ${isHovered ? 'is-hovered' : ''}`}
                onMouseEnter={() => setHoveredCardId(pillar.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                tabIndex={0}
                role="article"
                aria-label={`${pillar.title} - ${pillar.badge}`}
                style={{
                  '--card-bg-color': pillar.bgColor,
                  '--card-text-color': pillar.textColor,
                  '--card-arrow-color': pillar.arrowColor
                }}
              >
                {/* 1. Base Photo Background */}
                <div className="journey-card-image-wrap">
                  <img
                    src={pillar.image}
                    alt={`${pillar.title} at Pitts Modern School`}
                    className="journey-card-img"
                  />
                  <div className="journey-card-gradient" />
                </div>

                {/* 2. Flat Color Panel Wipe (Revealed on Hover) */}
                <div
                  className="journey-card-color-panel"
                  style={{ backgroundColor: pillar.bgColor }}
                />

                {/* 3. Swiss Geometric Brand Motif (Top Right) */}
                <div className="journey-motif-container">
                  <SwissGeometricMotif
                    type={pillar.motifType}
                    color={pillar.motifColor}
                    secondaryColor={pillar.motifSecondary}
                    isHovered={isHovered}
                  />
                  {/* Subtle brand asset overlay from /icons-illustrations */}
                  <img
                    src={pillar.illustration}
                    alt=""
                    className="journey-brand-asset"
                    aria-hidden="true"
                  />
                </div>

                {/* 4. Card Content Area (Bottom) */}
                <div className="journey-card-content">
                  <div className="journey-text-stack">
                    <span className="journey-card-index">{pillar.index} // {pillar.badge}</span>
                    <h3 className="journey-stage-title">{pillar.title}</h3>
                    <p className="journey-card-desc">{pillar.description}</p>
                  </div>

                  <div className="journey-arrow-wrap">
                    <ArrowRight className="journey-arrow" size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA PILL BUTTON INSIDE ELECTRIC BLUE AREA */}
        <div className="learning-journey-cta-wrap">
          <a href="/infrastructure" className="learning-journey-cta-btn">
            <span>EXPLORE CAMPUS &amp; ACADEMIC HERITAGE</span>
            <ArrowRight size={18} className="cta-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
