import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Schedule from './components/Schedule';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('serene-yoga-theme');
    return savedTheme || 'sun';
  });

  useEffect(() => {
    // Apply theme attribute to body
    document.body.setAttribute('data-theme', theme === 'sun' ? 'sun' : 'moon');
    localStorage.setItem('serene-yoga-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'sun' ? 'moon' : 'sun'));
  };

  return (
    <div className="app-wrapper">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
