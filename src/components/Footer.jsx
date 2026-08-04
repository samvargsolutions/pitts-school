import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Globe2, Mail, ChevronRight } from 'lucide-react';

const primaryLinks = [
  ['Home', '/'],
  ['About Us', '/about-us'],
  ['Our Management', '/management'],
  ["Principal's Desk", '/principal'],
  ['Primary Faculty Details', '/faculty/primary'],
  ['Senior Faculty Details', '/faculty/senior'],
  ['Alumni Portal', '/alumni'],
  ['News and Event', '/events'],
];

const secondaryLinks = [
  ['Result', '/results'],
  ['Gallery', '/gallery'],
  ['Contact Us', '/contact'],
  ['Admission', '/news/admission-classes-xi-2026-27'],
  ['School Rules', '/school-rules'],
  ['Holiday Assignments', '/holiday-assignments'],
];

export default function Footer() {
  return (
    <footer className="site-footer" aria-labelledby="site-footer-title">
      <img className="site-footer-motif site-footer-motif-red" src="/icons-illustrations/red.png" alt="" aria-hidden="true" />
      <img className="site-footer-motif site-footer-motif-green" src="/icons-illustrations/green-leafs.png" alt="" aria-hidden="true" />
      <div className="site-footer-inner">
        <section className="site-footer-brand" aria-labelledby="site-footer-title">
          <a className="site-footer-logo-link" href="/" aria-label="Pitts Modern School home">
            <img src="/image/logo.png" alt="" />
            <span id="site-footer-title">
              Pitts Modern School
              <small>I.E.P.L Gomia</small>
            </span>
          </a>
          <p>
            Opened by Sir Cyril Pitts, Pitts Modern School continues its purpose
            of opportunity, service and English-medium education in Gomia.
          </p>
          <div className="site-footer-social" aria-label="Social links">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.youtube.com/" aria-label="YouTube">
              <Youtube size={18} />
            </a>
          </div>
        </section>

        <nav className="site-footer-links" aria-label="Useful links">
          <h2>Useful Links</h2>
          <ul>
            {primaryLinks.map(([label, href]) => (
              <li key={label}>
                <a href={href}>
                  <ChevronRight size={16} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer-links" aria-label="School links">
          <h2>Explore</h2>
          <ul>
            {secondaryLinks.map(([label, href]) => (
              <li key={label}>
                <a href={href}>
                  <ChevronRight size={16} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="site-footer-contact" aria-labelledby="site-footer-contact-title">
          <h2 id="site-footer-contact-title">Contact Us</h2>
          <address>
            <a href="https://maps.google.com/?q=Pitts+Modern+School+Gomia" className="site-footer-contact-item">
              <MapPin size={20} aria-hidden="true" />
              <span>
                <strong>Address</strong>
                Pitts Modern School, Gomia P.O.-I.E. Gomia, Bokaro, Jharkhand, PIN-829112
              </span>
            </a>
            <a href="tel:+916544261595" className="site-footer-contact-item">
              <Phone size={20} aria-hidden="true" />
              <span>
                <strong>Phone</strong>
                06544 261595 / 8797304017
              </span>
            </a>
            <a href="https://www.pittsgomia.in" className="site-footer-contact-item">
              <Globe2 size={20} aria-hidden="true" />
              <span>
                <strong>Web</strong>
                www.pittsgomia.in
              </span>
            </a>
            <a href="mailto:pms.principal2024@gmail.com" className="site-footer-contact-item">
              <Mail size={20} aria-hidden="true" />
              <span>
                <strong>Email</strong>
                pms.principal2024@gmail.com
              </span>
            </a>
          </address>
        </section>
      </div>

      <div className="site-footer-bottom">
        <p>© 2026 Pitts Modern School, Gomia. All rights reserved.</p>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}
