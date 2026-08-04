import React, { useState } from 'react';
import { useSiteContent } from '../context/siteContent';
import {
  Users,
  Search,
  BookOpen,
  Award,
  GraduationCap,
  Mail,
  Building,
  Filter,
  CheckCircle2,
  ChevronRight,
  Shield,
  Briefcase,
  Sparkles
} from 'lucide-react';

// Modular Subject Filters Array for Senior Wing
const seniorWingSubjects = [
  { id: 'ALL', label: 'All Departments' },
  { id: 'SCIENCE', label: 'Science' },
  { id: 'ENGLISH', label: 'English' },
  { id: 'HINDI & SANSKRIT', label: 'Hindi & Sanskrit' },
  { id: 'MATHS', label: 'Maths' },
  { id: 'PHYSICS', label: 'Physics' },
  { id: 'CHEMISTRY', label: 'Chemistry' },
  { id: 'BIOLOGY', label: 'Biology' },
  { id: 'SOCIALSCIENCE', label: 'Social Science' },
  { id: 'COMPUTER', label: 'Computer' },
  { id: 'MUSIC', label: 'Music' },
  { id: 'ART', label: 'Art' },
  { id: 'LIBRARY', label: 'Library' },
  { id: 'PHYSICAL EDU', label: 'Physical Edu' }
];

