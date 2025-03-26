import React from 'react';
import './WeeklyPost.css';

interface WeeklyPostProps {
  title: string;
  date: string;
  content: string;
  type: 'salvation' | 'hymn' | 'armor';
  author?: string;
  references?: string[];
  isPreview?: boolean;
}

const WeeklyPost: React.FC<WeeklyPostProps> = ({
  title,
  date,
  content,
  type,
  author,
  references,
  isPreview = false
}) => {
  // Helper function to get the appropriate type display text
  const getTypeDisplay = (postType: string) => {
    switch (postType) {
      case 'salvation':
        return 'Salvation Passage';
      case 'armor':
        return 'Armor of God Study';
      case 'hymn':
        return 'Hymn Study';
      default:
        return 'Bible Study';
    }
  };

  return (
    <div className={`weekly-post ${type}-post`}>
      <div className="post-header">
        <h2 className="post-title">{title}</h2>
        <div className="post-meta">
          <span className="post-date">{date}</span>
          {author && <span className="post-author">By: {author}</span>}
          <span className="post-type">{getTypeDisplay(type)}</span>
        </div>
      </div>
      <div className="post-content">
        {isPreview 
          ? // For preview, show only the first paragraph and truncate if too long
            content.split('\n').slice(0, 1).map((paragraph, index) => (
              <p key={index}>
                {paragraph.length > 200 
                  ? `${paragraph.substring(0, 200)}...` 
                  : paragraph}
              </p>
            ))
          : // For full view, show all paragraphs
            content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
        }
        {isPreview && <p className="read-more-hint">Click to read more...</p>}
      </div>
      {references && references.length > 0 && (
        <div className="post-references">
          <h4>References</h4>
          <ul>
            {references.map((reference, index) => (
              <li key={index}>{reference}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeeklyPost;