import React, { useState } from 'react';
import { Download } from 'lucide-react';

/* ─── MANDATORY DISCLOSURE DATA ─────────────────────────────────── */
const GENERAL_INFO = [
  { sl: 1, info: 'NAME OF THE SCHOOL', details: 'PITTS MODERN SCHOOL' },
  { sl: 2, info: 'AFFILIATION NO', details: '3430014' },
  { sl: 3, info: 'SCHOOL CODE', details: '66217' },
  { sl: 4, info: 'COMPLETE ADDRESS WITH PIN CODE', details: 'IE Gomia, Bokaro, Jharkhand, 829112' },
  { sl: 5, info: 'PRINCIPAL NAME', details: 'Mr. Brij Mohan Lal Das' },
  { sl: 6, info: 'PRINCIPAL QUALIFICATION', details: 'B.Sc.(Chemistry), M.Sc.(Computer Science), PGDCA, D.S.E, B.Ed.' },
  { sl: 7, info: 'SCHOOL EMAIL ID', details: 'pms.principal2024@gmail.com' },
  { sl: 8, info: 'CONTACT DETAILS (LANDLINE/MOBILE)', details: '8797304017' }
];

const DOCUMENTS_INFO = [
  {
    sl: 1,
    doc: 'COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION,IF ANY',
    note: '',
    url: '/disclosuredocs/Affiliation certificate_Anx.pdf'
  },
  {
    sl: 2,
    doc: 'COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE,AS APPLICABLE',
    note: '',
    url: '/disclosuredocs/society.png',
    isImage: true
  },
  {
    sl: 3,
    doc: 'COPIES OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE BY THE STATE GOVT/UT',
    note: "N.A., as school got affiliation from CBSE w.e.f.1990 under 'Waiver of NOC category' i.e. NOC was waived off by CBSE at that time.",
    url: '/disclosuredocs/noc.pdf'
  },
  {
    sl: 4,
    doc: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT ,2009 AND IT'S RENEWAL IF APPLICABLE",
    note: '',
    url: '/disclosuredocs/RECOGNITION CERTIFICATE.pdf'
  },
  {
    sl: 5,
    doc: 'COPIES OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE',
    note: '',
    url: '/disclosuredocs/BUILDING SAFETY.pdf'
  },
  {
    sl: 6,
    doc: 'COPIES OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY',
    note: '',
    url: '/disclosuredocs/FIRE SAFETY.pdf'
  },
  {
    sl: 7,
    doc: 'COPIES OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION /UPGRADATION/EXTENSION OF AFFILITAION OR SELF CERTIFICATION BY SCHOOL',
    note: '',
    url: '/disclosuredocs/deo.pdf'
  },
  {
    sl: 8,
    doc: 'COPIES OF VALID WATER,HEALTH AND SANITATION CERTIFICATES',
    note: '',
    url: '/disclosuredocs/Drinking water.pdf'
  },
  {
    sl: 9,
    doc: 'COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION',
    note: '',
    url: '/disclosuredocs/selfcertificate.pdf'
  },
  {
    sl: 10,
    doc: 'Mandatory Disclosure Details SARAS',
    note: '',
    url: '/disclosuredocs/saras.pdf'
  }
];

const RESULT_ACADEMICS = [
  {
    sl: 1,
    doc: 'FEE STRUCTURE OF THE SCHOOL',
    url: '/disclosuredocs/Fee Structure_2026-27.pdf'
  },
  {
    sl: 2,
    doc: 'ANNUAL ACADEMIC CALENDAR',
    url: '/disclosuredocs/calendar.pdf'
  },
  {
    sl: 3,
    doc: 'LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)',
    url: '/disclosuredocs/SMC 2026-27.pdf'
  },
  {
    sl: 4,
    doc: 'LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS',
    url: '/disclosuredocs/PTA 2026-27.pdf'
  },
  {
    sl: 5,
    doc: 'LAST THREE YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY',
    url: '/disclosuredocs/result.png',
    isImage: true
  }
];

