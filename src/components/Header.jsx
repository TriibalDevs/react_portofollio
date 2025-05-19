<<<<<<< HEAD
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">JOHN DOE</div>

      {/* BOUTON BURGER - visible uniquement en mobile */}
      <button className="burger-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* MENU HORIZONTAL - visible tablette + desktop */}
      <nav className="nav-desktop">
=======
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">JOHN DOE</div>
      <nav>
>>>>>>> 37b8524889f9015d8a081e486ed8c02a80a59112
        <ul className="nav-links">
          <li><NavLink to="/" end>HOME</NavLink></li>
          <li><NavLink to="/services">SERVICES</NavLink></li>
          <li><NavLink to="/portfolio">PORTOFOLIO</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
          <li><NavLink to="/mentions">MENTIONS LÉGALES</NavLink></li>
        </ul>
      </nav>
<<<<<<< HEAD

      {/* MENU MOBILE déroulant */}
      {menuOpen && (
        <div className="burger-menu">
          <ul>
            <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>HOME</NavLink></li>
            <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>SERVICES</NavLink></li>
            <li><NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>PORTOFOLIO</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</NavLink></li>
            <li><NavLink to="/mentions" onClick={() => setMenuOpen(false)}>MENTIONS LÉGALES</NavLink></li>
          </ul>
        </div>
      )}
=======
>>>>>>> 37b8524889f9015d8a081e486ed8c02a80a59112
    </header>
  );
};

export default Header;
