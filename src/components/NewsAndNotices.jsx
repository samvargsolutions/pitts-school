import React, { useState } from 'react';
import {
  Search,
  Calendar,
  Filter,
  Pin,
  FileText,
  Download,
  Printer,
  ChevronRight,
  ArrowRight,
  Tag,
  Megaphone,
  Bell,
  Sparkles,
  ExternalLink,
  Share2
} from 'lucide-react';
import { normalizeAssetUrl, normalizeLinkUrl, useSiteContent } from '../context/siteContent';

const sampleNewsData = [
  {
    id: 'news-1',
    title: 'PMS Students Represent Bokaro at National Science & Innovation Conference',
    date: 'JUL 31, 2026',
    dateRaw: '2026-07-31',
    category: 'Academic Recognition',
    image: '/image/IMG_2137.jpg',
    excerpt:
      'Three Pitts Modern School students earned top honors at the Regional Science & Innovation Summit, joining over 600 scholars from across the country for a week of debate and project showcase.',
    tags: ['Senior Secondary', 'Science Club'],
    bgColor: '#009951', // Emerald Green
    textColor: '#ffffff',
    motifColor: '#ffc72c',
    motifType: 1
  },
  {
    id: 'news-2',
    title: 'Congratulations to the Teacher & Academic Attendance Incentive Winners!',
    date: 'JUL 21, 2026',
    dateRaw: '2026-07-21',
    category: 'Faculty & Staff',
    image: '/image/inv2.jpg',
    excerpt:
      'Pitts Modern School is proud to congratulate the 100 winners of the annual Teacher Attendance & Scholarly Incentive Program during the campus ceremony.',
    tags: ['All Schools', 'Excellence Award'],
    bgColor: '#00a859', // Rich Emerald
    textColor: '#ffffff',
    motifColor: '#ffc72c',
    motifType: 2
  },
  {
    id: 'news-3',
    title: 'Pitts Modern School Earns CBSE Regional Music & Cultural Honor for 10th Consecutive Year',
    date: 'JUL 15, 2026',
    dateRaw: '2026-07-15',
    category: 'Music & Arts',
    image: '/image/inv3.jpg',
    excerpt:
      'The CBSE Cultural Board once again recognized PMS Gomia as one of the region’s Best Communities for Performing Arts & Music Education.',
    tags: ['Cultural Wing', 'All Schools'],
    bgColor: '#075cff', // Electric Cobalt
    textColor: '#ffffff',
    motifColor: '#ffc72c',
    motifType: 4
  },
  {
    id: 'news-4',
    title: '145 PMS Students Earn National Academic Recognition from CBSE Board',
    date: 'JUL 05, 2026',
    dateRaw: '2026-07-05',
    category: 'CBSE Board Notices',
    image: '/image/IMG_2190.jpg',
    excerpt:
      'Pitts Modern School Gomia is proud to recognize 145 students who achieved distinction marks in the National CBSE Board Examination program.',
    tags: ['High School', 'Senior Secondary', 'CBSE Honors'],
    bgColor: '#ffb800', // Warm Gold
    textColor: '#0B427E',
    motifColor: '#0B427E',
    motifType: 3
  },
  {
    id: 'news-5',
    title: 'New Senior Academic Coordinators Appointed for Gomia Campus',
    date: 'JUN 30, 2026',
    dateRaw: '2026-06-30',
    category: 'Faculty & Staff',
    image: '/image/IMG_2203.jpg',
    excerpt:
      'The Gomia School Society is pleased to announce senior leadership additions to lead academic innovation and student counseling.',
    tags: ['Administration', 'Gomia Campus'],
    bgColor: '#e03616', // Burnt Crimson
    textColor: '#ffffff',
    motifColor: '#ffc72c',
    motifType: 1
  },
  {
    id: 'news-6',
    title: 'Annual Sports Meet & Inter-House Athletics Championship Announced',
    date: 'JUN 20, 2026',
    dateRaw: '2026-06-20',
    category: 'Events & Sports',
    image: '/image/inv1.jpg',
    excerpt:
      'Preparations begin for the 2026 Inter-House Athletics Meet featuring track events, football tournaments, and gymnastics exhibitions.',
    tags: ['Sports Club', 'All Houses'],
    bgColor: '#009951',
    textColor: '#ffffff',
    motifColor: '#ffc72c',
    motifType: 2
  }
];

