import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "Elena's morning Vinyasa flow classes have completely changed my daily rhythm. I feel much stronger physically, but more importantly, I carry a sense of deep, focused calm throughout my entire workday.",
      author: "Sarah L.",
      title: "Tech Director & Mother",
      rating: 5
    },
    {
      id: 2,
      text: "The Sound Bath and Yoga Nidra sessions are absolute magic. It is the only time in my week where my overactive mind completely switches off. Elena has a gift for creating a deeply safe and healing atmosphere.",
      author: "David K.",
      title: "Classical Musician",
      rating: 5
    },
    {
      id: 3,
      text: "As someone who had never tried yoga before, I was really nervous about starting. Elena's alignment explanations are so precise, compassionate, and easy to follow. I never feel judged or out of place.",
      author: "Priya M.",
      title: "Primary School Teacher",
      rating: 5
    }
  ];

  const handleNext = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="blob-decorator" style={{ top: '30%', right: '-10%', width: '350px', height: '350px' }}></div>
      <div className="blob-decorator" style={{ bottom: '-5%', left: '5%', width: '400px', height: '400px' }}></div>

      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-badge">Student Reviews</div>
          <h2 className="section-title">Experiences from our community</h2>
          <p className="section-subtitle">
            Hear from students who have integrated mindful movement and conscious breathwork into their everyday life.
          </p>
        </div>

        <div className="testimonials-container grid-2">
          {/* Left: Interactive Testimonial Slider */}
          <div className="testimonial-slider-block">
            <div className="quote-icon-container">
              <Quote size={40} className="quote-mark" />
            </div>

            <div className="testimonial-slider">
              {reviews.map((rev, index) => (
                <div 
                  key={rev.id} 
                  className={`testimonial-slide ${index === activeReviewIndex ? 'active animate-fade-in' : ''}`}
                  style={{ display: index === activeReviewIndex ? 'block' : 'none' }}
                >
                  <div className="star-rating">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" className="star-icon" />
                    ))}
                  </div>
                  <p className="review-text">"{rev.text}"</p>
                  <div className="review-author-meta">
                    <p className="author-name">{rev.author}</p>
                    <p className="author-title">{rev.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-controls">
              <button 
                onClick={handlePrev} 
                className="slider-arrow-btn"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="slider-counter">
                {activeReviewIndex + 1} / {reviews.length}
              </span>
              <button 
                onClick={handleNext} 
                className="slider-arrow-btn"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right: Beautiful Visual Gallery Grid using Generated Assets */}
          <div className="gallery-visual-block">
            <div className="gallery-grid">
              <div className="gallery-item item-large">
                <img 
                  src="/gallery2.png" 
                  alt="Yoga class stretching together" 
                  className="gallery-img"
                />
                <div className="gallery-img-overlay">
                  <span>Community Session</span>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src="/gallery1.png" 
                  alt="Tibetan singing bowl and candle" 
                  className="gallery-img"
                />
                <div className="gallery-img-overlay">
                  <span>Meditation & Sound</span>
                </div>
              </div>
              <div className="gallery-item item-text-card flex-center">
                <div className="interior-text-card">
                  <h4>Find Peace</h4>
                  <p>Our warm, plant-filled boutique sanctuary in the heart of the city.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
