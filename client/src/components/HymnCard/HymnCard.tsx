import React from 'react';
import './HymnCard.css';

interface HymnCardProps {
  title: string;
  author?: string;
  year?: string;
  lyrics: string;
  explanation?: string;
}

const HymnCard: React.FC<HymnCardProps> = ({ title, author, year, lyrics, explanation }) => {
  return (
    <div className="hymn-card">
      <div className="hymn-header">
        <h3 className="hymn-title">{title}</h3>
        {(author || year) && (
          <div className="hymn-metadata">
            {author && <span className="hymn-author">By: {author}</span>}
            {year && <span className="hymn-year">({year})</span>}
          </div>
        )}
      </div>
      <div className="hymn-content">
        <div className="hymn-lyrics">
          {lyrics.split('\n').map((line, index) => (
            <p key={index} className="hymn-line">{line}</p>
          ))}
        </div>
      </div>
      {explanation && (
        <div className="hymn-explanation">
          <h4>About This Hymn</h4>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default HymnCard;
