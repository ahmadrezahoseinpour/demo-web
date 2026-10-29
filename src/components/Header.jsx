import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/blog', label: 'Insights' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navOffset, setNavOffset] = useState({ x: 0, width: 0 });
  const location = useLocation();
  const activeLinkRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Animate indicator to active link
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink && indicatorRef.current) {
      const rect = activeLink.getBoundingClientRect();
      const navRect = activeLink.closest('.nav-list').getBoundingClientRect();
      indicatorRef.current.style.transform = `translateX(${rect.left - navRect.left}px)`;
      indicatorRef.current.style.width = `${rect.width}px`;
      indicatorRef.current.style.opacity = '1';
    }
  }, [location]);

  const handleMouseMove = (e, linkRef) => {
    if (!isScrolled) return;
    const rect = linkRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    linkRef.current.style.setProperty('--mouse-x', `${x}px`);
    linkRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      {/* Background Layers */}
      <div className="header-bg" aria-hidden="true">
        <div className="header-bg-layer layer-1" />
        <div className="header-bg-layer layer-2" />
        <div className="header-glare" />
      </div>

      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="logo" aria-label="PixelPulse Home">
          <svg className="logo-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="logoGradient" x1="0" y1="0" x2="48" y2="48">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="100%" stopColor="#764ba2" />
              </linearGradient>
            </defs>
            <rect width="48" height="48" rx="12" fill="url(#logoGradient)" />
            <path d="M14 24L21 31L34 17" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" filter="dropShadow(0 2px 4px rgba(0,0,0,0.2))" />
          </svg>
          <span className="logo-text">PixelPulse</span>
          <span className="logo-accent" aria-hidden="true">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Main navigation">
          <ul className="nav-list" role="menubar">
            <li className="nav-indicator-wrapper">
              <span className="nav-indicator" ref={indicatorRef} aria-hidden="true" />
            </li>
            {navLinks.map((link) => (
              <li key={link.path} role="none">
                <Link
                  ref={(el) => { if (location.pathname === link.path) activeLinkRef.current = el; }}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  role="menuitem"
                  onMouseMove={(e) => handleMouseMove(e, { current: e.currentTarget })}
                >
                  <span className="nav-link-text">{link.label}</span>
                  <span className="nav-link-glow" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary btn-lg nav-cta">
            <span>Get Started</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="hamburger" aria-hidden="true">
              <span className="bar bar-1" />
              <span className="bar bar-2" />
              <span className="bar bar-3" />
            </span>
            <span className="menu-text">{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-bg" aria-hidden="true">
          <div className="mobile-menu-blur" />
        </div>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list" role="menubar">
            {navLinks.map((link, index) => (
              <li key={link.path} style={{ transitionDelay: `${index * 50}ms` }} role="none">
                <Link
                  to={link.path}
                  className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  role="menuitem"
                >
                  <span className="mobile-nav-text">{link.label}</span>
                  <svg className="mobile-nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary btn-lg mobile-cta">
            <span>Get Started</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Scroll Progress Bar */}
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-bar" id="scrollProgress" />
      </div>
    </header>
  );
}