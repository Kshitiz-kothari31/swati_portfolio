import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Heart } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', interest: 'Group Classes', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title">Begin your yoga journey</h2>
          <p className="section-subtitle">
            Have questions about a style, interest in private session availability, or corporate wellness offerings? Reach out below.
          </p>
        </div>

        <div className="contact-grid grid-2">
          {/* Left Column: Direct Info & Map Mockup */}
          <div className="contact-info-block">
            <h3 className="contact-subtitle">Sanctuary Details</h3>
            <p className="contact-description">
              You can find our boutique studio in the heart of the city, styled with soft warm lighting, air-purifying plants, and natural wood fixtures to provide a peaceful atmosphere.
            </p>

            <div className="contact-info-items">
              <div className="info-item-row">
                <div className="info-icon-wrapper">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4>Studio Location</h4>
                  <p>Serene Sanctuary, Room 302, 108 Shanti Boulevard, City Centre</p>
                </div>
              </div>

              <div className="info-item-row">
                <div className="info-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>elena@sereneyoga.com</p>
                </div>
              </div>

              <div className="info-item-row">
                <div className="info-icon-wrapper">
                  <Phone size={18} />
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>+1 (555) 789-9642 (Mon-Sat, 8am - 7pm)</p>
                </div>
              </div>
            </div>

            {/* Simulated Vector Map */}
            <div className="map-mockup-container">
              <div className="vector-map-bg">
                {/* SVG representing a peaceful minimalist map */}
                <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-map">
                  {/* Streets */}
                  <line x1="20" y1="0" x2="20" y2="200" stroke="var(--border-color)" strokeWidth="4" />
                  <line x1="120" y1="0" x2="120" y2="200" stroke="var(--border-color)" strokeWidth="6" />
                  <line x1="280" y1="0" x2="280" y2="200" stroke="var(--border-color)" strokeWidth="4" />
                  <line x1="0" y1="80" x2="400" y2="80" stroke="var(--border-color)" strokeWidth="6" />
                  <line x1="0" y1="160" x2="400" y2="160" stroke="var(--border-color)" strokeWidth="4" />
                  {/* Green Park */}
                  <rect x="140" y="10" width="120" height="60" rx="8" fill="var(--accent-sage-alpha)" stroke="var(--border-color)" strokeWidth="1" />
                  <text x="175" y="45" fill="var(--accent-sage-light)" fontSize="12" fontFamily="var(--font-sans)">Shanti Park</text>
                  {/* Location Pin */}
                  <g className="animate-float">
                    <circle cx="280" cy="80" r="16" fill="var(--accent-clay-alpha)" />
                    <circle cx="280" cy="80" r="8" fill="var(--accent-clay)" />
                    <path d="M280 80L275 62C275 62 277.5 60 280 60C282.5 60 285 62 285 62L280 80Z" fill="var(--accent-clay)" />
                  </g>
                </svg>
                <div className="map-location-tag">
                  <Heart size={12} fill="currentColor" style={{ marginRight: '4px' }} />
                  <span>Serene Sanctuary Room 302</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="social-links-wrapper">
              <h4>Follow Our Daily Practice</h4>
              <div className="social-icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="contact-form-card card">
            {!submitted ? (
              <form onSubmit={handleContactSubmit} className="contact-form">
                <h3 className="form-card-title">Send a Message</h3>
                <p className="form-card-subtitle">Complete the details below, and I will get back to you within 24 hours.</p>
                
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    required 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    required 
                    placeholder="you@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-interest">I am interested in...</label>
                  <select 
                    id="contact-interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  >
                    <option value="Group Classes">Weekly Group Classes</option>
                    <option value="Private Sessions">1-on-1 Private Sessions</option>
                    <option value="Corporate Wellness">Corporate Team Sessions</option>
                    <option value="Retreats">Upcoming Weekend Retreats</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea 
                    id="contact-message" 
                    rows="5" 
                    required 
                    placeholder="Tell me a bit about your yoga experience or what you are looking to achieve..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full-width send-btn">
                  <Send size={16} /> Send Inquiry
                </button>
              </form>
            ) : (
              <div className="contact-success-state flex-center">
                <CheckCircle size={56} className="success-icon animate-float" />
                <h3>Inquiry Received!</h3>
                <p>
                  Namaste, <strong>{formData.name}</strong>. Thank you for reaching out.
                </p>
                <div className="receipt-box">
                  <p><strong>Topic:</strong> {formData.interest}</p>
                  <p><strong>Response Email:</strong> {formData.email}</p>
                </div>
                <p className="success-note">
                  A copy of your message has been sent to your email. I look forward to supporting your path to wellness and will email you back shortly.
                </p>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', interest: 'Group Classes', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
