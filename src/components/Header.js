// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1>Welcome to the Library Webpage Program</h1>
      <p>Your one-stop solution for finding fiction and non-fiction books across various genres.</p>
      <nav className="navbar">
        <div
          id="mobile-menu"
          onClick={toggleMenu}
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About the App</Link></li>
          <li><Link to="/catalog" onClick={() => setMenuOpen(false)}>Catalog</Link></li>
          <li><Link to="/search" onClick={() => setMenuOpen(false)}>Search</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
