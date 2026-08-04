import React, { useState } from 'react';
import {
  Trophy,
  Award,
  Download,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { useSiteContent, routeLinks } from '../context/siteContent';

const defaultClassXToppers = [
  {
    id: 'cx-1',
    name: 'ANANYA',
    score: '97.8%',
    image: '/image/inv1.webp',
    bgColor: '#0B427E',
    motifType: 1,
    className: 'Class X'
  },
  {
    id: 'cx-2',
    name: 'RIDDHI JAISWAL',
    score: '97.8%',
    image: '/image/inv2.webp',
    bgColor: '#009951',
    motifType: 2,
    className: 'Class X'
  },
  {
    id: 'cx-3',
    name: 'BHAVYA JAIN',
    score: '96.6%',
    image: '/image/inv3.webp',
    bgColor: '#075cff',
    motifType: 3,
    className: 'Class X'
  }
];

const defaultClassXIIToppers = [
  {
    id: 'cxii-1',
    name: 'ANUSHKA GUPTA',
    score: '97.8%',
    image: '/image/img_2137.webp',
    bgColor: '#0B427E',
    motifType: 1,
    className: 'Class XII'
  },
  {
    id: 'cxii-2',
    name: 'Satyam Kumar',
    score: '95%',
    image: '/image/img_2190.webp',
    bgColor: '#009951',
    motifType: 2,
    className: 'Class XII'
  },
  {
    id: 'cxii-3',
    name: 'Aman Kumar Pramanik',
    score: '93.6%',
    image: '/image/img_2203.webp',
    bgColor: '#930018',
    motifType: 3,
    className: 'Class XII'
  }
];

const fallbackToppers = [...defaultClassXToppers, ...defaultClassXIIToppers];

// Swiss Modular Geometric SVG Motif
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

export default function CBSEResultSection() {
  const siteContent = useSiteContent();
  const toppers = siteContent.results?.toppers || fallbackToppers;
  const tagsList = siteContent.results?.tags || [{ name: 'Class X' }, { name: 'Class XII' }];
  const resultYear = siteContent.results?.year || '2025-26';
  const bulletinHref = siteContent.results?.bulletinHref || routeLinks.results;

  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const displayedTags = activeTab === 'all' ? tagsList : tagsList.filter(t => t.name === activeTab);

  return (
    <div className="cbse-results-page-wrapper results-page-watermark-wrapper">
      {/* Top Header Bar */}
      <div className="page-nav-top-bar results-page-content-z">
        <div className="page-nav-top-inner">
          <span className="editorial-overline">NATIONAL CBSE BOARD ACADEMIC EXCELLENCE {resultYear}</span>
          <h1 className="page-standalone-title">EXAM RESULTS</h1>
        </div>
      </div>

      <section className="cbse-results-main-section results-page-content-z">
        <div className="cbse-results-inner">
          {/* TAB FILTER SWITCHER (Class X, Class XII, Combined View) */}
          <div className="results-tab-bar">
            <div className="tab-buttons-group">
              <button
                className={`result-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                <Trophy size={16} />
                <span>All Toppers</span>
              </button>

              {tagsList.map((tag) => (
                <button
                  key={tag.name}
                  className={`result-tab-btn ${activeTab === tag.name ? 'active' : ''}`}
                  onClick={() => setActiveTab(tag.name)}
                >
                  <GraduationCap size={16} />
                  <span>{tag.name} Result</span>
                </button>
              ))}
            </div>

            <div className="results-pdf-actions">
              <a
                href={bulletinHref}
                target="_blank"
                rel="noreferrer"
                className="download-result-pdf-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
              >
                <Download size={15} />
                <span>Download Result Bulletin</span>
              </a>
            </div>
          </div>

          {/* DYNAMIC RESULT SECTIONS */}
          {displayedTags.map((tag, tagIndex) => {
            const tagToppers = toppers.filter(student => student.className === tag.name);
            if (tagToppers.length === 0) return null;

            return (
              <div className={`result-category-block ${tagIndex > 0 ? 'mt-10' : ''}`} key={tag.name}>
                <div className="category-block-header">
                  <h2 className="category-title">{tag.name} BOARD RESULTS ({resultYear})</h2>
                  <a
                    href={bulletinHref}
                    target="_blank"
                    rel="noreferrer"
                    className="section-download-link"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Download Gazette</span>
                    <ChevronRight size={15} />
                  </a>
                </div>

                <div className="toppers-cards-grid">
                  {tagToppers.map((student, idx) => {
                    const uniqueId = `${tag.name}-${idx}`;
                    const isHovered = hoveredCardId === uniqueId;
                    const cardBg = student.tone === 'blue' ? '#0B427E' : student.tone === 'green' ? '#009951' : student.tone === 'pink' ? '#930018' : '#075cff';

                    return (
                      <article
                        key={uniqueId}
                        className={`topper-card-swiss ${isHovered ? 'is-hovered' : ''}`}
                        style={{ '--card-hover-bg': cardBg }}
                        onMouseEnter={() => setHoveredCardId(uniqueId)}
                        onMouseLeave={() => setHoveredCardId(null)}
                      >
                        <div className="topper-photo-wrap">
                          <img
                            src={student.image}
                            alt={student.name}
                            className="topper-photo-img"
                            style={{ objectPosition: student.position || 'center' }}
                          />
                        </div>

                        <div className="topper-card-body">
                          <div className="card-body-motif-container">
                            <SwissMotifInBody
                              type={(idx % 3) + 1}
                              color="#075cff"
                              isHovered={isHovered}
                            />
                          </div>

                          <h3 className="topper-name">{student.name} ({student.score})</h3>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
