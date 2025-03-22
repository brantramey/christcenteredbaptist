import React from 'react';
import BibleVerseCard from '../../components/BibleVerseCard/BibleVerseCard';
import './ArmorOfGodPage.css';

const ArmorOfGodPage: React.FC = () => {
  // Mock data for demonstration based on the content from the original website
  const armorVerses = [
    {
      reference: 'Ephesians 6:10-12',
      verses: 'Finally, my brethren, be strong in the Lord, and in the power of his might. Put on the whole armour of God, that ye may be able to stand against the wiles of the devil. For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places.',
      explanation: 'Here we are told to be strong in the Lord and that we need the whole armor of God to stand against the devil. We are also reminded that our battle is spiritual, not physical.'
    },
    {
      reference: 'Ephesians 6:13',
      verses: 'Wherefore take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand.',
      explanation: 'This verse emphasizes the importance of taking up the whole armor of God to withstand spiritual attacks and remain standing after the battle.'
    }
  ];

  const armorPieces = [
    {
      title: 'Belt of Truth',
      reference: 'Ephesians 6:14a',
      verse: 'Stand therefore, having your loins girt about with truth',
      explanation: 'The belt of truth represents honesty, integrity, and a commitment to God\'s truth. With the truth, we will be able to understand the tricks Satan uses to water down the Word.'
    },
    {
      title: 'Breastplate of Righteousness',
      reference: 'Ephesians 6:14b',
      verse: 'and having on the breastplate of righteousness',
      explanation: 'The breastplate protects vital organs like the heart. Moral character serves as protection from spiritual enemies. Righteousness is a covering that guards our heart and soul.'
    },
    {
      title: 'Feet Shod with the Gospel of Peace',
      reference: 'Ephesians 6:15',
      verse: 'And your feet shod with the preparation of the gospel of peace',
      explanation: 'This represents readiness to spread the good news of Christ. We are called to protect ourselves from attacks that keep us from spreading the gospel while continuing to study the Word so we can grow in our faith.'
    },
    {
      title: 'Shield of Faith',
      reference: 'Ephesians 6:16',
      verse: 'Above all, taking the shield of faith, wherewith ye shall be able to quench all the fiery darts of the wicked.',
      explanation: 'The shield protects against the fiery darts of the wicked. Faith comes through hearing the Word of God (Romans 10:17) and without faith it is impossible to please God (Hebrews 11:6).'
    },
    {
      title: 'Helmet of Salvation',
      reference: 'Ephesians 6:17a',
      verse: 'And take the helmet of salvation',
      explanation: 'The helmet protects the mind against spiritual attacks. In 1 Thessalonians 5:8, we see the helmet used as "the hope of salvation." Salvation is a free gift of God\'s grace to those who believe (Ephesians 2:8-9).'
    },
    {
      title: 'Sword of the Spirit',
      reference: 'Ephesians 6:17b',
      verse: 'and the sword of the Spirit, which is the word of God',
      explanation: 'The sword of the Spirit is the Word of God. Just as a sword is an important piece of a soldier\'s equipment, the Word of God helps us understand the Spirit\'s leading and allows us to repel temptation when we learn it.'
    }
  ];

  return (
    <div className="armor-page">
      <section className="armor-intro">
        <h1>Put on the Full Armor of God</h1>
        <p className="armor-description">
          Ephesians 6:10-17 explains that we need to have the armor of God. This page explores what the parts of the full armor of God are and how they protect us in our spiritual battle.
        </p>
      </section>

      <section className="armor-verses">
        <h2>Understanding the Spiritual Battle</h2>
        <div className="verses-container">
          {armorVerses.map((verse, index) => (
            <BibleVerseCard
              key={index}
              reference={verse.reference}
              verses={verse.verses}
              explanation={verse.explanation}
            />
          ))}
        </div>
      </section>

      <section className="armor-pieces">
        <h2>The Pieces of God's Armor</h2>
        <div className="armor-grid">
          {armorPieces.map((piece, index) => (
            <div key={index} className="armor-piece-card">
              <h3 className="armor-piece-title">{piece.title}</h3>
              <div className="armor-piece-verse">
                <p className="reference">{piece.reference}</p>
                <p className="verse-text">"{piece.verse}"</p>
              </div>
              <div className="armor-piece-explanation">
                <p>{piece.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArmorOfGodPage;
