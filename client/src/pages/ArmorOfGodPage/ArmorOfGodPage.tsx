import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import IndividualCard from '../../components/IndividualCard/IndividualCard';
import WeeklyPost from '../../components/WeeklyPost/WeeklyPost';
import styles from './ArmorOfGodPage.module.css';
import config from '../../config/config';

const ArmorOfGodPage: React.FC = () => {
  const [armorVerses, setArmorVerses] = useState([
    {
      reference: 'Ephesians 6:10-12',
      verses: 'Finally, my brethren, be strong in the Lord, and in the power of his might. Put on the whole armour of God, that ye may be able to stand against the wiles of the devil. For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places.',
      explanation: 'Here we are told to be strong in the Lord and that we need the whole armor of God to stand against the devil. We are also reminded that our battle is spiritual, not physical.',
      detailedTeaching: {
        title: 'Understanding the Spiritual Battle',
        date: 'March 15, 2025',
        content: 'In Ephesians 6:10-12, Paul establishes the foundation for his teaching on spiritual warfare. "Finally, my brethren, be strong in the Lord, and in the power of his might. Put on the whole armour of God, that ye may be able to stand against the wiles of the devil. For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places."\n\nThese verses reveal several critical truths about the nature of spiritual warfare. First, our strength must come from the Lord, not ourselves. The phrase "be strong in the Lord" indicates that we draw our power from our relationship with Christ rather than our own abilities or resources.\n\nSecond, Paul emphasizes the comprehensive nature of our spiritual protection—we need the "whole armor of God." Partial armor leaves vulnerable areas exposed to attack. Just as a Roman soldier would never enter battle with incomplete equipment, believers must utilize every spiritual resource God provides.\n\nThird, Paul identifies our adversary. The phrase "the wiles of the devil" reveals that we face an enemy who employs cunning strategies and deceptive tactics. The word "wiles" (methodeia in Greek) refers to crafty methods or schemes, suggesting that Satan\'s attacks are rarely straightforward but often subtle and disguised.\n\nFinally, Paul clarifies the nature of our battle. We wrestle "not against flesh and blood"—meaning our true enemies are not other humans—but against spiritual forces operating in various hierarchies of evil. This perspective transforms how we approach conflict, helping us recognize the spiritual dimension behind human struggles.\n\nUnderstanding these foundational truths is essential before we can effectively utilize the specific pieces of spiritual armor Paul goes on to describe. Without recognizing the spiritual nature of our battles, we risk fighting the wrong enemies with the wrong weapons.',
        type: 'armor' as const,
        references: ['Ephesians 6:10-12', '2 Corinthians 10:3-5', 'John 10:10']
      }
    },
    {
      reference: 'Ephesians 6:13',
      verses: 'Wherefore take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand.',
      explanation: 'This verse emphasizes the importance of taking up the whole armor of God to withstand spiritual attacks and remain standing after the battle.',
      detailedTeaching: {
        title: 'Standing Firm in the Evil Day',
        date: 'March 16, 2025',
        content: 'Ephesians 6:13 presents both a command and a promise: "Wherefore take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand."\n\nThe word "wherefore" connects this verse to the previous description of our spiritual enemies. Because we face such formidable foes, we must take up the whole armor of God. The phrase "take unto you" implies personal responsibility—God provides the armor, but we must actively appropriate and put it on.\n\nThe reference to "the evil day" deserves special attention. This isn\'t speaking only of the end times, but of any day when spiritual attack intensifies. Every believer will face seasons when spiritual opposition becomes particularly strong—days of temptation, persecution, or spiritual dryness. The armor of God is specifically designed for these critical moments.\n\nThe promise in this verse appears in the final phrases: "that ye may be able to withstand... and having done all, to stand." The repetition of "stand" emphasizes that victory in spiritual warfare is often defined not by spectacular advances but by simply maintaining our position in Christ. Sometimes success means not being moved from the truth and character of Christ despite intense opposition.\n\nThe phrase "having done all" reminds us that standing firm requires our active participation. We must utilize every resource God provides and exercise spiritual discipline. Spiritual victory never comes through passivity.\n\nThis verse serves as a transition between Paul\'s description of our enemies and his detailed explanation of the spiritual armor. It emphasizes both the necessity of the armor and the goal of its use—to remain standing against every spiritual attack.',
        type: 'armor' as const,
        references: ['Ephesians 6:13', 'James 4:7', '1 Peter 5:8-9']
      }
    },
    {
      reference: 'Belt of Truth - Ephesians 6:14a',
      verses: 'Stand therefore, having your loins girt about with truth',
      explanation: 'The belt of truth represents honesty, integrity, and a commitment to God\'s truth. With the truth, we will be able to understand the tricks Satan uses to water down the Word.',
      detailedTeaching: {
        title: 'The Belt of Truth: Foundation of Spiritual Armor',
        date: 'March 17, 2025',
        content: 'Paul begins his description of the spiritual armor with the belt of truth: "Stand therefore, having your loins girt about with truth" (Ephesians 6:14a). In Roman military equipment, the belt was foundational—it secured the soldier\'s tunic, held the scabbard for the sword, and protected the vulnerable abdominal area. Similarly, truth serves as the foundation for our spiritual protection.\n\nThe truth referenced here operates on multiple levels. First, it refers to the objective truth of God\'s Word. Jesus prayed, "Sanctify them through thy truth: thy word is truth" (John 17:17). The Bible provides the absolute standard by which we evaluate all ideas, feelings, and experiences. Without this anchor, we become vulnerable to deception.\n\nSecond, it encompasses truthfulness as a character quality—integrity, honesty, and sincerity in our relationship with God and others. Psalm 51:6 tells us that God desires "truth in the inward parts." When we cultivate inner honesty, refusing to deceive ourselves or others, we strengthen our spiritual defense.\n\nThird, the belt of truth involves embracing the truth of our identity in Christ. Many spiritual battles are lost when believers forget who they are in Christ—forgiven, accepted, empowered, and beloved. The enemy\'s accusations lose their power when countered with the truth of how God sees us.\n\nFastening the belt of truth looks like daily immersion in Scripture, cultivating honesty in all relationships, confronting self-deception, and regularly reminding ourselves of our position in Christ. When these practices become habits, we establish a foundation that supports all other aspects of spiritual warfare.\n\nAs the first piece of armor mentioned, the belt of truth reminds us that our defense against spiritual attack begins with commitment to truth in all its forms. Without truth, the rest of our spiritual armor lacks proper support.',
        type: 'armor' as const,
        references: ['Ephesians 6:14a', 'John 17:17', 'Psalm 51:6', 'John 8:32']
      }
    },
    {
      reference: 'Breastplate of Righteousness - Ephesians 6:14b',
      verses: 'and having on the breastplate of righteousness',
      explanation: 'The breastplate protects vital organs like the heart. Moral character serves as protection from spiritual enemies. Righteousness is a covering that guards our heart and soul.',
      detailedTeaching: {
        title: 'The Breastplate of Righteousness: Protecting the Heart',
        date: 'March 18, 2025',
        content: 'The second piece of spiritual armor Paul describes is "the breastplate of righteousness" (Ephesians 6:14b). In Roman military equipment, the breastplate protected the soldier\'s vital organs, especially the heart. Spiritually, this piece of armor guards our emotional and moral center.\n\nThe righteousness referred to here has two essential aspects. First, it includes the imputed righteousness we receive through faith in Christ. When we trust in Jesus, His perfect righteousness is credited to our account (2 Corinthians 5:21). This gift of right standing with God forms our primary protection against condemnation and accusation.\n\nSecond, it involves practical righteousness—living according to God\'s standards in our daily choices. While our standing with God is secured by Christ\'s righteousness, our experience of spiritual protection is strengthened by obedience and weakened by sin. As Proverbs 28:1 states, "The righteous are bold as a lion," indicating that righteous living produces spiritual confidence and courage.\n\nThe heart, which the breastplate protects, represents our inner life of emotions, desires, and will. Scripture warns, "Keep thy heart with all diligence; for out of it are the issues of life" (Proverbs 4:23). The breastplate of righteousness guards against attacks targeting our affections, thoughts, and motives.\n\nPutting on this breastplate involves first resting in the perfect righteousness we have in Christ, then pursuing practical holiness in everyday decisions. When temptation comes, we remind ourselves of our identity as "the righteousness of God in him" (2 Corinthians 5:21) while also choosing to live according to that identity.\n\nThe breastplate reminds us that both our position in Christ and our practice of righteousness serve as vital protection in spiritual warfare. Without this piece of armor, our hearts remain vulnerable to the enemy\'s most devastating attacks.',
        type: 'armor' as const,
        references: ['Ephesians 6:14b', '2 Corinthians 5:21', 'Proverbs 28:1', 'Proverbs 4:23']
      }
    },
    {
      reference: 'Feet Shod with the Gospel of Peace - Ephesians 6:15',
      verses: 'And your feet shod with the preparation of the gospel of peace',
      explanation: 'This represents readiness to spread the good news of Christ. We are called to protect ourselves from attacks that keep us from spreading the gospel while continuing to study the Word so we can grow in our faith.',
      detailedTeaching: {
        title: 'Gospel Shoes: Standing Firm and Moving Forward',
        date: 'March 19, 2025',
        content: 'For the third piece of spiritual armor, Paul directs our attention downward: "And your feet shod with the preparation of the gospel of peace" (Ephesians 6:15). Roman soldiers wore studded boots that provided traction, protection, and stability on various terrains. Similarly, the gospel of peace gives believers both stability and mobility in spiritual battles.\n\nThe "gospel of peace" refers to the good news that through Christ, we can have peace with God (Romans 5:1) and the peace of God (Philippians 4:7). This peace becomes our firm foundation in spiritual warfare. When our relationship with God is secure, we can stand confidently against the enemy\'s attacks.\n\nThe word "preparation" suggests readiness or preparedness. Having our feet "shod" with the gospel means being ready to stand our ground when attacked and to advance when opportunities arise. This readiness has both defensive and offensive implications in spiritual warfare.\n\nDefensively, the gospel of peace prevents us from being moved by fear, doubt, or confusion. When we remain conscious of our peace with God, we maintain our spiritual footing even on difficult terrain.\n\nOffensively, these spiritual shoes prepare us to advance with the message of Christ. As Isaiah 52:7 declares, "How beautiful upon the mountains are the feet of him that bringeth good tidings, that publisheth peace." Our best attack against the kingdom of darkness is to spread the light of the gospel.\n\nPutting on these gospel shoes involves daily reminding ourselves of our peace with God through Christ, allowing God\'s peace to rule in our hearts amid chaos, and maintaining readiness to share this peace with others. These practices ensure we remain both stable in our faith and mobile in our mission.\n\nIn a world characterized by spiritual instability and conflict, the gospel of peace provides the solid footing believers need—both to withstand attacks and to advance Christ\'s kingdom.',
        type: 'armor' as const,
        references: ['Ephesians 6:15', 'Romans 5:1', 'Philippians 4:7', 'Isaiah 52:7']
      }
    },
    {
      reference: 'Shield of Faith - Ephesians 6:16',
      verses: 'Above all, taking the shield of faith, wherewith ye shall be able to quench all the fiery darts of the wicked.',
      explanation: 'The shield protects against the fiery darts of the wicked. Faith comes through hearing the Word of God (Romans 10:17) and without faith it is impossible to please God (Hebrews 11:6).',
      detailedTeaching: {
        title: 'The Shield of Faith: Extinguishing Fiery Arrows',
        date: 'March 20, 2025',
        content: 'Paul now introduces a piece of armor with particular emphasis: "Above all, taking the shield of faith, wherewith ye shall be able to quench all the fiery darts of the wicked" (Ephesians 6:16). The phrase "above all" highlights the shield\'s special importance in spiritual protection.\n\nThe shield referenced here is not the small round shield (aspis) but the large door-shaped shield (thureos) that covered almost the entire body. Roman soldiers would soak these wooden shields in water before battle so that when enemy arrows wrapped with burning pitch struck them, the flames would be extinguished rather than setting the shield ablaze. Similarly, faith provides comprehensive protection against the enemy\'s most dangerous attacks.\n\nFaith in this context represents active trust in God\'s character, promises, and power. It\'s not merely intellectual belief but confident reliance on who God is and what He has said. Hebrews 11:1 defines it as "the substance of things hoped for, the evidence of things not seen."\n\nThe "fiery darts" or arrows represent Satan\'s attacks on our mind and emotions—sudden temptations, accusations, doubts, fears, and impure thoughts. These attacks often come unexpectedly and aim to inflame destructive passions or burning guilt and shame.\n\nThe shield of faith "quenches" these fiery projectiles by applying God\'s truth to each attack. When temptation comes, faith remembers God\'s character and promises. When accusation comes, faith recalls Christ\'s completed work. When doubt assails, faith stands on God\'s demonstrated faithfulness.\n\nRaising this shield involves actively remembering and declaring God\'s promises, especially in moments of spiritual attack. It means choosing to believe God\'s Word over our feelings, circumstances, or the enemy\'s suggestions. As we exercise faith, our shield becomes increasingly effective at extinguishing even the most intense spiritual assaults.\n\nThe shield of faith reminds us that our active trust in God provides protection that no other spiritual discipline can offer. With this shield raised, we can advance confidently even through the enemy\'s most intensive attacks.',
        type: 'armor' as const,
        references: ['Ephesians 6:16', 'Hebrews 11:1', 'Romans 10:17', '1 John 5:4']
      }
    },
    {
      reference: 'Helmet of Salvation - Ephesians 6:17a',
      verses: 'And take the helmet of salvation',
      explanation: `The helmet protects the mind against spiritual attacks. In 1 Thessalonians 5:8, we see the helmet used as "the hope of salvation." Salvation is a free gift of God's grace to those who believe (Ephesians 2:8-9).`,
      detailedTeaching: {
        title: 'The Helmet of Salvation: Protecting the Mind',
        date: 'March 21, 2025',
        content: 'The fifth piece of spiritual armor Paul identifies is "the helmet of salvation" (Ephesians 6:17a). In Roman military equipment, the helmet was crucial for protecting the head from deadly blows. Spiritually, the helmet of salvation guards our mind—the primary battleground in spiritual warfare.\n\nThe salvation referenced here encompasses all three tenses of our salvation: past (justification), present (sanctification), and future (glorification). In 1 Thessalonians 5:8, Paul specifically associates the helmet with "the hope of salvation," highlighting the future aspect of our redemption. This suggests that the helmet particularly protects us by fostering certainty about our eternal security and destiny.\n\nThe mind requires special protection because it\'s where Satan concentrates many of his attacks. He assaults believers with doubts about their salvation, confusion about their identity in Christ, and lies about God\'s character and promises. A mind unprotected by the assurance of salvation remains vulnerable to these devastating attacks.\n\nWearing the helmet of salvation involves renewing our mind with truth about our redemption (Romans 12:2). It means cultivating a thorough understanding of what Christ has accomplished for us, who we are in Him, and what awaits us in eternity. This knowledge forms a protective barrier against the enemy\'s attempts to infiltrate our thinking with falsehood.\n\nThe helmet also protects us from the "blow" of discouragement during suffering. When we maintain consciousness of our secure eternal future, present difficulties lose their power to devastate us spiritually. As Paul writes elsewhere, "For I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us" (Romans 8:18).\n\nIn putting on this helmet, we daily remind ourselves of the magnificent salvation we\'ve received—past, present, and future. This practice fortifies our mind against attacks that would otherwise leave us vulnerable to spiritual defeat.\n\nThe helmet of salvation ensures that our mind remains protected by the assurance of God\'s redemptive work, allowing us to think clearly and biblically even amid intense spiritual conflict.',
        type: 'armor' as const,
        references: ['Ephesians 6:17a', '1 Thessalonians 5:8', 'Romans 12:2', 'Romans 8:18']
      }
    },
    {
      reference: 'Sword of the Spirit - Ephesians 6:17b',
      verses: 'and the sword of the Spirit, which is the word of God',
      explanation: 'The sword of the Spirit is the Word of God. Just as a sword is an important piece of a soldier\'s equipment, the Word of God helps us understand the Spirit\'s leading and allows us to repel temptation when we learn it.',
      detailedTeaching: {
        title: 'The Sword of the Spirit: Our Offensive Weapon',
        date: 'March 22, 2025',
        content: 'The final piece in Paul\'s armor inventory is "the sword of the Spirit, which is the word of God" (Ephesians 6:17b). This is the only explicitly offensive weapon in the spiritual arsenal. While the other pieces primarily provide protection, the sword enables the believer to actively engage and repel the enemy.\n\nThe "sword" (machaira in Greek) refers to the short sword Roman soldiers used for close combat. Unlike the larger broadsword, this weapon was designed for precise, strategic thrusting. This imagery suggests that Scripture is not meant to be wielded wildly but with accuracy and purposefulness in spiritual battles.\n\nPaul identifies this sword as "of the Spirit," indicating that the Holy Spirit empowers and directs its use. Scripture becomes most effective when used under the Spirit\'s guidance rather than through our own strength or strategy. The Spirit who inspired the Word also teaches us how to apply it in spiritual conflict.\n\nThe phrase "the word of God" translates rhema tou theou, which often refers to a specific utterance rather than the entire written Word (logos). This suggests that in spiritual warfare, we need not only general biblical knowledge but specific Scriptures that address our particular battle. Jesus demonstrated this principle during His wilderness temptation, countering each satanic attack with precisely applicable Scripture (Matthew 4:1-11).\n\nWielding this sword effectively requires both knowledge of Scripture and skill in applying it to specific situations. This comes through regular study, memorization, and meditation on God\'s Word. As we internalize Scripture, the Holy Spirit can bring the right passage to mind exactly when we need it.\n\nThe sword serves both defensive and offensive functions. Defensively, it parries the enemy\'s attacks by exposing lies with truth. Offensively, it advances Christ\'s kingdom by proclaiming truth that sets captives free. In both roles, the Word penetrates to the heart of matters, "piercing even to the dividing asunder of soul and spirit" (Hebrews 4:12).\n\nThe sword of the Spirit reminds us that God\'s Word, skillfully applied under the Spirit\'s direction, provides the cutting edge we need for victory in spiritual warfare.',
        type: 'armor' as const,
        references: ['Ephesians 6:17b', 'Matthew 4:1-11', 'Hebrews 4:12', 'Psalm 119:11']
      }
    }
  ]);

  const [armorPosts, setArmorPosts] = useState([
    {
      title: 'Spiritual Warfare in the Christian Life',
      date: 'March 10, 2025',
      content: 'The Bible clearly teaches that followers of Christ are engaged in a spiritual battle. This battle is not against flesh and blood but against spiritual forces of evil in the heavenly realms (Ephesians 6:12). Understanding the nature of this conflict is essential for every believer.\n\nSpiritual warfare is not a peripheral issue in Christianity but central to our experience. The enemy seeks to destroy our faith, damage our witness, and disrupt our relationship with God. His tactics include deception, accusation, temptation, and discouragement.\n\nGod has not left us defenseless in this battle. He has provided spiritual armor that, when properly used, enables us to stand firm against every attack. This armor is not physical but represents spiritual truths and practices that protect us and empower us to overcome the enemy\'s schemes.',
      type: 'armor' as const,
      references: ['Ephesians 6:10-18', '2 Corinthians 10:3-5', '1 Peter 5:8-9', 'James 4:7']
    }
  ]);

  const location = useLocation();
  const [selectedVerseIndex, setSelectedVerseIndex] = useState<number | null>(null);

  const handleVerseSelect = (index: number) => {
    setSelectedVerseIndex(index);
  };

  const currentTeaching = selectedVerseIndex !== null 
    ? armorVerses[selectedVerseIndex].detailedTeaching 
    : armorPosts[0];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const reference = params.get('reference');

    if (reference) {
      const index = armorVerses.findIndex(verse => verse.reference === reference);

      if (index !== -1) {
        setSelectedVerseIndex(index);

        const weeklyPostElement = document.getElementById('weekly-post');
        const offset = weeklyPostElement ? weeklyPostElement.offsetTop - 50 : 0;

        setTimeout(() => {
          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        }, 100);
      }
    }

    const fetchArmorVerses = async () => {
      try {
        const response = await axios.get(`${config.API_BASE_URL}/verses/armor`);
        if (response.data && response.data.length > 0) {
          setArmorVerses(response.data);
        }
      } catch (error) {
        console.error('Error fetching armor verses:', error);
        
        if (!config.USE_MOCK_DATA) {
          setArmorVerses([{
            reference: 'Error',
            verses: 'Could not load armor verses',
            explanation: 'Please check your connection to the backend server',
            detailedTeaching: {
              title: 'Connection Error',
              date: new Date().toLocaleDateString(),
              content: 'There was an error connecting to the server. Please check your internet connection and try again later.',
              type: 'armor' as const,
              references: []
            }
          }]);
        }
      }
    };

    const fetchArmorPosts = async () => {
      try {
        const response = await axios.get(`${config.API_BASE_URL}/posts/armor`);
        if (response.data && response.data.length > 0) {
          setArmorPosts(response.data);
        }
      } catch (error) {
        console.error('Error fetching armor posts:', error);
        
        if (!config.USE_MOCK_DATA) {
          setArmorPosts([]);
        }
      }
    };

    fetchArmorVerses();
    fetchArmorPosts();
  }, [location.search, armorVerses]);

  return (
    <div className={styles['armor-page']}>
      <section className={styles['armor-intro']}>
        <h1>Put on the Full Armor of God</h1>
        <p className={styles['armor-description']}>
          Ephesians 6:10-17 explains that we need to have the armor of God. This page explores what the parts
          of the full armor of God are and how they protect us in our spiritual battle.
        </p>
      </section>

      <section className={styles['armor-verses']}>
        <h2>The Pieces of God's Armor</h2>
        <p className={styles['click-instruction']}>Click on any armor piece to see a detailed teaching below</p>
        <div className={styles['verses-container']}>
          {armorVerses.map((verse, index) => (
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

      <section className={styles['armor-posts']}>
        <h2>Weekly Armor Teaching</h2>
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

export default ArmorOfGodPage;