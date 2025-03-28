import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import IndividualCard from '../../components/IndividualCard/IndividualCard';
import WeeklyPost from '../../components/WeeklyPost/WeeklyPost';
import styles from './SalvationPage.module.css';
import config from '../../config/config';

const SalvationPage: React.FC = () => {
  const [salvationVerses, setSalvationVerses] = useState([
    {
      reference: 'John 3:16',
      verses: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
      explanation: 'This verse encapsulates the gospel message - God\'s love for humanity led Him to send Jesus so that through faith in Him, we can have eternal life.',
      detailedTeaching: {
        title: 'The Ultimate Expression of God\'s Love',
        date: 'March 15, 2025',
        content: 'John 3:16 is often called "the gospel in a nutshell" because it concisely captures the core message of Christianity. "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."\n\nIn this profound statement, we see several key truths. First, God\'s motivation is love—not anger, not obligation, but deep and abiding love for humanity. The phrase "so loved" indicates the intensity and extent of this divine love.\n\nSecond, we see God\'s sacrifice. He "gave his only begotten Son." This was not a small gift but the most precious offering possible. It reflects the heart of a Father willingly sending His beloved Son to rescue those who could never save themselves.\n\nThird, we see the universal scope of salvation—"whosoever believeth." This invitation is extended to all people regardless of background, past sins, or social status. There are no prerequisites except faith.\n\nFinally, we see the purpose: that we "should not perish, but have everlasting life." This points to both the negative consequence averted (perishing) and the positive benefit gained (eternal life). Salvation is not merely about escaping judgment but entering into a new quality of life that begins now and extends forever.\n\nThis single verse reveals the heart of God, the way of salvation, and the hope of eternity—truly the gospel in its most essential form.',
        type: 'salvation' as const,
        references: ['John 3:16-17', 'Romans 5:8', '1 John 4:9-10']
      }
    },
    {
      reference: 'Romans 10:9-10',
      verses: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.',
      explanation: 'These verses explain the simplicity of salvation - it requires belief in Jesus\' resurrection and confession of Him as Lord.',
      detailedTeaching: {
        title: 'Faith and Confession: The Path to Salvation',
        date: 'March 17, 2025',
        content: 'Romans 10:9-10 provides one of the clearest explanations of how a person receives salvation: "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation."\n\nThese verses highlight two essential components of saving faith. First, there is internal belief—a genuine heart conviction that Jesus is who He claimed to be and that God raised Him from the dead. This is not mere intellectual assent but a deep, transformative trust.\n\nSecond, there is external confession—a public acknowledgment of Jesus as Lord. True faith is never completely private; it expresses itself outwardly. When we declare "Jesus is Lord," we\'re recognizing His authority over our lives and submitting to His rightful place as ruler.\n\nNotice the beautiful symmetry in verse 10: "For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation." Inward belief leads to righteousness (right standing with God), while outward confession confirms and completes the salvation process.\n\nThis passage emphasizes the accessibility and simplicity of salvation. It doesn\'t require complex rituals, extensive theological knowledge, or years of good works. It requires only sincere faith in Christ and willingness to acknowledge Him publicly.\n\nIn a world of complicated religious systems, the gospel message stands out for its clarity and simplicity—believe and confess, and you will be saved.',
        type: 'salvation' as const,
        references: ['Romans 10:9-13', 'Matthew 10:32-33', 'Acts 16:31']
      }
    },
    {
      reference: 'Ephesians 2:8-9',
      verses: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.',
      explanation: 'Salvation is a gift from God received through faith, not something we can earn through our own efforts or good works.',
      detailedTeaching: {
        title: 'Grace: God\'s Unmerited Favor',
        date: 'March 22, 2025',
        content: 'Ephesians 2:8-9 contains one of the most profound declarations about salvation in all of Scripture: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast."\n\nIn these few words, the apostle Paul dismantles any notion that we can earn our way to heaven or contribute to our own salvation. Let\'s examine the key components of this revolutionary statement.\n\nFirst, salvation is "by grace." Grace is God\'s unmerited favor—His kindness toward us despite our unworthiness. It\'s not something we deserve or could ever deserve. Grace is the loving heart of God in action toward sinners.\n\nSecond, this grace is received "through faith." Faith is the empty hand that receives God\'s gift. It contributes nothing to salvation except to accept what is freely offered. Faith is not a work that earns salvation; it\'s the channel through which salvation comes.\n\nThird, Paul emphasizes that salvation is "not of yourselves." He removes any possibility of human contribution. Even the faith through which we receive grace is enabled by God.\n\nFourth, salvation is "the gift of God." Like any true gift, it cannot be earned or deserved. If it could be earned, it would be payment, not a gift. The gift nature of salvation preserves its character as an expression of love rather than a transaction.\n\nFinally, salvation is "not of works, lest any man should boast." If we could contribute to our salvation through good deeds, we would have reason for pride. But God\'s design removes all grounds for human boasting, ensuring that He alone receives glory for our redemption.\n\nThis passage celebrates the scandalous generosity of God, who freely gives what we could never earn and saves those who could never save themselves.',
        type: 'salvation' as const,
        references: ['Ephesians 2:8-10', 'Romans 3:23-24', 'Titus 3:4-7']
      }
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

  // State to track which verse is currently selected for the detailed teaching
  const [selectedVerseIndex, setSelectedVerseIndex] = useState<number | null>(null);

  // Function to handle verse selection for detailed teaching
  const handleVerseSelect = (index: number) => {
    setSelectedVerseIndex(index);
  };

  // Determine which content to show in the Weekly Teaching section
  const currentTeaching = selectedVerseIndex !== null
    ? salvationVerses[selectedVerseIndex].detailedTeaching
    : salvationPosts[0];  // Default to the first post if no verse selected

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const reference = params.get('reference');

    if (reference) {
      // Find the index of the salvation verse with the matching reference
      const index = salvationVerses.findIndex(verse => verse.reference === reference);

      if (index !== -1) {
        // Set the selected verse index to trigger the detailed teaching to update
        setSelectedVerseIndex(index);

        // Scroll to the Weekly Salvation Teachings section
        const weeklyPostElement = document.getElementById('weekly-post');
        const offset = weeklyPostElement ? weeklyPostElement.offsetTop - 50 : 0;

        setTimeout(() => {
          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        }, 100); // Add a small delay to ensure the content is loaded
      }
    }

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
            explanation: 'Please check your connection to the backend server',
            detailedTeaching: {
              title: 'Connection Error',
              date: new Date().toLocaleDateString(),
              content: 'There was an error connecting to the server. Please check your internet connection and try again later.',
              type: 'salvation' as const,
              references: []
            }
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
  }, [location.search, salvationVerses]);

  return (
    <div className={styles['salvation-page']}>
      <section className={styles['salvation-intro']}>
        <h1>Salvation Through Christ</h1>
        <p className={styles['salvation-description']}>
          Salvation is the free gift of God to all who believe in Jesus Christ. On this page, we explore
          what the Bible teaches about salvation, how to receive it, and what it means for our lives.
        </p>
      </section>

      <section className={styles['salvation-verses']}>
        <h2>Key Bible Verses About Salvation</h2>
        <p className={styles['click-instruction']}>Click on any verse to see a detailed teaching below</p>
        <div className={styles['verses-container']}>
          {salvationVerses.map((verse, index) => (
            <div
              key={index}
              className={`${styles['verse-card']} ${styles['clickable']} ${selectedVerseIndex === index ? styles['active'] : ''}`}
              onClick={() => handleVerseSelect(index)}
            >
              <IndividualCard
                reference={verse.reference}
                verses={verse.verses}
                explanation={verse.explanation}
              />
            </div>
          ))}
        </div>
      </section>

      <section className={styles['salvation-posts']}>
        <h2>Weekly Salvation Teachings</h2>
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

export default SalvationPage;