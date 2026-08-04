import React, { useState } from 'react';
import { Award, BookMarked, BookOpen, Briefcase, ChevronRight, CreditCard, Facebook, FileText, GraduationCap, Instagram, Lock, Mail, MapPin, Phone, Search, Sparkles, UserCheck, UserPlus, Volume2, X, Youtube } from 'lucide-react';
import { routeLinks, useSiteContent } from '../context/siteContent';

export default function HeaderLinked() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const siteContent = useSiteContent();
  const path = window.location.pathname;
  const quickIcons = [<UserPlus size={13} />, <UserCheck size={13} />, <GraduationCap size={13} />, <Award size={13} />, <BookOpen size={13} />, <BookMarked size={13} />];
  const quickActions = (siteContent.header.quickActions || []).map((item, index) => ({ ...item, icon: quickIcons[index % quickIcons.length] }));
  const subCards = [
    { title: "Principal's Desk", href: routeLinks.principal, icon: <FileText size={18} /> },
    { title: 'Star of Week', href: routeLinks.news, icon: <Award size={18} /> },
    { title: 'Student TC', href: routeLinks.news, icon: <UserCheck size={18} /> },
    { title: 'Vacancy', href: routeLinks.faculty, icon: <Briefcase size={18} /> },
  ];
  const mainNavLinks = [
    ['Home', routeLinks.home], ['About Us', routeLinks.about], ['Our Story', routeLinks.story], ['Our Management', routeLinks.management],
    ['Infrastructure', routeLinks.infrastructure], ['News & Notices', routeLinks.news], ['Upcoming Events', routeLinks.events], ['Newsletters & Cynosure', routeLinks.newsletters],
    ['School Rules', routeLinks.rules], ['Holiday Assignments', routeLinks.news], ['Faculty & Staff Directory', routeLinks.faculty], ['Result', routeLinks.results],
    ['Sports', routeLinks.sports], ['Co-curricular Activity', routeLinks.cultural], ['Mandatory Disclosure', routeLinks.disclosure], ['Gallery', routeLinks.gallery],
    ['Contact', routeLinks.contact],
  ].map(([title, href]) => ({ title, href, active: path === href }));

  return (
    <header className="w-full">
      <div className="top-banner">
        <div className="top-banner-inner">
          <div className="top-banner-left">
            <a href="https://maps.google.com/?q=Pitts+Modern+School+Gomia+Bokaro+829112" target="_blank" rel="noopener noreferrer" className="banner-item"><MapPin size={14} className="text-[#f4b41a]" /><span>Near P.O. I.E. Gomia, Bokaro-829112</span></a>
            <div className="banner-divider hidden md:block"></div>
            <a href="mailto:pms.principal2024@gmail.com" className="banner-item"><Mail size={14} className="text-[#f4b41a]" /><span>pms.principal2024@gmail.com</span></a>
            <div className="banner-divider hidden sm:block"></div>
            <a href="tel:8797304017" className="banner-item"><Phone size={14} className="text-[#f4b41a]" /><span>8797304017</span></a>
            <div className="banner-divider hidden lg:block"></div>
            <a href="mailto:erppitts@gmail.com" className="banner-item hidden lg:flex"><Mail size={14} className="text-[#f4b41a]" /><span>erppitts@gmail.com</span></a>
          </div>
          <div className="top-banner-right">
            <div className="flex flex-row items-center justify-center flex-nowrap shrink-0" style={{ gap: '15px', marginRight: '8px' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-flat" title="Facebook"><img src="/image/Facebook_logo.webp" alt="Facebook" style={{ width: '17px', height: '17px', objectFit: 'contain' }} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-flat" title="YouTube"><img src="/image/YouTube_logo.webp" alt="YouTube" style={{ width: '17px', height: '17px', objectFit: 'contain' }} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-flat" title="Instagram"><img src="/image/Instagram_logo.webp" alt="Instagram" style={{ width: '17px', height: '17px', objectFit: 'contain' }} /></a>
            </div>
            <div className="banner-divider shrink-0"></div>
            <a href={routeLinks.payments} className="top-pill-red-btn"><CreditCard size={13} /><span>Online Pay</span></a>
            <a href={routeLinks.erp} className="top-pill-outline-btn"><Lock size={13} /><span>ERP Login</span></a>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="main-header-inner">
          <a href={routeLinks.home} className="logo-container"><img src="/image/logohorizontal.webp" alt="Pitts Modern School I.E.P.L Gomia Dist Bokaro" className="logo-img" /></a>
          <div className="header-middle-badge"><img src="/image/59yearslogo.webp" alt="Celebrating 50 Years of Excellence in Education" className="header-59-img" /></div>
          <div className="header-right-actions">
            <button onClick={() => setIsSearchOpen(true)} className="search-icon-btn" aria-label="Search website"><Search size={20} /></button>
            <button onClick={() => setIsMenuOpen(true)} className="doon-menu-btn" aria-label="Open navigation menu"><span>MENU</span><div className="menu-icon-lines"><div className="menu-line line-1"></div><div className="menu-line line-2"></div><div className="menu-line line-3"></div></div></button>
          </div>
        </div>
      </div>

      <div className="announcement-bar">
        <div className="announcement-inner">
          <div className="announcement-badge"><Volume2 size={16} /><span>ANNOUNCEMENT</span></div>
          <div className="marquee-container"><div className="marquee-track">
            {[...(siteContent.header.announcements || []), ...(siteContent.header.announcements || [])].map((item, index) => (
              <a className="marquee-item" href={item.href || routeLinks.news} key={`${item.text}-${index}`}>{index > 0 && <span className="red-dot">•</span>}<span>{item.text}</span></a>
            ))}
          </div></div>
        </div>
      </div>

      {isMenuOpen && <button className="menu-drawer-backdrop" style={{ display: 'block' }} onClick={() => setIsMenuOpen(false)} aria-label="Close navigation" />}
      <div className="side-menu-drawer" style={{ display: isMenuOpen ? 'flex' : 'none', transform: isMenuOpen ? 'translateX(0)' : 'translateX(105%)' }}>
        <div className="side-menu-body">
          <img src="/image/logo.webp" alt="" className="side-menu-watermark" />
          <button onClick={() => setIsMenuOpen(false)} className="side-menu-close" aria-label="Close menu"><X size={25} /></button>
          <div className="side-menu-content">
            <div className="side-section-title menu-animate-item">QUICK ACTIONS</div><div className="side-section-rule menu-animate-item"></div>
            <div className="quick-actions-grid menu-animate-item">{quickActions.map((item, index) => <a key={index} href={item.href || routeLinks.news} onClick={() => setIsMenuOpen(false)} className="quick-action-pill"><span className="quick-action-icon">{item.icon}</span><span className="quick-action-title">{item.title}</span></a>)}</div>
            <div className="side-divider menu-animate-item"></div>
            <div className="shortcut-card menu-animate-item">{subCards.map((item) => <a key={item.title} href={item.href} onClick={() => setIsMenuOpen(false)} className="shortcut-link">{item.icon}<span>{item.title}</span></a>)}</div>
            <div className="side-section-title menu-animate-item">MAIN NAVIGATION</div><div className="side-section-rule menu-animate-item"></div>
            <nav className="main-navigation-list">{mainNavLinks.map((link) => <a key={link.title} href={link.href} onClick={() => setIsMenuOpen(false)} className={`main-navigation-link menu-animate-item ${link.active ? 'active' : ''}`}><span>{link.title}</span><ChevronRight size={15} aria-hidden="true" /></a>)}</nav>
          </div>
          <div className="side-menu-footer"><div className="side-footer-rule menu-animate-item"></div><div className="side-motto menu-animate-item"><Sparkles size={17} /><span>In Pursuit of Excellence Since 1967</span></div><div className="side-socials menu-animate-item"><a href="https://youtube.com" className="side-social-link youtube"><Youtube size={15} /></a><a href="https://facebook.com" className="side-social-link facebook"><Facebook size={15} /></a><a href="https://instagram.com" className="side-social-link instagram"><Instagram size={15} /></a></div></div>
        </div>
      </div>

      <div className={`search-modal-backdrop ${isSearchOpen ? 'open' : ''}`} onClick={() => setIsSearchOpen(false)}>
        <div className="search-modal-box" onClick={(event) => event.stopPropagation()}>
          <div className="search-input-wrapper"><Search size={24} className="text-[#0b427e]" /><input type="text" placeholder="Search admissions, teachers, notice board..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className="search-input" autoFocus={isSearchOpen} /><button onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} className="search-close-btn">ESC / Close</button></div>
          <div className="mt-4 text-xs text-gray-500 flex items-center justify-between"><span>Popular searches: Class XI Admissions, Teachers Recruitment, Fee Payment, School TC</span><span>Press Enter to search</span></div>
        </div>
      </div>
    </header>
  );
}
