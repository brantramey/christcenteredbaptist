import React from 'react';
import styles from './IndividualCard.module.css';

interface IndividualCardProps {
  reference: string;
  verses: string;
  explanation?: string;
}

const IndividualCard: React.FC<IndividualCardProps> = ({ reference, verses, explanation }) => {
  return (
    <div className={styles['individual-card']}>
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
