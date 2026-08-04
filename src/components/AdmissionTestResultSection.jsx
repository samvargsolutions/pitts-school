import React from 'react';

export default function AdmissionTestResultSection() {
  return (
    <div className="results-page-watermark-wrapper">
      {/* Standalone Header */}
      <div className="page-nav-top-bar results-page-content-z">
        <div className="page-nav-top-inner">
          <span className="editorial-overline">SESSION 2026–27 ADMISSION TEST</span>
          <h1 className="page-standalone-title">Admission Test Results</h1>
        </div>
      </div>

      <section className="no-data-main-section results-page-content-z">
        <div className="no-data-card-box">
          <span className="no-data-overline">OFFICIAL NOTICE</span>
          <h2 className="no-data-title">NO DATA AVAILABLE</h2>
          <p className="no-data-subtitle">
            No admission test results or merit lists have been published for this section yet. Please check back later.
          </p>
        </div>
      </section>
    </div>
  );
}
