import React, { useState, useEffect } from 'react';

const highlights = [
  {
    title: 'Registration-cum-Final Admission for classes XI (2026-27) is now open',
    image: '/image/655235611_122278627622192910_6813982125465658890_n.webp',
    href: '/news/admission-classes-xi-2026-27',
    imagePosition: 'center',
  },
  {
    title: 'Students shine through culture, creativity and confident stage performances',
    image: '/image/dc13.webp',
    href: '/news/culture-creativity-stage-performances',
    imagePosition: 'center 28%',
  },
  {
    title: 'Hands-on learning activities help children build healthy daily habits',
    image: '/image/459679975_122182238516192910_2352708045737928534_n.webp',
    href: '/news/hands-on-learning-healthy-habits',
    imagePosition: 'center',
  },
  {
    title: 'Sports week celebrates teamwork, house spirit and growing confidence',
    image: '/image/basketball2.webp',
    href: '/news/sports-week-teamwork-confidence',
    imagePosition: 'center',
  },
  {
    title: 'Grandparents Day brings families, stories and joyful memories together',
    image: '/image/657051011_122278442678192910_4830634205277214454_n.webp',
    href: '/news/grandparents-day-joyful-memories',
    imagePosition: 'center',
  },
];

const upcomingEvents = [
  {
    month: 'Jun',
    day: '16',
    weekday: 'Mon',
    title: 'Orientation for New Students & Parents',
    type: 'Admission',
    time: '09:30 AM - 12:00 PM',
  },
  {
    month: 'Jun',
    day: '20',
    weekday: 'Fri',
    title: 'Inter-House Swimming Championship 2026',
    type: 'Sports',
    time: '09:00 AM - 01:00 PM',
  },
  {
    month: 'Jun',
    day: '26',
    weekday: 'Thu',
    title: 'Scholarship Test for Classes VI-IX',
    type: 'Academics',
    time: '10:00 AM - 01:00 PM',
  },
];

const noticeItems = [
  {
    day: '16',
    month: 'Jun',
    label: 'Admission',
    title: 'Registration-cum-Final Admission for Class XI Session 2026-27',
    href: '/news/admission-classes-xi-2026-27',
  },
  {
    day: '16',
    month: 'Apr',
    label: 'Scholarship',
    title: 'Scholarship details for Classes VI to IX Session 2026-27',
    href: '/notices/scholarship-test-details',
  },
  {
    day: '09',
    month: 'Apr',
    label: 'Academics',
    title: 'Book list for the Session 2026-2027',
    href: '/notices/book-list-2026-2027',
  },
];

const newsletterItems = [
  {
    title: 'SSE result 2026 : Our school toppers',
    image: '/image/655235611_122278627622192910_6813982125465658890_n.webp',
    href: '/newsletter/sse-result-2026',
  },
  {
    title: 'Cultural performances bring colour and confidence to campus',
    image: '/image/dc13.webp',
    href: '/newsletter/cultural-performances',
  },
  {
    title: 'Students celebrate service, creativity and school spirit',
    image: '/image/657051011_122278442678192910_4830634205277214454_n.webp',
    href: '/newsletter/school-spirit',
  },
];

