import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Play, Camera, Film } from 'lucide-react';

/* ─── PHOTO CATALOGUE ──────────────────────────────────────────── */
const GALLERY_ITEMS = [
  /* ── ACADEMICS & ANNUAL MEET ── */
  { id: 1,  src: '/image/aam1.jpg',   cat: 'academics', label: 'Annual Academic Meet' },
  { id: 2,  src: '/image/aam32.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 3,  src: '/image/aam33.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 4,  src: '/image/aam36.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 5,  src: '/image/aam44.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 6,  src: '/image/aam45.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 7,  src: '/image/aam46.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 8,  src: '/image/aam48.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 9,  src: '/image/aam51.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 10, src: '/image/aam55.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 11, src: '/image/aam58.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 12, src: '/image/aam59.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 13, src: '/image/aam61.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 14, src: '/image/aam62.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 15, src: '/image/aam69.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 16, src: '/image/aam71.jpg',  cat: 'academics', label: 'Annual Academic Meet' },
  { id: 17, src: '/image/aam84.jpg',  cat: 'academics', label: 'Annual Academic Meet' },

  /* ── CO-CURRICULAR ACTIVITIES ── */
  { id: 18, src: '/image/CCA12.jpg',  cat: 'cca', label: 'Co-Curricular Activities' },
  { id: 19, src: '/image/CCA6.jpg',   cat: 'cca', label: 'Co-Curricular Activities' },
  { id: 20, src: '/image/cca13.jpg',  cat: 'cca', label: 'Co-Curricular Activities' },
  { id: 21, src: '/image/cca14.jpg',  cat: 'cca', label: 'Co-Curricular Activities' },
  { id: 22, src: '/image/cca17.jpg',  cat: 'cca', label: 'Co-Curricular Activities' },
  { id: 23, src: '/image/cca18.jpg',  cat: 'cca', label: 'Co-Curricular Activities' },
  { id: 24, src: '/image/cca21.jpg',  cat: 'cca', label: 'Co-Curricular Activities' },
  { id: 25, src: '/image/cca23.jpg',  cat: 'cca', label: 'Co-Curricular Activities' },
  { id: 26, src: '/image/cca24.jpg',  cat: 'cca', label: 'Co-Curricular Activities' },

  /* ── SPORTS ── */
  { id: 27, src: '/image/basketball2.jpg', cat: 'sports', label: 'Sports & Athletics' },
  { id: 28, src: '/image/sp1.jpg',    cat: 'sports', label: 'Sports & Athletics' },
  { id: 29, src: '/image/sp8.jpg',    cat: 'sports', label: 'Sports & Athletics' },
  { id: 30, src: '/image/dc11.jpg',   cat: 'sports', label: 'Sports & Athletics' },
  { id: 31, src: '/image/dc12.jpg',   cat: 'sports', label: 'Sports & Athletics' },
  { id: 32, src: '/image/dc13.jpg',   cat: 'sports', label: 'Sports & Athletics' },
  { id: 33, src: '/image/dc15.jpg',   cat: 'sports', label: 'Sports & Athletics' },
  { id: 34, src: '/image/dc19.jpg',   cat: 'sports', label: 'Sports & Athletics' },
  { id: 35, src: '/image/dc2.jpg',    cat: 'sports', label: 'Sports & Athletics' },
  { id: 36, src: '/image/dc3.jpg',    cat: 'sports', label: 'Sports & Athletics' },
  { id: 37, src: '/image/dc4.jpg',    cat: 'sports', label: 'Sports & Athletics' },
  { id: 38, src: '/image/dc9.jpg',    cat: 'sports', label: 'Sports & Athletics' },

  /* ── INVESTITURE & EVENTS ── */
  { id: 39, src: '/image/inv1.jpg',   cat: 'events', label: 'Investiture Ceremony' },
  { id: 40, src: '/image/inv2.jpg',   cat: 'events', label: 'Investiture Ceremony' },
  { id: 41, src: '/image/inv3.jpg',   cat: 'events', label: 'Investiture Ceremony' },
  { id: 42, src: '/image/jal1.jpg',   cat: 'events', label: 'School Events' },
  { id: 43, src: '/image/jal2.jpg',   cat: 'events', label: 'School Events' },
  { id: 44, src: '/image/jal3.jpg',   cat: 'events', label: 'School Events' },
  { id: 45, src: '/image/jal6.jpg',   cat: 'events', label: 'School Events' },

  /* ── FAREWELL & PROGRAMMES ── */
  { id: 46, src: '/image/hrd2.jpg',   cat: 'events', label: 'School Programme' },
  { id: 47, src: '/image/hrd6.jpg',   cat: 'events', label: 'School Programme' },
  { id: 48, src: '/image/hrd14.jpg',  cat: 'events', label: 'School Programme' },
  { id: 49, src: '/image/hrd20.jpg',  cat: 'events', label: 'School Programme' },
  { id: 50, src: '/image/hrd22.jpg',  cat: 'events', label: 'School Programme' },
  { id: 51, src: '/image/hrd27.jpg',  cat: 'events', label: 'School Programme' },
  { id: 52, src: '/image/hrd29.jpg',  cat: 'events', label: 'School Programme' },
  { id: 53, src: '/image/hrd51.jpg',  cat: 'events', label: 'School Programme' },
  { id: 54, src: '/image/hrd57.jpg',  cat: 'events', label: 'School Programme' },
  { id: 55, src: '/image/hrd62.jpg',  cat: 'events', label: 'School Programme' },
  { id: 56, src: '/image/hrd65.jpg',  cat: 'events', label: 'School Programme' },
  { id: 57, src: '/image/hrd67.jpg',  cat: 'events', label: 'School Programme' },
  { id: 58, src: '/image/hrd71.jpg',  cat: 'events', label: 'School Programme' },
  { id: 59, src: '/image/hrd73.jpg',  cat: 'events', label: 'School Programme' },
  { id: 60, src: '/image/hrd90.jpg',  cat: 'events', label: 'School Programme' },
  { id: 61, src: '/image/hrd99.jpg',  cat: 'events', label: 'School Programme' },
  { id: 62, src: '/image/hrd108.jpg', cat: 'events', label: 'School Programme' },
  { id: 63, src: '/image/hrd110.jpg', cat: 'events', label: 'School Programme' },

  /* ── STUDENTS & CAMPUS LIFE ── */
  { id: 64, src: '/image/IMG_2081.jpg', cat: 'campus', label: 'Campus Life' },
  { id: 65, src: '/image/IMG_2128.jpg', cat: 'campus', label: 'Campus Life' },
  { id: 66, src: '/image/IMG_2137.jpg', cat: 'campus', label: 'Campus Life' },
  { id: 67, src: '/image/IMG_2190.jpg', cat: 'campus', label: 'Campus Life' },
  { id: 68, src: '/image/IMG_2203.jpg', cat: 'campus', label: 'Campus Life' },
  { id: 69, src: '/image/IMG_2285.jpg', cat: 'campus', label: 'Campus Life' },
  { id: 70, src: '/image/IMG_3328.jpg', cat: 'campus', label: 'Campus Life' },
  { id: 71, src: '/image/IMG_3479.jpg', cat: 'campus', label: 'Campus Life' },
  { id: 72, src: '/image/IMG_5322.jpg', cat: 'campus', label: 'Campus Life' },
  { id: 73, src: '/image/IMG_5327.jpg', cat: 'campus', label: 'Campus Life' },
  { id: 74, src: '/image/Pu11.jpg',     cat: 'campus', label: 'Campus Life' },
  { id: 75, src: '/image/Pu13.jpg',     cat: 'campus', label: 'Campus Life' },
  { id: 76, src: '/image/pat3.jpg',     cat: 'campus', label: 'Campus Life' },
  { id: 77, src: '/image/pat5.jpg',     cat: 'campus', label: 'Campus Life' },
  { id: 78, src: '/image/pat6.jpg',     cat: 'campus', label: 'Campus Life' },
  { id: 79, src: '/image/pat7.jpg',     cat: 'campus', label: 'Campus Life' },
  { id: 80, src: '/image/pat19.jpg',    cat: 'campus', label: 'Campus Life' },

  /* ── RECENT / SOCIAL POSTS ── */
  { id: 81, src: '/image/459679975_122182238516192910_2352708045737928534_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 82, src: '/image/496815149_122229590804192910_9179767513285768099_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 83, src: '/image/497469422_122229593444192910_1458964529599230913_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 84, src: '/image/506661250_122234688416192910_5895272237446126056_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 85, src: '/image/506991319_122234688290192910_2185483990626125607_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 86, src: '/image/507051564_122234860532192910_3943265863041732070_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 87, src: '/image/507185747_122234687900192910_3247662964522552025_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 88, src: '/image/507200303_122234689946192910_95880203769996246_n.jpg',   cat: 'events', label: 'School Highlights' },
  { id: 89, src: '/image/580543292_122258805356192910_1031056619062528595_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 90, src: '/image/581404906_122258851118192910_8393353311041094181_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 91, src: '/image/582208431_122258863142192910_299462885870035410_n.jpg',  cat: 'events', label: 'School Highlights' },
  { id: 92, src: '/image/584510304_122258864786192910_7539988078205492723_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 93, src: '/image/615483636_122268682580192910_8463478596926584114_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 94, src: '/image/616433013_122268682130192910_1156524381601462785_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 95, src: '/image/627058464_122271914972192910_646984676087709078_n.jpg',  cat: 'events', label: 'School Highlights' },
  { id: 96, src: '/image/654809425_122278443140192910_4758609915848770575_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 97, src: '/image/655235611_122278627622192910_6813982125465658890_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 98, src: '/image/656729874_122278628264192910_5575061535742040043_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 99, src: '/image/658952886_122279886296192910_3270116905043812727_n.jpg', cat: 'events', label: 'School Highlights' },
  { id: 100, src: '/image/662488026_122279886146192910_3383953004717888381_n.jpg', cat: 'events', label: 'School Highlights' },
];

/* ─── VIDEO CATALOGUE (ALL HORIZONTAL) ───────────────────────────── */
const VIDEO_ITEMS = [
  {
    id: 'v1',
    title: 'Pitts Modern School Gomia - Annual Day Cultural Celebrations',
    cat: 'events',
    categoryLabel: 'ANNUAL FESTIVAL',
    duration: '08:45',
    thumbnail: '/image/hrd2.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'v2',
    title: 'Annual Sports Meet & Championship Highlights',
    cat: 'sports',
    categoryLabel: 'SPORTS DAY',
    duration: '05:20',
    thumbnail: '/image/sp1.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'v3',
    title: 'Investiture Ceremony & Cabinet Oath Taking',
    cat: 'events',
    categoryLabel: 'CEREMONY',
    duration: '06:15',
    thumbnail: '/image/inv1.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'v4',
    title: 'Science & Robotics Exhibition Showcase',
    cat: 'academics',
    categoryLabel: 'SCIENCE & TECH',
    duration: '04:30',
    thumbnail: '/image/aam1.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'v5',
    title: 'Co-Curricular Performing Arts & Music Festival',
    cat: 'cca',
    categoryLabel: 'PERFORMING ARTS',
    duration: '07:10',
    thumbnail: '/image/cca13.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'v6',
    title: 'Campus Life & State-of-the-Art Infrastructure Tour',
    cat: 'campus',
    categoryLabel: 'CAMPUS TOUR',
    duration: '03:50',
    thumbnail: '/image/IMG_2081.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

const PHOTO_FILTERS = [
  { key: 'all',      label: 'ALL',            count: GALLERY_ITEMS.length },
  { key: 'academics', label: 'ACADEMICS',     count: GALLERY_ITEMS.filter(i => i.cat === 'academics').length },
  { key: 'cca',      label: 'CO-CURRICULAR', count: GALLERY_ITEMS.filter(i => i.cat === 'cca').length },
  { key: 'sports',   label: 'SPORTS',         count: GALLERY_ITEMS.filter(i => i.cat === 'sports').length },
  { key: 'events',   label: 'EVENTS',         count: GALLERY_ITEMS.filter(i => i.cat === 'events').length },
  { key: 'campus',   label: 'CAMPUS LIFE',    count: GALLERY_ITEMS.filter(i => i.cat === 'campus').length },
];

const VIDEO_FILTERS = [
  { key: 'all',      label: 'ALL VIDEOS',     count: VIDEO_ITEMS.length },
  { key: 'events',   label: 'EVENTS & DAY',   count: VIDEO_ITEMS.filter(i => i.cat === 'events').length },
  { key: 'sports',   label: 'SPORTS',         count: VIDEO_ITEMS.filter(i => i.cat === 'sports').length },
  { key: 'academics', label: 'SCIENCE',       count: VIDEO_ITEMS.filter(i => i.cat === 'academics').length },
  { key: 'cca',      label: 'ARTS & MUSIC',   count: VIDEO_ITEMS.filter(i => i.cat === 'cca').length },
  { key: 'campus',   label: 'CAMPUS TOUR',    count: VIDEO_ITEMS.filter(i => i.cat === 'campus').length },
];

/* ─── PHOTO LIGHTBOX ─────────────────────────────────────────────── */
function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const item = items[activeIndex];
  if (!item) return null;

  return (
    <div className="gallery-lightbox" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>

      <button
        className="lb-nav lb-prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
        disabled={activeIndex === 0}
      >
        <ChevronLeft size={28} />
      </button>

      <div className="lb-image-frame" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.label} className="lb-image" />
        <div className="lb-caption">
          <span className="lb-label">{item.label}</span>
          <span className="lb-counter">{activeIndex + 1} / {items.length}</span>
        </div>
      </div>

      <button
        className="lb-nav lb-next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
        disabled={activeIndex === items.length - 1}
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}

/* ─── VIDEO LIGHTBOX MODAL ───────────────────────────────────────── */
function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="gallery-lightbox" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close Video">
        <X size={22} />
      </button>

      <div className="video-modal-frame" onClick={(e) => e.stopPropagation()}>
        <div className="video-responsive-wrap">
          <iframe
            src={`${video.videoUrl}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-modal-caption">
          <span className="v-category">{video.categoryLabel}</span>
          <h3 className="v-title">{video.title}</h3>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN GALLERY COMPONENT ─────────────────────────────────────── */
export default function GallerySection() {
  const [activeMode, setActiveMode] = useState('photos'); // 'photos' | 'videos'
  const [activePhotoFilter, setActivePhotoFilter] = useState('all');
  const [activeVideoFilter, setActiveVideoFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const filteredPhotos = activePhotoFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.cat === activePhotoFilter);

  const filteredVideos = activeVideoFilter === 'all'
    ? VIDEO_ITEMS
    : VIDEO_ITEMS.filter(i => i.cat === activeVideoFilter);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(i => Math.max(0, i - 1));
  const nextImage = () => setLightboxIndex(i => Math.min(filteredPhotos.length - 1, i + 1));

  const handleKey = useCallback((e) => {
    if (lightboxIndex !== null) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    }
    if (activeVideoModal !== null) {
      if (e.key === 'Escape') setActiveVideoModal(null);
    }
  }, [lightboxIndex, activeVideoModal]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <div className="gallery-page-root">
      {/* ── TOP MAIN MODE SWITCHER: PHOTOS / VIDEOS ── */}
      <div className="gallery-mode-switcher-bar">
        <div className="gallery-mode-switcher-inner">
          <button
            className={`mode-switch-btn ${activeMode === 'photos' ? 'active' : ''}`}
            onClick={() => setActiveMode('photos')}
          >
            <Camera size={18} />
            <span>PHOTOS GALLERY</span>
          </button>

          <button
            className={`mode-switch-btn ${activeMode === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveMode('videos')}
          >
            <Film size={18} />
            <span>VIDEOS GALLERY</span>
          </button>
        </div>
      </div>

      {/* ── SECONDARY CATEGORY FILTER BAR ── */}
      <div className="gallery-filter-bar">
        <div className="gallery-filter-inner">
          {activeMode === 'photos' ? (
            PHOTO_FILTERS.map(f => (
              <button
                key={f.key}
                className={`gallery-filter-btn ${activePhotoFilter === f.key ? 'active' : ''}`}
                onClick={() => setActivePhotoFilter(f.key)}
              >
                <span className="filter-label">{f.label}</span>
                <span className="filter-count">{f.count}</span>
              </button>
            ))
          ) : (
            VIDEO_FILTERS.map(f => (
              <button
                key={f.key}
                className={`gallery-filter-btn ${activeVideoFilter === f.key ? 'active' : ''}`}
                onClick={() => setActiveVideoFilter(f.key)}
              >
                <span className="filter-label">{f.label}</span>
                <span className="filter-count">{f.count}</span>
              </button>
            ))
          )}
        </div>
      </div>

      {/* ── CONTENT AREA ── */}
      <div className="gallery-grid-wrapper">
        {activeMode === 'photos' ? (
          /* PHOTOS: SWISS MASONRY GRID */
          <div className="gallery-swiss-grid">
            {filteredPhotos.map((item, idx) => (
              <button
                key={item.id}
                className={`gallery-cell ${hoveredId === item.id ? 'is-hovered' : ''}`}
                onClick={() => openLightbox(idx)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={`View ${item.label}`}
              >
                <div className="gallery-cell-img-wrap">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="gallery-cell-img"
                    loading="lazy"
                  />
                </div>
                <div className="gallery-cell-overlay">
                  <div className="gallery-overlay-inner">
                    <span className="overlay-category">
                      {PHOTO_FILTERS.find(f => f.key === item.cat)?.label}
                    </span>
                    <span className="overlay-label">{item.label}</span>
                    <span className="overlay-zoom">
                      <ZoomIn size={18} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          /* VIDEOS: ALL HORIZONTAL CARDS GRID */
          <div className="videos-horizontal-grid">
            {filteredVideos.map((video) => (
              <article
                key={video.id}
                className="video-horizontal-card"
                onClick={() => setActiveVideoModal(video)}
              >
                {/* WIDESCREEN 16:9 THUMBNAIL */}
                <div className="video-thumb-container">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="video-thumb-img"
                    loading="lazy"
                  />
                  <div className="video-play-overlay">
                    <div className="play-icon-glow">
                      <Play size={24} fill="#0B427E" stroke="none" />
                    </div>
                  </div>
                  <span className="video-duration-badge">{video.duration}</span>
                </div>

                {/* HORIZONTAL CARD METADATA */}
                <div className="video-card-meta">
                  <span className="video-cat-badge">{video.categoryLabel}</span>
                  <h3 className="video-card-title">{video.title}</h3>
                  <div className="video-watch-link">
                    <span>Watch Video</span>
                    <Play size={12} fill="currentColor" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* ── PHOTO LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredPhotos}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      {/* ── VIDEO PLAYER MODAL ── */}
      {activeVideoModal !== null && (
        <VideoModal
          video={activeVideoModal}
          onClose={() => setActiveVideoModal(null)}
        />
      )}
    </div>
  );
}
