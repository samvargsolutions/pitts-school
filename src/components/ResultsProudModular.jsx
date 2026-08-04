import React, { useState } from 'react';
import { routeLinks, useSiteContent } from '../context/siteContent';
import { ArrowLeft, ArrowRight, ChevronDown, Download } from 'lucide-react';

const defaultToppers = [
  {
    rank: '01',
    name: 'Ananya Sharma',
    score: '99.4%',
    className: 'Class XII',
    image: '/image/656729874_122278628264192910_5575061535742040043_n.webp',
    position: '64% center',
    tone: 'blue',
  },
  {
    rank: '02',
    name: 'Vivaan Singh',
    score: '98.8%',
    className: 'Class X',
    image: '/image/655235611_122278627622192910_6813982125465658890_n.webp',
    position: '52% center',
    tone: 'ice',
  },
  {
    rank: '03',
    name: 'Mehak Agarwal',
    score: '98.2%',
    className: 'Class XII',
    image: '/image/657648950_122278627682192910_3316470583572254992_n.webp',
    position: '48% center',
    tone: 'pink',
  },
  {
    rank: '04',
    name: 'Arjun Malhotra',
    score: '97.6%',
    className: 'Class X',
    image: '/image/658210448_122279766908192910_6930958453647393658_n.webp',
    position: '50% center',
    tone: 'green',
  },
];

const defaultSlideshowItems = [
  {
    id: 's1',
    image: '/image/654420916_122278450718192910_7739475501613658151_n.webp',
    tag: 'Felicitation',
    caption: 'Annual Result Felicitation Ceremony',
  },
  {
    id: 's2',
    image: '/image/654809425_122278443140192910_4758609915848770575_n.webp',
    tag: 'Board Toppers',
    caption: 'Celebrating Class XII Merit Holders',
  },
  {
    id: 's3',
    image: '/image/656180855_122278451030192910_256945773651336968_n.webp',
    tag: 'Excellence',
    caption: 'Class X Distinction Achievers',
  },
  {
    id: 's4',
    image: '/image/656589747_122278442828192910_339878633218178783_n.webp',
    tag: 'Landmark',
    caption: 'Setting New Academic Benchmarks',
  },
  {
    id: 's5',
    image: '/image/656639203_122278442822192910_4058562250816193334_n.webp',
    tag: 'Honors',
    caption: 'Honoring Outstanding Student Profiles',
  },
  {
    id: 's6',
    image: '/image/656971062_122278628552192910_1597290954513749109_n.webp',
    tag: 'Community',
    caption: 'Parents & Teachers Shared Pride',
  },
  {
    id: 's7',
    image: '/image/657051011_122278442678192910_4830634205277214454_n.webp',
    tag: 'Achievement',
    caption: 'Annual Trophy & Medal Presentation',
  },
  {
    id: 's8',
    image: '/image/658952886_122279886296192910_3270116905043812727_n.webp',
    tag: 'Distinction',
    caption: 'Top Performers in Olympiads & Boards',
  },
  {
    id: 's9',
    image: '/image/659006919_122279767274192910_5002367941972036508_n.webp',
    tag: 'Inspiration',
    caption: 'Future Leaders on Recognition Day',
  },
  {
    id: 's10',
    image: '/image/662488026_122279886146192910_3383945004717888381_n.webp',
    tag: 'Legacy',
    caption: 'Continuing Our Legacy of 100% Results',
  },
];

export default function ResultsProud() {
  const siteContent = useSiteContent();
  const toppers = siteContent.results?.toppers || defaultToppers;
  const slideshowItems = siteContent.results?.landmarkSlides || defaultSlideshowItems;
  const resultYear = siteContent.results?.year || '2025-26';
  const bulletinHref = siteContent.results?.bulletinHref || routeLinks.results;

  const [activeFilter, setActiveFilter] = useState('All Toppers');

  const tagsList = siteContent.results?.tags || [{ name: 'Class X' }, { name: 'Class XII' }];
  const filters = ['All Toppers', ...tagsList.map(t => t.name).filter(Boolean)];

  const filteredToppers = activeFilter === 'All Toppers'
    ? toppers
    : toppers.filter(t => t.className === activeFilter);

  return (
    <section className="results-proud-section" aria-labelledby="results-proud-title">
      <img className="results-motif results-motif-pink" src="/icons-illustrations/red-drop.webp" alt="" aria-hidden="true" />
      <img className="results-motif results-motif-green" src="/icons-illustrations/green-leafs.webp" alt="" aria-hidden="true" />
      <img className="results-motif results-motif-bluegate" src="/icons-illustrations/bluegate.webp" alt="" aria-hidden="true" />

      <div className="results-proud-inner">
        <div className="results-proud-top">
          <div className="results-proud-heading">
            <h2 id="results-proud-title">Results That Make Us Proud</h2>
            <span aria-hidden="true" />
            <p>Our students continue to excel and set new benchmarks.</p>
          </div>

          <div className="results-proud-actions">
            <div className="results-dot-grid" aria-hidden="true" />
            <button className="results-year-button" type="button" aria-label={`Selected result year ${resultYear}`}>
              {resultYear}
              <ChevronDown size={14} style={{ marginLeft: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
            </button>
            <a className="results-all-button" href={routeLinks.results}>
              View All Results
            </a>
            <a className="results-download-link" href={bulletinHref} target="_blank" rel="noreferrer">
              Download Result Bulletin
              <Download size={14} style={{ marginLeft: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
            </a>
          </div>
        </div>

        <div className="results-tabs" aria-label="Result filters">
          {filters.map((filterName) => (
            <button
              key={filterName}
              className={`results-tab ${activeFilter === filterName ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(filterName)}
              type="button"
            >
              {filterName}
            </button>
          ))}
        </div>

        <div className="results-carousel" aria-label="Top result achievers">
          <button className="results-arrow results-arrow-left" type="button" aria-label="Previous toppers"><ArrowLeft size={16} /></button>
          <div className="results-card-track">
            {filteredToppers.map((topper, idx) => (
              <article className={`result-card result-card-${topper.tone || 'blue'}`} key={`${topper.rank || idx}`}>
                <span className="result-card-rank">{topper.rank}</span>
                <span className="result-card-class">{topper.className}</span>
                <div className="result-card-photo">
                  <img src={topper.image} alt={`${topper.name}, ${topper.score}`} style={{ objectPosition: topper.position }} />
                </div>
                <h3>{topper.name}</h3>
                <strong>{topper.score}</strong>
              </article>
            ))}
          </div>
          <button className="results-arrow results-arrow-right" type="button" aria-label="Next toppers"><ArrowRight size={16} /></button>
        </div>

        <div className="results-progress" aria-hidden="true">
          <span className="is-active" />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="results-slideshow-card" aria-label="Achievement Moments Slideshow">
          <div className="results-slideshow-header">
            <div className="results-slideshow-title-wrap">
              <span className="results-slideshow-badge">GLIMPSE OF EXCELLENCE</span>
              <h3>Celebrating Landmark Moments</h3>
            </div>
            <p className="results-slideshow-desc">
              A continuous journey of pride, dedication, and historic milestones at our campus.
            </p>
          </div>

          <div className="results-slideshow-viewport">
            <div className="results-slideshow-track">
              {slideshowItems.concat(slideshowItems).map((item, idx) => (
                <div className="results-slide-item" key={`${item.id}-${idx}`}>
                  <img src={item.image} alt={item.caption} loading="lazy" />
                  <div className="results-slide-overlay">
                    <span className="results-slide-tag">{item.tag}</span>
                    <p className="results-slide-title">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


