import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  UserCheck,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

// Swiss Modular Geometric SVG Motif Component on Hover
function SwissMotifInBody({ type, color = '#ffc72c', isHovered }) {
  return (
    <svg
      className={`swiss-motif-in-body ${isHovered ? 'active' : ''}`}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {type === 2 ? (
        <>
          <path d="M0 70L70 0V70H0Z" fill={color} className="m-tile m-1" />
          <path d="M0 0H70L0 70V0Z" fill={color} className="m-tile m-1-b" />
          <path d="M70 70L140 0V70H70Z" fill={color} className="m-tile m-2" />
          <path d="M70 0H140L70 70V0Z" fill={color} className="m-tile m-2-b" />
          <path d="M0 140L70 70V140H0Z" fill={color} className="m-tile m-3" />
          <path d="M70 140L140 70V140H70Z" fill={color} className="m-tile m-4" />
        </>
      ) : type === 3 ? (
        <>
          <rect x="0" y="0" width="70" height="70" fill={color} className="m-tile m-1" />
          <path d="M70 0L140 70H70V0Z" fill={color} className="m-tile m-2" />
          <path d="M0 70L70 140V70H0Z" fill={color} className="m-tile m-3" />
          <rect x="70" y="70" width="70" height="70" fill={color} className="m-tile m-4" />
        </>
      ) : (
        <>
          <path d="M0 0L70 70H0V0Z" fill={color} className="m-tile m-1" />
          <path d="M70 0L140 70H70V0Z" fill={color} className="m-tile m-2" />
          <path d="M0 70L70 140H0V70Z" fill={color} className="m-tile m-3" />
          <path d="M70 70L140 140H70V70Z" fill={color} className="m-tile m-4" />
        </>
      )}
    </svg>
  );
}

