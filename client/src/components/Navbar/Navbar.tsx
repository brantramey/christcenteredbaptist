import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Christ Centered Baptist
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/salvation" className="nav-link">Salvation</Link>
          </li>
          <li className="nav-item">
            <Link to="/hymns" className="nav-link">Hymns</Link>
          </li>
          <li className="nav-item">
            <Link to="/armor-of-god" className="nav-link">Armor of God</Link>
          </li>
          <li className="nav-item">
            <Link to="/jesus-is-god" className="nav-link">Jesus is God</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
