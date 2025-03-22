import React from 'react';
import './HymnCard.css';

interface HymnCardProps {
  title: string;
  author: string;
  year: string;
  description?: string;
  excerpt?: string;
}

const HymnCard: React.FC<HymnCardProps> = ({ title, author, year, description, excerpt }) => {
  return (
    <div className="hymn-card">
      <h3 className="hymn-title">{title}</h3>
      <div className="hymn-metadata">
        <p className="hymn-author">By {author}</p>
        <p className="hymn-year">{year}</p>
      </div>
      
      {excerpt && (
        <div className="hymn-excerpt">
          <h4>First Verse</h4>
          <blockquote>
            <p>"{excerpt}"</p>
          </blockquote>
        </div>
      )}
      
      {description && (
        <div className="hymn-description">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default HymnCard;