import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tweet } from '../../types/types';
import styles from './TwitterFeed.module.css';
import config from '../../config/config';

interface TwitterFeedProps {
  username?: string;
  userId?: string;
  searchQuery?: string;
  count?: number;
  tweets?: Tweet[];
  loading?: boolean;
  error?: string | null;
}

const TwitterFeed: React.FC<TwitterFeedProps> = ({ 
  username = 'christcenteredbaptist',
  userId = '123456789', // This would be replaced with the actual user ID
  searchQuery,
  count = 3,
  tweets: propTweets,
  loading: propLoading,
  error: propError
}) => {
  const [tweets, setTweets] = useState<Tweet[]>(propTweets || []);
  const [loading, setLoading] = useState<boolean>(propLoading !== undefined ? propLoading : true);
  const [error, setError] = useState<string | null>(propError !== undefined ? propError : null);

  useEffect(() => {
    // If tweets are provided as props, don't fetch
    if (propTweets) {
      return;
    }
    
    const fetchTweets = async () => {
      try {
        setLoading(true);
        let response;
        
        if (searchQuery) {
          // Search tweets
          response = await axios.get(`${config.API_BASE_URL}/twitter/search?q=${encodeURIComponent(searchQuery)}&count=${count}`);
        } else {
          // Get user tweets
          response = await axios.get(`${config.API_BASE_URL}/twitter/tweets/${userId}?count=${count}`);
        }
        
        setTweets(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching tweets:', err);
        setError('Failed to load tweets. Please try again later.');
        
        // Use mock data only if enabled in config
        if (config.USE_MOCK_DATA) {
          setTweets([
            {
              id: '1',
              text: 'Join us this Sunday as we explore the meaning of salvation through Christ. #ChristCenteredBaptist #Salvation',
              createdAt: '2025-03-20T10:30:00Z',
              username: 'christcenteredbaptist',
              name: 'Christ Centered Baptist',
              profileImageUrl: 'https://via.placeholder.com/48'
            },
            {
              id: '2',
              text: '"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." - John 3:16 #BibleVerse',
              createdAt: '2025-03-18T14:15:00Z',
              username: 'christcenteredbaptist',
              name: 'Christ Centered Baptist',
              profileImageUrl: 'https://via.placeholder.com/48'
            }
          ]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, [username, userId, searchQuery, count, propTweets]);

  if (loading) {
    return <div className={styles['twitter-feed-loading']}>Loading tweets...</div>;
  }

  if (error && tweets.length === 0) {
    return <div className={styles['twitter-feed-error']}>Error loading tweets: {error}</div>;
  }

  if (!tweets || tweets.length === 0) {
    return <div className={styles['twitter-feed-empty']}>No tweets available</div>;
  }

  return (
    <div className={styles['twitter-feed']}>
      <h3 className={styles['twitter-feed-title']}>Recent Posts from X</h3>
      <div className={styles['twitter-feed-container']}>
        {tweets.map((tweet) => (
          <div key={tweet.id} className={styles['tweet-card']}>
            <div className={styles['tweet-header']}>
              <img src={tweet.profileImageUrl} alt={tweet.name} className={styles['tweet-profile-image']} />
              <div className={styles['tweet-user-info']}>
                <span className={styles['tweet-name']}>{tweet.name}</span>
                <span className={styles['tweet-username']}>@{tweet.username}</span>
              </div>
            </div>
            <div className={styles['tweet-content']}>
              <p>{tweet.text}</p>
            </div>
            <div className={styles['tweet-footer']}>
              <span className={styles['tweet-date']}>{new Date(tweet.createdAt).toLocaleDateString()}</span>
              <a
                href={`https://twitter.com/${tweet.username}/status/${tweet.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['tweet-link']}
              >
                View on X
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwitterFeed;