// Faculty & Staff Master Data List
const facultyMasterData = [
  // --- SENIOR WING FACULTY ---
  {
    id: 'fac-1',
    name: 'Mr. Brij Mohan Lal Das',
    post: 'PRINCIPAL',
    qualification: 'B.Sc (Chemistry), DSE, PGDCA, M.Sc (Comp.Sc), B.Ed',
    subjectTag: 'SCIENCE',
    deptName: 'Leadership & Chemistry',
    wing: 'senior',
    experience: '28+ Years',
    email: 'principal@pittsmorns.edu.in',
    image: '/image/inv1.jpg',
    isLeadership: true,
    motifType: 1
  },
  {
    id: 'fac-2',
    name: 'Mr. Dinesh Kumar',
    post: 'PGT (Computer)',
    qualification: 'MCA',
    subjectTag: 'COMPUTER',
    deptName: 'Computer Science',
    wing: 'senior',
    experience: '16+ Years',
    email: 'dinesh.k@pitts.edu.in',
    image: '/image/inv2.jpg',
    isLeadership: false,
    motifType: 2
  },
  {
    id: 'fac-3',
    name: 'Mr. Ajay Kumar',
    post: 'PGT (Computer)',
    qualification: 'M.Sc, PGDCA',
    subjectTag: 'COMPUTER',
    deptName: 'Computer Science',
    wing: 'senior',
    experience: '14+ Years',
    email: 'ajay.k@pitts.edu.in',
    image: '/image/inv3.jpg',
    isLeadership: false,
    motifType: 3
  },
  {
    id: 'fac-4',
    name: 'Mrs. Sunita Mukherjee',
    post: 'PGT (English) & HOD',
    qualification: 'M.A. (English Lit), B.Ed',
    subjectTag: 'ENGLISH',
    deptName: 'Department of English',
    wing: 'senior',
    experience: '20+ Years',
    email: 'sunita.m@pitts.edu.in',
    image: '/image/IMG_2137.jpg',
    isLeadership: false,
    motifType: 4
  },
  {
    id: 'fac-5',
    name: 'Dr. Rajesh Sharma',
    post: 'PGT (Physics)',
    qualification: 'M.Sc (Physics), Ph.D, B.Ed',
    subjectTag: 'PHYSICS',
    deptName: 'Department of Physics',
    wing: 'senior',
    experience: '18+ Years',
    email: 'rajesh.s@pitts.edu.in',
    image: '/image/IMG_2190.jpg',
    isLeadership: false,
    motifType: 1
  },
  {
    id: 'fac-6',
    name: 'Mrs. Anjali Sinha',
    post: 'PGT (Chemistry)',
    qualification: 'M.Sc (Chemistry), B.Ed',
    subjectTag: 'CHEMISTRY',
    deptName: 'Department of Chemistry',
    wing: 'senior',
    experience: '15+ Years',
    email: 'anjali.s@pitts.edu.in',
    image: '/image/IMG_2203.jpg',
    isLeadership: false,
    motifType: 2
  },
  {
    id: 'fac-7',
    name: 'Mr. Alok Nath Verma',
    post: 'PGT (Mathematics)',
    qualification: 'M.Sc (Maths), B.Ed',
    subjectTag: 'MATHS',
    deptName: 'Department of Mathematics',
    wing: 'senior',
    experience: '17+ Years',
    email: 'alok.v@pitts.edu.in',
    image: '/image/inv1.jpg',
    isLeadership: false,
    motifType: 3
  },
  {
    id: 'fac-8',
    name: 'Mrs. Meena Kumari',
    post: 'TGT (Hindi & Sanskrit)',
    qualification: 'M.A. (Hindi), Shastri, B.Ed',
    subjectTag: 'HINDI & SANSKRIT',
    deptName: 'Hindi & Sanskrit Wing',
    wing: 'senior',
    experience: '19+ Years',
    email: 'meena.k@pitts.edu.in',
    image: '/image/inv2.jpg',
    isLeadership: false,
    motifType: 4
  },

  // --- PRIMARY WING FACULTY ---
  {
    id: 'pri-1',
    name: 'Mrs. Subhashini Das',
    post: 'Headmistress (Primary Wing)',
    qualification: 'M.A. (Psychology), B.Ed',
    subjectTag: 'PRIMARY',
    deptName: 'Primary Academic Leadership',
    wing: 'primary',
    experience: '22+ Years',
    email: 'primary.hm@pitts.edu.in',
    image: '/image/inv2.jpg',
    isLeadership: true,
    motifType: 1
  },
  {
    id: 'pri-2',
    name: 'Mrs. Vandana Srivastava',
    post: 'Senior PRT Coordinator',
    qualification: 'B.Sc (Botany), B.Ed',
    subjectTag: 'PRIMARY',
    deptName: 'Primary Environmental Studies',
    wing: 'primary',
    experience: '15+ Years',
    email: 'vandana.s@pitts.edu.in',
    image: '/image/inv3.jpg',
    isLeadership: false,
    motifType: 2
  },
  {
    id: 'pri-3',
    name: 'Mr. K. K. Mishra',
    post: 'PRT Mathematics Educator',
    qualification: 'B.Sc (Maths), D.El.Ed',
    subjectTag: 'PRIMARY',
    deptName: 'Primary Mathematics Wing',
    wing: 'primary',
    experience: '10+ Years',
    email: 'kk.mishra@pitts.edu.in',
    image: '/image/IMG_2137.jpg',
    isLeadership: false,
    motifType: 3
  },
  {
    id: 'pri-4',
    name: 'Mrs. Rekha Sharma',
    post: 'PRT English & Art Faculty',
    qualification: 'B.A. (English), Fine Arts Dip.',
    subjectTag: 'PRIMARY',
    deptName: 'Primary Languages & Art',
    wing: 'primary',
    experience: '8+ Years',
    email: 'rekha.s@pitts.edu.in',
    image: '/image/IMG_2190.jpg',
    isLeadership: false,
    motifType: 4
  },
  {
    id: 'pri-5',
    name: 'Mr. Pradeep Kumar',
    post: 'PRT General Science Teacher',
    qualification: 'B.Sc, D.El.Ed',
    subjectTag: 'PRIMARY',
    deptName: 'Primary Science Wing',
    wing: 'primary',
    experience: '9+ Years',
    email: 'pradeep.k@pitts.edu.in',
    image: '/image/inv1.jpg',
    isLeadership: false,
    motifType: 1
  },

  // --- ADMINISTRATIVE STAFF ---
  {
    id: 'adm-1',
    name: 'Mr. A. K. Banerjee',
    post: 'Senior Bursar & Finance Officer',
    qualification: 'M.Com, ICWA (Inter)',
    subjectTag: 'ADMIN',
    deptName: 'Accounts & Bursar Office',
    wing: 'admin',
    experience: '24+ Years',
    email: 'bursar@pitts.edu.in',
    image: '/image/inv1.jpg',
    isLeadership: true,
    motifType: 1
  },
  {
    id: 'adm-2',
    name: 'Mrs. Rashmi Ranjan',
    post: 'Admissions & Student Relations Manager',
    qualification: 'MBA (HR), B.A.',
    subjectTag: 'ADMIN',
    deptName: 'Admissions & Public Relations',
    wing: 'admin',
    experience: '12+ Years',
    email: 'admissions@pitts.edu.in',
    image: '/image/inv2.jpg',
    isLeadership: false,
    motifType: 2
  },
  {
    id: 'adm-3',
    name: 'Mr. S. N. Das',
    post: 'System Administrator & IT Operations Head',
    qualification: 'B.Tech (Information Tech), CCNA',
    subjectTag: 'ADMIN',
    deptName: 'IT Operations & Digital Campus',
    wing: 'admin',
    experience: '14+ Years',
    email: 'it.admin@pitts.edu.in',
    image: '/image/inv3.jpg',
    isLeadership: false,
    motifType: 3
  },
  {
    id: 'adm-4',
    name: 'Mr. Ramesh Chandra Sen',
    post: 'Senior Administrative Executive',
    qualification: 'B.A. (Hons), PGDHM',
    subjectTag: 'ADMIN',
    deptName: 'General Campus Administration',
    wing: 'admin',
    experience: '18+ Years',
    email: 'admin.exec@pitts.edu.in',
    image: '/image/IMG_2203.jpg',
    isLeadership: false,
    motifType: 4
  }
];

