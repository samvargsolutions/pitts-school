import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';

const facilities = [
  {
    id: 'bio-lab',
    number: '01',
    title: 'Bio Lab',
    label: 'Life sciences',
    description:
      'A focused laboratory environment for observation, specimens, charts and practical science work that helps students understand biology by seeing it closely.',
    motif: '/icons-illustrations/green-leafs.png',
    images: [
      {
        src: '/image/Pu13.jpg',
        caption: 'Specimen study and observation area'
      },
      {
        src: '/image/IMG_2285.jpg',
        caption: 'Hands-on nature and life-science learning'
      },
      {
        src: '/image/cca18.jpg',
        caption: 'Student-led practical exploration'
      }
    ]
  },
  {
    id: 'computer-lab',
    number: '02',
    title: 'Computer Lab',
    label: 'Digital learning',
    description:
      'A technology-enabled learning space for digital literacy, project work and guided computer education across middle and senior classes.',
    motif: '/icons-illustrations/bluegate.png',
    images: [
      {
        src: '/image/Pu11.jpg',
        caption: 'Digital displays and interactive learning'
      },
      {
        src: '/image/IMG_2190.jpg',
        caption: 'Technology-supported classroom activities'
      },
      {
        src: '/image/21.jpg',
        caption: 'Mentored academic work sessions'
      }
    ]
  },
  {
    id: 'robotics-lab',
    number: '03',
    title: 'Robotics Lab',
    label: 'STEM and making',
    description:
      'A practical making space for experimentation, circuits, robotics thinking and problem solving, built around curiosity and teamwork.',
    motif: '/icons-illustrations/yellow-stairs.png',
    images: [
      {
        src: '/image/24.jpg',
        caption: 'STEM orientation and demonstration space'
      },
      {
        src: '/image/jal1.jpg',
        caption: 'Guided workshops and collaborative learning'
      },
      {
        src: '/image/jal3.jpg',
        caption: 'Hands-on project discussions'
      }
    ]
  },
  {
    id: 'school-building',
    number: '04',
    title: 'School Building',
    label: 'Campus core',
    description:
      'The daily heart of Pitts Modern School, with green pathways, academic blocks, assembly spaces and a campus rhythm shaped by decades of school life.',
    motif: '/icons-illustrations/red.png',
    images: [
      {
        src: '/image/inv1.jpg',
        caption: 'Campus community and academic block'
      },
      {
        src: '/image/pat3.jpg',
        caption: 'Green campus pathways'
      },
      {
        src: '/image/aam1.jpg',
        caption: 'Assembly and campus movement'
      }
    ]
  },
  {
    id: 'library',
    number: '05',
    title: 'Library',
    label: 'Reading and research',
    description:
      'A calm reading-led space for reference work, self-study, storytelling and the habits of curiosity that stay with students beyond the classroom.',
    motif: '/icons-illustrations/triangle.png',
    images: [
      {
        src: '/image/hrd2.jpg',
        caption: 'Reading, speaking and reference culture'
      },
      {
        src: '/image/23.jpg',
        caption: 'Quiet academic gathering space'
      },
      {
        src: '/image/jal2.jpg',
        caption: 'Guided learning sessions'
      }
    ]
  }
];

