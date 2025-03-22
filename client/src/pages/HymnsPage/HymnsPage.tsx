import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HymnCard from '../../components/HymnCard/HymnCard';
import WeeklyPost from '../../components/WeeklyPost/WeeklyPost';
import './HymnsPage.css';
import config from '../../config/config';

const HymnsPage: React.FC = () => {
  const [featuredHymns, setFeaturedHymns] = useState([
    {
      title: 'Amazing Grace',
      author: 'John Newton',
      year: '1779',
      lyrics: 'Amazing grace! How sweet the sound\nThat saved a wretch like me!\nI once was lost, but now am found;\nWas blind, but now I see.\n\n\'Twas grace that taught my heart to fear,\nAnd grace my fears relieved;\nHow precious did that grace appear\nThe hour I first believed.',
      explanation: 'Written by John Newton, a former slave trader who experienced a profound conversion to Christianity. This hymn reflects his personal testimony of God\'s grace in his life.'
    },
    {
      title: 'How Great Thou Art',
      author: 'Carl Boberg (translated by Stuart K. Hine)',
      year: '1885',
      lyrics: 'O Lord my God, when I in awesome wonder,\nConsider all the worlds Thy hands have made;\nI see the stars, I hear the rolling thunder,\nThy power throughout the universe displayed.\n\nThen sings my soul, my Savior God, to Thee,\nHow great Thou art, how great Thou art.\nThen sings my soul, my Savior God, to Thee,\nHow great Thou art, how great Thou art!',
      explanation: 'Originally a Swedish poem written by Carl Boberg, this hymn celebrates God\'s majesty as revealed in creation and salvation.'
    }
  ]);

  const [hymnPosts, setHymnPosts] = useState([
    {
      title: 'The Story Behind "Amazing Grace"',
      date: 'March 5, 2025',
      content: 'Few hymns have touched as many hearts as "Amazing Grace." Written by John Newton in 1779, this beloved hymn tells the story of a man transformed by God\'s grace.\n\nNewton was once a slave trader who underwent a dramatic conversion experience during a violent storm at sea. After becoming a Christian, he eventually became an Anglican priest and a prominent supporter of the abolition of slavery.\n\nThe lyrics of "Amazing Grace" reflect Newton\'s personal journey from sin to salvation. The line "I once was lost, but now am found" speaks to his transformation from a man involved in the horrific slave trade to a minister proclaiming God\'s grace.\n\nThis hymn reminds us that no one is beyond the reach of God\'s amazing grace. No matter our past, God\'s grace offers forgiveness, redemption, and a new beginning.',
      type: 'hymn' as const,
      author: 'Pastor James',
      references: ['Ephesians 2:8-9', '2 Corinthians 5:17']
    }
  ]);

  useEffect(() => {
    // Fetch hymns
    const fetchHymns = async () => {
      try {
        const response = await axios.get(`${config.API_BASE_URL}/hymns`);
        if (response.data && response.data.length > 0) {
          setFeaturedHymns(response.data);
        }
      } catch (error) {
        console.error('Error fetching hymns:', error);
        
        // Only use mock data if enabled in config
        if (!config.USE_MOCK_DATA) {
          setFeaturedHymns([{
            title: 'Error Loading Hymns',
            author: 'Unknown',
            year: '',
            lyrics: 'Could not load hymn data. Please check your connection to the backend server.',
            explanation: 'There was an error connecting to the server.'
          }]);
        }
      }
    };

    // Fetch hymn posts
    const fetchHymnPosts = async () => {
      try {
        const response = await axios.get(`${config.API_BASE_URL}/posts/hymns`);
        if (response.data && response.data.length > 0) {
          setHymnPosts(response.data);
        }
      } catch (error) {
        console.error('Error fetching hymn posts:', error);
        
        // Only use mock data if enabled in config
        if (!config.USE_MOCK_DATA) {
          setHymnPosts([]);
        }
      }
    };

    fetchHymns();
    fetchHymnPosts();
  }, []);

  return (
    <div className="hymns-page">
      <section className="hymns-intro">
        <h1>Hymns of Salvation</h1>
        <p className="hymns-description">
          Throughout church history, hymns have been a powerful way to express the truths of salvation and the Christian faith. 
          On this page, we explore classic hymns that focus on salvation, their history, and their theological significance.
        </p>
      </section>

      <section className="featured-hymns">
        <h2>Featured Hymns</h2>
        <div className="hymns-container">
          {featuredHymns.map((hymn, index) => (
            <HymnCard
              key={index}
              title={hymn.title}
              author={hymn.author}
              year={hymn.year}
              lyrics={hymn.lyrics}
              explanation={hymn.explanation}
            />
          ))}
        </div>
      </section>

      <section className="hymn-posts">
        <h2>Weekly Hymn Studies</h2>
        {hymnPosts.map((post, index) => (
          <WeeklyPost
            key={index}
            title={post.title}
            date={post.date}
            content={post.content}
            type={post.type}
            author={post.author}
            references={post.references}
          />
        ))}
      </section>
    </div>
  );
};

export default HymnsPage;