// Swiss Geometric SVG Motif Component on Hover
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

// Derive a subjectTag from post text so subject filters work with admin-entered data
function deriveSubjectTag(post = '') {
  const p = post.toUpperCase();
  if (p.includes('PHYSICS'))       return 'PHYSICS';
  if (p.includes('CHEMISTRY'))     return 'CHEMISTRY';
  if (p.includes('BIOLOGY'))       return 'BIOLOGY';
  if (p.includes('COMPUTER'))      return 'COMPUTER';
  if (p.includes('MATHS') || p.includes('MATH') || p.includes('MATHEMATICS')) return 'MATHS';
  if (p.includes('ENGLISH'))       return 'ENGLISH';
  if (p.includes('HINDI') || p.includes('SANSKRIT')) return 'HINDI & SANSKRIT';
  if (p.includes('SOCIAL') || p.includes('EVS'))     return 'SOCIALSCIENCE';
  if (p.includes('MUSIC'))         return 'MUSIC';
  if (p.includes('ART'))           return 'ART';
  if (p.includes('LIBRARY'))       return 'LIBRARY';
  if (p.includes('PHYSICAL') || p.includes('SPORT')) return 'PHYSICAL EDU';
  if (p.includes('SCIENCE'))       return 'SCIENCE';
  if (p.includes('PRIMARY') || p.includes('PRT'))    return 'PRIMARY';
  return 'ADMIN';
}

