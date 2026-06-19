import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Sprout } from 'lucide-react';

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

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Classes', href: '#classes' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ];

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
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
          <Sprout className="logo-icon animate-float" size={24} />
          <span className="logo-text">Elena Vance</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Toggle theme"
            title={theme === 'sun' ? 'Switch to Moon Mode' : 'Switch to Sun Mode'}
          >
            {theme === 'sun' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Book CTA */}
          <a 
            href="#schedule" 
            className="btn btn-primary header-cta"
            onClick={(e) => handleNavClick(e, '#schedule')}
          >
            Book Class
          </a>

          {/* Mobile Menu Trigger */}
          <button 
            className="mobile-menu-trigger" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.label} style={{ animationDelay: `${navItems.indexOf(item) * 0.1}s` }}>
                <a 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mobile-nav-cta-item">
              <a 
                href="#schedule" 
                className="btn btn-primary"
                onClick={(e) => handleNavClick(e, '#schedule')}
              >
                Book a Class
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
