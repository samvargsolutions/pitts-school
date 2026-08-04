import React, { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { normalizeAssetUrl, normalizeLinkUrl, useSiteContent } from '../context/siteContent';

export default function AdmissionPopupModular() {
  const { popup } = useSiteContent();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!popup.enabled) return undefined;
    const hidePopup = localStorage.getItem('hideAdmissionPopup') === 'true';
    if (!hidePopup) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [popup.enabled]);

  const handleDontShowAgain = (event) => {
    event.preventDefault();
    localStorage.setItem('hideAdmissionPopup', 'true');
    setIsOpen(false);
  };

  if (!isOpen || !popup.enabled) return null;

  const popupLinks = popup.linksEnabled !== false && Array.isArray(popup.links) ? popup.links : [];
  const rawImage = popup.image && popup.image !== 'none' && popup.image !== 'false' ? popup.image : '/image/admission_popup.webp';
  const heroImage = normalizeAssetUrl(rawImage) || '/image/admission_popup.webp';

  return (
    <div className="popup-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="popup-modal-content" onClick={(event) => event.stopPropagation()}>
        <button className="popup-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Announcement"><X size={20} /></button>
        <div className="popup-header">
          <h2>{popup.title}</h2>
          {popup.subtitle && <p className="popup-sub">{popup.subtitle}</p>}
        </div>

        {heroImage && (
          <div className="popup-image-container">
            <img
              src={heroImage}
              alt={popup.title || 'Pitts Modern School Announcement'}
              className="popup-hero-img"
              onError={(event) => {
                event.currentTarget.src = '/image/admission_popup.webp';
              }}
            />
          </div>
        )}

        {popup.body && <div className="popup-body-copy">{popup.body}</div>}

        {popupLinks.length > 0 && (
          <div className="popup-links-list" aria-label="Important popup links">
            {popupLinks.map((item, index) => (
              <a className="popup-link-item" href={normalizeLinkUrl(item.href, '#')} key={`${item.label}-${index}`}>
                <span>{item.label}</span>
                {item.note && <small>{item.note}</small>}
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}

        {popup.ctaLabel && (
          <div className="popup-action-area">
            <a href={normalizeLinkUrl(popup.ctaHref, '#')} className="popup-cta-btn">
              <span>{popup.ctaLabel}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        )}

        <div className="popup-footer">
          <button onClick={handleDontShowAgain} className="dont-show-link">Don't Show Again</button>
        </div>
      </div>
    </div>
  );
}
