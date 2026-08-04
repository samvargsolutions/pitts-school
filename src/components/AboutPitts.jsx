import React from 'react';

export default function AboutPitts() {
  return (
    <section id="about-pitts" className="about-pitts-section" aria-labelledby="about-pitts-title">
      <div className="about-pitts-watermark" aria-hidden="true" />
      <div className="about-pitts-inner">
        <div className="about-pitts-media">
          <figure className="about-pitts-main-photo">
            <img src="/image/inv1.jpg" alt="Pitts Modern School students and faculty" />
          </figure>
          <figure className="about-pitts-inset-photo">
            <img src="/image/655235611_122278627622192910_6813982125465658890_n.jpg" alt="Pitts Modern School leadership meeting" />
          </figure>
        </div>

        <div className="about-pitts-copy">
          <p className="about-pitts-kicker">About Us</p>
          <h2 id="about-pitts-title">
            Nurturing Learners
            <span>Since 1967</span>
          </h2>
          <p>
            Founded in 1967 by Sir Cyril Pitts, Pitts Modern School began as a
            place of opportunity for the children of families working around the
            ICI explosives plant in Gomia. Today, the school continues that
            purpose as an independent, self-financed institution under Gomia
            School Society.
          </p>
          <p>
            Affiliated with CBSE and teaching through English medium, Pitts
            Modern School supports more than 2200 students with a complete
            learning journey from <strong>KG to Class XII</strong>.
          </p>
          <div style={{ marginTop: '1.8rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a
              href="/about-us"
              className="about-pitts-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.9rem 1.8rem',
                borderRadius: '12px',
                background: '#071f45',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 12px 28px rgba(7, 31, 69, 0.22)'
              }}
            >
              <span>Explore Full School History &amp; Vision</span>
              <span aria-hidden="true">&rarr;</span>
            </a>

            <a
              href="/infrastructure"
              className="about-pitts-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.9rem 1.8rem',
                borderRadius: '12px',
                background: '#930018',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 12px 28px rgba(147, 0, 24, 0.22)'
              }}
            >
              <span>View Campus Infrastructure &amp; Labs</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
