import React, { useState } from 'react';
import {
  BookOpen,
  ArrowRight,
  Download,
  FileText
} from 'lucide-react';
import { normalizeAssetUrl, normalizeLinkUrl, useSiteContent } from '../context/siteContent';

const newslettersData = [
  {
    id: 'news-mag-1',
    title: 'Class 10 CBSE Result : School Toppers (Dainik Jagran)',
    date: 'Press Coverage • 16.04.2026',
    coverImage: '/image/inv1.jpg',
    summary:
      'Dainik Jagran feature on Pitts Modern School students scoring 97.8% distinction in CBSE Class 10 Board Examinations.',
    bgColor: '#0B427E',
    textColor: '#ffffff',
    motifColor: '#ffc72c',
    motifType: 1
  },
  {
    id: 'news-mag-2',
    title: 'SSE Result 2026 : Our School Toppers (Prabhat Khabar)',
    date: 'Press Coverage • 15.04.2026',
    coverImage: '/image/inv2.jpg',
    summary:
      'Prabhat Khabar press report honoring Ananya & Riddhi for achieving top regional ranks in CBSE Senior Secondary exams.',
    bgColor: '#009951',
    textColor: '#ffffff',
    motifColor: '#ffc72c',
    motifType: 2
  },
  {
    id: 'news-mag-3',
    title: 'Elocution & Declamation Competition Winners (Hindustan)',
    date: 'Press Coverage • 23.04.2026',
    coverImage: '/image/inv3.jpg',
    summary:
      'Hindustan Dainik feature on PMS students Vinayak and Siddhi winning 2nd prize at regional inter-school debate summit.',
    bgColor: '#930018',
    textColor: '#ffffff',
    motifColor: '#ffc72c',
    motifType: 3
  },
  {
    id: 'news-mag-4',
    title: 'Jharkhand Haqeeqat : JEE Main Top Ranks Achieved by PMS Students',
    date: 'Press Coverage • 18.04.2026',
    coverImage: '/image/IMG_2137.jpg',
    summary:
      'Jharkhand Haqeeqat report celebrating Pitts Modern School students securing 3rd district rank in JEE engineering examination.',
    bgColor: '#ffb800',
    textColor: '#0B427E',
    motifColor: '#0B427E',
    motifType: 4
  }
];

function SwissMotifInBody({ type, color = '#ffc72c', isHovered }) {
  return (
    <svg
      className={`swiss-motif-in-body ${isHovered ? 'active' : ''}`}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {type === 2 ? (
        <>
          <path d="M0 70L70 0V70H0Z" fill={color} className="m-tile m-1" />
          <path d="M0 0H70L0 70V0Z" fill={color} className="m-tile m-1-b" />
          <path d="M70 70L140 0V70H70Z" fill={color} className="m-tile m-2" />
          <path d="M70 0H140L70 70V0Z" fill={color} className="m-tile m-2-b" />
          <path d="M0 140L70 70V140H0Z" fill={color} className="m-tile m-3" />
          <path d="M70 140L140 70V140H70Z" fill={color} className="m-tile m-4" />
        </>
      ) : type === 3 ? (
        <>
          <rect x="0" y="0" width="70" height="70" fill={color} className="m-tile m-1" />
          <path d="M70 0L140 70H70V0Z" fill={color} className="m-tile m-2" />
          <path d="M0 70L70 140V70H0Z" fill={color} className="m-tile m-3" />
          <rect x="70" y="70" width="70" height="70" fill={color} className="m-tile m-4" />
        </>
      ) : (
        <>
          <path d="M0 0L70 70H0V0Z" fill={color} className="m-tile m-1" />
          <path d="M70 0L140 70H70V0Z" fill={color} className="m-tile m-2" />
          <path d="M0 70L70 140H0V70Z" fill={color} className="m-tile m-3" />
          <path d="M70 70L140 140H70V70Z" fill={color} className="m-tile m-4" />
        </>
      )}
    </svg>
  );
}

export default function NewslettersSection() {
  const siteContent = useSiteContent();
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const newslettersSource = Array.isArray(siteContent.newsletters) ? siteContent.newsletters : newslettersData;
  const newsletters = newslettersSource.map((item, index) => ({
    id: item.id || `news-mag-${index + 1}`,
    title: item.title || 'School newsletter',
    date: item.date || 'Pitts Modern School',
    coverImage: normalizeAssetUrl(item.coverImage || item.image, '/image/inv1.jpg'),
    summary: item.summary || item.text || 'Stories of success, service, and the spirit of Pitts.',
    href: normalizeLinkUrl(item.href, '/newsletters'),
    bgColor: item.bgColor || ['#0B427E', '#009951', '#930018', '#ffb800'][index % 4],
    textColor: item.textColor || (index % 4 === 3 ? '#0B427E' : '#ffffff'),
    motifColor: item.motifColor || (index % 4 === 3 ? '#0B427E' : '#ffc72c'),
    motifType: item.motifType || ((index % 4) + 1)
  }));

  return (
    <div className="newsletters-page-wrapper">
      {/* Top Header Bar for Newsletters Page */}
      <div className="page-nav-top-bar">
        <div className="page-nav-top-inner">
          <span className="editorial-overline">PRESS COVERAGE &amp; MEDIA DISPATCHES</span>
          <h1 className="page-standalone-title">School Newsletters &amp; Press Features</h1>
        </div>
      </div>

      <section className="newsletters-grid-section">
        <div className="newsletters-grid-inner">
          <div className="section-intro-bar">
            <div>
              <span className="editorial-kicker">DIGITAL PRESS ARCHIVE</span>
              <h2 className="section-title">Official Newspaper Clippings &amp; Coverage</h2>
            </div>
            <p className="section-subtitle">
              Explore regional press reports, Dainik Jagran features, Prabhat Khabar highlights, and academic newsletters for Pitts Modern School.
            </p>
          </div>

          {/* Newsletter Cards Grid */}
          <div className="newsletters-cards-grid">
            {newsletters.map((mag) => {
              const isHovered = hoveredCardId === mag.id;

              return (
                <article
                  key={mag.id}
                  className={`newsletter-card-swiss ${isHovered ? 'is-hovered' : ''}`}
                  onMouseEnter={() => setHoveredCardId(mag.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  style={{
                    '--card-hover-bg': mag.bgColor,
                    '--card-hover-text': mag.textColor
                  }}
                >
                  <div className="newsletter-cover-wrap">
                    <img
                      src={mag.coverImage}
                      alt={mag.title}
                      className="newsletter-cover-img"
                    />
                    <div className="newsletter-cover-gradient" />
                  </div>

                  <div className="newsletter-card-body">
                    <div className="card-body-motif-container">
                      <SwissMotifInBody
                        type={mag.motifType}
                        color={mag.motifColor}
                        isHovered={isHovered}
                      />
                    </div>

                    <span className="newsletter-date-label">{mag.date}</span>
                    <h3 className="newsletter-title">{mag.title}</h3>
                    <p className="newsletter-summary">{mag.summary}</p>

                    <div className="newsletter-actions">
                      <button
                        onClick={() => {
                          window.location.href = mag.href;
                        }}
                        className="read-pdf-btn"
                      >
                        <span>View Newsletter</span>
                        <ArrowRight size={14} className="btn-arrow" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
