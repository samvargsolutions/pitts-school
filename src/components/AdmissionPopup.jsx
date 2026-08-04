import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has opted to hide the popup
    const hidePopup = localStorage.getItem('hideAdmissionPopup') === 'true';
    if (!hidePopup) {
      // Open after a small delay for premium feel
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDontShowAgain = (e) => {
    e.preventDefault();
    localStorage.setItem('hideAdmissionPopup', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-modal-overlay" onClick={handleClose}>
      <div className="popup-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* CLOSE BUTTON */}
        <button 
          className="popup-close-btn" 
          onClick={handleClose} 
          aria-label="Close Announcement"
        >
          <X size={20} />
        </button>

        {/* POPUP TITLE (IMAGE 2 STYLE) */}
        <div className="popup-header">
          <h2>Admissions Open!</h2>
          <p className="popup-sub">
            Discover how Pitts Modern School designs success for your child’s future.
          </p>
        </div>

        {/* IMAGE BANNER */}
        <div className="popup-image-container">
          <img 
            src="/image/admission_popup.png" 
            alt="Pitts Modern School Admissions 2026-2027" 
            className="popup-hero-img" 
          />
        </div>

        {/* MAIN CTA BUTTON (GREEN/BLUE PREMIUM) */}
        <div className="popup-action-area">
          <a 
            href="/news/admission-classes-xi-2026-27" 
            className="popup-cta-btn"
          >
            <span>APPLY ONLINE NOW</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* DONT SHOW AGAIN LINK */}
        <div className="popup-footer">
          <button onClick={handleDontShowAgain} className="dont-show-link">
            Don't Show Again
          </button>
        </div>
      </div>
    </div>
  );
}