export default function FacultySection() {
  const siteContent = useSiteContent();
  const [activeWing, setActiveWing] = useState('senior'); // 'senior', 'primary', 'admin'
  const [selectedSubject, setSelectedSubject] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // Use content library data from admin (or fallback to static data)
  const libraryFaculty = siteContent?.contentLibrary?.faculty;
  const sourceData = (libraryFaculty && libraryFaculty.length > 0) ? libraryFaculty : facultyMasterData;

  // Normalize source entries so both static and admin-entered data work
  const normalizedFaculty = sourceData.map((m, idx) => ({
    id: m.id || `fac-${idx}`,
    name: m.name || 'Faculty Member',
    post: m.post || m.role || '',
    qualification: m.qualification || '',
    deptName: m.department || m.deptName || '',
    wing: m.wing || 'senior',
    experience: m.experience || '',
    email: m.email || '',
    image: m.image || '/image/inv1.jpg',
    isLeadership: m.isLeadership || false,
    motifType: m.motifType || ((idx % 4) + 1),
    subjectTag: m.subjectTag || deriveSubjectTag(m.post || m.role || ''),
  }));

  // Filter faculty based on active wing, selected subject, and search query
  const filteredFaculty = normalizedFaculty.filter((member) => {
    const matchesWing = member.wing === activeWing;

    const matchesSubject =
      activeWing !== 'senior' ||
      selectedSubject === 'ALL' ||
      member.subjectTag === selectedSubject ||
      (selectedSubject === 'SCIENCE' &&
        ['PHYSICS', 'CHEMISTRY', 'BIOLOGY', 'SCIENCE'].includes(member.subjectTag));

    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.post.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.deptName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesWing && matchesSubject && matchesSearch;
  });

  return (
    <div className="faculty-page-wrapper">
      {/* Top Header Bar for Faculty Directory */}
      <div className="page-nav-top-bar">
        <div className="page-nav-top-inner">
          <span className="editorial-overline">OFFICIAL FACULTY &amp; STAFF DIRECTORY</span>
          <h1 className="page-standalone-title">Pitts Modern School Faculty &amp; Administration</h1>
        </div>
      </div>

      <section className="faculty-main-section">
        <div className="faculty-main-inner">
          {/* WING SELECTOR TABS (Senior Wing, Primary Wing, Administrative Staff) */}
          <div className="wing-selector-bar">
            <div className="wing-tabs-group">
              <button
                className={`wing-tab-btn ${activeWing === 'senior' ? 'active' : ''}`}
                onClick={() => {
                  setActiveWing('senior');
                  setSelectedSubject('ALL');
                }}
              >
                <GraduationCap size={18} />
                <span>SENIOR WING FACULTY</span>
              </button>

              <button
                className={`wing-tab-btn ${activeWing === 'primary' ? 'active' : ''}`}
                onClick={() => {
                  setActiveWing('primary');
                  setSelectedSubject('ALL');
                }}
              >
                <BookOpen size={18} />
                <span>PRIMARY WING FACULTY</span>
              </button>

              <button
                className={`wing-tab-btn ${activeWing === 'admin' ? 'active' : ''}`}
                onClick={() => {
                  setActiveWing('admin');
                  setSelectedSubject('ALL');
                }}
              >
                <Briefcase size={18} />
                <span>ADMINISTRATIVE STAFF</span>
              </button>
            </div>

            {/* Keyword Search Input */}
            <div className="faculty-search-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search faculty by name, qualification, or post..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="faculty-search-input"
              />
            </div>
          </div>

          {/* MAIN CONTENT AREA: SIDEBAR FILTERS (FOR SENIOR WING) + CARDS GRID */}
          <div className={`faculty-layout-grid ${activeWing === 'senior' ? 'has-sidebar' : 'no-sidebar'}`}>
            {/* SUBJECT FILTER SIDEBAR (Only displayed for Senior Wing) */}
            {activeWing === 'senior' && (
              <aside className="faculty-sidebar">
                <div className="sidebar-header">
                  <Filter size={15} />
                  <span>SUBJECT FILTERS</span>
                </div>

                <div className="subject-buttons-stack">
                  {seniorWingSubjects.map((sub) => {
                    const isSelected = selectedSubject === sub.id;

                    return (
                      <button
                        key={sub.id}
                        onClick={() => setSelectedSubject(sub.id)}
                        className={`subject-filter-btn ${isSelected ? 'selected-subject' : ''}`}
                      >
                        <span>{sub.label}</span>
                        <ChevronRight size={14} className="arrow-icon" />
                      </button>
                    );
                  })}
                </div>
              </aside>
            )}

            {/* FACULTY CARDS CONTAINER */}
            <div className="faculty-cards-container">
              {filteredFaculty.length === 0 ? (
                <div className="no-faculty-found">
                  <p>No faculty members found matching your selected subject or search query.</p>
                  <button
                    onClick={() => {
                      setSelectedSubject('ALL');
                      setSearchQuery('');
                    }}
                    className="reset-filter-btn"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="faculty-cards-grid">
                  {filteredFaculty.map((fac) => {
                    const isHovered = hoveredCardId === fac.id;

                    return (
                      <article
                        key={fac.id}
                        className={`faculty-card-swiss ${isHovered ? 'is-hovered' : ''}`}
                        onMouseEnter={() => setHoveredCardId(fac.id)}
                        onMouseLeave={() => setHoveredCardId(null)}
                      >
                        {/* Faculty Portrait Photo Area */}
                        <div className="faculty-photo-wrap">
                          <img
                            src={fac.image}
                            alt={fac.name}
                            className="faculty-portrait-img"
                          />
                          <div className="faculty-photo-overlay" />
                          <span className="faculty-dept-badge">{fac.deptName}</span>
                        </div>

                        {/* Faculty Content Details Body */}
                        <div className="faculty-card-body">
                          {/* Swiss Geometric Motif in top-right of body area */}
                          <div className="card-body-motif-container">
                            <SwissMotifInBody
                              type={fac.motifType}
                              color="#ffc72c"
                              isHovered={isHovered}
                            />
                          </div>

                          <div className="faculty-post-label">{fac.post}</div>
                          <h3 className="faculty-name">{fac.name}</h3>

                          {/* Qualifications Tags */}
                          <div className="faculty-qualifications-block">
                            <strong className="qual-label">Qualification:</strong>
                            <p className="qual-text">{fac.qualification}</p>
                          </div>

                          {/* Footer Meta: Experience & Contact */}
                          <div className="faculty-card-footer">
                            <span className="exp-badge">
                              <Award size={13} />
                              <span>{fac.experience}</span>
                            </span>

                            <a
                              href={`mailto:${fac.email}`}
                              className="faculty-email-link"
                              title={`Email ${fac.name}`}
                            >
                              <Mail size={14} />
                              <span>Email</span>
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