const sampleNoticesData = [
  {
    id: 'notice-1',
    title: 'Admit Card for the End - Term Examination for June 2026 (Regular) are now available',
    publishedDate: '15 June 2026',
    dateBadgeDay: '15',
    dateBadgeMonth: 'JUN',
    dateBadgeYear: '2026',
    category: 'Exam Section',
    isPinned: true,
    department: 'Exam Section. NOTICE',
    content: `This is to inform all students of Class X & XII (Regular Batches) that their Admit Cards for the End-Term CBSE Examination 2026 are now available. 

Students and parents are requested to collect their original admit cards from the Administrative Block during office hours (8:00 AM – 1:30 PM). 

Please ensure all tuition fees and library clearances are updated prior to collecting the card.

The examinations will be conducted for the following batches:
1. Class XII (Science, Commerce, Humanities) — 2025–26 Batch
2. Class X (Secondary Board) — 2025–26 Batch

Mandatory Requirements:
• Bring valid Student ID Card
• School uniform is compulsory during admit card collection and examination days.`,
    attachmentName: 'CBSE_Admit_Card_Instructions_2026.pdf',
    fileSize: '1.2 MB'
  },
  {
    id: 'notice-2',
    title: 'Revised Morning Assembly Timings & Summer Uniform Guidelines 2026-27',
    publishedDate: '10 June 2026',
    dateBadgeDay: '10',
    dateBadgeMonth: 'JUN',
    dateBadgeYear: '2026',
    category: 'Administration',
    isPinned: true,
    department: 'Administration. CIRCULAR',
    content: `Due to the prevailing weather conditions in the Bokaro district, the school management has revised the daily morning assembly and class timings effective Monday, 12th June 2026.

New School Hours:
• Morning Assembly: 7:25 AM
• Departure / Dispersal: 1:15 PM

All students must adhere to the official summer uniform. Water bottles and caps are highly encouraged during outdoor sports periods.`,
    attachmentName: 'Revised_School_Timings_June_2026.pdf',
    fileSize: '840 KB'
  },
  {
    id: 'notice-3',
    title: 'Gomia School Society Annual Council & Parents Association Meeting',
    publishedDate: '01 June 2026',
    dateBadgeDay: '01',
    dateBadgeMonth: 'JUN',
    dateBadgeYear: '2026',
    category: 'Society Governance',
    isPinned: false,
    department: 'Gomia School Society. NOTICE',
    content: `The Gomia School Society will convene its Annual Meeting presided over by the Chairman, Rt. Revd. Bishop of Chhotanagpur, at the School Auditorium.

Agenda items include campus infrastructure upgrades, computer laboratory expansion, and review of student welfare programs. Parents representative delegates are invited.`,
    attachmentName: 'Society_Meeting_Agenda_2026.pdf',
    fileSize: '650 KB'
  },
  {
    id: 'notice-4',
    title: 'Distribution of Class XI Stream Selection Form & Subject Combination Guide',
    publishedDate: '25 May 2026',
    dateBadgeDay: '25',
    dateBadgeMonth: 'MAY',
    dateBadgeYear: '2026',
    category: 'Academics',
    isPinned: false,
    department: 'Academic Block. CIRCULAR',
    content: `Provisional admission forms for Class XI (Science, Commerce, and Humanities streams) are now available at the reception counter.

Eligible candidates from Pitts Modern School and external applicants can submit their filled stream preference forms along with pre-board marksheet copies.`,
    attachmentName: 'Class_XI_Stream_Selection_Form.pdf',
    fileSize: '1.5 MB'
  }
];

// Swiss Modular Geometric SVG Motifs (Appears in body area on Hover)
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

const newsPalette = [
  { bgColor: '#009951', textColor: '#ffffff', motifColor: '#ffc72c', motifType: 1 },
  { bgColor: '#0B427E', textColor: '#ffffff', motifColor: '#ffc72c', motifType: 2 },
  { bgColor: '#075cff', textColor: '#ffffff', motifColor: '#ffc72c', motifType: 4 },
  { bgColor: '#ffb800', textColor: '#0B427E', motifColor: '#0B427E', motifType: 3 },
  { bgColor: '#930018', textColor: '#ffffff', motifColor: '#ffc72c', motifType: 1 }
];

function mapAdminNews(item, index) {
  const palette = newsPalette[index % newsPalette.length];
  return {
    id: item.id || `news-${index + 1}`,
    title: item.title || 'School update',
    date: item.date || 'Pitts Modern School',
    dateRaw: item.dateRaw || '',
    category: item.category || 'Campus News',
    image: normalizeAssetUrl(item.image, '/image/IMG_2137.jpg'),
    excerpt: item.excerpt || item.text || 'Latest update from Pitts Modern School, Gomia.',
    tags: Array.isArray(item.tags) ? item.tags : ['Pitts Modern School'],
    href: normalizeLinkUrl(item.href, '/news-and-notices'),
    ...palette
  };
}

