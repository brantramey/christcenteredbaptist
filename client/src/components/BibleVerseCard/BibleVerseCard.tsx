import React from 'react';
import './BibleVerseCard.css';

interface BibleVerseCardProps {
  reference: string;
  verses: string;
  explanation?: string;
}

const BibleVerseCard: React.FC<BibleVerseCardProps> = ({ reference, verses, explanation }) => {
  return (
    <div className="bible-verse-card">
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

export default BibleVerseCard;
