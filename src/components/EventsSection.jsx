import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Download,
  BookOpen,
  ArrowRight,
  Sparkles,
  Search,
  Filter,
  Tag,
  Share2,
  ChevronRight,
  ChevronLeft,
  FileText,
  CheckCircle2,
  X,
  Image as ImageIcon
} from 'lucide-react';
import { normalizeAssetUrl, normalizeLinkUrl, useSiteContent } from '../context/siteContent';

const upcomingEventsData = [
  {
    id: 'event-1',
    title: '59th Annual Independence Day Cultural Pageant & Flag Hoisting',
    dateDay: '15',
    dateMonth: 'AUG',
    dateYear: '2026',
    category: 'Cultural & National',
    image: '/image/inv1.webp',
    excerpt:
      'Grand parade, march-past by school houses, patriotic musical renditions by the senior choir, and address by the Gomia School Society council.',
    tags: ['All Classes', 'Compulsory Attendance'],
    bgColor: '#0B427E', // Deep Royal Navy
    textColor: '#ffffff',
    motifColor: '#ffc72c', // Warm Yellow
    motifType: 1,
    galleryImages: [
      '/image/inv1.webp',
      '/image/inv2.webp',
      '/image/inv3.webp',
      '/image/img_2137.webp'
    ]
  },
  {
    id: 'event-2',
    title: 'Inter-House Science & Robotics Exhibition 2026',
    dateDay: '28',
    dateMonth: 'AUG',
    dateYear: '2026',
    category: 'Academic & Science',
    image: '/image/img_2137.webp',
    excerpt:
      'Over 120 innovative working models, AI automation projects, and environmental solutions developed by Middle and Senior school students.',
    tags: ['Grade 6 – 12', 'Science Club'],
    bgColor: '#009951', // Emerald Green
    textColor: '#ffffff',
    motifColor: '#ffc72c',
    motifType: 2,
    galleryImages: [
      '/image/img_2137.webp',
      '/image/img_2190.webp',
      '/image/img_2203.webp',
      '/image/inv1.webp'
    ]
  },
  {
    id: 'event-3',
    title: 'Teachers Day Celebrations & Senior Leadership Assembly',
    dateDay: '05',
    dateMonth: 'SEP',
    dateYear: '2026',
    category: 'Campus Tradition',
    image: '/image/inv2.webp',
    excerpt:
      'Class XII student leaders take charge of teaching classes, followed by cultural performances honoring the faculty of Pitts Modern School.',
    tags: ['Class XII', 'Student Council'],
    bgColor: '#ffb800', // Warm Gold / Yellow
    textColor: '#0B427E',
    motifColor: '#0B427E', // Navy
    motifType: 3,
    galleryImages: [
      '/image/inv2.webp',
      '/image/inv3.webp',
      '/image/inv1.webp',
      '/image/img_2203.webp'
    ]
  },
  {
    id: 'event-4',
    title: 'Inter-School Football Championship & Athletic Meet',
    dateDay: '24',
    dateMonth: 'SEP',
    dateYear: '2026',
    category: 'Sports & Athletics',
    image: '/image/inv3.webp',
    excerpt:
      'Regional CBSE schools convene at Gomia campus for the annual 3-day sports tournament featuring track, field, and football finals.',
    tags: ['Sports Team', 'Inter-School'],
    bgColor: '#075cff', // Electric Cobalt Blue
    textColor: '#ffffff',
    motifColor: '#ffc72c',
    motifType: 4,
    galleryImages: [
      '/image/inv3.webp',
      '/image/inv1.webp',
      '/image/img_2137.webp',
      '/image/img_2190.webp'
    ]
  },
  {
    id: 'event-5',
    title: 'CBSE Board Examination Counseling & Parent-Teacher Conference',
    dateDay: '12',
    dateMonth: 'OCT',
    dateYear: '2026',
    category: 'Academic Counseling',
    image: '/image/img_2190.webp',
    excerpt:
      'One-on-one academic performance review for Class X & XII candidates with subject experts and career counselors.',
    tags: ['Parents Mandatory', 'Class X & XII'],
    bgColor: '#930018', // Burnt Crimson
    textColor: '#ffffff',
    motifColor: '#ffc72c',
    motifType: 1,
    galleryImages: [
      '/image/img_2190.webp',
      '/image/img_2203.webp',
      '/image/inv2.webp',
      '/image/inv1.webp'
    ]
  }
];

