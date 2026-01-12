import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="services">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-subtitle">Why Choose Us</h2>
          <h1 className="section-title">The Premium Rental Experience</h1>
          <p className="section-description">
            We don't just rent cars; we provide the keys to your next great adventure. 
            From seamless booking to a curated fleet of high-performance vehicles.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">🏎️</div>
            <h3>Premium Fleet</h3>
            <p>Access the latest models from top brands like Porsche, BMW, and Tesla, maintained to showroom standards.</p>
          </div>

          <div className="about-card">
            <div className="card-icon">🛡️</div>
            <h3>Full Insurance</h3>
            <p>Drive with peace of mind. All our rentals include comprehensive premium insurance and 24/7 roadside assistance.</p>
          </div>

          <div className="about-card">
            <div className="card-icon">⚡</div>
            <h3>Fast Delivery</h3>
            <p>Your time is valuable. We offer doorstep delivery and pickup services to make your rental effortless.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;   