import React from 'react';
import IndividualCard from '../../components/IndividualCard/IndividualCard';
import './JesusIsGodPage.css';

const JesusIsGodPage: React.FC = () => {
  // Mock data for demonstration based on the content from the original website
  const hebrewsVerses = [
    {
      reference: 'Hebrews 1:1-3',
      verses: 'God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, Hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things, by whom also he made the worlds; Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high.',
      explanation: 'These verses establish Jesus as the Son of God, the heir of all things, the creator of the worlds, the brightness of God\'s glory, and the express image of God\'s person. This clearly points to Jesus\' divinity.'
    }
  ];

  const divinityEvidences = [
    {
      title: 'Jesus Claimed to be God',
      verses: [
        {
          reference: 'John 8:58',
          text: 'Jesus said unto them, Verily, verily, I say unto you, Before Abraham was, I am.',
          explanation: 'Jesus used the divine name "I AM" (from Exodus 3:14) to refer to Himself, claiming eternal existence and divinity.'
        },
        {
          reference: 'John 10:30',
          text: 'I and my Father are one.',
          explanation: 'Jesus claimed unity with God the Father, which the Jewish leaders understood as a claim to divinity (they tried to stone Him for blasphemy).'
        }
      ]
    },
    {
      title: 'Jesus Demonstrated Divine Attributes',
      verses: [
        {
          reference: 'Matthew 8:26-27',
          text: 'And he saith unto them, Why are ye fearful, O ye of little faith? Then he arose, and rebuked the winds and the sea; and there was a great calm. But the men marvelled, saying, What manner of man is this, that even the winds and the sea obey him!',
          explanation: 'Jesus demonstrated authority over nature, something only God can do.'
        },
        {
          reference: 'Mark 2:5-7',
          text: 'When Jesus saw their faith, he said unto the sick of the palsy, Son, thy sins be forgiven thee. But there were certain of the scribes sitting there, and reasoning in their hearts, Why doth this man thus speak blasphemies? who can forgive sins but God only?',
          explanation: 'Jesus forgave sins, which only God has the authority to do.'
        }
      ]
    },
    {
      title: 'The Bible Explicitly Calls Jesus God',
      verses: [
        {
          reference: 'John 1:1, 14',
          text: 'In the beginning was the Word, and the Word was with God, and the Word was God... And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.',
          explanation: 'John explicitly identifies Jesus (the Word made flesh) as God.'
        },
        {
          reference: 'Titus 2:13',
          text: 'Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ.',
          explanation: 'Paul refers to Jesus Christ as "the great God and our Savior."'
        }
      ]
    }
  ];

  return (
    <div className="jesus-is-god-page">
      <section className="jesus-intro">
        <h1>Jesus is God</h1>
        <p className="jesus-description">
          One of the central doctrines of Christianity is that Jesus Christ is not merely a great teacher or prophet, but God incarnate. 
          This page explores the biblical evidence for the deity of Christ.
        </p>
      </section>

      <section className="hebrews-section">
        <h2>From the Book of Hebrews</h2>
        <div className="verses-container">
          {hebrewsVerses.map((verse, index) => (
            <IndividualCard
              key={index}
              reference={verse.reference}
              verses={verse.verses}
              explanation={verse.explanation}
            />
          ))}
        </div>
      </section>

      <section className="divinity-evidence">
        <h2>Evidence for the Deity of Christ</h2>
        <div className="evidence-container">
          {divinityEvidences.map((evidence, index) => (
            <div key={index} className="evidence-card">
              <h3 className="evidence-title">{evidence.title}</h3>
              <div className="evidence-verses">
                {evidence.verses.map((verse, vIndex) => (
                  <div key={vIndex} className="evidence-verse">
                    <p className="verse-reference">{verse.reference}</p>
                    <p className="verse-text">"{verse.text}"</p>
                    <p className="verse-explanation">{verse.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JesusIsGodPage;
