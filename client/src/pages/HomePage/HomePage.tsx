import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import IndividualCard from '../../components/IndividualCard/IndividualCard';
import WeeklyPost from '../../components/WeeklyPost/WeeklyPost';
import { WeeklyPostProps } from '../../components/WeeklyPost/WeeklyPost';
import { Tweet } from '../../types/types';
import TwitterFeed from '../../components/TwitterFeed/TwitterFeed';
import styles from './HomePage.module.css';
import config from '../../config/config';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  const [featuredVerse, setFeaturedVerse] = useState({
    reference: '2 Timothy 3:16-17',
    verses: 'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works.',
    explanation: 'This verse reminds us of the importance and purpose of Scripture in our lives.'
  });

  const [recentPosts, setRecentPosts] = useState<WeeklyPostProps[]>([]);

  // const [tweets, setTweets] = useState([]);
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch Bible verses
    const fetchVerses = async () => {
      try {
        const response = await axios.get(`${config.API_BASE_URL}/verses`);
        if (response.data && response.data.length > 0) {
          setFeaturedVerse(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching verses:', error);
        
        // Only use mock data if enabled in config
        if (!config.USE_MOCK_DATA) {
          setFeaturedVerse({
            reference: 'Error',
            verses: 'Could not load Bible verse',
            explanation: 'Please check your connection to the backend server'
          });
        }
      }
    };

    // Fetch posts
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${config.API_BASE_URL}/posts`);
        if (response.data && response.data.length > 0) {
          setRecentPosts(response.data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        
        // Only use mock data if enabled in config
        if (!config.USE_MOCK_DATA) {
          setRecentPosts([]);
        }
      }
    };

    // Fetch tweets
    const fetchTweets = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${config.API_BASE_URL}/twitter/tweets/123456789?count=2`);
        setTweets(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching tweets:', err);
        setError('Failed to load tweets');
        
        // Only use mock data if enabled in config
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

    fetchVerses();
    fetchPosts();
    fetchTweets();
  }, []);

  // Function to handle navigation to appropriate page based on post type
  const handlePostClick = (post: any) => {
    switch (post.type) {
      case 'salvation':
        navigate('/salvation');
        break;
      case 'hymn':
        navigate('/hymns');
        break;
      case 'armor':
        navigate('/armor-of-god');
        break;
      default:
        navigate('/');
        break;
    }
  };

  return (
    <div className={styles['home-page']}>
      <section className={styles['welcome-section']}>
        <h1>Welcome to Christ Centered Baptist</h1>
        <p className={styles['welcome-message']}>
          We are dedicated to teaching Christ through the Bible. Our mission is to share the message of salvation
          and help believers grow in their faith through the study of God's Word.
        </p>
      </section>

      <section className={styles['featured-verse-section']}>
        <h2>Featured Bible Verse</h2>
        <IndividualCard
          reference={featuredVerse.reference}
          verses={featuredVerse.verses}
          explanation={featuredVerse.explanation}
        />
      </section>

      <section className={styles['recent-posts-section']}>
        <h2>Recent Posts</h2>
        {recentPosts.map((post, index) => (
          <div
            key={index}
            className={`${styles['post-card']} ${styles['clickable']}`}
            onClick={() => handlePostClick(post)}
          >
            <WeeklyPost
              title={post.title}
              date={post.date}
              content={post.content}
              type={post.type}
              references={post.references}
              isPreview={true}
            />
          </div>
        ))}
      </section>

      <section className={styles['twitter-section']}>
        <TwitterFeed tweets={tweets} loading={loading} error={error} />
      </section>
    </div>
  );
};

export default HomePage;