import React from 'react';
import styles from './WeeklyPost.module.css';

export interface WeeklyPostProps {
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
    <div
      id="weekly-post"
      className={`${styles['weekly-post']} ${styles[type + '-post']}`}
    >
      <div className={styles['post-header']}>
        <h2 className={styles['post-title']}>{title}</h2>
        <div className={styles['post-meta']}>
          <span className={styles['post-date']}>{date}</span>
          {author && <span className={styles['post-author']}>By: {author}</span>}
          <span className={styles['post-type']}>{getTypeDisplay(type)}</span>
        </div>
      </div>
      <div className={styles['post-content']}>
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
        {isPreview && <p className={styles['read-more-hint']}>Click to read more...</p>}
      </div>
      {references && references.length > 0 && (
        <div className={styles['post-references']}>
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