import React, { useState } from 'react';
import { Play, Sparkles, X } from 'lucide-react';

export default function Hero() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
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
    <section id="home" className="hero-layered-section">
      {/* Curved Line Decoration SVGs */}
      <svg className="hero-curve-decor" width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100 650 C 300 750, 500 450, 900 550 C 1200 600, 1300 450, 1600 500" className="curve-path" />
        <path d="M-50 200 C 400 100, 600 400, 1000 250 C 1300 150, 1400 300, 1500 200" className="curve-path" />
      </svg>

      {/* Large Background Text */}
      <div className="hero-bg-text-wrapper">
        <div className="hero-bg-text">Elena Vance</div>
      </div>

      <div className="container">
        <div className="hero-layered-grid">
          
          {/* Left Column: Frosted Glass Panel */}
          <div className="frosted-glass-card animate-fade-in">
            <div className="frosted-card-badge">
              <Sparkles size={14} className="badge-icon" />
              Mindfulness & Motion
            </div>
            
            <h1 className="frosted-card-title">
              Flow in stillness.
            </h1>
            
            <p className="frosted-card-desc">
              Discover a space where alignment meets breath. Tailored Vinyasa flows, deep-tissue Yin release, and conscious breathwork designed to help you reconnect and build quiet strength.
            </p>

            <div className="hero-stats-row">
              <div className="stat-col">
                <span className="stat-val">8+ Yrs</span>
                <span className="stat-desc">Teaching</span>
              </div>
              <div className="stat-col">
                <span className="stat-val">500hr</span>
                <span className="stat-desc">RYT Alliance</span>
              </div>
              <div className="stat-col">
                <span className="stat-val">2k+</span>
                <span className="stat-desc">Students</span>
              </div>
            </div>

            {/* Overlapping terracotta Book button */}
            <a 
              href="#schedule" 
              className="btn btn-tertiary overlap-cta-btn"
              onClick={(e) => handleScrollTo(e, '#schedule')}
            >
              Book Class Slot
            </a>
          </div>

          {/* Right Column: Yoga Pose Image */}
          <div className="hero-layered-image-container animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="hero-layered-image-wrapper">
              <img 
                src="/hero_backbend.png" 
                alt="Elena Vance practicing elegant wild thing yoga backbend" 
                className="hero-layered-image" 
              />
              
              {/* Play Video Trigger */}
              <button 
                className="hero-media-trigger"
                onClick={() => setShowVideoModal(true)}
                aria-label="Play welcome introduction"
                title="Play Video Introduction"
              >
                <Play size={22} fill="currentColor" style={{ marginLeft: '4px' }} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Video Intro Modal */}
      {showVideoModal && (
        <div className="modal-overlay" onClick={() => setShowVideoModal(false)}>
          <div className="modal-content video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowVideoModal(false)}>
              <X size={20} />
            </button>
            <div className="video-mockup-body">
              <div className="serene-quote-decor">🧘‍♀️</div>
              <h3 className="modal-title">Welcome to Swati Yoga Sanctuary</h3>
              <p className="modal-subtitle">A personal message from Elena Vance</p>
              <div className="quote-box-inner">
                <p className="zen-quote">
                  "Yoga is not about touching your toes. It is about what you learn on the way down. In our practice, we don't force or strain — we listen. We breathe, we align, and we connect back to ourselves."
                </p>
                <span className="quote-author">— Elena Vance</span>
              </div>
              <p className="video-note">
                Our introductory course is now open for enrollment. Check out the classes below to begin your journey.
              </p>
              <button 
                className="btn btn-primary"
                onClick={(e) => {
                  setShowVideoModal(false);
                  handleScrollTo(e, '#classes');
                }}
              >
                Find Your Practice Style
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