// Interactive 3x3 Calendar Date Grid Data
const calendarGridTiles = [
  { day: '15', month: 'AUG', dateStr: 'AUG 15', fullDateStr: 'SAT AUG 15TH' },
  { day: '18', month: 'AUG', dateStr: 'AUG 18', fullDateStr: 'TUE AUG 18TH' },
  { day: '22', month: 'AUG', dateStr: 'AUG 22', fullDateStr: 'SAT AUG 22ND' },
  { day: '28', month: 'AUG', dateStr: 'AUG 28', fullDateStr: 'FRI AUG 28TH' },
  { day: '05', month: 'SEP', dateStr: 'SEP 05', fullDateStr: 'SAT SEP 05TH' },
  { day: '12', month: 'SEP', dateStr: 'SEP 12', fullDateStr: 'SAT SEP 12TH' },
  { day: '24', month: 'SEP', dateStr: 'SEP 24', fullDateStr: 'THU SEP 24TH' },
  { day: '02', month: 'OCT', dateStr: 'OCT 02', fullDateStr: 'FRI OCT 02ND' },
  { day: '12', month: 'OCT', dateStr: 'OCT 12', fullDateStr: 'MON OCT 12TH' }
];

const calendarEventDetailsMap = {
  'AUG 15': {
    fullDateStr: 'SAT AUG 15TH',
    events: [
      { title: '59th Independence Day Flag Hoisting & Cultural Parade', time: '07:30 AM – 11:30 AM • ALL DAY' },
      { title: 'Inter-House Patriotism Song & March-Past Assembly', time: '09:00 AM • ALL DAY' }
    ]
  },
  'AUG 18': {
    fullDateStr: 'TUE AUG 18TH',
    events: [
      { title: 'Inter-House General Knowledge & Academic Quiz Summit', time: '10:00 AM – 12:30 PM' },
      { title: 'Senior Secondary Career Guidance Workshop', time: '01:30 PM – 03:00 PM' }
    ]
  },
  'AUG 22': {
    fullDateStr: 'SAT AUG 22ND',
    events: [
      { title: 'School Library Literary Reading & Book Discussion', time: '11:00 AM – 01:00 PM' }
    ]
  },
  'AUG 28': {
    fullDateStr: 'FRI AUG 28TH',
    events: [
      { title: 'Inter-House Science & Robotics Exhibition 2026', time: '09:00 AM – 02:00 PM • ALL DAY' },
      { title: 'AI & Automation Working Models Judging Panel', time: '11:30 AM – 01:30 PM' }
    ]
  },
  'SEP 05': {
    fullDateStr: 'SAT SEP 05TH',
    events: [
      { title: 'Teachers Day Celebrations & Senior Student Leadership Assembly', time: '08:00 AM – 01:00 PM' },
      { title: 'Faculty Honor Ceremony & Cultural Presentations', time: '10:30 AM • ALL DAY' }
    ]
  },
  'SEP 12': {
    fullDateStr: 'SAT SEP 12TH',
    events: [
      { title: 'Middle School Fine Arts & Clay Modeling Workshop', time: '09:30 AM – 12:00 PM' }
    ]
  },
  'SEP 24': {
    fullDateStr: 'THU SEP 24TH',
    events: [
      { title: 'Regional CBSE Inter-School Football Championship Day 1', time: '08:30 AM – 04:30 PM • ALL DAY' },
      { title: 'Athletics Track & Field Preliminaries', time: '10:00 AM – 03:00 PM' }
    ]
  },
  'OCT 02': {
    fullDateStr: 'FRI OCT 02ND',
    events: [
      { title: 'Gandhi Jayanti Peace Assembly & Campus Cleanliness Drive', time: '08:00 AM – 10:30 AM • ALL DAY' }
    ]
  },
  'OCT 12': {
    fullDateStr: 'MON OCT 12TH',
    events: [
      { title: 'CBSE Board Examination Counseling & Parent-Teacher Conference', time: '09:00 AM – 01:30 PM' },
      { title: 'Class X & XII Report Card Distribution', time: '10:00 AM – 01:00 PM' }
    ]
  }
};

const fallbackEventImages = [
  '/image/inv1.webp',
  '/image/img_2137.webp',
  '/image/inv2.webp',
  '/image/inv3.webp',
  '/image/img_2190.webp'
];

const eventPalette = [
  { bgColor: '#0B427E', textColor: '#ffffff', motifColor: '#ffc72c', motifType: 1 },
  { bgColor: '#009951', textColor: '#ffffff', motifColor: '#ffc72c', motifType: 2 },
  { bgColor: '#ffb800', textColor: '#0B427E', motifColor: '#0B427E', motifType: 3 },
  { bgColor: '#075cff', textColor: '#ffffff', motifColor: '#ffc72c', motifType: 4 },
  { bgColor: '#930018', textColor: '#ffffff', motifColor: '#ffc72c', motifType: 1 }
];