const STAFF_TEACHING = [
  { sl: 1, info: 'PRINCIPAL', details: 'Mr. Brij Mohan Lal Das' },
  { sl: 2, info: 'TOTAL NO. OF TEACHERS', details: '85' },
  { sl: '', info: 'PGT', details: '18' },
  { sl: '', info: 'TGT', details: '24' },
  { sl: '', info: 'PRT', details: '43' },
  { sl: 3, info: 'TEACHER SECTION RATIO', details: '28:1' },
  { sl: 4, info: 'DETAILS OF SPECIAL EDUCATOR', details: '00' },
  { sl: 5, info: 'DETAILS OF COUNSELLOR AND WELNESS TEACHER', details: '01' }
];

const SCHOOL_INFRASTRUCTURE = [
  { sl: 1, info: 'TOTAL CAMPUS OF AREA OF THE SCHOOL (IN SQUARE MTR)', count: '', details: '22662' },
  { sl: 2, info: 'NO. AND SIZE OF THE CLASS ROOMS (IN SQUARE MTR)', count: '55', details: '47' },
  { sl: 3, info: 'NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQUARE MTR)', count: '6', details: '59.46' },
  { sl: 4, info: 'INTERNET FACILITY (Y/N)', count: '', details: 'Yes' },
  { sl: 5, info: 'NO. OF GIRLS TOILETS', count: '', details: '24' },
  { sl: 6, info: 'NO. OF BOYS TOILETS', count: '', details: '24' },
  { sl: 7, info: 'LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL', count: '', details: 'VIEW', isLink: true, url: 'https://www.youtube.com/watch?v=7SLA9jTjRrQ&feature=youtu.be' }
];

