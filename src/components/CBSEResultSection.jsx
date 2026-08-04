import React, { useState } from 'react';
import {
  Trophy,
  Award,
  Download,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

// Class X Board Toppers Data (From Previous Website Screenshot)
const classXToppers = [
  {
    id: 'cx-1',
    name: 'ANANYA',
    score: '97.8%',
    image: '/image/inv1.jpg',
    bgColor: '#0B427E',
    motifType: 1
  },
  {
    id: 'cx-2',
    name: 'RIDDHI JAISWAL',
    score: '97.8%',
    image: '/image/inv2.jpg',
    bgColor: '#009951',
    motifType: 2
  },
  {
    id: 'cx-3',
    name: 'BHAVYA JAIN',
    score: '96.6%',
    image: '/image/inv3.jpg',
    bgColor: '#075cff',
    motifType: 3
  }
];

// Class XII Board Toppers Data (From Previous Website Screenshot)
const classXIIToppers = [
  {
    id: 'cxii-1',
    name: 'ANUSHKA GUPTA',
    score: '97.8%',
    image: '/image/IMG_2137.jpg',
    bgColor: '#0B427E',
    motifType: 1
  },
  {
    id: 'cxii-2',
    name: 'Satyam Kumar',
    score: '95%',
    image: '/image/IMG_2190.jpg',
    bgColor: '#009951',
    motifType: 2
  },
  {
    id: 'cxii-3',
    name: 'Aman Kumar Pramanik',
    score: '93.6%',
    image: '/image/IMG_2203.jpg',
    bgColor: '#930018',
    motifType: 3
  }
];

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
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <div className="cbse-results-page-wrapper results-page-watermark-wrapper">
      {/* Top Header Bar */}
      <div className="page-nav-top-bar results-page-content-z">
        <div className="page-nav-top-inner">
          <span className="editorial-overline">NATIONAL CBSE BOARD ACADEMIC EXCELLENCE</span>
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
                <span>All Results</span>
              </button>

              <button
                className={`result-tab-btn ${activeTab === 'class10' ? 'active' : ''}`}
                onClick={() => setActiveTab('class10')}
              >
                <GraduationCap size={16} />
                <span>SSE Class X Result</span>
              </button>

              <button
                className={`result-tab-btn ${activeTab === 'class12' ? 'active' : ''}`}
                onClick={() => setActiveTab('class12')}
              >
                <Award size={16} />
                <span>SSCE Class XII Result</span>
              </button>
            </div>

            <div className="results-pdf-actions">
              <button
                onClick={() => alert('Downloading SSE 2026 Class X Result PDF...')}
                className="download-result-pdf-btn"
              >
                <Download size={15} />
                <span>Class X Result</span>
              </button>
              <button
                onClick={() => alert('Downloading SSCE 2026 Class XII Result PDF...')}
                className="download-result-pdf-btn"
              >
                <Download size={15} />
                <span>Class XII Result</span>
              </button>
            </div>
          </div>

          {/* 1. CLASS X RESULT SECTION */}
          {(activeTab === 'all' || activeTab === 'class10') && (
            <div className="result-category-block">
              <div className="category-block-header">
                <h2 className="category-title">Close SSE 2026 CLASS X RESULT</h2>
                <button
                  onClick={() => alert('Downloading full Class X result gazette...')}
                  className="section-download-link"
                >
                  <span>Download Result</span>
                  <ChevronRight size={15} />
                </button>
              </div>

              <div className="toppers-cards-grid">
                {classXToppers.map((student) => {
                  const isHovered = hoveredCardId === student.id;

                  return (
                    <article
                      key={student.id}
                      className={`topper-card-swiss ${isHovered ? 'is-hovered' : ''}`}
                      style={{ '--card-hover-bg': student.bgColor }}
                      onMouseEnter={() => setHoveredCardId(student.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                    >
                      <div className="topper-photo-wrap">
                        <img
                          src={student.image}
                          alt={student.name}
                          className="topper-photo-img"
                        />
                      </div>

                      <div className="topper-card-body">
                        <div className="card-body-motif-container">
                          <SwissMotifInBody
                            type={student.motifType}
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
          )}

          {/* 2. CLASS XII RESULT SECTION */}
          {(activeTab === 'all' || activeTab === 'class12') && (
            <div className="result-category-block mt-10">
              <div className="category-block-header">
                <h2 className="category-title">Close SSCE 2026 CLASS -XII RESULT</h2>
                <button
                  onClick={() => alert('Downloading full Class XII result gazette...')}
                  className="section-download-link"
                >
                  <span>Download Result</span>
                  <ChevronRight size={15} />
                </button>
              </div>

              <div className="toppers-cards-grid">
                {classXIIToppers.map((student) => {
                  const isHovered = hoveredCardId === student.id;

                  return (
                    <article
                      key={student.id}
                      className={`topper-card-swiss ${isHovered ? 'is-hovered' : ''}`}
                      onMouseEnter={() => setHoveredCardId(student.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                    >
                      <div className="topper-photo-wrap">
                        <img
                          src={student.image}
                          alt={student.name}
                          className="topper-photo-img"
                        />
                      </div>

                      <div className="topper-card-body">
                        <div className="card-body-motif-container">
                          <SwissMotifInBody
                            type={student.motifType}
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
          )}
        </div>
      </section>
    </div>
  );
}
