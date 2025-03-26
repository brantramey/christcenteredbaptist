import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Christ Centered Baptist
        </Link>
        
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/salvation" className="nav-link" onClick={closeMobileMenu}>Salvation</Link>
          </li>
          <li className="nav-item">
            <Link to="/hymns" className="nav-link" onClick={closeMobileMenu}>Hymns</Link>
          </li>
          <li className="nav-item">
            <Link to="/armor-of-god" className="nav-link" onClick={closeMobileMenu}>Armor of God</Link>
          </li>
          <li className="nav-item">
            <Link to="/jesus-is-god" className="nav-link" onClick={closeMobileMenu}>Jesus is God</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
