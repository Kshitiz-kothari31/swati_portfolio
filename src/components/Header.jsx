import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';

// Custom Facebook SVG Icon
const FacebookIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// Custom Twitter SVG Icon
const TwitterIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

// Custom Instagram SVG Icon
const InstagramIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Custom Pinterest SVG Icon
const PinterestIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.27 2.68 7.91 6.46 9.39-.09-.8-.17-2.03.03-2.91.19-.8 1.25-5.3 1.25-5.3s-.32-.64-.32-1.59c0-1.49.86-2.6 1.94-2.6 1 0 1.48.75 1.48 1.65 0 .99-.63 2.47-.95 3.84-.27 1.15.58 2.08 1.71 2.08 2.06 0 3.64-2.17 3.64-5.3 0-2.77-1.99-4.71-4.83-4.71-3.29 0-5.23 2.47-5.23 5.03 0 1 .38 2.06.86 2.64.1.11.11.21.08.31-.09.37-.29 1.18-.33 1.34-.05.21-.17.26-.39.16-1.46-.68-2.37-2.82-2.37-4.54 0-3.69 2.68-7.09 7.74-7.09 4.06 0 7.22 2.89 7.22 6.77 0 4.04-2.54 7.28-6.08 7.28-1.19 0-2.31-.62-2.69-1.35 0 0-.59 2.24-.73 2.79-.27 1.03-.99 2.32-1.47 3.11C10.5 21.75 11.24 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

export default function Header({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">

        {/* Top Row: Socials, Logo, Actions */}
        <div className="header-top-row">

          {/* Social Links (Left) */}
          <div className="header-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="header-social-link" aria-label="Facebook">
              <FacebookIcon size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="header-social-link" aria-label="Twitter">
              <TwitterIcon size={16} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="header-social-link" aria-label="Pinterest">
              <PinterestIcon size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="header-social-link" aria-label="Instagram">
              <InstagramIcon size={16} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="header-social-link" aria-label="Pinterest Alternative">
              <PinterestIcon size={16} />
            </a>
          </div>

          {/* Calligraphic Logo (Center) */}
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
            <span className="logo-primary">Yog</span>
            <span className="logo-secondary">with dhriti</span>
          </a>

          {/* Actions: Search & Menu (Right) */}
          <div className="header-top-actions">
            <button className="header-action-btn" aria-label="Search" title="Search site">
              <Search size={18} />
            </button>
            <button
              className="header-action-btn mobile-menu-trigger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              title="Menu"
            >
              <Menu size={20} />
            </button>
          </div>

        </div>

        {/* Bottom Row: Centered Navigation */}
        <div className="header-bottom-row">
          <nav className="desktop-nav">
            <ul className="nav-links">

              {/* HOME dropdown */}
              <li className="nav-item-wrapper">
                <a href="#home" className="nav-link active" onClick={(e) => handleNavClick(e, '#home')}>
                  Home <ChevronDown className="nav-link-arrow" size={12} />
                </a>
                <div className="nav-dropdown">
                  <a href="#home" className="dropdown-link" onClick={(e) => handleNavClick(e, '#home')}>Welcome</a>
                  <a href="#about" className="dropdown-link" onClick={(e) => handleNavClick(e, '#about')}>About Instructor</a>
                </div>
              </li>

              {/* PAGES dropdown */}
              <li className="nav-item-wrapper">
                <a href="#classes" className="nav-link" onClick={(e) => handleNavClick(e, '#classes')}>
                  Pages <ChevronDown className="nav-link-arrow" size={12} />
                </a>
                <div className="nav-dropdown">
                  <a href="#classes" className="dropdown-link" onClick={(e) => handleNavClick(e, '#classes')}>Yoga Classes</a>
                  <a href="#schedule" className="dropdown-link" onClick={(e) => handleNavClick(e, '#schedule')}>Weekly Schedule</a>
                </div>
              </li>

              {/* POSTS FORMAT dropdown */}
              <li className="nav-item-wrapper">
                <a href="#resources" className="nav-link" onClick={(e) => handleNavClick(e, '#resources')}>
                  Posts Format <ChevronDown className="nav-link-arrow" size={12} />
                </a>
                <div className="nav-dropdown">
                  <a href="#resources" className="dropdown-link" onClick={(e) => handleNavClick(e, '#resources')}>Mindfulness Tips</a>
                  <a href="#resources" className="dropdown-link" onClick={(e) => handleNavClick(e, '#resources')}>Standard Articles</a>
                </div>
              </li>

              {/* ABOUT (no dropdown) */}
              <li className="nav-item-wrapper">
                <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>
                  About
                </a>
              </li>

              {/* CONTACT (no dropdown) */}
              <li className="nav-item-wrapper">
                <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>
                  Contact
                </a>
              </li>

            </ul>
          </nav>
        </div>

      </div>

      {/* Floating Theme Toggle (Styled like the black circle in mockup) */}
      <button
        onClick={toggleTheme}
        className="floating-theme-toggle"
        aria-label="Toggle theme"
        title={theme === 'sun' ? 'Switch to Moon Mode' : 'Switch to Sun Mode'}
      >
        {theme === 'sun' ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <button
          className="modal-close"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ position: 'absolute', top: '30px', right: '30px', color: 'var(--text-primary)' }}
        >
          <X size={24} />
        </button>

        <nav className="mobile-nav">
          <ul className="mobile-nav-links">
            <li>
              <a href="#home" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#about')}>
                About
              </a>
            </li>
            <li>
              <a href="#classes" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#classes')}>
                Classes
              </a>
            </li>
            <li>
              <a href="#schedule" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#schedule')}>
                Schedule
              </a>
            </li>
            <li>
              <a href="#resources" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#resources')}>
                Resources
              </a>
            </li>
            <li>
              <a href="#contact" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#contact')}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
