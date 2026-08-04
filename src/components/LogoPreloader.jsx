import React, { useEffect, useState } from 'react';

export default function LogoPreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Smooth initial preloader timer
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1100);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`logo-preloader-overlay ${isFading ? 'is-fading-out' : ''}`}
      aria-label="Loading Pitts Modern School"
    >
      <div className="logo-preloader-content">
        <div className="logo-preloader-emblem-wrap">
          <div className="logo-preloader-ring-outer" />
          <div className="logo-preloader-ring-inner" />
          <img
            src="/image/logo.png"
            alt="Pitts Modern School Crest"
            className="logo-preloader-img"
          />
        </div>

        <div className="logo-preloader-text-group">
          <h2 className="logo-preloader-title">PITTS MODERN SCHOOL</h2>
          <p className="logo-preloader-tagline">GOMIA • ESTD 1967</p>
        </div>

        <div className="logo-preloader-progress-bar">
          <div className="logo-preloader-progress-fill" />
        </div>
      </div>
    </div>
  );
}