function mapAdminNotice(item, index) {
  return {
    id: item.id || `notice-${index + 1}`,
    title: item.title || 'School notice',
    publishedDate: item.publishedDate || `${item.day || '--'} ${item.month || ''} 2026`,
    dateBadgeDay: item.dateBadgeDay || item.day || '--',
    dateBadgeMonth: item.dateBadgeMonth || item.month || 'PMS',
    dateBadgeYear: item.dateBadgeYear || '2026',
    category: item.category || item.label || 'Notice',
    isPinned: item.isPinned ?? index < 2,
    department: item.department || `${item.label || 'School'}. NOTICE`,
    content: item.content || item.text || 'Click through for complete details from Pitts Modern School.',
    attachmentName: item.attachmentName || item.document || item.href || 'Notice link',
    fileSize: item.fileSize || ''
  };
}

const emptyNotice = {
  id: 'notice-empty',
  title: 'No notices published',
  publishedDate: 'Pitts Modern School',
  dateBadgeDay: '--',
  dateBadgeMonth: 'PMS',
  dateBadgeYear: '',
  category: 'Notice',
  isPinned: false,
  department: 'School. NOTICE',
  content: 'No official notices are currently published from the admin portal.',
  attachmentName: 'No attachment',
  fileSize: ''
};

export default function NewsAndNotices() {
  const siteContent = useSiteContent();
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'news', 'notices'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // Selected Notice for Split Reader
  const [activeNoticeId, setActiveNoticeId] = useState(sampleNoticesData[0].id);
  const newsSource = Array.isArray(siteContent.latestHighlights) ? siteContent.latestHighlights : sampleNewsData;
  const noticesSource = Array.isArray(siteContent.notices) ? siteContent.notices : sampleNoticesData;
  const newsData = newsSource.map(mapAdminNews);
  const noticesData = noticesSource.map(mapAdminNotice);
  const newsCategories = ['All', ...Array.from(new Set(newsData.map((item) => item.category)))];

  const activeNotice =
    noticesData.find((n) => n.id === activeNoticeId) || noticesData[0] || emptyNotice;

  // Filtered News items
  const filteredNews = newsData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat =
      selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="news-page-wrapper">
      {/* Top Section Navigation Header */}
      <div className="page-nav-top-bar">
        <div className="page-nav-top-inner">
          <span className="editorial-overline">OFFICIAL DISPATCHES &amp; MEDIA ARCHIVE</span>
          <div className="news-tab-switcher standalone-switcher">
            <button
              className={`news-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <span>Combined Feed</span>
            </button>
            <button
              className={`news-tab-btn ${activeTab === 'notices' ? 'active' : ''}`}
              onClick={() => setActiveTab('notices')}
            >
              <Pin size={16} />
              <span>Official Notices ({noticesData.length})</span>
            </button>
            <button
              className={`news-tab-btn ${activeTab === 'news' ? 'active' : ''}`}
              onClick={() => setActiveTab('news')}
            >
              <Megaphone size={16} />
              <span>Campus News ({newsData.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* 1. OFFICIAL PINNED NOTICES READER SECTION (Screenshot 2 Style) */}
      {(activeTab === 'all' || activeTab === 'notices') && (
        <section className="notices-reader-section">
          <div className="notices-reader-inner">
            <div className="notices-section-header">
              <div className="notices-header-left">
                <Pin className="pin-icon" size={20} />
                <h2>Official Circulars &amp; Board Notices</h2>
              </div>
              <span className="notices-count-badge">
                {noticesData.filter((n) => n.isPinned).length} Pinned Directives
              </span>
            </div>

            {/* Split Screen Layout */}
            <div className="notices-split-grid">
              {/* Left Column: Pinned Directory List */}
              <div className="notices-list-sidebar">
                <div className="sidebar-label">📌 PINNED &amp; RECENT ANNOUNCEMENTS</div>

                <div className="notices-list-stack">
                  {noticesData.map((notice) => {
                    const isSelected = notice.id === activeNoticeId;
                    return (
                      <div
                        key={notice.id}
                        onClick={() => setActiveNoticeId(notice.id)}
                        className={`notice-item-card ${isSelected ? 'active-notice' : ''}`}
                        role="button"
                        tabIndex={0}
                      >
                        <div className="notice-date-badge">
                          <span className="badge-day">{notice.dateBadgeDay}</span>
                          <span className="badge-month">{notice.dateBadgeMonth}</span>
                          <span className="badge-year">{notice.dateBadgeYear}</span>
                        </div>

                        <div className="notice-item-info">
                          {notice.isPinned && (
                            <span className="notice-pinned-tag">
                              <Pin size={11} /> PINNED
                            </span>
                          )}
                          <h4 className="notice-item-title">{notice.title}</h4>
                        </div>

                        <ChevronRight className="notice-chevron" size={18} />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Active Reader Display Panel */}
              <div className="notice-display-panel">
                <div className="notice-panel-header">
                  <div className="notice-meta-tags">
                    {activeNotice.isPinned && (
                      <span className="badge-pinned-solid">
                        <Pin size={13} /> PINNED
                      </span>
                    )}
                    <span className="badge-published-date">
                      <Calendar size={13} /> Published: {activeNotice.publishedDate}
                    </span>
                  </div>

                  <h3 className="notice-main-title">{activeNotice.title}</h3>
                  <div className="notice-department-label">{activeNotice.department}</div>
                </div>

                <div className="notice-divider" />

                <div className="notice-body-prose">
                  {activeNotice.content.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                <div className="notice-actions-footer">
                  <div className="attachment-info">
                    <FileText size={18} className="text-[#075cff]" />
                    <div>
                      <strong className="attachment-title">{activeNotice.attachmentName}</strong>
                      <span className="attachment-size">PDF Document • {activeNotice.fileSize}</span>
                    </div>
                  </div>

                  <div className="notice-action-btns">
                    <button
                      onClick={() => alert(`Downloading ${activeNotice.attachmentName}...`)}
                      className="notice-download-btn"
                    >
                      <Download size={15} />
                      <span>Download PDF</span>
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="notice-print-btn"
                      aria-label="Print notice"
                    >
                      <Printer size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. CAMPUS NEWS GRID & FILTER SYSTEM (Screenshot 1 Style) */}
      {(activeTab === 'all' || activeTab === 'news') && (
        <section className="news-grid-section">
          <div className="news-grid-inner">
            {/* Filter & Search Bar */}
            <div className="news-filter-box">
              <h2 className="search-box-title">SEARCH NEWS &amp; ARCHIVES</h2>

              <div className="search-filter-grid">
                {/* Search Text Input */}
                <div className="filter-field field-search">
                  <label className="field-label">Keyword Search</label>
                  <div className="search-input-wrap">
                    <Search size={18} className="search-icon" />
                    <input
                      type="text"
                      placeholder="Search news by title or keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="search-text-input"
                    />
                  </div>
                </div>

                {/* Category Dropdown */}
                <div className="filter-field field-category">
                  <label className="field-label">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="select-input"
                  >
                    {newsCategories.map((category) => (
                      <option key={category} value={category}>{category === 'All' ? 'All Categories' : category}</option>
                    ))}
                  </select>
                </div>

                {/* Date Range Inputs */}
                <div className="filter-field field-dates">
                  <label className="field-label">Date Range</label>
                  <div className="date-inputs-row">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="date-input"
                    />
                    <span className="date-sep">to</span>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="date-input"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="filter-field field-button">
                  <button className="news-search-btn">
                    <Search size={15} />
                    <span>SEARCH</span>
                  </button>
                </div>
              </div>
            </div>

            {/* News Cards Grid */}
            <div className="news-cards-grid">
              {filteredNews.map((news) => {
                const isHovered = hoveredCardId === news.id;

                return (
                  <article
                    key={news.id}
                    className={`news-card-swiss ${isHovered ? 'is-hovered' : ''}`}
                    onMouseEnter={() => setHoveredCardId(news.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    style={{
                      '--card-hover-bg': news.bgColor,
                      '--card-hover-text': news.textColor
                    }}
                  >
                    <div className="news-card-image-wrap">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="news-card-img"
                      />
                      <span className="news-category-badge">{news.category}</span>
                    </div>

                    <div className="news-card-body">
                      {/* Swiss Geometric Motif in top-right of the WHITE CONTENT BODY AREA */}
                      <div className="card-body-motif-container">
                        <SwissMotifInBody
                          type={news.motifType}
                          color={news.motifColor}
                          isHovered={isHovered}
                        />
                      </div>

                      <h3 className="news-card-title">{news.title}</h3>
                      <span className="news-card-date">{news.date}</span>
                      <p className="news-card-excerpt">{news.excerpt}</p>

                      <div className="news-card-tags">
                        {news.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="news-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
