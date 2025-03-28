import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <Link to="/" className={styles['navbar-logo']} onClick={closeMobileMenu}>
          Christ Centered Baptist
        </Link>
        
        <div className={styles['menu-icon']} onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        
        <ul className={click ? styles['nav-menu active'] : styles['nav-menu']}>
          <li className={styles['nav-item']}>
            <Link to="/" className={styles['nav-link']} onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className={styles['nav-item']}>
            <Link to="/salvation" className={styles['nav-link']} onClick={closeMobileMenu}>Salvation</Link>
          </li>
          <li className={styles['nav-item']}>
            <Link to="/hymns" className={styles['nav-link']} onClick={closeMobileMenu}>Hymns</Link>
          </li>
          <li className={styles['nav-item']}>
            <Link to="/armor-of-god" className={styles['nav-link']} onClick={closeMobileMenu}>Armor of God</Link>
          </li>
          <li className={styles['nav-item']}>
            <Link to="/jesus-is-god" className={styles['nav-link']} onClick={closeMobileMenu}>Jesus is God</Link>
          </li>
          <li className={styles['nav-item']}>
            <Link to="/about" className={styles['nav-link']} onClick={closeMobileMenu}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