export default function InfrastructureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const activeFacility = facilities[activeIndex];
  const activeImage = activeFacility.images[galleryIndex] || activeFacility.images[0];

  const selectFacility = (index) => {
    setActiveIndex(index);
    setGalleryIndex(0);
    setIsGalleryOpen(true);
  };

  const moveGallery = (direction) => {
    const total = activeFacility.images.length;
    setGalleryIndex((current) => (current + direction + total) % total);
    setIsGalleryOpen(true);
  };

  return (
    <section
      id="infrastructure-showcase"
      className="infra-showcase-section"
      aria-labelledby="infra-main-title"
    >
      <img className="infra-motif infra-motif-red" src="/icons-illustrations/red.png" alt="" />
      <img className="infra-motif infra-motif-blue" src="/icons-illustrations/bluegate.png" alt="" />
      <img className="infra-motif infra-motif-leaf" src="/icons-illustrations/green-leafs.png" alt="" />

      <div className="infra-shell">
        <header className="infra-page-header">
          <div>
            <span className="infra-kicker">Campus Infrastructure</span>
            <h1 id="infra-main-title">
              <span>Spaces that</span>
              <span>make</span>
              <span>learning</span>
              <span>visible.</span>
            </h1>
          </div>
          <p>
            Explore the learning spaces that support practical work, digital confidence, reading
            culture and everyday campus life at Pitts Modern School.
          </p>
        </header>

        <div className="infra-workspace">
          <aside className="infra-index" aria-label="Infrastructure facilities">
            <div className="infra-index-top">
              <span>Facilities</span>
              <strong>{facilities.length.toString().padStart(2, '0')}</strong>
            </div>

            <div className="infra-facility-list" role="list">
              {facilities.map((facility, index) => {
                const isActive = index === activeIndex;

                return (
                  <React.Fragment key={facility.id}>
                    <button
                      type="button"
                      className={`infra-facility-button ${isActive ? 'is-active' : ''}`}
                      onClick={() => selectFacility(index)}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <span className="infra-facility-number">{facility.number}</span>
                      <span className="infra-facility-copy">
                        <span>{facility.title}</span>
                        <small>{facility.label}</small>
                      </span>
                      <ArrowRight size={17} aria-hidden="true" />
                    </button>

                    {/* MOBILE ONLY: Inline details (Accordion style) */}
                    {isActive && (
                      <div className="infra-feature infra-feature-mobile">
                        <div className="infra-feature-copy">
                          <span className="infra-feature-label">{activeFacility.label}</span>
                          <h2>{activeFacility.title}</h2>
                          <p>{activeFacility.description}</p>
                          <button type="button" className="infra-gallery-trigger" onClick={() => setIsGalleryOpen(true)}>
                            Quick gallery
                            <ArrowRight size={16} aria-hidden="true" />
                          </button>
                        </div>

                        <div className="infra-media-stage">
                          <img className="infra-card-motif" src={activeFacility.motif} alt="" />
                          <button
                            type="button"
                            className="infra-main-card"
                            onClick={() => setIsGalleryOpen(true)}
                            aria-label={`Open ${activeFacility.title} gallery`}
                          >
                            <img src={activeImage.src} alt={activeImage.caption} />
                            <span className="infra-main-caption">
                              <small>{activeFacility.number}</small>
                              {activeImage.caption}
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </aside>

          {/* DESKTOP ONLY: Side panel details */}
          <div className="infra-feature infra-feature-desktop">
            <div className="infra-feature-copy">
              <span className="infra-feature-label">{activeFacility.label}</span>
              <h2>{activeFacility.title}</h2>
              <p>{activeFacility.description}</p>
              <button type="button" className="infra-gallery-trigger" onClick={() => setIsGalleryOpen(true)}>
                Quick gallery
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>

            <div className="infra-media-stage">
              <img className="infra-card-motif" src={activeFacility.motif} alt="" />
              <button
                type="button"
                className="infra-main-card"
                onClick={() => setIsGalleryOpen(true)}
                aria-label={`Open ${activeFacility.title} gallery`}
              >
                <img src={activeImage.src} alt={activeImage.caption} />
                <span className="infra-main-caption">
                  <small>{activeFacility.number}</small>
                  {activeImage.caption}
                </span>
              </button>
            </div>
          </div>
        </div>

        {isGalleryOpen && (
          <div className="infra-quick-gallery is-open" aria-live="polite">
            <div className="infra-gallery-head">
              <div>
                <span>{activeFacility.title}</span>
                <h3>Quick Gallery</h3>
              </div>
              <button
                type="button"
                className="infra-gallery-close"
                onClick={() => setIsGalleryOpen(false)}
                aria-label="Close quick gallery"
              >
                <X size={18} />
              </button>
            </div>

            <div className="infra-gallery-body">
              <button
                type="button"
                className="infra-gallery-arrow"
                onClick={() => moveGallery(-1)}
                aria-label="Previous gallery image"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="infra-gallery-images">
                {activeFacility.images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className={`infra-thumb ${index === galleryIndex ? 'is-selected' : ''}`}
                    onClick={() => setGalleryIndex(index)}
                    aria-label={`Show ${image.caption}`}
                  >
                    <img src={image.src} alt="" />
                    <span>{image.caption}</span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="infra-gallery-arrow"
                onClick={() => moveGallery(1)}
                aria-label="Next gallery image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
