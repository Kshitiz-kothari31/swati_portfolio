import React, { useState } from 'react';
import { Calendar, MapPin, Video, CheckCircle, Clock, X, Ticket, Mail, User } from 'lucide-react';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('Mon');
  const [bookingClass, setBookingClass] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', packageType: 'Free Trial' });

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const scheduleData = {
    Mon: [
      { id: 101, title: 'Vinyasa Flow', time: '07:00 AM - 08:00 AM', type: 'Online', duration: '60m', spots: 5 },
      { id: 102, title: 'Hatha Foundations', time: '06:00 PM - 07:00 PM', type: 'In-Studio', duration: '60m', spots: 3 }
    ],
    Tue: [
      { id: 201, title: 'Pranayama & Meditation', time: '08:30 AM - 09:15 AM', type: 'Online', duration: '45m', spots: 12 },
      { id: 202, title: 'Yin Yoga', time: '05:30 PM - 06:45 PM', type: 'In-Studio', duration: '75m', spots: 2 }
    ],
    Wed: [
      { id: 301, title: 'Vinyasa Flow', time: '07:00 AM - 08:00 AM', type: 'Online', duration: '60m', spots: 8 },
      { id: 302, title: 'Yoga Nidra & Sound', time: '06:00 PM - 07:00 PM', type: 'In-Studio', duration: '60m', spots: 0 } // Sold Out
    ],
    Thu: [
      { id: 401, title: 'Pranayama & Meditation', time: '08:30 AM - 09:15 AM', type: 'Online', duration: '45m', spots: 10 },
      { id: 402, title: 'Yin Yoga', time: '05:30 PM - 06:45 PM', type: 'In-Studio', duration: '75m', spots: 4 }
    ],
    Fri: [
      { id: 501, title: 'Vinyasa Flow', time: '07:00 AM - 08:00 AM', type: 'In-Studio', duration: '60m', spots: 1 },
      { id: 502, title: 'Hatha Foundations', time: '05:00 PM - 06:00 PM', type: 'Online', duration: '60m', spots: 7 }
    ],
    Sat: [
      { id: 601, title: 'Vinyasa & Nidra Masterclass', time: '09:00 AM - 10:15 AM', type: 'In-Studio', duration: '75m', spots: 6 }
    ],
    Sun: [
      { id: 701, title: 'Outdoor Park Yoga & Breath', time: '10:00 AM - 11:30 AM', type: 'In-Studio', duration: '90m', spots: 15 }
    ]
  };

  const handleBookClick = (cls) => {
    if (cls.spots > 0) {
      setBookingClass(cls);
      setIsBooked(false);
      setFormData({ name: '', email: '', packageType: 'Free Trial' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsBooked(true);
    }
  };

  const currentClasses = scheduleData[activeDay] || [];

  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-badge">Weekly Schedule</div>
          <h2 className="section-title">Step onto the mat with us</h2>
          <p className="section-subtitle">
            Find a time that suits your daily rhythm. All class timings are shown in your local time zone. Secure your spot in advance.
          </p>
        </div>

        {/* Days Tab bar */}
        <div className="schedule-tabs-container">
          <div className="schedule-tabs flex-center">
            {weekDays.map(day => (
              <button
                key={day}
                className={`tab-btn ${activeDay === day ? 'active' : ''}`}
                onClick={() => setActiveDay(day)}
              >
                <span className="day-name">{day}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Classes Listings for Selected Day */}
        <div className="schedule-list animate-fade-in">
          {currentClasses.length > 0 ? (
            currentClasses.map(cls => (
              <div key={cls.id} className={`schedule-row ${cls.spots === 0 ? 'sold-out' : ''}`}>
                <div className="schedule-time-block">
                  <Clock size={16} className="schedule-icon" />
                  <span className="schedule-time">{cls.time}</span>
                  <span className="schedule-duration">({cls.duration})</span>
                </div>
                
                <div className="schedule-info-block">
                  <h3 className="schedule-class-title">{cls.title}</h3>
                  <div className="schedule-location">
                    {cls.type === 'Online' ? (
                      <span className="loc-badge online"><Video size={12} /> Online (Zoom)</span>
                    ) : (
                      <span className="loc-badge studio"><MapPin size={12} /> In-Studio (Serene Sanctuary)</span>
                    )}
                  </div>
                </div>

                <div className="schedule-status-block">
                  {cls.spots === 0 ? (
                    <span className="spots-left empty">Sold Out</span>
                  ) : cls.spots <= 3 ? (
                    <span className="spots-left critical">{cls.spots} spots left!</span>
                  ) : (
                    <span className="spots-left">{cls.spots} spots available</span>
                  )}
                </div>

                <div className="schedule-action-block">
                  {cls.spots === 0 ? (
                    <button className="btn btn-secondary" disabled>Fully Booked</button>
                  ) : (
                    <button 
                      className="btn btn-primary schedule-book-btn"
                      onClick={() => handleBookClick(cls)}
                    >
                      Book Slot
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="schedule-empty-state">
              <p>No classes scheduled for today. Check other days for offerings!</p>
            </div>
          )}
        </div>
      </div>

      {/* Booking Form Modal */}
      {bookingClass && (
        <div className="modal-overlay" onClick={() => setBookingClass(null)}>
          <div className="modal-content booking-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setBookingClass(null)}>
              <X size={20} />
            </button>
            
            {!isBooked ? (
              <form onSubmit={handleFormSubmit} className="booking-form-body">
                <div className="modal-header-section">
                  <span className="section-badge">Secure Your Spot</span>
                  <h3 className="modal-title">Confirm Your Reservation</h3>
                  <p className="modal-subtitle">
                    Class: <strong>{bookingClass.title}</strong> on {activeDay} ({bookingClass.time})
                  </p>
                </div>

                <div className="form-group">
                  <label htmlFor="booking-name"><User size={14} /> Full Name</label>
                  <input 
                    type="text" 
                    id="booking-name" 
                    required 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="booking-email"><Mail size={14} /> Email Address</label>
                  <input 
                    type="email" 
                    id="booking-email" 
                    required 
                    placeholder="you@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="booking-pass"><Ticket size={14} /> Select Pass Option</label>
                  <select 
                    id="booking-pass"
                    value={formData.packageType}
                    onChange={(e) => setFormData({...formData, packageType: e.target.value})}
                  >
                    <option value="Free Trial">First Class Free Trial ($0)</option>
                    <option value="Single Session">Single Drop-in Ticket ($20)</option>
                    <option value="Monthly Pass">Serene Monthly Unlimited ($120)</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-tertiary btn-full-width submit-booking-btn">
                  Reserve Spot
                </button>
              </form>
            ) : (
              <div className="booking-success-body flex-center">
                <CheckCircle size={60} className="success-icon animate-float" />
                <h3 className="modal-title success">Reservation Confirmed!</h3>
                <p className="success-msg">
                  Namaste, {formData.name}. We've sent a confirmation email to <strong>{formData.email}</strong> with your entry pass details.
                </p>
                
                <div className="success-details-box">
                  <p><strong>Class:</strong> {bookingClass.title}</p>
                  <p><strong>Time:</strong> {activeDay}, {bookingClass.time}</p>
                  <p><strong>Access:</strong> {bookingClass.type === 'Online' ? 'Zoom Link sent to email' : 'Studio Room 302, Serene Sanctuary'}</p>
                  <p><strong>Pass Selected:</strong> {formData.packageType}</p>
                </div>

                <p className="success-note">
                  Please arrive 10 minutes early (or log in 5 minutes early) with a water bottle and wear comfortable clothing. We look forward to practicing with you.
                </p>

                <button 
                  className="btn btn-primary"
                  onClick={() => setBookingClass(null)}
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
