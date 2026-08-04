import React from 'react';
import { Quote, Compass, Target } from 'lucide-react';

export default function PrincipalDeskSection() {
  return (
    <div className="principal-page-root">
      {/* THREE-PANEL COMPACT SWISS LAYOUT (FITS VIEWPORT WITHOUT SCROLLING) */}
      <section className="principal-layout-container compact-fit">
        {/* LEFT PANEL: MAIN CONTENT */}
        <div className="principal-left-content">
          <div className="principal-header-box">
            <span className="principal-kicker">MESSAGE FROM THE PRINCIPAL</span>
            <h2 className="principal-main-title">FROM THE PRINCIPAL’S DESK</h2>
          </div>

          {/* QUOTE CARD */}
          <div className="principal-quote-box">
            <Quote className="quote-icon" size={20} />
            <blockquote className="principal-quote-text">
              “The goal of Education is the advancement of knowledge and the dissemination of truth”
              <cite>~ John F. Kennedy</cite>
            </blockquote>
          </div>

          {/* BODY PARAGRAPHS - COMPACT TYPOGRAPHY */}
          <div className="principal-body-text">
            <p>
              Education transmits the light of life in our ambience. At Pitts Modern School, we aim at the integral development of each student, honing every aspect of a child's personality to nurture happy, well-equipped human beings.
            </p>

            <p>
              Set out on an enriching journey since 1967, we provide an exclusive learning experience—teaching children to march ahead with positive attitude, confidence, sensitivity, and responsibility. Today, our school stands as a premier institution in Jharkhand with high standards in academia, sports, discipline, and co-curricular fields.
            </p>

            <p>
              We sprinkle an atmosphere where each child receives love, dignity, and acceptance. Blending modern and traditional approaches, students learn through exploration and experimentation with exemplary campus infrastructure.
            </p>
          </div>

          {/* MOTTO HIGHLIGHT BOX */}
          <div className="principal-motto-card">
            <p>
              <strong>“Asato ma sadh gamaya, Tamso ma jyotir gamaya”</strong> — inspiring our children throughout life.
            </p>
          </div>

          {/* SIGNATURE SECTION AT BOTTOM */}
          <div className="principal-signature-block">
            <div className="signature-cursive">Brij Mohan Lal Das</div>
            <h3 className="signature-name">MR. BRIJ MOHAN LAL DAS</h3>
            <p className="signature-title">Principal, Pitts Modern School, Gomia</p>
          </div>
        </div>

        {/* MIDDLE PANEL: DARK NAVY SLANTED VISION & MISSION BANNER */}
        <div className="principal-middle-banner">
          <div className="middle-banner-inner">
            <div className="vision-mission-item">
              <span className="vm-tag">
                <Compass size={15} /> OUR VISION
              </span>
              <p className="vm-desc">
                To nurture confident individuals with strong values, critical thinking, and a spirit to serve society.
              </p>
            </div>

            <div className="vm-divider"></div>

            <div className="vision-mission-item">
              <span className="vm-tag">
                <Target size={15} /> OUR MISSION
              </span>
              <p className="vm-desc">
                To deliver quality education through innovation, discipline, and holistic development for a dynamic world.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: PRINCIPAL PHOTO FROM /image/principal.jpg */}
        <div className="principal-right-media">
          <div className="principal-photo-wrapper">
            <img
              src="/image/principal.jpg"
              alt="Mr. Brij Mohan Lal Das - Principal, Pitts Modern School"
              className="principal-hero-photo"
            />
            
            {/* NAMEPLATE BADGE AT BOTTOM OF PHOTO */}
            <div className="principal-nameplate-badge">
              <div className="nameplate-inner">
                <span className="np-name">MR. BRIJ MOHAN LAL DAS</span>
                <span className="np-title">PRINCIPAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