export default function ContactSection() {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactCardsData = [
    {
      id: 'cc-address',
      kicker: 'CAMPUS POSTAL ADDRESS',
      title: 'PITTS MODERN SCHOOL, GOMIA',
      subtitle: 'P.O: I.E. GOMIA, BOKARO, JHARKHAND - 829112',
      badge: 'BOKARO REGION',
      bgColor: '#0B427E',
      motifType: 1,
      actionType: 'address',
      actionText: 'Open in Google Maps',
      actionUrl: 'https://www.google.com/maps/place/Pitts+Modern+School/@23.819542,85.8208021,17z/data=!3m1!4b1!4m6!3m5!1s0x39f46ec61479dbff:0xe0917a9518511b13!8m2!3d23.819542!4d85.823377!16s%2Fm%2F02pnwwp'
    },
    {
      id: 'cc-email',
      kicker: 'PRINCIPAL OFFICE EMAIL',
      title: 'pms.principal2024@gmail.com',
      subtitle: 'Official desk for academic admissions & administrative correspondence.',
      badge: 'EMAIL DESK',
      bgColor: '#075cff',
      motifType: 2,
      actionType: 'email',
      actionText: 'Send Email',
      actionUrl: 'mailto:pms.principal2024@gmail.com',
      copyValue: 'pms.principal2024@gmail.com'
    },
    {
      id: 'cc-officers',
      kicker: 'KEY OFFICE OFFICERS',
      title: 'Office Assistants & Principal Desk',
      subtitle: 'Mr. V. D. Pandey (Office Assistant): 8409033950 | Mr. S. Nandi (P.A to Principal): 9430374706',
      badge: 'DIRECT CONTACTS',
      bgColor: '#009951',
      motifType: 3,
      actionType: 'officers',
      officers: [
        { name: 'Mr. V. D. Pandey (Office Assistant)', phone: '8409033950' },
        { name: 'Mr. S. Nandi (P.A to Principal)', phone: '9430374706' }
      ]
    },
    {
      id: 'cc-phone',
      kicker: 'DIRECT LANDLINE & HELPLINES',
      title: '06544-261595 / 8797304017',
      subtitle: 'School Reception & Student Information Help Desk.',
      badge: 'HELP DESK',
      bgColor: '#930018',
      motifType: 1,
      actionType: 'phones',
      phones: [
        { label: 'Landline', num: '06544-261595', tel: '06544261595' },
        { label: 'Mobile Helpline', num: '8797304017', tel: '8797304017' }
      ]
    },
    {
      id: 'cc-website',
      kicker: 'OFFICIAL WEB PORTAL',
      title: 'https://pittsgomia.org',
      subtitle: 'Official web portal of Gomia School Society & Pitts Modern School.',
      badge: 'WEB PORTAL',
      bgColor: '#0B427E',
      motifType: 2,
      actionType: 'website',
      actionText: 'Visit Website',
      actionUrl: 'https://pittsgomia.org'
    }
  ];

  return (
    <div className="contact-page-wrapper results-page-watermark-wrapper">
      {/* Top Standalone Bar */}
      <div className="page-nav-top-bar results-page-content-z">
        <div className="page-nav-top-inner">
          <span className="editorial-overline">OFFICIAL CAMPUS DIRECTORY &amp; LOCATION</span>
          <h1 className="page-standalone-title">Contact Pitts Modern School</h1>
        </div>
      </div>

      {/* FULL WIDTH GOOGLE MAP EMBED */}
      <section className="contact-map-section results-page-content-z">
        <div className="map-frame-container">
          <iframe
            title="Pitts Modern School Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.882194689035!2d85.8208021!3d23.819542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f46ec61479dbff%3A0xe0917a9518511b13!2sPitts%20Modern%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="map-badge-overlay">
            <MapPin size={18} className="text-[#ffc72c]" />
            <div>
              <strong>Pitts Modern School, Gomia</strong>
              <span>P.O: I.E. Gomia, Bokaro, Jharkhand - 829112</span>
            </div>
            <a
              href="https://www.google.com/maps/place/Pitts+Modern+School/@23.819542,85.8208021,17z/data=!3m1!4b1!4m6!3m5!1s0x39f46ec61479dbff:0xe0917a9518511b13!8m2!3d23.819542!4d85.823377!16s%2Fm%2F02pnwwp"
              target="_blank"
              rel="noopener noreferrer"
              className="map-directions-link"
            >
              <span>Get Directions</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* SWISS EDITORIAL CONTACT CARDS GRID */}
      <section className="contact-main-section results-page-content-z">
        <div className="contact-main-inner">
          <div className="contact-editorial-header">
            <span className="editorial-overline">INTERACTIVE CAMPUS DIRECTORY</span>
            <h2 className="contact-editorial-title">Official Contact Directory</h2>
          </div>

          <div className="contact-swiss-cards-grid">
            {contactCardsData.map((card) => {
              const isHovered = hoveredCardId === card.id;

              return (
                <article
                  key={card.id}
                  className={`contact-card-swiss ${isHovered ? 'is-hovered' : ''}`}
                  style={{ '--card-hover-bg': card.bgColor }}
                  onMouseEnter={() => setHoveredCardId(card.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                >
                  <div className="contact-card-header">
                    <span className="contact-kicker">{card.kicker}</span>
                    <span className="contact-badge">{card.badge}</span>
                  </div>

                  <div className="contact-card-body">
                    <div className="card-body-motif-container">
                      <SwissMotifInBody
                        type={card.motifType}
                        color="#ffc72c"
                        isHovered={isHovered}
                      />
                    </div>

                    <h3 className="contact-title">{card.title}</h3>
                    <p className="contact-subtitle">{card.subtitle}</p>

                    {/* Interactive Action Area */}
                    <div className="contact-card-actions">
                      {card.actionType === 'address' && (
                        <a
                          href={card.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-action-btn"
                        >
                          <MapPin size={14} />
                          <span>{card.actionText}</span>
                        </a>
                      )}

                      {card.actionType === 'email' && (
                        <div className="action-buttons-group">
                          <a href={card.actionUrl} className="contact-action-btn">
                            <Mail size={14} />
                            <span>{card.actionText}</span>
                          </a>
                          <button
                            onClick={() => handleCopy(card.copyValue, 'email')}
                            className="contact-action-btn secondary-btn"
                          >
                            {copiedField === 'email' ? <Check size={14} /> : <Copy size={14} />}
                            <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                      )}

                      {card.actionType === 'officers' && (
                        <div className="officers-actions-grid">
                          {card.officers.map((off, idx) => (
                            <a
                              key={idx}
                              href={`tel:${off.phone}`}
                              className="contact-action-btn"
                            >
                              <UserCheck size={14} />
                              <span>{off.name}: {off.phone}</span>
                            </a>
                          ))}
                        </div>
                      )}

                      {card.actionType === 'phones' && (
                        <div className="phones-actions-grid">
                          {card.phones.map((ph, idx) => (
                            <a
                              key={idx}
                              href={`tel:${ph.tel}`}
                              className="contact-action-btn"
                            >
                              <Phone size={14} />
                              <span>{ph.label}: {ph.num}</span>
                            </a>
                          ))}
                        </div>
                      )}

                      {card.actionType === 'website' && (
                        <a
                          href={card.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-action-btn"
                        >
                          <Globe size={14} />
                          <span>{card.actionText}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
