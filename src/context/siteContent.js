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
  contentLibrary: { faculty: [], staff: [], sports: [], culturalActivities: [], gallery: [] },
};

function mergeContent(defaults, saved) {
  if (!saved || typeof saved !== 'object') return defaults;
  if (Array.isArray(defaults)) return Array.isArray(saved) ? saved : defaults;
  return Object.keys(defaults).reduce((acc, key) => {
    const defaultValue = defaults[key];
    const savedValue = saved[key];
    if (key === 'image' && (!savedValue || savedValue === '/image/admission_popup.pn')) {
      acc[key] = defaultValue || '/image/admission_popup.png';
    } else {
      acc[key] = defaultValue && typeof defaultValue === 'object' && !Array.isArray(defaultValue) ? mergeContent(defaultValue, savedValue) : (savedValue === undefined ? defaultValue : savedValue);
    }
    return acc;
  }, {});
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
  window.localStorage.setItem(SITE_CONTENT_KEY, JSON.stringify(content));
  window.dispatchEvent(new CustomEvent(SITE_CONTENT_EVENT, { detail: content }));
}

export function resetSiteContent() {
  if (typeof window === 'undefined') return defaultSiteContent;
  window.localStorage.removeItem(SITE_CONTENT_KEY);
  window.dispatchEvent(new CustomEvent(SITE_CONTENT_EVENT, { detail: defaultSiteContent }));
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
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener(SITE_CONTENT_EVENT, sync);
    };
  }, []);
  return content;
}
