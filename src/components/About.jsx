import React, { useState } from 'react';
import { Award, Heart, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function About() {
  const [showFullJourney, setShowFullJourney] = useState(false);

  const certifications = [
    { title: 'RYT 500 certified', issuer: 'Yoga Alliance USA' },
    { title: 'Breathwork Specialist', issuer: 'Pranayama Institute' },
    { title: 'Meditation Coach', issuer: 'Mindfulness Association' },
    { title: 'Ayurveda Consultant', issuer: 'Himalayan Academy India' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container grid-2">
        {/* Left Side: Professional Portrait */}
        <div className="about-visual">
          <div className="about-image-wrapper">
            <img 
              src="/about.png" 
              alt="Elena Vance Portrait" 
              className="about-image" 
            />
            <div className="about-image-border"></div>
            
            <div className="philosophy-quote-card">
              <Heart size={20} className="philosophy-icon" />
              <p className="philosophy-text">
                "Yoga is not a workout; it is a work-in."
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Description and credentials */}
        <div className="about-content">
          <div className="section-badge">Meet Elena Vance</div>
          <h2 className="section-title">Cultivating balance, strength, and inner stillness</h2>
          
          <p className="about-paragraph">
            Hi, I’m Elena. My journey into yoga began over a decade ago when I was looking for a way to manage high-pressure stress. On the mat, I found more than physical relief; I discovered a lifelong sanctuary of stillness and self-connection.
          </p>
          
          <p className="about-paragraph">
            I spent years studying under traditional masters in Rishikesh, India, earning my 500-hour RYT certification. I specialize in weaving mindful, alignment-focused dynamic movement with deep pranayama (breath control) and soothing sound meditations.
          </p>

          {/* Collapsible expanded section */}
          {showFullJourney && (
            <div className="expanded-journey-text animate-fade-in">
              <p className="about-paragraph additional-story">
                My teaching style is compassionate, encouraging, and deeply customized. I believe that every body is unique, and yoga should adapt to the practitioner, not the other way around. Whether you are stepping onto the mat for the first time or looking to deepen an advanced vinyasa practice, I aim to create a safe space for you to heal and grow.
              </p>
              <p className="about-paragraph additional-story">
                Outside of group classes, I lead wellness retreats, offer private ayurvedic lifestyle consultations, and write resources to make mindfulness easy and accessible for daily modern life.
              </p>
            </div>
          )}

          <button 
            className="btn btn-secondary inline-toggle-btn"
            onClick={() => setShowFullJourney(!showFullJourney)}
          >
            {showFullJourney ? (
              <>Show Less <ChevronUp size={16} /></>
            ) : (
              <>Read My Full Journey <ChevronDown size={16} /></>
            )}
          </button>

          <div className="certifications-box">
            <h3 className="certifications-title">
              <Award size={18} className="cert-title-icon" />
              Accreditations & Certifications
            </h3>
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                  <CheckCircle2 size={16} className="cert-check-icon" />
                  <div>
                    <p className="cert-card-title">{cert.title}</p>
                    <p className="cert-card-issuer">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