export default function LatestHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = highlights.length;
  const newsletterLoop = [...newsletterItems, ...newsletterItems];

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % total);
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  return (
    <section
      id="latest-highlights"
      className="latest-highlights-section"
      aria-labelledby="whats-new-title"
    >
      <img className="latest-motif latest-motif-gate" src="/icons-illustrations/bluegate.webp" alt="" aria-hidden="true" />
      <img className="latest-motif latest-motif-drop" src="/icons-illustrations/red-drop.webp" alt="" aria-hidden="true" />
      <img className="latest-motif latest-motif-red" src="/icons-illustrations/red.webp" alt="" aria-hidden="true" />

      <div className="whats-happening-shell">
        <header className="whats-new-header">
          <h2 id="whats-new-title">
            What&apos;s Happening
            <span>At Pitts.</span>
          </h2>
          <a className="whats-new-all-link" href="/news">
            View All Updates
          </a>
        </header>
      </div>

      <div
        className="latest-highlights-inner"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div className="latest-image-column" aria-hidden="true">
          <div className="latest-image-deck">
            {highlights.map((item, index) => {
              const depth = (index - activeIndex + total) % total;

              return (
                <figure
                  className="latest-image-card"
                  key={item.title}
                  style={{
                    '--deck-depth': depth,
                    zIndex: total - depth,
                  }}
                  onMouseEnter={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                  }}
                  onClick={() => {
                    window.location.href = item.href;
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    style={{ objectPosition: item.imagePosition }}
                  />
                </figure>
              );
            })}
          </div>
        </div>

        <div className="latest-content">
          <header className="latest-heading">
            <img src="/image/logo.webp" alt="" className="latest-heading-emblem" />
            <div>
              <p>THE LATEST</p>
              <h2 id="latest-highlights-title">HIGHLIGHTS</h2>
            </div>
          </header>

          <nav className="latest-headline-list" aria-label="Latest school highlights">
            {highlights.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <a
                  className="latest-headline-link"
                  href={item.href}
                  key={item.title}
                  aria-current={isActive ? 'true' : undefined}
                  data-active={isActive ? 'true' : 'false'}
                  data-paused={isPaused ? 'true' : 'false'}
                  onMouseEnter={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                  }}
                  onFocus={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                  }}
                  onPointerDown={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                  }}
                >
                  <span>{item.title}</span>
                  {isActive && (
                    <span className="latest-headline-progress" aria-hidden="true" />
                  )}
                </a>
              );
            })}
          </nav>

          <a className="latest-news-button" href="/news">
            VIEW ALL NEWS
          </a>
        </div>
      </div>

      <div className="latest-support-grid" aria-label="Pitts Modern School updates">
        <article className="latest-support-card latest-events-card">
          <img className="latest-card-graphic latest-card-graphic-events" src="/icons-illustrations/purple.webp" alt="" aria-hidden="true" />
          <div className="latest-card-head">
            <img className="latest-card-icon latest-card-icon-events" src="/icons-illustrations/triangle.webp" alt="" aria-hidden="true" />
            <h3>Upcoming Events</h3>
            <a href="/events">View Calendar</a>
          </div>
          <div className="latest-events-list">
            {upcomingEvents.map((event) => (
              <a className="latest-event-item" href="/events" key={`${event.month}-${event.day}-${event.title}`}>
                <span className="latest-event-date">
                  <small>{event.month}</small>
                  <strong>{event.day}</strong>
                  <small>{event.weekday}</small>
                </span>
                <span className="latest-event-copy">
                  <strong>{event.title}</strong>
                  <em>{event.type}</em>
                  <small>{event.time}</small>
                </span>
              </a>
            ))}
          </div>
          <a className="latest-outline-button" href="/events">View Full Calendar</a>
        </article>

        <article className="latest-support-card latest-notice-card">
          <img className="latest-card-graphic latest-card-graphic-notice" src="/icons-illustrations/red.webp" alt="" aria-hidden="true" />
          <div className="latest-card-head">
            <img className="latest-card-icon latest-card-icon-notice" src="/icons-illustrations/yellow-stairs.webp" alt="" aria-hidden="true" />
            <h3>Notice Board</h3>
            <a href="/notices">View All Notices</a>
          </div>
          <div className="latest-notice-list">
            {noticeItems.map((notice) => (
              <a className="latest-notice-item" href={notice.href} key={notice.title}>
                <span className="latest-notice-date">
                  <strong>{notice.day}</strong>
                  <small>{notice.month}</small>
                </span>
                <span className="latest-notice-copy">
                  <em>{notice.label}</em>
                  <strong>{notice.title}</strong>
                  <small>Click here for details</small>
                </span>
              </a>
            ))}
          </div>
          <a className="latest-text-button" href="/notices">View All Notices</a>
        </article>

        <article className="latest-support-card latest-newsletter-card">
          <img className="latest-card-graphic latest-card-graphic-newsletter" src="/icons-illustrations/red-drop.webp" alt="" aria-hidden="true" />
          <div className="latest-card-head">
            <img className="latest-card-icon latest-card-icon-newsletter" src="/icons-illustrations/bluegate.webp" alt="" aria-hidden="true" />
            <h3>Pitts Newsletter</h3>
            <a href="/newsletter">View Archive</a>
          </div>
          <div className="latest-newsletter-feature">
            <div className="latest-newsletter-track" aria-label="Latest newsletter items">
              {newsletterLoop.map((item, index) => (
                <a
                  className="latest-newsletter-slide"
                  href={item.href}
                  key={`${item.title}-${index}`}
                  aria-hidden={index >= newsletterItems.length ? 'true' : undefined}
                  tabIndex={index >= newsletterItems.length ? -1 : undefined}
                >
                  <span className="latest-newsletter-cover">
                    <img src={item.image} alt="" />
                  </span>
                  <strong>{item.title}</strong>
                  <span>View Newsletter</span>
                </a>
              ))}
            </div>
          </div>
          <a className="latest-subscribe-strip" href="/newsletter/subscribe">
            <img src="/icons-illustrations/green-leafs.webp" alt="" aria-hidden="true" />
            <span>Achievements, milestones and stories featuring Pitts.</span>
          </a>
        </article>
      </div>
    </section>
  );
}
