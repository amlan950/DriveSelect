import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Adds a background change effect on scroll
  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-accent">DRIVE</span>SELECT
        </div>

        <ul className="nav-menu">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#fleet">Our Fleet</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#offers">Special Offers</a></li>
        </ul>

        <div className="nav-actions">
          <button className="btn-secondary">Login</button>
          <button className="btn-primary">Book a Car</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;