export default function SchoolDisclosureSection() {
  const [selectedImageModal, setSelectedImageModal] = useState(null);

  return (
    <div className="cbse-disclosure-page">
      <div className="cbse-disclosure-container">
        
        {/* OFFICIAL CBSE HEADER TITLE */}
        <div className="cbse-disclosure-title-head">
          <h2>MANDATORY PUBLIC DISCLOSURE</h2>
        </div>

        {/* SECTION A: GENERAL INFORMATION */}
        <section className="cbse-section">
          <div className="cbse-section-header">
            <span className="sec-letter">A</span>
            <span className="sec-title-underline">GENERAL INFORMATION</span>
          </div>
          <div className="table-responsive-wrapper">
            <table className="cbse-table">
              <thead>
                <tr>
                  <th style={{ width: '65px' }} className="center-text">
                    <span className="th-underline">SL NO</span>
                  </th>
                  <th style={{ width: '42%' }} className="center-text">
                    <span className="th-underline">INFORMATION</span>
                  </th>
                  <th className="center-text">
                    <span className="th-underline">DETAILS</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {GENERAL_INFO.map((row, index) => (
                  <tr key={index}>
                    <td className="center-text">{row.sl}</td>
                    <td className="center-text">{row.info}</td>
                    <td className="center-text details-text">{row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION B: DOCUMENTS AND INFORMATION */}
        <section className="cbse-section">
          <div className="cbse-section-header">
            <span className="sec-letter">B</span>
            <span className="sec-title-underline">DOCUMENTS AND INFORMATION</span>
          </div>
          <div className="table-responsive-wrapper">
            <table className="cbse-table">
              <thead>
                <tr>
                  <th style={{ width: '65px' }} className="center-text">
                    <span className="th-underline">SL<br />NO</span>
                  </th>
                  <th style={{ width: '46%' }} className="center-text">
                    <span className="th-underline">DOCUMENTS/INFORMATION</span>
                  </th>
                  <th style={{ width: '32%' }} className="center-text">
                    <span className="th-underline">UPLOADED DOCUMENTS</span>
                  </th>
                  <th style={{ width: '100px' }} className="center-text"></th>
                </tr>
              </thead>
              <tbody>
                {DOCUMENTS_INFO.map((row) => (
                  <tr key={row.sl}>
                    <td className="center-text">{row.sl}</td>
                    <td className="center-text doc-name-cell">{row.doc}</td>
                    <td className="center-text uploaded-doc-cell">
                      {row.note ? (
                        <div className="cbse-note-text">{row.note}</div>
                      ) : (
                        <div className="cbse-doc-line"></div>
                      )}
                    </td>
                    <td className="center-text action-btn-cell">
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cbse-blue-btn"
                        onClick={(e) => {
                          if (row.isImage) {
                            e.preventDefault();
                            setSelectedImageModal(row.url);
                          }
                        }}
                      >
                        VIEW
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION C: RESULT AND ACADEMICS */}
        <section className="cbse-section">
          <div className="cbse-section-header">
            <span className="sec-letter">C</span>
            <span className="sec-title-underline">RESULT AND ACADEMICS</span>
          </div>
          <div className="table-responsive-wrapper">
            <table className="cbse-table">
              <thead>
                <tr>
                  <th style={{ width: '65px' }} className="center-text">
                    <span className="th-underline">SL<br />NO</span>
                  </th>
                  <th style={{ width: '46%' }} className="center-text">
                    <span className="th-underline">DOCUMENTS/INFORMATION</span>
                  </th>
                  <th style={{ width: '32%' }} className="center-text">
                    <span className="th-underline">UPLOADED DOCUMENTS</span>
                  </th>
                  <th style={{ width: '100px' }} className="center-text"></th>
                </tr>
              </thead>
              <tbody>
                {RESULT_ACADEMICS.map((row) => (
                  <tr key={row.sl}>
                    <td className="center-text">{row.sl}</td>
                    <td className="center-text doc-name-cell">{row.doc}</td>
                    <td className="center-text uploaded-doc-cell">
                      <div className="cbse-doc-line"></div>
                    </td>
                    <td className="center-text action-btn-cell">
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cbse-blue-btn"
                        onClick={(e) => {
                          if (row.isImage) {
                            e.preventDefault();
                            setSelectedImageModal(row.url);
                          }
                        }}
                      >
                        VIEW
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION D: STAFF (TEACHING) */}
        <section className="cbse-section">
          <div className="cbse-section-header">
            <span className="sec-letter">D</span>
            <span className="sec-title-underline">STAFF(TEACHING)</span>
          </div>
          <div className="table-responsive-wrapper">
            <table className="cbse-table">
              <thead>
                <tr>
                  <th style={{ width: '65px' }} className="center-text">
                    <span className="th-underline">SL NO</span>
                  </th>
                  <th style={{ width: '42%' }} className="center-text">
                    <span className="th-underline">INFORMATION</span>
                  </th>
                  <th className="center-text">
                    <span className="th-underline">DETAILS</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {STAFF_TEACHING.map((row, index) => (
                  <tr key={index}>
                    <td className="center-text">{row.sl}</td>
                    <td className="center-text">{row.info}</td>
                    <td className="center-text details-text">{row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION E: SCHOOL INFRASTRUCTURE */}
        <section className="cbse-section">
          <div className="cbse-section-header">
            <span className="sec-letter">E</span>
            <span className="sec-title-underline">SCHOOL INFRASTRUCTURE</span>
          </div>
          <div className="table-responsive-wrapper">
            <table className="cbse-table">
              <thead>
                <tr>
                  <th style={{ width: '65px' }} className="center-text">
                    <span className="th-underline">SL NO</span>
                  </th>
                  <th style={{ width: '55%' }} className="center-text">
                    <span className="th-underline">INFORMATION</span>
                  </th>
                  <th colSpan={2} className="center-text">
                    <span className="th-underline">DETAILS</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {SCHOOL_INFRASTRUCTURE.map((row, index) => (
                  <tr key={index}>
                    <td className="center-text">{row.sl}</td>
                    <td className="center-text">{row.info}</td>
                    {row.count ? (
                      <>
                        <td className="center-text" style={{ width: '80px', borderRight: '1px solid #d2deeb' }}>
                          {row.count}
                        </td>
                        <td className="center-text" style={{ width: '100px' }}>
                          {row.details}
                        </td>
                      </>
                    ) : (
                      <td className="center-text details-text" colSpan={2}>
                        {row.isLink ? (
                          <a
                            href={row.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cbse-blue-btn"
                          >
                            VIEW
                          </a>
                        ) : (
                          row.details
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>

      {/* IMAGE PREVIEW LIGHTBOX MODAL */}
      {selectedImageModal && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImageModal(null)}
        >
          <button className="lb-close" onClick={() => setSelectedImageModal(null)}>
            ×
          </button>
          <div className="lb-image-frame" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImageModal} alt="Disclosure Document" className="lb-image" />
            <div className="lb-caption">
              <span className="lb-label">{selectedImageModal.split('/').pop()}</span>
              <a href={selectedImageModal} download className="cbse-blue-btn">
                DOWNLOAD
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
