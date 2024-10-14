// HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // Import the CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <h1>Welcome to Paradise</h1>
        <p>Experience the Maldives like never before</p>
        <button className="book-now-btn">Book Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
