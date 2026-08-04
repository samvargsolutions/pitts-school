import React from 'react';
import LearningJourneySection from './LearningJourneySection';

export default function AboutUsSection() {
  return (
    <div className="about-us-page-wrapper" aria-labelledby="about-history-heading">
      {/* 1. ABOUT US & FOUNDING HERITAGE NARRATIVE */}
      <section className="about-us-history-section" aria-labelledby="about-history-heading">
        <img
          className="about-motif about-motif-purple"
          src="/icons-illustrations/purple.webp"
          alt=""
          aria-hidden="true"
        />
        <img
          className="about-motif about-motif-triangle"
          src="/icons-illustrations/triangle.webp"
          alt=""
          aria-hidden="true"
        />

        <div className="about-us-history-inner">
          <div className="about-history-copy">
            <p className="editorial-overline">ESTABLISHED 1967 • GOMIA, BOKARO</p>

            <h2 id="about-history-heading">
              Sir Cyril Pitts &amp; The
              <span>Gomia School Story</span>
            </h2>

            <div className="about-history-prose">
              <p>
                <strong>Pitts Modern School</strong> was opened by{' '}
                <strong>Sir Cyril Pitts (1916–2014)</strong>, Chairman of Imperial Chemical
                Industries, Indian Operations (1964–1968). Sir Pitts was a British Industrialist
                born in the east of London in 1916; he spent most of his life in India and led
                Imperial Chemical Industries (ICI) on the subcontinent throughout the 1960s.
              </p>
              <p>
                He founded Pitts Modern School in <strong>GOMIA in 1967</strong> in the Bokaro
                district of the state of Jharkhand. Initially, the school was funded by ICI and
                was open to the children of all those who worked in the nearby ICI explosive plant,
                providing world-class learning in the industrial township.
              </p>
              <p>
                At present, the school is a self-financed independent organization under a
                registered society named <strong>Gomia School Society</strong>, with the{' '}
                <strong>Bishop of Chhotanagpur</strong> as its Chairman. The School is affiliated
                with CBSE from KG to Class XII and today gives education to more than{' '}
                <strong>2,200 students</strong> through English Medium.
              </p>
            </div>

            <div className="editorial-fact-grid">
              <div className="fact-item">
                <span className="fact-label">FOUNDED BY</span>
                <strong className="fact-value">Sir Cyril Pitts (1916–2014)</strong>
              </div>
              <div className="fact-item">
                <span className="fact-label">LOCATION</span>
                <strong className="fact-value">Gomia, Bokaro District</strong>
              </div>
              <div className="fact-item">
                <span className="fact-label">REGISTERED TRUST</span>
                <strong className="fact-value">Gomia School Society</strong>
              </div>
              <div className="fact-item">
                <span className="fact-label">ACADEMIC STANDARDS</span>
                <strong className="fact-value">CBSE • KG to Class XII</strong>
              </div>
            </div>
          </div>

          <div className="about-history-media">
            <div className="about-media-frame">
              <img
                src="/image/inv1.webp"
                alt="Pitts Modern School Campus Heritage"
                className="about-main-img"
              />
              <div className="about-media-badge-card">
                <img
                  src="/image/59yearslogo.webp"
                  alt="50+ Years Anniversary Emblem"
                  className="about-badge-emblem"
                />
                <div className="about-badge-text">
                  <strong>Celebrating 50+ Years</strong>
                  <span>Excellence in Education Since 1967</span>
                </div>
              </div>
            </div>

            <div className="editorial-pullquote">
              <p>
                &ldquo;Sir Cyril Pitts spent most of his life in India leading Imperial Chemical
                Industries, opening Pitts Modern School in Gomia in 1967 to provide world-class
                English-medium learning.&rdquo;
              </p>
              <span className="pullquote-attribution">— ARCHIVAL FOUNDATION RECORD, 1967</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SWISS EDITORIAL OUR LEARNING JOURNEY */}
      <LearningJourneySection />

      {/* 3. SCHOOL HISTORY, TRUST & SOCIETY GOVERNANCE DOSSIER (from read.txt) */}
      <section className="about-us-society-section" aria-labelledby="about-society-heading">
        <img
          className="about-motif about-motif-red"
          src="/icons-illustrations/red.webp"
          alt=""
          aria-hidden="true"
        />

        <div className="about-us-society-inner">
          <div className="about-society-header">
            <p className="editorial-overline">SOCIETY REGISTRY &amp; STATUTORY GOVERNANCE</p>
            <h2 id="about-society-heading">
              Gomia School Society
              <span>Statutory &amp; Leadership Registry</span>
            </h2>
            <p className="about-society-subtitle">
              Official registration credentials and governing board leadership as recorded under the
              Companies Act and State Registries.
            </p>
          </div>

          <div className="about-dossier-grid">
            {/* Left Box: Registered Society & Registration Validity */}
            <div className="dossier-card dossier-registry">
              <div className="dossier-card-top">
                <span className="editorial-sublabel">STATUTORY TRUST REGISTRATION</span>
                <h3>Gomia School Society</h3>
              </div>

              <p className="dossier-lead">
                Name of trust / Society / Company Registered under{' '}
                <strong>Section 25 of the Company Act, 1956</strong>. Period up to which
                Registration of trust / Society is valid:
              </p>

              <div className="dossier-details-list">
                <div className="dossier-detail-row">
                  <span className="detail-label">Society / Trust Name</span>
                  <strong className="detail-value text-navy">Gomia School Society</strong>
                </div>

                <div className="dossier-detail-row">
                  <span className="detail-label">Undivided Bihar Registration</span>
                  <strong className="detail-value">
                    38 / 67-68 <small>(Dated: 08-12-1967)</small>
                  </strong>
                </div>

                <div className="dossier-detail-row">
                  <span className="detail-label">Jharkhand State Registration</span>
                  <strong className="detail-value">
                    556 / 2006-07 <small>(Dated: 11-12-2006)</small>
                  </strong>
                </div>

                <div className="dossier-detail-row">
                  <span className="detail-label">Legal Framework</span>
                  <strong className="detail-value">Section 25, Company Act 1956</strong>
                </div>
              </div>

              <p className="dossier-footnote">
                Recorded under Section 25 of the Companies Act, 1956 • Self-financed autonomous educational society
              </p>
            </div>

            {/* Right Box: Official Address & Chairman Details */}
            <div className="dossier-card dossier-chairman">
              <div className="dossier-card-top">
                <span className="editorial-sublabel">LEGAL &amp; GOVERNING DIRECTORY</span>
                <h3>Official Address of Chairman</h3>
              </div>

              <div className="chairman-profile-header">
                <div>
                  <span className="editorial-sublabel">CHAIRMAN, GOMIA SCHOOL SOCIETY</span>
                  <h4>The Rt. Revd. B.B. Baskey</h4>
                  <p className="chairman-title">Bishop of Chhotanagpur</p>
                </div>
              </div>

              <div className="dossier-contact-grid">
                <div className="dossier-contact-item">
                  <span className="contact-meta-label">ADDRESS</span>
                  <div className="contact-meta-content">
                    <p>
                      Bishop of Chhotanagpur, Bishop&apos;s Lodge,<br />
                      Post Box. 1, Ranchi – 834001
                    </p>
                  </div>
                </div>

                <div className="dossier-contact-item">
                  <span className="contact-meta-label">EMAIL</span>
                  <div className="contact-meta-content">
                    <a href="mailto:rch_cndta@sanchar.net.in">rch_cndta@sanchar.net.in</a>
                  </div>
                </div>

                <div className="dossier-contact-item">
                  <span className="contact-meta-label">TELEPHONE</span>
                  <div className="contact-meta-content">
                    <a href="tel:06512351181">0651 - 2351181</a>
                  </div>
                </div>

                <div className="dossier-contact-item">
                  <span className="contact-meta-label">FAX NUMBER</span>
                  <div className="contact-meta-content">
                    <span>0651 - 2351184</span>
                  </div>
                </div>
              </div>

              <p className="dossier-footnote">
                Guiding Pitts Modern School with pastoral vision &amp; educational governance since registration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAMPUS GLIMPSE & EXPLORE FOOTER CTA */}
      <section className="about-us-gallery-section" aria-labelledby="about-gallery-heading">
        <div className="about-us-gallery-inner">
          <div className="about-gallery-header">
            <p className="editorial-overline">CAMPUS LIFE &amp; ARCHITECTURE</p>
            <h2 id="about-gallery-heading">
              Our Vibrant Campus
              <span>In Gomia, Bokaro</span>
            </h2>
          </div>

          <div className="about-gallery-grid">
            <div className="about-gallery-item">
              <img src="/image/IMG_2137.webp" alt="Academic Excellence in classrooms" />
              <div className="about-gallery-overlay">
                <span>Classroom Excellence</span>
                <p>Nurturing 2,200+ bright minds across English Medium CBSE standards</p>
              </div>
            </div>

            <div className="about-gallery-item">
              <img src="/image/IMG_2190.webp" alt="Campus life and sports infrastructure" />
              <div className="about-gallery-overlay">
                <span>Campus Infrastructure</span>
                <p>Spacious learning environments and green playgrounds in Gomia</p>
              </div>
            </div>

            <div className="about-gallery-item">
              <img src="/image/IMG_2203.webp" alt="Student achievements and assemblies" />
              <div className="about-gallery-overlay">
                <span>Cultural &amp; Ethical Growth</span>
                <p>Developing well-rounded global leaders with strong moral roots</p>
              </div>
            </div>

            <div className="about-gallery-item">
              <img src="/image/IMG_2285.webp" alt="Pitts Modern School community" />
              <div className="about-gallery-overlay">
                <span>Our Enduring Legacy</span>
                <p>Continuing the vision of Sir Cyril Pitts from 1967 into the future</p>
              </div>
            </div>
          </div>

          <div className="about-explore-cta">
            <div className="about-cta-text">
              <h3>Ready to Join the Pitts Modern School Community?</h3>
              <p>Explore our academic admissions or view our latest board examination toppers.</p>
            </div>
            <div className="about-cta-buttons">
              <a href="/" className="about-cta-btn btn-primary">
                Explore Homepage
              </a>
              <a href="/results" className="about-cta-btn btn-outline">
              View Results That Make Us Proud
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
