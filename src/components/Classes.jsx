import React, { useState } from 'react';
import { Clock, Activity, Target, Flame, Info, X } from 'lucide-react';

export default function Classes() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedClass, setSelectedClass] = useState(null);

  const classesData = [
    {
      id: 1,
      title: 'Vinyasa Flow',
      category: 'Dynamic',
      description: 'A dynamic, fluid practice connecting movement with conscious breath. Build functional strength, physical stamina, and mental clarity through creative sequences.',
      duration: '60 mins',
      intensity: 'Medium-High',
      benefit: 'Cardio, strength & flexibility',
      whatToBring: 'Yoga mat, water bottle, small towel. Props like blocks and straps are provided.',
      difficulty: 'All levels (modifications offered)'
    },
    {
      id: 2,
      title: 'Yin Yoga',
      category: 'Gentle',
      description: 'A slow-paced, deeply meditative practice where poses are held passively for 3-5 minutes. Targets deep connective tissues, ligaments, and joints to increase flexibility.',
      duration: '75 mins',
      intensity: 'Low',
      benefit: 'Joint health, stress release & mindfulness',
      whatToBring: 'Yoga mat, cozy clothes, warm socks. Bolsters and blankets are highly recommended.',
      difficulty: 'Beginner-friendly'
    },
    {
      id: 3,
      title: 'Hatha Foundations',
      category: 'Gentle',
      description: 'Classic yoga poses held with alignment precision. Perfect for beginners looking to learn basic postures and breath control, or advanced practitioners refining their form.',
      duration: '60 mins',
      intensity: 'Medium-Low',
      benefit: 'Balance, alignment & structural strength',
      whatToBring: 'Yoga mat and comfortable athletic wear.',
      difficulty: 'Great for beginners'
    },
    {
      id: 4,
      title: 'Yoga Nidra & Sound',
      category: 'Breath & Mind',
      description: 'Systematic guided relaxation leading you to the state of "yogic sleep" (deep conscious rest), followed by a soothing acoustic sound bath using singing bowls.',
      duration: '60 mins',
      intensity: 'Very Low',
      benefit: 'Nervous system reset & deep sleep hygiene',
      whatToBring: 'Warm layers/blanket, eye pillow. Feel free to use the studio mats and bolsters.',
      difficulty: 'Open to everyone'
    },
    {
      id: 5,
      title: 'Pranayama & Meditation',
      category: 'Breath & Mind',
      description: 'A dedicated focus on conscious breathing techniques to regulate energy, followed by a guided stillness meditation. Ideal to calm a busy mind.',
      duration: '45 mins',
      intensity: 'Low',
      benefit: 'Lungs capacity, anxiety control & focus',
      whatToBring: 'Comfortable clothing that allows for deep belly breathing. Sitting cushions are provided.',
      difficulty: 'Open to everyone'
    }
  ];

  const categories = ['All', 'Dynamic', 'Gentle', 'Breath & Mind'];

  const filteredClasses = activeFilter === 'All' 
    ? classesData 
    : classesData.filter(cls => cls.category === activeFilter);

  const getIntensityColor = (intensity) => {
    switch(intensity) {
      case 'Medium-High': return 'intensity-high';
      case 'Medium-Low': return 'intensity-medium';
      case 'Low': return 'intensity-low';
      case 'Very Low': return 'intensity-very-low';
      default: return '';
    }
  };

  return (
    <section id="classes" className="classes-section">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-badge">Practice Offerings</div>
          <h2 className="section-title">Nurture your body, calm your mind</h2>
          <p className="section-subtitle">
            Explore styles of practice designed to support you at every stage of your wellness journey. Select a filter to search.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="filter-wrapper flex-center">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Classes Grid */}
        <div className="grid-3 classes-grid animate-fade-in">
          {filteredClasses.map(cls => (
            <div key={cls.id} className="card class-card">
              <div className="class-card-header">
                <span className="class-category-badge">{cls.category}</span>
                <span className={`intensity-badge ${getIntensityColor(cls.intensity)}`}>
                  <Flame size={12} style={{ marginRight: '4px', display: 'inline' }} />
                  {cls.intensity}
                </span>
              </div>
              <h3 className="class-card-title">{cls.title}</h3>
              <p className="class-card-desc">{cls.description}</p>
              
              <div className="class-card-meta">
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{cls.duration}</span>
                </div>
                <div className="meta-item">
                  <Target size={16} />
                  <span>{cls.benefit.split(',')[0]}</span>
                </div>
              </div>

              <button 
                className="btn btn-secondary btn-full-width class-details-btn"
                onClick={() => setSelectedClass(cls)}
              >
                <Info size={16} /> Learn More & Prepare
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Class Details Modal */}
      {selectedClass && (
        <div className="modal-overlay" onClick={() => setSelectedClass(null)}>
          <div className="modal-content class-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedClass(null)}>
              <X size={20} />
            </button>
            <div className="modal-header-section">
              <span className="section-badge">{selectedClass.category} Class</span>
              <h3 className="modal-title">{selectedClass.title}</h3>
            </div>
            
            <div className="modal-scrollable-body">
              <div className="modal-info-block">
                <h4>Description</h4>
                <p>{selectedClass.description}</p>
              </div>

              <div className="modal-grid-2">
                <div className="modal-info-block">
                  <h4>Key Benefits</h4>
                  <p className="highlight-text">{selectedClass.benefit}</p>
                </div>
                <div className="modal-info-block">
                  <h4>Intensity & Level</h4>
                  <p>{selectedClass.intensity} Intensity — {selectedClass.difficulty}</p>
                </div>
              </div>

              <div className="modal-info-block mat-prep">
                <h4>How to Prepare & What to Bring</h4>
                <p>{selectedClass.whatToBring}</p>
              </div>

              <div className="modal-footer-actions">
                <button 
                  className="btn btn-secondary"
                  onClick={() => setSelectedClass(null)}
                >
                  Close Details
                </button>
                <a 
                  href="#schedule" 
                  className="btn btn-primary"
                  onClick={(e) => {
                    setSelectedClass(null);
                    const target = document.querySelector('#schedule');
                    if (target) {
                      window.scrollTo({
                        top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Book Class Slot
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
