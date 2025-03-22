import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="header-image-container">
        <img 
          src="/images/bible-header.jpg" 
          alt="Open Bible" 
          className="header-image"
        />
        <div className="header-overlay">
          <h1>CHRIST CENTERED BAPTIST</h1>
          <p>Teaching Christ Through The Bible</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
