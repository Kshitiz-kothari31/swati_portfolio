import React from 'react';
import { Sprout, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Footer Brand Info */}
        <div className="footer-brand-column">
          <div className="logo footer-logo">
            <Sprout className="logo-icon" size={24} />
            <span className="logo-text">Elena Vance</span>
          </div>
          <p className="footer-tagline">
            Cultivating mindful movement, deep breathing, and holistic inner stillness for modern life.
          </p>
          <div className="love-statement">
            <span>Made with</span>
            <Heart size={14} fill="var(--accent-clay)" stroke="var(--accent-clay)" className="heart-pulse-icon" />
            <span>in serenity</span>
          </div>
        </div>

        {/* Footer Links Column 1 */}
        <div className="footer-links-column">
          <h4>Explore</h4>
          <ul>
            <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Elena</a></li>
            <li><a href="#classes" onClick={(e) => handleNavClick(e, '#classes')}>Practice Styles</a></li>
            <li><a href="#schedule" onClick={(e) => handleNavClick(e, '#schedule')}>Class Schedule</a></li>
          </ul>
        </div>

        {/* Footer Links Column 2 */}
        <div className="footer-links-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#resources" onClick={(e) => handleNavClick(e, '#resources')}>Wellness Hub</a></li>
            <li><a href="#resources" onClick={(e) => handleNavClick(e, '#resources')}>Breathwork Tips</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Private Bookings</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Corporate Wellness</a></li>
          </ul>
        </div>

        {/* Footer Back to top */}
        <div className="footer-action-column flex-center">
          <button 
            className="back-to-top-btn flex-center"
            onClick={handleScrollToTop}
            aria-label="Scroll back to top"
            title="Scroll to Top"
          >
            <ArrowUp size={20} />
            <span className="back-to-top-text">Back to Top</span>
          </button>
        </div>

      </div>

      {/* Footer Bottom copyright banner */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Elena Vance Yoga. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#home">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#home">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
