import React from 'react';
import { ChevronRight, Facebook, Globe2, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { routeLinks, useSiteContent } from '../context/siteContent';

export default function FooterLinked() {
  const siteContent = useSiteContent();
  const primaryLinks = siteContent.footer.primaryLinks || [];
  const secondaryLinks = siteContent.footer.secondaryLinks || [];

  return (
    <footer className="site-footer" aria-labelledby="site-footer-title">
      <div className="footer-bg-watermark" aria-hidden="true" />
      <div className="site-footer-inner">
        <section className="site-footer-brand" aria-labelledby="site-footer-title">
          <a className="site-footer-logo-link" href={routeLinks.home} aria-label="Pitts Modern School home">
            <img src="/image/logo.webp" alt="Pitts Modern School Logo" />
            <span id="site-footer-title">Pitts Modern School<small>I.E.P.L Gomia</small></span>
          </a>
          <p>Opened by Sir Cyril Pitts, Pitts Modern School continues its purpose of opportunity, service and English-medium education in Gomia.</p>
          <div className="site-footer-social" aria-label="Social links">
            <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook size={15} /></a>
            <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={15} /></a>
            <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><Youtube size={15} /></a>
          </div>
        </section>

        <nav className="site-footer-links" aria-label="Useful links">
          <h2>Useful Links</h2>
          <ul>{primaryLinks.map(([label, href]) => <li key={label}><a href={href}><ChevronRight size={13} aria-hidden="true" />{label}</a></li>)}</ul>
        </nav>

        <nav className="site-footer-links" aria-label="School links">
          <h2>Explore</h2>
          <ul>{secondaryLinks.map(([label, href]) => <li key={label}><a href={href}><ChevronRight size={13} aria-hidden="true" />{label}</a></li>)}</ul>
        </nav>

        <section className="site-footer-contact" aria-labelledby="site-footer-contact-title">
          <h2 id="site-footer-contact-title">Contact Us</h2>
          <address>
            <a href="https://maps.google.com/?q=Pitts+Modern+School+Gomia" target="_blank" rel="noopener noreferrer" className="site-footer-contact-item">
              <MapPin size={15} aria-hidden="true" />
              <span><strong>Address</strong>Pitts Modern School, Gomia, Bokaro, Jharkhand - 829112</span>
            </a>
            <a href="tel:+916544261595" className="site-footer-contact-item">
              <Phone size={15} aria-hidden="true" />
              <span><strong>Phone</strong>06544 261595 / 8797304017</span>
            </a>
            <a href="https://www.pittsgomia.in" target="_blank" rel="noopener noreferrer" className="site-footer-contact-item">
              <Globe2 size={15} aria-hidden="true" />
              <span><strong>Web</strong>www.pittsgomia.in</span>
            </a>
            <a href="mailto:pms.principal2024@gmail.com" className="site-footer-contact-item">
              <Mail size={15} aria-hidden="true" />
              <span><strong>Email</strong>pms.principal2024@gmail.com</span>
            </a>
          </address>
        </section>
      </div>

      <div className="site-footer-bottom">
        <div className="site-footer-bottom-inner">
          <p>© 2026 Pitts Modern School, Gomia. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href={routeLinks.privacy}>Privacy Policy</a>
            <span className="footer-link-dot">•</span>
            <a href={routeLinks.admin}>Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
