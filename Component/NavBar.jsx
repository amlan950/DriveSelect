import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo"><span className="logo-accent">DRIVE</span>SELECT</div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'mobile-active' : ''}`}>
          <li className="nav-item"><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li className="nav-item"><a href="#fleet" onClick={() => setIsOpen(false)}>Fleet</a></li>
          <li className="nav-item"><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li className="nav-item-btn"><button className="btn-primary">Book Now</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;