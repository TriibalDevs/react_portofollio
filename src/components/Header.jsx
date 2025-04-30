import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">JOHN DOE</div>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/" end>HOME</NavLink></li>
          <li><NavLink to="/services">SERVICES</NavLink></li>
          <li><NavLink to="/portofolio">PORTOFOLIO</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
          <li><NavLink to="/mentions">MENTIONS LÉGALES</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
