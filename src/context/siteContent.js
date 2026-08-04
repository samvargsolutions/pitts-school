import { useEffect, useState } from 'react';

export const SITE_CONTENT_KEY = 'pittsModernSchool.siteContent.v1';
export const SITE_CONTENT_EVENT = 'pitts-site-content-updated';

export const routeLinks = {
  home: '/', about: '/about-us', story: '/our-story', management: '/management', principal: '/principal', infrastructure: '/infrastructure',
  news: '/news-and-notices', notices: '/news-and-notices', events: '/events', newsletters: '/newsletters', faculty: '/faculty',
  results: '/CBSEresult', admissionResults: '/AdmissionTestResult', otherResults: '/OtherResult', sports: '/sports',
  cultural: '/CulturalCoCulturalActivity', rules: '/rule1', parentRules: '/rule2', disclosure: '/school-disclosure', gallery: '/gallery',
  contact: '/contact', admin: '/admin', admissions: '/news/admission-classes-xi-2026-27', payments: '/online-pay', erp: '/erp-login', privacy: '/privacy',
};

export const defaultSiteContent = {
  header: {
    announcements: [
      { text: 'Registration-cum-Final Admission for classes XI (2026-27) is now open!', href: routeLinks.admissions },
      { text: 'Recruitment Of Teachers - Click here for Eligibility Criteria and Application Form', href: routeLinks.faculty },
      { text: 'Online Registration for LKG & UKG, BAL-VATIKA is ongoing', href: routeLinks.news },
      { text: 'Star Of Academic Week & E-Magazine : Cynosure now published', href: routeLinks.newsletters },
      { text: 'Celebrating 50 Years of Excellence in Education', href: routeLinks.story },
    ],
    quickActions: [
      { title: 'Online Registration LKG & UKG, BAL-VATIKA', href: routeLinks.news },
      { title: 'Online Registration STD-I TO STD-V', href: routeLinks.news },
      { title: 'Admission open for XI (2026-27)', href: routeLinks.admissions },
      { title: 'Star Of Academic Week', href: routeLinks.news },
      { title: 'E-Magazine : Cynosure', href: routeLinks.newsletters },
      { title: 'E-Diary', href: routeLinks.newsletters },
    ],
  },
  hero: {
    title: 'Nurturing Minds.', subtitle: 'Shaping Futures.',
    body: 'Pitts Modern School, Gomia is committed to academic excellence, character building, and holistic development in a culture of values and innovation.',
    primaryLabel: 'Explore Our School', primaryHref: routeLinks.about, secondaryLabel: 'Admissions Open', secondaryMeta: '2025-26', secondaryHref: routeLinks.admissions,
  },
  popup: {
    enabled: true,
    title: 'Important Updates',
    subtitle: 'Admissions, registration and school notices',
    body: 'Please review the latest important updates from Pitts Modern School. Use the links below for details, applications and downloads.',
    image: '/image/admission_popup.png',
    ctaLabel: 'APPLY ONLINE NOW',
    ctaHref: routeLinks.admissions,
    linksEnabled: true,
    links: [
      { label: 'Recruitment of Teachers - Click here for details', href: routeLinks.faculty, note: '' },
      { label: 'Registration-cum-Final Admission for Class XI Session 2026-2027', href: routeLinks.admissions, note: 'Click here to apply' },
      { label: 'Book List for the Session 2026-2027', href: routeLinks.news, note: 'Click here to download' },
      { label: 'Online Registration for Balvatika (Pre-LKG), LKG & UKG', href: routeLinks.news, note: 'For Session 2026-2027' },
      { label: 'Online Registration for STD-I to STD-V', href: routeLinks.news, note: 'For Session 2026-2027' },
    ],
  },
  latestHighlights: [
    { title: 'Registration-cum-Final Admission for classes XI (2026-27) is now open', image: '/image/655235611_122278627622192910_6813982125465658890_n.jpg', href: routeLinks.admissions, imagePosition: 'center' },
    { title: 'Students shine through culture, creativity and confident stage performances', image: '/image/dc13.jpg', href: routeLinks.cultural, imagePosition: 'center 28%' },
    { title: 'Hands-on learning activities help children build healthy daily habits', image: '/image/459679975_122182238516192910_2352708045737928534_n.jpg', href: routeLinks.infrastructure, imagePosition: 'center' },
    { title: 'Sports week celebrates teamwork, house spirit and growing confidence', image: '/image/basketball2.jpg', href: routeLinks.sports, imagePosition: 'center' },
    { title: 'Grandparents Day brings families, stories and joyful memories together', image: '/image/657051011_122278442678192910_4830634205277214454_n.jpg', href: routeLinks.events, imagePosition: 'center' },
  ],
  upcomingEvents: [
    { month: 'Jun', day: '16', weekday: 'Mon', title: 'Orientation for New Students & Parents', type: 'Admission', time: '09:30 AM - 12:00 PM', image: '/image/657051011_122278442678192910_4830634205277214454_n.jpg', excerpt: 'New families meet teachers, explore the campus rhythm, and begin the academic year with confidence.', href: routeLinks.events },
    { month: 'Jun', day: '20', weekday: 'Fri', title: 'Inter-House Swimming Championship 2026', type: 'Sports', time: '09:00 AM - 01:00 PM', image: '/image/basketball2.jpg', excerpt: 'House teams compete with energy, discipline and school spirit across a full morning of sport.', href: routeLinks.sports },
    { month: 'Jun', day: '26', weekday: 'Thu', title: 'Scholarship Test for Classes VI-IX', type: 'Academics', time: '10:00 AM - 01:00 PM', image: '/image/IMG_2137.jpg', excerpt: 'Students demonstrate academic readiness through a focused scholarship assessment.', href: routeLinks.events },
  ],
  notices: [
    { day: '16', month: 'Jun', label: 'Admission', title: 'Registration-cum-Final Admission for Class XI Session 2026-27', href: routeLinks.admissions },
    { day: '16', month: 'Apr', label: 'Scholarship', title: 'Scholarship details for Classes VI to IX Session 2026-27', href: routeLinks.news },
    { day: '09', month: 'Apr', label: 'Academics', title: 'Book list for the Session 2026-2027', href: routeLinks.news },
  ],
  newsletters: [
    { title: 'SSE result 2026 : Our school toppers', image: '/image/655235611_122278627622192910_6813982125465658890_n.jpg', href: routeLinks.newsletters },
    { title: 'Cultural performances bring colour and confidence to campus', image: '/image/dc13.jpg', href: routeLinks.newsletters },
    { title: 'Students celebrate service, creativity and school spirit', image: '/image/657051011_122278442678192910_4830634205277214454_n.jpg', href: routeLinks.newsletters },
  ],
  results: {
    year: '2025-26', bulletinHref: routeLinks.results,
    tags: [
      { name: 'Class X' },
      { name: 'Class XII' }
    ],
    toppers: [
      { rank: '01', name: 'Ananya Sharma', score: '99.4%', className: 'Class XII', image: '/image/656729874_122278628264192910_5575061535742040043_n.jpg', position: '64% center', tone: 'blue' },
      { rank: '02', name: 'Vivaan Singh', score: '98.8%', className: 'Class X', image: '/image/655235611_122278627622192910_6813982125465658890_n.jpg', position: '52% center', tone: 'ice' },
      { rank: '03', name: 'Mehak Agarwal', score: '98.2%', className: 'Class XII', image: '/image/657648950_122278627682192910_3316470583572254992_n.jpg', position: '48% center', tone: 'pink' },
      { rank: '04', name: 'Arjun Malhotra', score: '97.6%', className: 'Class X', image: '/image/658210448_122279766908192910_6930958453647393658_n.jpg', position: '50% center', tone: 'green' },
    ],
    landmarkSlides: [
      { image: '/image/654420916_122278450718192910_7739475501613658151_n.jpg', tag: 'Felicitation', caption: 'Annual Result Felicitation Ceremony' },
      { image: '/image/654809425_122278443140192910_4758609915848770575_n.jpg', tag: 'Board Toppers', caption: 'Celebrating Class XII Merit Holders' },
      { image: '/image/656180855_122278451030192910_256945773651336968_n.jpg', tag: 'Excellence', caption: 'Class X Distinction Achievers' },
      { image: '/image/656589747_122278442828192910_339878633218178783_n.jpg', tag: 'Landmark', caption: 'Setting New Academic Benchmarks' },
      { image: '/image/656639203_122278442822192910_4058562250816193334_n.jpg', tag: 'Honors', caption: 'Honoring Outstanding Student Profiles' },
    ],
  },
  footer: {
    primaryLinks: [['Home', routeLinks.home], ['About Us', routeLinks.about], ['Our Story', routeLinks.story], ['Our Management', routeLinks.management], ["Principal's Desk", routeLinks.principal], ['Infrastructure', routeLinks.infrastructure], ['Faculty & Staff', routeLinks.faculty], ['News and Events', routeLinks.events]],
    secondaryLinks: [['Result', routeLinks.results], ['Admission Test Result', routeLinks.admissionResults], ['Sports', routeLinks.sports], ['Co-curricular Activities', routeLinks.cultural], ['Gallery', routeLinks.gallery], ['Newsletters', routeLinks.newsletters], ['School Rules', routeLinks.rules], ['Contact Us', routeLinks.contact]],
  },
  contentLibrary: {
    faculty: [
      // ── SENIOR WING FACULTY ──
      { name: 'Mr. Brij Mohan Lal Das',     post: 'PRINCIPAL',                             qualification: 'B.Sc (Chemistry), DSE, PGDCA, M.Sc (Comp.Sc), B.Ed', department: 'Leadership & Chemistry',           wing: 'senior',  experience: '28+ Years', email: 'principal@pittsmorns.edu.in',  image: '/image/inv1.jpg' },
      { name: 'Mr. Dinesh Kumar',             post: 'PGT (Computer)',                         qualification: 'MCA',                                                   department: 'Computer Science',                 wing: 'senior',  experience: '16+ Years', email: 'dinesh.k@pitts.edu.in',        image: '/image/inv2.jpg' },
      { name: 'Mr. Ajay Kumar',               post: 'PGT (Computer)',                         qualification: 'M.Sc, PGDCA',                                           department: 'Computer Science',                 wing: 'senior',  experience: '14+ Years', email: 'ajay.k@pitts.edu.in',          image: '/image/inv3.jpg' },
      { name: 'Mrs. Sunita Mukherjee',        post: 'PGT (English) & HOD',                   qualification: 'M.A. (English Lit), B.Ed',                              department: 'Department of English',            wing: 'senior',  experience: '20+ Years', email: 'sunita.m@pitts.edu.in',        image: '/image/IMG_2137.jpg' },
      { name: 'Dr. Rajesh Sharma',            post: 'PGT (Physics)',                          qualification: 'M.Sc (Physics), Ph.D, B.Ed',                            department: 'Department of Physics',            wing: 'senior',  experience: '18+ Years', email: 'rajesh.s@pitts.edu.in',        image: '/image/IMG_2190.jpg' },
      { name: 'Mrs. Anjali Sinha',            post: 'PGT (Chemistry)',                        qualification: 'M.Sc (Chemistry), B.Ed',                                department: 'Department of Chemistry',          wing: 'senior',  experience: '15+ Years', email: 'anjali.s@pitts.edu.in',        image: '/image/IMG_2203.jpg' },
      { name: 'Mr. Alok Nath Verma',          post: 'PGT (Mathematics)',                      qualification: 'M.Sc (Maths), B.Ed',                                    department: 'Department of Mathematics',        wing: 'senior',  experience: '17+ Years', email: 'alok.v@pitts.edu.in',          image: '/image/inv1.jpg' },
      { name: 'Mrs. Meena Kumari',            post: 'TGT (Hindi & Sanskrit)',                 qualification: 'M.A. (Hindi), Shastri, B.Ed',                           department: 'Hindi & Sanskrit Wing',            wing: 'senior',  experience: '19+ Years', email: 'meena.k@pitts.edu.in',         image: '/image/inv2.jpg' },
      // ── PRIMARY WING FACULTY ──
      { name: 'Mrs. Subhashini Das',          post: 'Headmistress (Primary Wing)',            qualification: 'M.A. (Psychology), B.Ed',                               department: 'Primary Academic Leadership',      wing: 'primary', experience: '22+ Years', email: 'primary.hm@pitts.edu.in',      image: '/image/inv2.jpg' },
      { name: 'Mrs. Vandana Srivastava',      post: 'Senior PRT Coordinator',                qualification: 'B.Sc (Botany), B.Ed',                                   department: 'Primary Environmental Studies',    wing: 'primary', experience: '15+ Years', email: 'vandana.s@pitts.edu.in',       image: '/image/inv3.jpg' },
      { name: 'Mr. K. K. Mishra',             post: 'PRT Mathematics Educator',              qualification: 'B.Sc (Maths), D.El.Ed',                                 department: 'Primary Mathematics Wing',         wing: 'primary', experience: '10+ Years', email: 'kk.mishra@pitts.edu.in',       image: '/image/IMG_2137.jpg' },
      { name: 'Mrs. Rekha Sharma',            post: 'PRT English & Art Faculty',             qualification: 'B.A. (English), Fine Arts Dip.',                        department: 'Primary Languages & Art',          wing: 'primary', experience: '8+ Years',  email: 'rekha.s@pitts.edu.in',         image: '/image/IMG_2190.jpg' },
      { name: 'Mr. Pradeep Kumar',            post: 'PRT General Science Teacher',           qualification: 'B.Sc, D.El.Ed',                                         department: 'Primary Science Wing',             wing: 'primary', experience: '9+ Years',  email: 'pradeep.k@pitts.edu.in',       image: '/image/inv1.jpg' },
      // ── ADMINISTRATIVE STAFF ──
      { name: 'Mr. A. K. Banerjee',           post: 'Senior Bursar & Finance Officer',       qualification: 'M.Com, ICWA (Inter)',                                   department: 'Accounts & Bursar Office',         wing: 'admin',   experience: '24+ Years', email: 'bursar@pitts.edu.in',          image: '/image/inv1.jpg' },
      { name: 'Mrs. Rashmi Ranjan',           post: 'Admissions & Student Relations Manager',qualification: 'MBA (HR), B.A.',                                        department: 'Admissions & Public Relations',    wing: 'admin',   experience: '12+ Years', email: 'admissions@pitts.edu.in',      image: '/image/inv2.jpg' },
      { name: 'Mr. S. N. Das',               post: 'System Administrator & IT Operations Head', qualification: 'B.Tech (Information Tech), CCNA',                   department: 'IT Operations & Digital Campus',   wing: 'admin',   experience: '14+ Years', email: 'it.admin@pitts.edu.in',        image: '/image/inv3.jpg' },
      { name: 'Mr. Ramesh Chandra Sen',       post: 'Senior Administrative Executive',       qualification: 'B.A. (Hons), PGDHM',                                   department: 'General Campus Administration',    wing: 'admin',   experience: '18+ Years', email: 'admin.exec@pitts.edu.in',      image: '/image/IMG_2203.jpg' },
    ],
    staff: [],
    sports: [
      { title: 'Basketball Championship 2024', date: '2024', image: '/image/basketball2.jpg', text: 'Annual inter-house basketball championship showcasing team spirit and athletic excellence.', href: '/sports' },
      { title: 'Sports Meet & Athletics',       date: '2024', image: '/image/sp1.jpg',         text: 'School annual sports meet with track & field events, relay races and gymnastics.', href: '/sports' },
      { title: 'Drill & Combat Display',        date: '2024', image: '/image/dc2.jpg',          text: 'Precision drill and combat display by students demonstrating discipline and fitness.', href: '/sports' },
      { title: 'Swimming Championship',         date: '2024', image: '/image/sp8.jpg',          text: 'Inter-house swimming championship bringing together the school\'s best swimmers.', href: '/sports' },
    ],
    culturalActivities: [
      { title: 'Annual Academic Meet 2024',       date: '2024', image: '/image/aam1.jpg',   text: 'Celebrating academic achievement with awards, performances and recognition of student excellence.', href: '/CulturalCoCulturalActivity' },
      { title: 'Co-Curricular Activities Fest',   date: '2024', image: '/image/CCA12.jpg',  text: 'A celebration of music, dance, drama and art showcasing the school\'s cultural vibrancy.', href: '/CulturalCoCulturalActivity' },
      { title: 'Investiture Ceremony',            date: '2024', image: '/image/inv1.jpg',   text: 'Annual investiture ceremony honoring student council members and house captains.', href: '/CulturalCoCulturalActivity' },
      { title: 'School Programme & Farewell',     date: '2024', image: '/image/hrd2.jpg',   text: 'Farewell programme celebrating the outgoing batch with performances, memories and gratitude.', href: '/CulturalCoCulturalActivity' },
    ],
    gallery: [
      { title: 'Annual Academic Meet', category: 'academics', image: '/image/aam1.jpg',   caption: 'Annual Academic Meet 2024' },
      { title: 'Annual Academic Meet', category: 'academics', image: '/image/aam32.jpg',  caption: 'Annual Academic Meet — Award Ceremony' },
      { title: 'Annual Academic Meet', category: 'academics', image: '/image/aam33.jpg',  caption: 'Annual Academic Meet — Cultural Show' },
      { title: 'Annual Academic Meet', category: 'academics', image: '/image/aam36.jpg',  caption: 'Annual Academic Meet — Highlights' },
      { title: 'Annual Academic Meet', category: 'academics', image: '/image/aam44.jpg',  caption: 'Annual Academic Meet — Student Excellence' },
      { title: 'Co-Curricular Activities', category: 'cca', image: '/image/CCA12.jpg',   caption: 'Co-Curricular Activities Festival' },
      { title: 'Co-Curricular Activities', category: 'cca', image: '/image/CCA6.jpg',    caption: 'Cultural Performance on Stage' },
      { title: 'Co-Curricular Activities', category: 'cca', image: '/image/cca13.jpg',   caption: 'Creative Showcase' },
      { title: 'Co-Curricular Activities', category: 'cca', image: '/image/cca14.jpg',   caption: 'CCA Competition 2024' },
      { title: 'Co-Curricular Activities', category: 'cca', image: '/image/cca17.jpg',   caption: 'CCA Highlights' },
      { title: 'Basketball Championship',   category: 'sports', image: '/image/basketball2.jpg', caption: 'Inter-House Basketball Championship' },
      { title: 'Sports Meet',               category: 'sports', image: '/image/sp1.jpg',         caption: 'Annual Sports Meet 2024' },
      { title: 'Sports Meet',               category: 'sports', image: '/image/sp8.jpg',          caption: 'Swimming Championship' },
      { title: 'Drill & Combat',            category: 'sports', image: '/image/dc11.jpg',          caption: 'Combat Display 2024' },
      { title: 'Drill & Combat',            category: 'sports', image: '/image/dc12.jpg',          caption: 'Drill Precision Showcase' },
      { title: 'Investiture Ceremony',      category: 'events', image: '/image/inv1.jpg',          caption: 'Investiture Ceremony 2024' },
      { title: 'Investiture Ceremony',      category: 'events', image: '/image/inv2.jpg',          caption: 'Badge Pinning Ceremony' },
      { title: 'Investiture Ceremony',      category: 'events', image: '/image/inv3.jpg',          caption: 'Student Council Investiture' },
      { title: 'School Programme',          category: 'events', image: '/image/hrd2.jpg',           caption: 'School Annual Programme' },
      { title: 'School Programme',          category: 'events', image: '/image/hrd6.jpg',           caption: 'School Farewell Programme' },
    ],
  },
};