function titleCase(value = '') {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function eventDateKey(event) {
  const month = (event.month || event.dateMonth || 'AUG').toString().slice(0, 3).toUpperCase();
  const day = (event.day || event.dateDay || '01').toString().padStart(2, '0');
  return `${month} ${day}`;
}

function ordinalDay(day) {
  const number = Number.parseInt(day, 10);
  if (!Number.isFinite(number)) return day;
  const suffix = number % 10 === 1 && number % 100 !== 11 ? 'ST' : number % 10 === 2 && number % 100 !== 12 ? 'ND' : number % 10 === 3 && number % 100 !== 13 ? 'RD' : 'TH';
  return `${String(number).padStart(2, '0')}${suffix}`;
}

function mapAdminEvent(event, index) {
  const palette = eventPalette[index % eventPalette.length];
  const dateDay = (event.day || event.dateDay || '01').toString().padStart(2, '0');
  const dateMonth = (event.month || event.dateMonth || 'AUG').toString().slice(0, 3).toUpperCase();
  const image = normalizeAssetUrl(event.image, fallbackEventImages[index % fallbackEventImages.length]);
  const type = titleCase(event.type || event.category || 'Campus Event');

  return {
    id: event.id || `event-${index + 1}`,
    title: event.title || 'Upcoming school event',
    dateDay,
    dateMonth,
    dateYear: event.year || event.dateYear || '2026',
    weekday: event.weekday || '',
    category: type,
    image,
    excerpt: event.excerpt || event.text || 'A Pitts Modern School event shaped by learning, participation and community spirit.',
    tags: Array.isArray(event.tags) ? event.tags : [type, event.time || 'School Calendar'],
    galleryImages: Array.isArray(event.galleryImages) ? event.galleryImages.map((item) => normalizeAssetUrl(item, image)).filter(Boolean) : [image],
    href: normalizeLinkUrl(event.href, '/events'),
    time: event.time || 'Time to be announced',
    ...palette
  };
}

// Swiss Modular Geometric SVG Motifs
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

// Creative Quick Gallery Lightbox Modal
function EventGalleryModal({ event, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!event) return null;

  const images = event.galleryImages || [event.image];

  return (
    <div className="gallery-modal-overlay" onClick={onClose}>
      <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-close-btn" onClick={onClose} aria-label="Close Gallery">
          <X size={22} />
        </button>

        {/* Large Image Frame */}
        <div className="gallery-main-frame">
          <img src={images[activeIdx]} alt={event.title} className="gallery-main-img" />

          {images.length > 1 && (
            <>
              <button
                className="gallery-nav-btn prev"
                onClick={() => setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="gallery-nav-btn next"
                onClick={() => setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div className="gallery-counter-badge">
            <ImageIcon size={14} />
            <span>
              {activeIdx + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Gallery Info Footer */}
        <div className="gallery-modal-footer">
          <div className="gallery-event-info">
            <span className="gallery-category">{event.category}</span>
            <h3 className="gallery-event-title">{event.title}</h3>
            <p className="gallery-event-desc">{event.excerpt}</p>
          </div>

          {/* Thumbnail Selection Row */}
          <div className="gallery-thumbnails-row">
            {images.map((img, idx) => (
              <button
                key={idx}
                className={`gallery-thumb-btn ${activeIdx === idx ? 'active-thumb' : ''}`}
                onClick={() => setActiveIdx(idx)}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EventsSection() {
  const siteContent = useSiteContent();
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [selectedCalendarDate, setSelectedCalendarDate] = useState('AUG 15');
  const [activeGalleryEvent, setActiveGalleryEvent] = useState(null);

  const adminEvents = Array.isArray(siteContent.upcomingEvents) && siteContent.upcomingEvents.length > 0 ? siteContent.upcomingEvents : upcomingEventsData;
  const syncedEvents = adminEvents.map(mapAdminEvent);
  const calendarGridTiles = syncedEvents.slice(0, 9).map((event) => {
    const dateStr = eventDateKey(event);
    return {
      day: event.dateDay,
      month: event.dateMonth,
      dateStr,
      fullDateStr: `${(event.weekday || 'EVENT').toUpperCase()} ${event.dateMonth} ${ordinalDay(event.dateDay)}`
    };
  });
  const calendarEventDetailsMap = syncedEvents.reduce((details, event) => {
    const key = eventDateKey(event);
    const fullDateStr = `${(event.weekday || 'EVENT').toUpperCase()} ${event.dateMonth} ${ordinalDay(event.dateDay)}`;
    const existing = details[key] || { fullDateStr, events: [] };
    existing.events.push({ title: event.title, time: event.time });
    details[key] = existing;
    return details;
  }, {});
  const activeCalendarKey = calendarEventDetailsMap[selectedCalendarDate] ? selectedCalendarDate : calendarGridTiles[0]?.dateStr;
  const activeCalendarInfo = calendarEventDetailsMap[activeCalendarKey] || { fullDateStr: 'UPCOMING EVENTS', events: [] };

  const filteredEvents = syncedEvents.filter(
    (e) => categoryFilter === 'All' || e.category === categoryFilter
  );
  const filterCategories = ['All', ...Array.from(new Set(syncedEvents.map((event) => event.category)))];

  return (
    <div className="events-page-wrapper">
      {/* Gallery Lightbox Modal */}
      <EventGalleryModal
        event={activeGalleryEvent}
        onClose={() => setActiveGalleryEvent(null)}
      />

      {/* Top Header Bar for Dedicated Events Page */}
      <div className="page-nav-top-bar">
        <div className="page-nav-top-inner">
          <span className="editorial-overline">OFFICIAL CAMPUS CALENDAR &amp; EVENTS</span>
          <h1 className="page-standalone-title">School Events &amp; Activity Showcase</h1>
        </div>
      </div>

      <section className="events-grid-section">
        <div className="events-grid-inner">
          {/* DYNAMIC INTERACTIVE CALENDAR WIDGET SHOWCASE */}
          <div className="interactive-calendar-wrapper">
            <div className="calendar-section-header">
              <span className="accent-line-green" />
              <h2 className="calendar-main-title">UPCOMING EVENTS</h2>
            </div>

            <div className="calendar-widget-box subtle-calendar-theme">
              {/* Left Side: 3x3 Dynamic Light Date Grid */}
              <div className="calendar-tiles-grid">
                {calendarGridTiles.map((tile) => {
                  const isSelected = activeCalendarKey === tile.dateStr;

                  return (
                    <button
                      key={tile.dateStr}
                      onClick={() => setSelectedCalendarDate(tile.dateStr)}
                      className={`calendar-date-tile ${isSelected ? 'selected-tile' : ''}`}
                      aria-label={`View events for ${tile.fullDateStr}`}
                    >
                      {isSelected && <span className="hand-drawn-circle-outline" />}
                      <span className="tile-month">{tile.month}</span>
                      <span className="tile-day">{tile.day}</span>
                    </button>
                  );
                })}
              </div>

              {/* Right Side: Selected Date Event Details Reader */}
              <div className="calendar-details-panel">
                <div className="selected-date-header">
                  <span className="selected-day-str">{activeCalendarInfo.fullDateStr}</span>
                  <img
                    src="/image/logo.webp"
                    alt="Pitts Modern School Emblem"
                    className="calendar-school-emblem"
                  />
                </div>

                <div className="date-events-list">
                  {activeCalendarInfo.events.map((item, idx) => (
                    <div key={idx} className="date-event-item">
                      <h4 className="date-event-title">{item.title}</h4>
                      <div className="date-event-time">
                        <Clock size={13} className="time-icon" />
                        <span>{item.time}</span>
                      </div>
                      {idx < activeCalendarInfo.events.length - 1 && (
                        <div className="event-item-rule" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: SHOWCASING EVENT HIGHLIGHTS */}
          <div className="events-highlights-section-title">
            <span className="editorial-kicker">GALLERY ARCHIVE</span>
            <h2 className="section-title">Showcasing Event Highlights</h2>
          </div>

          {/* Category Filter Pills */}
          <div className="events-filter-bar">
            <span className="filter-title">Filter by Category:</span>
            <div className="filter-pills-row">
                {filterCategories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`filter-pill-btn ${categoryFilter === cat ? 'active' : ''}`}
                  onClick={() => setCategoryFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Events Cards Grid */}
          <div className="events-cards-grid">
            {filteredEvents.map((evt) => {
              const isHovered = hoveredCardId === evt.id;

              return (
                <article
                  key={evt.id}
                  className={`event-card-swiss ${isHovered ? 'is-hovered' : ''}`}
                  onMouseEnter={() => setHoveredCardId(evt.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  style={{
                    '--card-hover-bg': evt.bgColor,
                    '--card-hover-text': evt.textColor
                  }}
                >
                  <div className="event-card-img-wrap">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="event-card-img"
                    />
                    <div className="event-card-overlay" />

                    <div className="event-date-badge-top">
                      <span className="ev-day">{evt.dateDay}</span>
                      <span className="ev-month">{evt.dateMonth}</span>
                      <span className="ev-year">{evt.dateYear}</span>
                    </div>
                  </div>

                  <div className="event-card-body">
                    <div className="card-body-motif-container">
                      <SwissMotifInBody
                        type={evt.motifType}
                        color={evt.motifColor}
                        isHovered={isHovered}
                      />
                    </div>

                    <span className="event-category-label">{evt.category}</span>
                    <h3 className="event-card-title">{evt.title}</h3>

                    <p className="event-excerpt">{evt.excerpt}</p>

                    <div className="event-card-footer">
                      <div className="event-tags-list">
                        {evt.tags.map((t, idx) => (
                          <span key={idx} className="event-tag">
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setActiveGalleryEvent(evt)}
                        className="event-action-btn"
                        aria-label="View Highlights"
                      >
                        <span>VIEW HIGHLIGHTS</span>
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
