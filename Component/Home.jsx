import { useNavigate } from "react-router-dom";
import React from 'react';


import './Home.css';

const Home = () => {
    const navigate = useNavigate();
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Drive the <span className="text-gradient">Extraordinary.</span>
        </h1>
        <p className="hero-subtitle">
          Experience premium luxury and performance. From city sleeks to rugged off-roaders, 
          rent the car that defines your journey.
        </p>
        
        <div className="hero-btns">
          <button className="btn-main" onClick={()=> navigate("/fleet")}>View Fleet</button>
          <button className="btn-outline">Learn More</button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">500+</span>
            <span className="stat-label">Luxury Cars</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">12k+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        {/* Replace this URL with a high-res PNG of a sports car */}
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000" 
          alt="Luxury Car" 
          className="hero-car-img"
        />
        <div className="image-glow"></div>
      </div>
    </section>
  );
};

export default Home;