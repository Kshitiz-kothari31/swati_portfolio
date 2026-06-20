import React from 'react';

export default function Hero() {
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

  const stats = [
    { num: '130+', label: 'Lessons' },
    { num: '30+', label: 'Courses' },
    { num: '15+', label: 'Tutors' }
  ];

  return (
    <section id="home" className="new-hero-section">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column: Copywriting & Stats */}
          <div className="hero-content-left">
            <h1 className="hero-title">
              Best Yoga tutorials for Home workouts
              <span className="hero-title-cursor">|</span>
            </h1>
            
            <p className="hero-desc">
              Finding the best yoga tutorials for home workouts can greatly enhance your practice and help you achieve your fitness.
            </p>

            <a 
              href="#classes" 
              className="btn hero-cta-btn"
              onClick={(e) => handleScrollTo(e, '#classes')}
            >
              Start Learning
            </a>

            {/* Circular Stats */}
            <div className="hero-stats-circles">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-circle">
                  <span className="stat-circle-num">{stat.num}</span>
                  <span className="stat-circle-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Empty right column placeholder to maintain grid alignment on left */}
          <div className="hero-right-placeholder"></div>

        </div>
      </div>

      {/* Right Column: Meditating Woman Composite Graphic (Direct child of section for full-bleed) */}
      <div className="hero-image-right-container">
        <div className="hero-composite-wrapper">
          <img 
            src="/hero_swati.jpg" 
            alt="Dhriti standing in namaste pose at the sanctuary entryway" 
            className="hero-composite-img" 
          />
        </div>
      </div>
    </section>
  );
}
