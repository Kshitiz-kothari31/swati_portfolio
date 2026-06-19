import React, { useState } from 'react';
import { Calendar, BookOpen, ArrowRight, X, Mail, Check } from 'lucide-react';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const articles = [
    {
      id: 501,
      title: "5 Simple Breathwork Exercises for Midday Calm",
      date: "June 12, 2026",
      readTime: "4 min read",
      category: "Breathwork",
      excerpt: "Relieve workday stress in minutes. Explore simple pranayama techniques like Box Breathing and Alternate Nostril Breathing (Nadi Shodhana) that you can practice right at your desk.",
      content: [
        "Modern workdays are filled with constant stimulation. Our nervous systems are frequently locked in a low-grade 'fight-or-flight' state, leading to shallow breathing, tense shoulders, and mental fatigue.",
        "Fortunately, we carry the ultimate tool for nervous system regulation with us everywhere: our breath. By consciously changing our breathing patterns, we send direct signals to our brain to switch on the parasympathetic nervous system, lowering heart rate and cortisol levels.",
        "Here are three quick exercises to try today:\n\n1. Box Breathing (4-4-4-4): Inhale for 4 seconds, hold the breath full for 4 seconds, exhale for 4 seconds, and hold empty for 4 seconds. Repeat for 4-5 cycles.\n2. Exhale Extension (4-8): Inhale for 4 seconds, and exhale slowly for 8 seconds. Extending the exhale is the fastest way to signal safety to the brain.\n3. Nadi Shodhana (Alternate Nostril): Gently close your right nostril with your thumb, inhale through the left. Close the left with your ring finger, release and exhale through the right. Inhale right, close right, exhale left. Repeat for 3 minutes.",
        "Take a moment, close your eyes, and try just five conscious rounds of box breathing. Feel the shift in your posture, your mind, and your presence."
      ]
    },
    {
      id: 502,
      title: "Understanding Your Dosha: Ayurveda 101",
      date: "May 28, 2026",
      readTime: "6 min read",
      category: "Ayurveda",
      excerpt: "Discover the sister science of yoga. Learn about Vata, Pitta, and Kapha constitution types, and how identifying your unique dosha helps you optimize your diet and yoga practice.",
      content: [
        "Yoga and Ayurveda are sister sciences, born from the same Vedic wisdom. While yoga focuses on spiritual connection and mental clarity through movement, Ayurveda concentrates on keeping the physical body balanced using food, herbs, and daily routines.",
        "According to Ayurveda, everything in the universe is made up of five elements: space, air, fire, water, and earth. In the human body, these combine into three primary vital energies or 'doshas': Vata (air/space), Pitta (fire/water), and Kapha (water/earth).",
        "Each of us has a unique combination of these three doshas, though usually one or two are dominant:\n\n- Vata: Governs movement. When balanced, Vatas are creative and energetic. When out of balance, they experience anxiety, dry skin, and bloating. Focus on grounding practices.\n- Pitta: Governs metabolism and heat. Balanced Pittas are driven and intelligent. Out of balance, they experience irritation, heartburn, and skin rashes. Focus on cooling practices.\n- Kapha: Governs structure and stability. Balanced Kaphas are loyal, calm, and strong. Out of balance, they experience sluggishness, weight gain, and attachment. Focus on invigorating practices.",
        "Aligning your yoga style and diet with your current doshic state helps you achieve natural harmony. Next time you feel scattered (high Vata), skip the intense flow and opt for a slow, grounding Yin session."
      ]
    },
    {
      id: 503,
      title: "The Anatomy of a Sun Salutation (Surya A)",
      date: "May 10, 2026",
      readTime: "5 min read",
      category: "Asana Alignment",
      excerpt: "Deconstruct the core flow sequence of Vinyasa yoga. Learn the alignment keys for Chaturanga, Upward Dog, and Downward Facing Dog to protect your joints and move safely.",
      content: [
        "The Sun Salutation (Surya Namaskar A) is the foundation of almost every Vinyasa yoga class. While it feels simple once you memorize the sequence, it contains highly complex joint loads, especially during the transition from Plank to Chaturanga Dandasana.",
        "Moving mindlessly through this sequence dozens of times per week can eventually lead to repetitive stress injuries in the shoulders, wrists, and lower back.",
        "Let's look at the three critical alignment checks to keep your practice safe:\n\n1. Chaturanga Shoulder Height: When lowering down, never let your shoulders drop below elbow level. Aim for a perfect 90-degree angle at the elbows. If strength isn't there yet, always lower your knees first.\n2. Upward Facing Dog Thigh Lift: Ensure your thighs and knees are fully lifted off the mat. Press actively through the tops of your feet and engage your quads to protect your lower lumbar spine.\n3. Downward Dog Spine Length: Focus on a straight line from your wrists to your sit-bones. If your hamstrings are tight, bend your knees deeply! Spine length is always more important than straight legs or heels touching the mat.",
        "Slow down your sun salutations, execute each transition with deliberate awareness, and respect your body's boundaries to build a lifelong, pain-free practice."
      ]
    }
  ];

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (subscriberEmail) {
      setSubscribed(true);
      setSubscriberEmail('');
    }
  };

  return (
    <section id="resources" className="resources-section">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-badge">Wellness Hub</div>
          <h2 className="section-title">Mindfulness, breath, and lifestyle guides</h2>
          <p className="section-subtitle">
            Dive deeper into the philosophy of yoga, breathwork techniques, and ayurvedic living tips curated to expand your knowledge.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid-3 articles-grid">
          {articles.map(art => (
            <div key={art.id} className="card article-card">
              <div className="article-meta">
                <span className="article-cat">{art.category}</span>
                <span className="article-read-time">{art.readTime}</span>
              </div>
              <h3 className="article-title">{art.title}</h3>
              <p className="article-excerpt">{art.excerpt}</p>
              
              <div className="article-card-footer">
                <span className="article-date">{art.date}</span>
                <button 
                  className="read-more-link flex-center"
                  onClick={() => setSelectedArticle(art)}
                  aria-label={`Read article: ${art.title}`}
                >
                  Read Article <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup Card */}
        <div className="newsletter-card card">
          <div className="newsletter-grid">
            <div className="newsletter-text">
              <h3 className="newsletter-title">Subscribe to the Serene Newsletter</h3>
              <p className="newsletter-desc">
                Receive monthly mindfulness prompts, healthy seasonal recipes, class updates, and special workshop invitations. No spam, unsubscribe anytime.
              </p>
            </div>
            
            <div className="newsletter-form-wrapper">
              {!subscribed ? (
                <form onSubmit={handleSubscribeSubmit} className="newsletter-form">
                  <div className="input-with-icon">
                    <Mail size={16} className="mail-input-icon" />
                    <input 
                      type="email" 
                      required 
                      placeholder="Enter your email address" 
                      value={subscriberEmail}
                      onChange={(e) => setSubscriberEmail(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-tertiary">
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="newsletter-success animate-fade-in">
                  <div className="success-badge-circle">
                    <Check size={20} />
                  </div>
                  <div>
                    <h4>Thank you for subscribing!</h4>
                    <p>Welcome to the community. Your first mindfulness guide is heading to your inbox.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content article-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedArticle(null)}>
              <X size={20} />
            </button>
            
            <div className="modal-header-section">
              <span className="section-badge">{selectedArticle.category}</span>
              <h3 className="modal-title">{selectedArticle.title}</h3>
              <div className="article-modal-meta">
                <span>Published on {selectedArticle.date}</span>
                <span className="separator">•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            <div className="modal-scrollable-body article-body-content">
              {selectedArticle.content.map((paragraph, index) => (
                <p key={index} className="article-paragraph">
                  {paragraph.split('\n').map((line, lIdx) => (
                    <React.Fragment key={lIdx}>
                      {line}
                      {lIdx < paragraph.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              ))}
              
              <div className="article-modal-footer">
                <div className="author-card-small">
                  <img src="/about.png" alt="Elena Vance" className="small-author-img" />
                  <div>
                    <p className="author-name-small">Written by Elena Vance</p>
                    <p className="author-bio-small">500hr RYT. Passionate about bringing traditional yoga philosophy into modern life.</p>
                  </div>
                </div>
                
                <button 
                  className="btn btn-primary"
                  onClick={() => setSelectedArticle(null)}
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