function mergeContent(defaults, saved, path) {
  if (!saved || typeof saved !== 'object') return defaults;
  if (Array.isArray(defaults)) {
    if (!Array.isArray(saved)) return defaults;
    // If the saved array is empty but defaults have data (e.g. first-run contentLibrary),
    // fall back to defaults so pre-seeded data is always visible.
    if (saved.length === 0 && defaults.length > 0) return defaults;
    return saved;
  }
  return Object.keys(defaults).reduce((acc, key) => {
    const defaultValue = defaults[key];
    const savedValue = saved[key];
    if (key === 'image' && (!savedValue || savedValue === '/image/admission_popup.pn')) {
      acc[key] = defaultValue || '/image/admission_popup.png';
    } else {
      acc[key] = defaultValue && typeof defaultValue === 'object' && !Array.isArray(defaultValue)
        ? mergeContent(defaultValue, savedValue, key)
        : (savedValue === undefined ? defaultValue : savedValue);
    }
    return acc;
  }, {});
}

const CLOUD_SYNC_ENDPOINT = 'https://api.restful-api.dev/objects/ff8081819f7e10ae019fcc2c22897052';
let isSyncingCloud = false;

export async function fetchCloudContent() {
  if (typeof window === 'undefined' || isSyncingCloud) return null;
  try {
    isSyncingCloud = true;
    const response = await fetch(CLOUD_SYNC_ENDPOINT, { cache: 'no-store' });
    if (!response.ok) return null;
    const data = await response.json();
    const cloudContent = data?.data?.content;
    if (cloudContent && typeof cloudContent === 'object') {
      const merged = mergeContent(defaultSiteContent, cloudContent);
      window.localStorage.setItem(SITE_CONTENT_KEY, JSON.stringify(merged));
      window.dispatchEvent(new CustomEvent(SITE_CONTENT_EVENT, { detail: merged }));
      return merged;
    }
  } catch (error) {
    // Graceful fallback to LocalStorage if offline
  } finally {
    isSyncingCloud = false;
  }
  return null;
}

