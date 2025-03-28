import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-image-container']}>
        <img
          src="/images/bible-header.jpg"
          alt="Open Bible"
          className={styles['header-image']}
        />
        <div className={styles['header-overlay']}>
          <h1>CHRIST CENTERED BAPTIST</h1>
          <p>Teaching Christ Through The Bible</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
