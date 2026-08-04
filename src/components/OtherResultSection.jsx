import React from 'react';

export default function OtherResultSection() {
  return (
    <div className="results-page-watermark-wrapper">
      {/* Standalone Header */}
      <div className="page-nav-top-bar results-page-content-z">
        <div className="page-nav-top-inner">
          <span className="editorial-overline">COMPETITIVE &amp; SCHOLASTIC EXAMS</span>
          <h1 className="page-standalone-title">Other Examination Results</h1>
        </div>
      </div>

      <section className="no-data-main-section results-page-content-z">
        <div className="no-data-card-box">
          <span className="no-data-overline">OFFICIAL NOTICE</span>
          <h2 className="no-data-title">NO DATA AVAILABLE</h2>
          <p className="no-data-subtitle">
            No competitive examination or Olympiad results have been published for this section yet. Please check back later.
          </p>
        </div>
      </section>
    </div>
  );
}
