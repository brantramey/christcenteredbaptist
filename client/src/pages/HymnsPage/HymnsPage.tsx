import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BibleVerseCard from '../../components/BibleVerseCard/BibleVerseCard';
import WeeklyPost from '../../components/WeeklyPost/WeeklyPost';
import './HymnsPage.css';
import config from '../../config/config';

const HymnsPage: React.FC = () => {
  const [hymnVerses, setHymnVerses] = useState([
    {
      reference: 'Amazing Grace',
      verses: 'Amazing grace! How sweet the sound, That saved a wretch like me! I once was lost, but now am found, Was blind, but now I see.',
      explanation: 'Written by John Newton (1779), this beloved hymn expresses the profound transformation of God\'s grace in a sinner\'s life.',
      detailedTeaching: {
        title: 'The Story Behind Amazing Grace',
        date: 'March 15, 2025',
        content: 'John Newton\'s "Amazing Grace" stands as one of the most beloved hymns in Christian history. Written by a former slave trader who underwent a profound spiritual transformation, this hymn speaks to the power of God\'s grace to save and transform even the most unlikely individuals.\n\nNewton wrote this hymn from personal experience. After years participating in the brutal Atlantic slave trade, Newton experienced a dramatic conversion during a violent storm at sea in 1748. Though his complete transformation was gradual, he eventually became an outspoken abolitionist and Anglican clergyman.\n\nThe simple yet profound lyrics of "Amazing Grace" speak of personal salvation—being lost and then found, blind but now seeing. The hymn acknowledges human brokenness ("a wretch like me") while celebrating divine mercy that reaches down to save.\n\nWhat makes this hymn endure across centuries and cultures is its universal message. Whether sung in churches, at funerals, or during times of national celebration or sorrow, its melody and message continue to resonate with people from all walks of life.\n\nNewton\'s testimony reminds us that no one is beyond the reach of God\'s amazing grace—a grace that not only saves but completely transforms.',
        type: 'hymn' as const,
        references: ['Ephesians 2:8-9', 'John 9:25', '2 Corinthians 5:17']
      }
    },
    {
      reference: 'Great Is Thy Faithfulness',
      verses: 'Great is Thy faithfulness, O God my Father, There is no shadow of turning with Thee; Thou changest not, Thy compassions, they fail not; As Thou hast been Thou forever wilt be.',
      explanation: 'Composed by Thomas O. Chisholm (1923), this hymn celebrates God\'s unchanging character and daily faithfulness to His people.',
      detailedTeaching: {
        title: 'God\'s Unchanging Faithfulness',
        date: 'March 17, 2025',
        content: '"Great Is Thy Faithfulness" written by Thomas O. Chisholm in 1923 celebrates a profound biblical truth: God\'s consistent, unwavering faithfulness to His people. Unlike many beloved hymns born from dramatic life events, this hymn emerged from Chisholm\'s daily experience of God\'s faithfulness through an ordinary life marked by health struggles and modest means.\n\nThe hymn draws inspiration from Lamentations 3:22-23: "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." These verses appear in the midst of a book filled with sorrow, demonstrating that even in life\'s darkest moments, God\'s faithfulness remains.\n\nWhat makes this hymn particularly powerful is its focus on God\'s character rather than our circumstances. The lyrics emphasize God\'s unchanging nature, dependable compassion, and daily provision—attributes that remain constant regardless of our situations or feelings.\n\nThe melody, composed by William M. Runyan, perfectly complements the majestic lyrics with a tune that builds to triumphant chorus declaring "Great is Thy faithfulness!" This musical setting helps worshippers not merely understand God\'s faithfulness intellectually but feel its reality emotionally.\n\nIn a world of constant change and uncertainty, this hymn continues to remind believers that we worship a God whose character and promises remain eternally steadfast.',
        type: 'hymn' as const,
        references: ['Lamentations 3:22-23', 'Psalm 36:5', 'Hebrews 13:8']
      }
    },
    {
      reference: 'How Great Thou Art',
      verses: 'O Lord my God, when I in awesome wonder Consider all the worlds Thy hands have made, I see the stars, I hear the rolling thunder, Thy power throughout the universe displayed.',
      explanation: 'Originally a Swedish poem by Carl Boberg (1885) translated by Stuart K. Hine (1949), this hymn expresses wonder at God\'s creation and redemptive work.',
      detailedTeaching: {
        title: 'Worship Through God\'s Creation',
        date: 'March 22, 2025',
        content: '"How Great Thou Art" has a fascinating journey from its origins as a Swedish poem to becoming one of the most beloved hymns worldwide. Originally written by Carl Boberg in 1885 after witnessing a sudden thunderstorm followed by peaceful sunshine and bird songs, the poem "O Store Gud" (O Great God) captured his awe at God\'s majesty displayed in nature.\n\nThe hymn took its modern form when British missionary Stuart K. Hine translated and adapted it while serving in Ukraine in the 1920s. Hine added verses, including the powerful third verse about Christ\'s sacrifice and the triumphant fourth verse about Christ\'s return. The hymn gained international prominence when George Beverly Shea sang it during Billy Graham\'s crusades in the 1950s.\n\nWhat makes this hymn so powerful is how it progresses from worship inspired by creation to worship centered on redemption. It begins with awe at God\'s creative power displayed in nature—thunderstorms, stars, woods, and mountain grandeur. Then it transitions to even deeper wonder at God\'s redemptive work through Christ\'s sacrifice.\n\nThe recurring chorus "Then sings my soul, my Savior God to Thee; How great Thou art, how great Thou art!" captures the essence of true worship—a soul-deep response to God\'s greatness that cannot be contained but must be expressed.\n\nThis hymn reminds us that authentic worship often begins with wonder—seeing God\'s grandeur in creation leads us to recognize His even more magnificent work of salvation.',
        type: 'hymn' as const,
        references: ['Psalm 19:1-4', 'Romans 1:20', 'Revelation 5:9-14']
      }
    }
  ]);

  const [hymnPosts, setHymnPosts] = useState([
    {
      title: 'The Power of Hymns in Christian Worship',
      date: 'March 10, 2025',
      content: 'Throughout church history, hymns have served as powerful vehicles for theological truth, spiritual formation, and communal worship. Unlike many contemporary worship songs, traditional hymns often contain multiple stanzas that develop theological concepts and tell the grand narrative of redemption.\n\nHymns connect us with believers across time and space, reminding us that we are part of a faith that spans centuries. When we sing the words of hymns written hundreds of years ago, we join our voices with countless Christians who have sung these same truths through generations.\n\nMany hymns were born from profound personal experiences—suffering, deliverance, conversion, and revelation. Their enduring power comes from this authenticity and from lyrics that remain relevant to the human condition and the character of God.',
      type: 'hymn' as const,
      references: ['Ephesians 5:19', 'Colossians 3:16', 'Psalm 96:1-3']
    }
  ]);

  // State to track which verse is currently selected for the detailed teaching
  const [selectedVerseIndex, setSelectedVerseIndex] = useState<number | null>(null);

  // Function to handle verse selection for detailed teaching
  const handleVerseSelect = (index: number) => {
    setSelectedVerseIndex(index);
  };

  // Determine which content to show in the Weekly Teaching section
  const currentTeaching = selectedVerseIndex !== null 
    ? hymnVerses[selectedVerseIndex].detailedTeaching 
    : hymnPosts[0];  // Default to the first post if no verse selected

  useEffect(() => {
    // Fetch hymn verses
    const fetchHymnVerses = async () => {
      try {
        const response = await axios.get(`${config.API_BASE_URL}/verses/hymns`);
        if (response.data && response.data.length > 0) {
          setHymnVerses(response.data);
        }
      } catch (error) {
        console.error('Error fetching hymn verses:', error);
        
        // Only use mock data if enabled in config
        if (!config.USE_MOCK_DATA) {
          setHymnVerses([{
            reference: 'Error',
            verses: 'Could not load hymn verses',
            explanation: 'Please check your connection to the backend server',
            detailedTeaching: {
              title: 'Connection Error',
              date: new Date().toLocaleDateString(),
              content: 'There was an error connecting to the server. Please check your internet connection and try again later.',
              type: 'hymn' as const,
              references: []
            }
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

    fetchHymnVerses();
    fetchHymnPosts();
  }, []);

  return (
    <div className="hymns-page">
      <section className="hymns-intro">
        <h1>Timeless Hymns of Faith</h1>
        <p className="hymns-description">
          Hymns have been a cornerstone of Christian worship for centuries, carrying rich theological truths 
          and expressions of faith. Explore these timeless compositions that continue to inspire believers today.
        </p>
      </section>

      <section className="hymns-verses">
        <h2>Classic Hymns and Their Stories</h2>
        <p className="click-instruction">Click on any hymn to see a detailed history below</p>
        <div className="verses-container">
          {hymnVerses.map((verse, index) => (
            <div 
              key={index} 
              className={`verse-card clickable ${selectedVerseIndex === index ? 'active' : ''}`}
              onClick={() => handleVerseSelect(index)}
            >
              <BibleVerseCard
                reference={verse.reference}
                verses={verse.verses}
                explanation={verse.explanation}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="hymns-posts">
        <h2>Weekly Hymn Study</h2>
        <WeeklyPost
          title={currentTeaching.title}
          date={currentTeaching.date}
          content={currentTeaching.content}
          type={currentTeaching.type}
          references={currentTeaching.references}
        />
      </section>
    </div>
  );
};

export default HymnsPage;