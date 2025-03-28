import React from 'react';
import styles from './IndividualCard.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

interface IndividualCardProps {
  reference: string;
  verses: string;
  explanation?: string;
}

const IndividualCard: React.FC<IndividualCardProps> = ({ reference, verses, explanation }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const weeklyPostElement = document.getElementById('weekly-post');
    const offset = weeklyPostElement ? weeklyPostElement.offsetTop - 50 : 0;

    // Determine the correct path based on the current location
    let path = '/';
    if (location.pathname === '/hymns') {
      path = '/hymns';
    } else if (location.pathname === '/salvation') {
      path = '/salvation';
    } else if (location.pathname === '/armor-of-god') {
      path = '/armor-of-god';
    }

    if (window.location.pathname !== path) {
      navigate(`${path}?reference=${reference}`);
      setTimeout(() => {
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
        });
      }, 100); // Add a small delay to ensure the page is fully loaded
    } else {
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles['individual-card']} onClick={handleClick}>
      <h3 className={styles['verse-reference']}>{reference}</h3>
      <div className={styles['verse-content']}>
        <p className={styles['verse-text']}>{verses}</p>
      </div>
      {explanation && (
        <div className={styles['verse-explanation']}>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default IndividualCard;
