import React from 'react';
import './IndividualCard.css';

interface IndividualCardProps {
  reference: string;
  verses: string;
  explanation?: string;
}

const IndividualCard: React.FC<IndividualCardProps> = ({ reference, verses, explanation }) => {
  return (
    <div className="individual-card">
      <h3 className="verse-reference">{reference}</h3>
      <div className="verse-content">
        <p className="verse-text">{verses}</p>
      </div>
      {explanation && (
        <div className="verse-explanation">
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default IndividualCard;
