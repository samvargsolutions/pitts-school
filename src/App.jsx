import React from 'react';
import { Agentation } from 'agentation';
import LogoPreloader from './components/LogoPreloader';
import Header from './components/HeaderLinked';
import HeroSlideshow from './components/HeroSlideshowModular';
import AboutPitts from './components/AboutPitts';
import LatestHighlights from './components/LatestHighlightsModular';
import ResultsProud from './components/ResultsProudModular';
import LearningBeyondBooks from './components/LearningBeyondBooks';
import Footer from './components/FooterLinked';
import AboutUsSection from './components/AboutUsSection';
import InfrastructureShowcase from './components/InfrastructureShowcase';
import NewsAndNotices from './components/NewsAndNotices';
import EventsSection from './components/EventsSection';
import NewslettersSection from './components/NewslettersSection';
import FacultySection from './components/FacultySection';
import CBSEResultSection from './components/CBSEResultSection';
import AdmissionTestResultSection from './components/AdmissionTestResultSection';
import OtherResultSection from './components/OtherResultSection';
import ContactSection from './components/ContactSection';
import GallerySection from './components/GallerySection';
import SchoolDisclosureSection from './components/SchoolDisclosureSection';
import PrincipalDeskSection from './components/PrincipalDeskSection';
import SchoolRulesSection from './components/SchoolRulesSection';
import ParentRulesSection from './components/ParentRulesSection';
import ManagementSection from './components/ManagementSection';
import AdmissionPopup from './components/AdmissionPopupModular';
import { CulturalCoCurricularPage, SportsActivityPage } from './components/StudentLifeShowcase';
import AdminPortal from './components/AdminPortal';
import { versionPublicAssetUrl } from './context/siteContent';

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isAboutUsPage = pathname === '/about-us';
  const isInfrastructurePage = pathname === '/infrastructure';
  const isNewsNoticesPage = pathname === '/news-and-notices' || pathname === '/news' || pathname === '/notices' || pathname.startsWith('/news/') || pathname.startsWith('/notices/');
  const isEventsPage = pathname === '/events' || pathname === '/upcoming-events';
  const isNewslettersPage = pathname === '/newsletters' || pathname === '/newsletter' || pathname.startsWith('/newsletter/') || pathname === '/e-magazine';
  const isFacultyPage = pathname === '/faculty' || pathname === '/staff' || pathname === '/faculty-staff';
  const isCBSEResultPage = pathname === '/CBSEresult' || pathname === '/cbse-result' || pathname === '/results';
  const isAdmissionTestPage = pathname === '/AdmissionTestResult' || pathname === '/admission-test-result';
  const isOtherResultPage = pathname === '/OtherResult' || pathname === '/other-result';
  const isContactPage = pathname === '/contact' || pathname === '/contact-us' || pathname === '/online-pay' || pathname === '/erp-login' || pathname === '/privacy';
  const isGalleryPage = pathname === '/gallery';
  const isDisclosurePage = pathname === '/school-disclosure' || pathname === '/mandatory-public-disclosure' || pathname === '/mandatory-disclosure' || pathname === '/disclosure' || pathname.toLowerCase() === '/school_disclosure';
  const normalizedPath = pathname.toLowerCase();
  const isCulturalPage = normalizedPath === '/culturalcoculturalactivity' || normalizedPath === '/culturalcoculturalactivity.aspx' || normalizedPath === '/co-curricular-activity' || normalizedPath === '/cultural-activities';
  const isSportsPage = normalizedPath === '/sports' || normalizedPath === '/sports.aspx' || normalizedPath === '/sports-activity';
  const isPrincipalPage = normalizedPath === '/principal' || normalizedPath === '/principals-desk' || normalizedPath === '/principal-desk' || normalizedPath === '/principal-message' || normalizedPath === '/principal.aspx';
  const isRule1Page = normalizedPath === '/rule1' || normalizedPath === '/rule1.aspx' || normalizedPath === '/school-rules' || normalizedPath === '/rules1';
  const isRule2Page = normalizedPath === '/rule2' || normalizedPath === '/rule2.aspx' || normalizedPath === '/rules-for-parents' || normalizedPath === '/rule2.aspx' || normalizedPath === '/rules2';
  const isManagementPage = normalizedPath === '/management' || normalizedPath === '/our-management' || normalizedPath === '/management.aspx' || normalizedPath === '/our-management.aspx' || normalizedPath === '/managing-committee';

  const isAdminPage = pathname === '/admin' || pathname === '/admin-login';
  const isHomePage = pathname === '/';

  React.useEffect(() => {
    const retryLocalImage = (event) => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement) || image.dataset.assetRetry === 'true') return;

      try {
        const currentUrl = new URL(image.currentSrc || image.src, window.location.origin);
        if (currentUrl.origin !== window.location.origin) return;
        if (!/\.(webp|png|jpe?g|svg)$/i.test(currentUrl.pathname)) return;

        image.dataset.assetRetry = 'true';
        image.src = versionPublicAssetUrl(`${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`);
      } catch {
        // Ignore malformed image URLs and leave the browser's native broken image state.
      }
    };

    window.addEventListener('error', retryLocalImage, true);
    return () => window.removeEventListener('error', retryLocalImage, true);
  }, []);

  if (isAdminPage) {
    return <AdminPortal />;
  }

  return (
    <>
      {isHomePage && <LogoPreloader />}
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        {!isHomePage && <div className="global-bg-logo-watermark" aria-hidden="true" />}
        {isHomePage && <AdmissionPopup />}

        <div className="main-page-wrapper">
          {isAboutUsPage ? (
            <>
              {/* === MOVABLE SECTION START: About Us Page === */}
              <AboutUsSection />
              {/* === MOVABLE SECTION END: About Us Page === */}
            </>
          ) : isInfrastructurePage ? (
            <>
              {/* === MOVABLE SECTION START: Infrastructure Showcase Page === */}
              <InfrastructureShowcase />
              {/* === MOVABLE SECTION END: Infrastructure Showcase Page === */}
            </>
          ) : isNewsNoticesPage ? (
            <>
              {/* === MOVABLE SECTION START: News & Notices Page === */}
              <NewsAndNotices />
              {/* === MOVABLE SECTION END: News & Notices Page === */}
            </>
          ) : isEventsPage ? (
            <>
              {/* === MOVABLE SECTION START: Upcoming Events Page === */}
              <EventsSection />
              {/* === MOVABLE SECTION END: Upcoming Events Page === */}
            </>
          ) : isNewslettersPage ? (
            <>
              {/* === MOVABLE SECTION START: Newsletters & E-Magazines Page === */}
              <NewslettersSection />
              {/* === MOVABLE SECTION END: Newsletters & E-Magazines Page === */}
            </>
          ) : isFacultyPage ? (
            <>
              {/* === MOVABLE SECTION START: Faculty & Staff Directory Page === */}
              <FacultySection />
              {/* === MOVABLE SECTION END: Faculty & Staff Directory Page === */}
            </>
          ) : isCBSEResultPage ? (
            <>
              {/* === MOVABLE SECTION START: CBSE Board Examination Results Page === */}
              <CBSEResultSection />
              {/* === MOVABLE SECTION END: CBSE Board Examination Results Page === */}
            </>
          ) : isAdmissionTestPage ? (
            <>
              {/* === MOVABLE SECTION START: Admission Test Results Page === */}
              <AdmissionTestResultSection />
              {/* === MOVABLE SECTION END: Admission Test Results Page === */}
            </>
          ) : isOtherResultPage ? (
            <>
              {/* === MOVABLE SECTION START: Other Results Page === */}
              <OtherResultSection />
              {/* === MOVABLE SECTION END: Other Results Page === */}
            </>
          ) : isContactPage ? (
            <>
              {/* === MOVABLE SECTION START: Contact Us Page === */}
              <ContactSection />
              {/* === MOVABLE SECTION END: Contact Us Page === */}
            </>
          ) : isGalleryPage ? (
            <>
              {/* === MOVABLE SECTION START: Gallery Page === */}
              <GallerySection />
              {/* === MOVABLE SECTION END: Gallery Page === */}
            </>
          ) : isDisclosurePage ? (
            <>
              {/* === MOVABLE SECTION START: Mandatory Public Disclosure Page === */}
              <SchoolDisclosureSection />
              {/* === MOVABLE SECTION END: Mandatory Public Disclosure Page === */}
            </>
          ) : isCulturalPage ? (
            <>
              {/* === MOVABLE SECTION START: Cultural & Co-Curricular Page === */}
              <CulturalCoCurricularPage />
              {/* === MOVABLE SECTION END: Cultural & Co-Curricular Page === */}
            </>
          ) : isSportsPage ? (
            <>
              {/* === MOVABLE SECTION START: Sports Activity Page === */}
              <SportsActivityPage />
              {/* === MOVABLE SECTION END: Sports Activity Page === */}
            </>
          ) : isPrincipalPage ? (
            <>
              {/* === MOVABLE SECTION START: Principal's Desk Page === */}
              <PrincipalDeskSection />
              {/* === MOVABLE SECTION END: Principal's Desk Page === */}
            </>
          ) : isRule1Page ? (
            <>
              {/* === MOVABLE SECTION START: School Rules Page === */}
              <SchoolRulesSection />
              {/* === MOVABLE SECTION END: School Rules Page === */}
            </>
          ) : isRule2Page ? (
            <>
              {/* === MOVABLE SECTION START: Parent Rules Page === */}
              <ParentRulesSection />
              {/* === MOVABLE SECTION END: Parent Rules Page === */}
            </>
          ) : isManagementPage ? (
            <>
              {/* === MOVABLE SECTION START: Management Page === */}
              <ManagementSection />
              {/* === MOVABLE SECTION END: Management Page === */}
            </>
          ) : (
            <>
              {/* Slideshow hero section after header */}
              <HeroSlideshow />

              {/* === MOVABLE SECTION START: About Pitts === */}
              <AboutPitts />
              {/* === MOVABLE SECTION END: About Pitts === */}

              {/* === MOVABLE SECTION START: Latest Highlights === */}
              <LatestHighlights />
              {/* === MOVABLE SECTION END: Latest Highlights === */}

              {/* === MOVABLE SECTION START: Results Proud === */}
              <ResultsProud />
              {/* === MOVABLE SECTION END: Results Proud === */}

              {/* === MOVABLE SECTION START: Learning Beyond Books === */}
              <LearningBeyondBooks />
              {/* === MOVABLE SECTION END: Learning Beyond Books === */}
            </>
          )}

          {/* Pure White Background Container */}
          <main className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 py-12 text-center text-gray-400 text-sm">
              {/* Subtle placeholder indicating clean white workspace */}
            </div>
          </main>
        </div>

        {/* === MOVABLE SECTION START: Footer === */}
        <Footer />
        {/* === MOVABLE SECTION END: Footer === */}

        {import.meta.env.DEV && <Agentation />}
      </div>
    </>
  );
}