export function getSiteContent() {
  if (typeof window === 'undefined') return defaultSiteContent;
  try {
    const raw = window.localStorage.getItem(SITE_CONTENT_KEY);
    return raw ? mergeContent(defaultSiteContent, JSON.parse(raw)) : defaultSiteContent;
  } catch (error) {
    console.warn('Could not read saved site content. Falling back to defaults.', error);
    return defaultSiteContent;
  }
}

export function saveSiteContent(content) {
  if (typeof window === 'undefined') return;
  const merged = mergeContent(defaultSiteContent, content);
  window.localStorage.setItem(SITE_CONTENT_KEY, JSON.stringify(merged));
  window.dispatchEvent(new CustomEvent(SITE_CONTENT_EVENT, { detail: merged }));

  // Push updates asynchronously to Cloud Storage for cross-device synchronization
  fetch(CLOUD_SYNC_ENDPOINT, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'pitts_site_content_v1', data: { content: merged, updatedAt: Date.now() } }),
  }).catch((err) => console.warn('Cloud sync push error:', err));
}

export function resetSiteContent() {
  if (typeof window === 'undefined') return defaultSiteContent;
  window.localStorage.removeItem(SITE_CONTENT_KEY);
  window.dispatchEvent(new CustomEvent(SITE_CONTENT_EVENT, { detail: defaultSiteContent }));
  // Also reset cloud content
  fetch(CLOUD_SYNC_ENDPOINT, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'pitts_site_content_v1', data: { content: defaultSiteContent, updatedAt: Date.now() } }),
  }).catch(() => {});
  return defaultSiteContent;
}

