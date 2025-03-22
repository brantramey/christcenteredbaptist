import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BibleVerseCard from '../../components/BibleVerseCard/BibleVerseCard';
import WeeklyPost from '../../components/WeeklyPost/WeeklyPost';
import './SalvationPage.css';
import config from '../../config/config';

const SalvationPage: React.FC = () => {
  const [salvationVerses, setSalvationVerses] = useState([
    {
      reference: 'John 3:16',
      verses: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
      explanation: 'This verse encapsulates the gospel message - God\'s love for humanity led Him to send Jesus so that through faith in Him, we can have eternal life.'
    },
    {
      reference: 'Romans 10:9-10',
      verses: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.',
      explanation: 'These verses explain the simplicity of salvation - it requires belief in Jesus\' resurrection and confession of Him as Lord.'
    },
    {
      reference: 'Ephesians 2:8-9',
      verses: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.',
      explanation: 'Salvation is a gift from God received through faith, not something we can earn through our own efforts or good works.'
    }
  ]);

  const [salvationPosts, setSalvationPosts] = useState([
    {
      title: 'Understanding God\'s Plan of Salvation',
      date: 'March 10, 2025',
      content: 'Salvation is at the core of the Christian faith. It represents God\'s rescue mission for humanity, offering forgiveness, reconciliation, and eternal life through Jesus Christ.\n\nThe Bible teaches that all have sinned and fall short of God\'s glory (Romans 3:23), and the wages of sin is death (Romans 6:23). But God, in His infinite love and mercy, provided a way of salvation through the sacrifice of His Son, Jesus Christ.\n\nSalvation is not something we can earn through good works or religious rituals. It is a free gift from God, received through faith in Jesus Christ. When we place our trust in Him, acknowledging our sin and need for a Savior, we are forgiven, justified, and adopted into God\'s family.',
      type: 'salvation' as const,
      references: ['Romans 3:23', 'Romans 6:23', 'Ephesians 2:8-9', 'John 3:16-17']
    }
  ]);

  useEffect(() => {
    // Fetch salvation verses
    const fetchSalvationVerses = async () => {
      try {
        const response = await axios.get(`${config.API_BASE_URL}/verses/salvation`);
        if (response.data && response.data.length > 0) {
          setSalvationVerses(response.data);
        }
      } catch (error) {
        console.error('Error fetching salvation verses:', error);
        
        // Only use mock data if enabled in config
        if (!config.USE_MOCK_DATA) {
          setSalvationVerses([{
            reference: 'Error',
            verses: 'Could not load salvation verses',
            explanation: 'Please check your connection to the backend server'
          }]);
        }
      }
    };

    // Fetch salvation posts
    const fetchSalvationPosts = async () => {
      try {
        const response = await axios.get(`${config.API_BASE_URL}/posts/salvation`);
        if (response.data && response.data.length > 0) {
          setSalvationPosts(response.data);
        }
      } catch (error) {
        console.error('Error fetching salvation posts:', error);
        
        // Only use mock data if enabled in config
        if (!config.USE_MOCK_DATA) {
          setSalvationPosts([]);
        }
      }
    };

    fetchSalvationVerses();
    fetchSalvationPosts();
  }, []);

  return (
    <div className="salvation-page">
      <section className="salvation-intro">
        <h1>Salvation Through Christ</h1>
        <p className="salvation-description">
          Salvation is the free gift of God to all who believe in Jesus Christ. On this page, we explore 
          what the Bible teaches about salvation, how to receive it, and what it means for our lives.
        </p>
      </section>

      <section className="salvation-verses">
        <h2>Key Bible Verses About Salvation</h2>
        <div className="verses-container">
          {salvationVerses.map((verse, index) => (
            <BibleVerseCard
              key={index}
              reference={verse.reference}
              verses={verse.verses}
              explanation={verse.explanation}
            />
          ))}
        </div>
      </section>

      <section className="salvation-posts">
        <h2>Weekly Salvation Teachings</h2>
        {salvationPosts.map((post, index) => (
          <WeeklyPost
            key={index}
            title={post.title}
            date={post.date}
            content={post.content}
            type={post.type}
            references={post.references}
          />
        ))}
      </section>
    </div>
  );
};

export default SalvationPage;
