
import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Phanom Logo" className="logo" />
      
      </div>
      <nav className="navbar-right">
        <ul className="nav-links">
          <li>Service <span className="dropdown-icon">▼</span></li>
          <li>Hire Indian Talent <span className="dropdown-icon">▼</span></li>
          <li>Our Portfolio</li>
          <li>Blog</li>
        </ul>
        <button className="appointment-btn">Book an Appointment</button>
      </nav>
    </header>
  );
};

export default Navbar;