function repairPercentEncoding(value) {
  return value.replace(/%(?![0-9A-Fa-f]{2})/g, '%25');
}

export function normalizeAssetUrl(value, fallback = '') {
  if (!value || typeof value !== 'string') return fallback;
  let trimmed = repairPercentEncoding(value.trim().replace(/\\/g, '/'));
  if (trimmed.endsWith('.pn')) trimmed = `${trimmed}g`;
  if (/^(data:|blob:|https?:\/\/)/i.test(trimmed)) return trimmed;
  if (trimmed.startsWith('/')) return trimmed;

  const publicMatch = trimmed.match(/(?:^|\/)(image|icons-illustrations|assets)\/.+$/i);
  if (publicMatch) return `/${publicMatch[0].replace(/^\/+/, '')}`;

  if (/^[A-Za-z]:\//.test(trimmed)) return fallback;
  return trimmed;
}

export function normalizeLinkUrl(value, fallback = '#') {
  if (!value || typeof value !== 'string') return fallback;
  const trimmed = repairPercentEncoding(value.trim().replace(/\\/g, '/'));
  if (/^[A-Za-z]:\//.test(trimmed)) return normalizeAssetUrl(trimmed, fallback);
  if (/^(https?:\/\/|mailto:|tel:|#|\/)/i.test(trimmed)) return trimmed;
  return encodeURI(trimmed);
}

export function useSiteContent() {
  const [content, setContent] = useState(() => getSiteContent());
  useEffect(() => {
    const sync = () => setContent(getSiteContent());
    window.addEventListener('storage', sync);
    window.addEventListener(SITE_CONTENT_EVENT, sync);

    // Initial background cloud sync
    fetchCloudContent();

    // Periodic cloud poll every 10 seconds for cross-device updates
    const pollInterval = setInterval(() => {
      fetchCloudContent();
    }, 10000);

    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener(SITE_CONTENT_EVENT, sync);
      clearInterval(pollInterval);
    };
  }, []);
  return content;
}
