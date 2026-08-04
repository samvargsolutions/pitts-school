import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  MapPin,
  Mail,
  Phone,
  Search,
  X,
  ChevronRight,
  Home,
  Info,
  Building2,
  BookOpen,
  Calendar,
  Trophy,
  Megaphone,
  GraduationCap,
  Image,
  PhoneCall,
  UserCheck,
  UserPlus,
  Users,
  CreditCard,
  ExternalLink,
  Volume2,
  FileText,
  Award,
  BookMarked,
  Briefcase,
  Sparkles,
  Facebook,
  Youtube,
  Instagram,
  Lock
} from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Refs for the right-side school menu drawer.
  const menuRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current || !backdropRef.current) return;
    const drawerOffset = '105%';

    if (isMenuOpen) {
      gsap.set(menuRef.current, { display: 'flex' });
      gsap.set(backdropRef.current, { display: 'block' });

      gsap.fromTo(
        menuRef.current,
        { x: drawerOffset },
        { x: 0, duration: 0.55, ease: 'power3.out' }
      );

      const items = menuRef.current.querySelectorAll('.menu-animate-item');
      if (items.length) {
        gsap.fromTo(
          items,
          { x: 18, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.025, duration: 0.42, ease: 'power3.out', delay: 0.08 }
        );
      }
    } else {
      gsap.set(backdropRef.current, { display: 'none' });

      gsap.to(menuRef.current, {
        x: drawerOffset,
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => {
          if (menuRef.current) gsap.set(menuRef.current, { display: 'none' });
        }
      });
    }
  }, [isMenuOpen]);

  // QUICK ACTIONS pill cards from image.png
  const quickActions = [
    { title: 'Online Registration LKG & UKG, BAL-VATIKA', icon: <UserPlus size={13} /> },
    { title: 'Online Registration STD-I TO STD-V', icon: <UserCheck size={13} /> },
    { title: 'Admission open for XI (2026-27)', icon: <GraduationCap size={13} /> },
    { title: 'Star Of Academic Week', icon: <Award size={13} /> },
    { title: 'E-Magazine : Cynosure', icon: <BookOpen size={13} /> },
    { title: 'E-Diary', icon: <BookMarked size={13} /> }
  ];

  // 4-Column White Card items from image.png
  const subCards = [
    { title: "Principal's Desk", href: '/principal', icon: <FileText size={18} /> },
    { title: 'Star of Week', icon: <Award size={18} /> },
    { title: 'Student TC', icon: <UserCheck size={18} /> },
    { title: 'Vacancy', icon: <Briefcase size={18} /> }
  ];

  // MAIN NAVIGATION links from image.png
  const mainNavLinks = [
    { title: 'Home', href: '/', active: window.location.pathname === '/' || window.location.pathname === '' },
    { title: 'About Us', href: '/about-us', active: window.location.pathname === '/about-us' },
    { title: 'Our Management', href: '/management', active: window.location.pathname === '/management' || window.location.pathname === '/our-management' },
    { title: 'Infrastructure', href: '/infrastructure', active: window.location.pathname === '/infrastructure' },
    { title: 'News & Notices', href: '/news-and-notices', active: window.location.pathname === '/news-and-notices' },
    { title: 'Upcoming Events', href: '/events', active: window.location.pathname === '/events' },
    { title: 'Newsletters & Cynosure', href: '/newsletters', active: window.location.pathname === '/newsletters' },
    { title: 'School Rules', href: '/rule1', active: window.location.pathname === '/rule1' || window.location.pathname === '/rule2' || window.location.pathname === '/school-rules' },
    { title: 'Holiday Assignments' },
    { title: 'Faculty & Staff Directory', href: '/faculty', active: window.location.pathname === '/faculty' },
    { title: 'Result', href: '/CBSEresult', active: window.location.pathname === '/CBSEresult' || window.location.pathname === '/cbse-result' },
    { title: 'Info Link' },
    { title: 'Activity', href: '/culturalcoculturalactivity', active: window.location.pathname === '/culturalcoculturalactivity' || window.location.pathname === '/activity' },
    { title: 'Mandatory Disclosure', href: '/school-disclosure', active: window.location.pathname === '/school-disclosure' || window.location.pathname === '/mandatory-public-disclosure' },
    { title: 'Gallery', href: '/gallery', active: window.location.pathname === '/gallery' },
    { title: 'Contact', href: '/contact', active: window.location.pathname === '/contact' || window.location.pathname === '/contact-us' }
  ];

  return (
    <header className="w-full">
      {/* 1. TOP BANNER BAR (Solid Soft Dark Blue - NO Gradient - Image 2 Style) */}
      <div className="top-banner">
        <div className="top-banner-inner">
          {/* Left info items with yellow icons */}
          <div className="top-banner-left">
            <a
              href="https://maps.google.com/?q=Pitts+Modern+School+Gomia+Bokaro+829112"
              target="_blank"
              rel="noopener noreferrer"
              className="banner-item"
            >
              <MapPin size={14} className="text-[#f4b41a]" />
              <span>Near P.O. I.E. Gomia, Bokaro-829112</span>
            </a>
            <div className="banner-divider hidden md:block"></div>
            <a href="mailto:pms.principal2024@gmail.com" className="banner-item">
              <Mail size={14} className="text-[#f4b41a]" />
              <span>pms.principal2024@gmail.com</span>
            </a>
            <div className="banner-divider hidden sm:block"></div>
            <a href="tel:8797304017" className="banner-item">
              <Phone size={14} className="text-[#f4b41a]" />
              <span>8797304017</span>
            </a>
            <div className="banner-divider hidden lg:block"></div>
            <a href="mailto:erppitts@gmail.com" className="banner-item hidden lg:flex">
              <Mail size={14} className="text-[#f4b41a]" />
              <span>erppitts@gmail.com</span>
            </a>
          </div>

          {/* Right side: Flat social icons + vertical line + Red Online Pay + Outline ERP Login */}
          <div className="top-banner-right">
            {/* Social Icons in straight horizontal line */}
            <div
              className="flex flex-row items-center justify-center flex-nowrap shrink-0"
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px', marginRight: '8px' }}
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-flat"
                title="Facebook"
              >
                <img
                  src="/image/Facebook_logo.webp"
                  alt="Facebook"
                  style={{ width: '17px', height: '17px', objectFit: 'contain', display: 'block' }}
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-flat"
                title="YouTube"
              >
                <img
                  src="/image/YouTube_logo.webp"
                  alt="YouTube"
                  style={{ width: '17px', height: '17px', objectFit: 'contain', display: 'block' }}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-flat"
                title="Instagram"
              >
                <img
                  src="/image/Instagram_logo.webp"
                  alt="Instagram"
                  style={{ width: '17px', height: '17px', objectFit: 'contain', display: 'block' }}
                />
              </a>
            </div>

            <div className="banner-divider shrink-0"></div>

            {/* Solid Red Online Pay Button */}
            <button
              onClick={() => alert('Redirecting to Online Payment Gateway...')}
              className="top-pill-red-btn"
            >
              <CreditCard size={13} />
              <span>Online Pay</span>
            </button>

            {/* Outlined ERP Login Button */}
            <button
              onClick={() => alert('Opening ERP LOGIN Portal...')}
              className="top-pill-outline-btn"
            >
              <Lock size={13} />
              <span>ERP Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE LOGO HEADER BAR (Like The Doon School in White BG) */}
      <div className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="main-header-inner">
          {/* Logo with full school text graphic */}
          <a href="/" className="logo-container">
            <img
              src="/image/logohorizontal.png"
              alt="Pitts Modern School I.E.P.L Gomia Dist Bokaro"
              className="logo-img"
            />
          </a>

          {/* Middle 50/59 Years Anniversary Logo */}
          <div className="header-middle-badge">
            <img
              src="/image/59yearslogo.png"
              alt="Celebrating 50 Years of Excellence in Education"
              className="header-59-img"
            />
          </div>

          {/* Right search icon and hamburger MENU button exactly like Doon School */}
          <div className="header-right-actions">
            {/* Search Icon Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="search-icon-btn"
              aria-label="Search website"
              title="Search"
            >
              <Search size={20} />
            </button>

            {/* Hamburger MENU button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="doon-menu-btn"
              aria-label="Open navigation menu"
            >
              <span>MENU</span>
              <div className="menu-icon-lines">
                <div className="menu-line line-1"></div>
                <div className="menu-line line-2"></div>
                <div className="menu-line line-3"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOVING MARQUEE ANNOUNCEMENT BAR (Inside Header, below logo bar) */}
      <div className="announcement-bar">
        <div className="announcement-inner">
          <div className="announcement-badge">
            <Volume2 size={16} />
            <span>ANNOUNCEMENT</span>
          </div>

          <div className="marquee-container">
            <div className="marquee-track">
              <div className="marquee-item">
                <span>Registration-cum-Final Admission for classes XI (2026-27) is now open!</span>
              </div>
              <div className="marquee-item">
                <span className="red-dot">•</span>
                <span>Recruitment Of Teachers — Click here for Eligibility Criteria and Application Form</span>
              </div>
              <div className="marquee-item">
                <span className="red-dot">•</span>
                <span>Online Registration for LKG &amp; UKG, BAL-VATIKA is ongoing</span>
              </div>
              <div className="marquee-item">
                <span className="red-dot">•</span>
                <span>Star Of Academic Week &amp; E-Magazine : Cynosure now published</span>
              </div>
              <div className="marquee-item">
                <span className="red-dot">•</span>
                <span>Celebrating 50 Years of Excellence in Education</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. RIGHT SLIDE-OUT MENU DRAWER (matching menu.png) */}
      <div
        ref={backdropRef}
        className="menu-drawer-backdrop"
        style={{ display: 'none' }}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        ref={menuRef}
        className="side-menu-drawer"
        style={{ display: 'none', transform: 'translateX(105%)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrollable Inner Body */}
        <div className="side-menu-body">
          {/* Subtle Watermark Emblem in bottom right */}
          <img
            src="/image/logo.png"
            alt=""
            className="side-menu-watermark"
          />

          {/* Close X button at Top Right */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="side-menu-close"
            aria-label="Close menu"
          >
            <X size={25} />
          </button>

          {/* Top Sections Container */}
          <div className="side-menu-content">
            {/* QUICK ACTIONS section */}
            <div className="side-section-title menu-animate-item">
              QUICK ACTIONS
            </div>
            <div className="side-section-rule menu-animate-item"></div>

            {/* 6 White Pill Cards in 2-Column Grid */}
            <div className="quick-actions-grid menu-animate-item">
              {quickActions.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="quick-action-pill"
                >
                  <span className="quick-action-icon">
                    {item.icon}
                  </span>
                  <span className="quick-action-title">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>

            {/* Thin Horizontal Divider */}
            <div className="side-divider menu-animate-item"></div>

            {/* 4-Column White Card */}
            <div className="shortcut-card menu-animate-item">
              {subCards.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href || '#'}
                  onClick={() => setIsMenuOpen(false)}
                  className="shortcut-link"
                >
                  {item.icon}
                  <span>
                    {item.title}
                  </span>
                </a>
              ))}
            </div>

            {/* MAIN NAVIGATION section */}
            <div className="side-section-title menu-animate-item">
              MAIN NAVIGATION
            </div>
            <div className="side-section-rule menu-animate-item"></div>

            {/* Vertical Navigation Links */}
            <nav className="main-navigation-list">
              {mainNavLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href || '#'}
                  onClick={() => setIsMenuOpen(false)}
                  className={`main-navigation-link menu-animate-item ${link.active ? 'active' : ''}`}
                >
                  <span>{link.title}</span>
                  <ChevronRight
                    size={15}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Footer area */}
          <div className="side-menu-footer">
            <div className="side-footer-rule menu-animate-item"></div>
            <div className="side-motto menu-animate-item">
              <Sparkles size={17} />
              <span>
                In Pursuit of Excellence Since 1967
              </span>
            </div>
            <div className="side-socials menu-animate-item">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="side-social-link youtube"
                title="YouTube"
              >
                <Youtube size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="side-social-link facebook"
                title="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="side-social-link instagram"
                title="Instagram"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 5. INTERACTIVE SEARCH MODAL */}
      <div
        className={`search-modal-backdrop ${isSearchOpen ? 'open' : ''}`}
        onClick={() => setIsSearchOpen(false)}
      >
        <div
          className="search-modal-box"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="search-input-wrapper">
            <Search size={24} className="text-[#0b427e]" />
            <input
              type="text"
              placeholder="Search admissions, teachers, notice board..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              autoFocus={isSearchOpen}
            />
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery('');
              }}
              className="search-close-btn"
            >
              ESC / Close
            </button>
          </div>
          <div className="mt-4 text-xs text-gray-500 flex items-center justify-between">
            <span>Popular searches: Class XI Admissions, Teachers Recruitment, Fee Payment, School TC</span>
            <span>Press Enter to search</span>
          </div>
        </div>
      </div>
    </header>
  );
}
