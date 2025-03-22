import React from 'react';
import './WeeklyPost.css';

interface WeeklyPostProps {
  title: string;
  date: string;
  content: string;
  type: 'salvation' | 'hymn';
  author?: string;
  references?: string[];
}

const WeeklyPost: React.FC<WeeklyPostProps> = ({ 
  title, 
  date, 
  content, 
  type, 
  author, 
  references 
}) => {
  return (
    <div className={`weekly-post ${type}-post`}>
      <div className="post-header">
        <h2 className="post-title">{title}</h2>
        <div className="post-meta">
          <span className="post-date">{date}</span>
          {author && <span className="post-author">By: {author}</span>}
          <span className="post-type">{type === 'salvation' ? 'Salvation Passage' : 'Hymn Study'}</span>
        </div>
      </div>
      
      <div className="post-content">
        {content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
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
