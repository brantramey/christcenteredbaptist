import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage: React.FC = () => {
  return (
    <div className={styles['about-page']}>
      <section className={styles['about-intro']}>
        <h1>About Christ Centered Baptist</h1>
        <p className={styles['about-description']}>
          Welcome to Christ Centered Baptist. Our mission is to teach Christ through the Bible and
          help believers grow in their understanding of salvation and God's Word.
        </p>
      </section>

      <section className={styles['about-mission']}>
        <h2>Our Mission</h2>
        <p>
          At Christ Centered Baptist, we are dedicated to teaching the Bible in a way that is centered on Christ.
          We believe that all Scripture points to Jesus Christ and His work of salvation. Our goal is to help
          people understand the Bible's message of salvation and grow in their relationship with God.
        </p>
      </section>

      <section className={styles['about-beliefs']}>
        <h2>Our Beliefs</h2>
        <div className={styles['beliefs-container']}>
          <div className={styles['belief-card']}>
            <h3>The Bible</h3>
            <p>
              We believe that the Bible is the inspired, inerrant Word of God. As 2 Timothy 3:16-17 states,
              "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for
              correction, for instruction in righteousness: That the man of God may be perfect, throughly
              furnished unto all good works."
            </p>
          </div>
          
          <div className={styles['belief-card']}>
            <h3>Salvation</h3>
            <p>
              We believe that salvation is by grace through faith in Jesus Christ alone. Ephesians 2:8-9 tells us,
              "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of
              works, lest any man should boast."
            </p>
          </div>
          
          <div className={styles['belief-card']}>
            <h3>Jesus Christ</h3>
            <p>
              We believe that Jesus Christ is God incarnate, fully God and fully man. He was born of a virgin,
              lived a sinless life, died on the cross for our sins, rose bodily from the dead, and ascended to
              heaven where He now intercedes for believers.
            </p>
          </div>
        </div>
      </section>

      <section className={styles['about-content']}>
        <h2>Our Content</h2>
        <p>
          On this website, you'll find:
        </p>
        <ul className={styles['content-list']}>
          <li>Weekly posts about salvation passages from the Bible</li>
          <li>Studies on hymns that focus on salvation</li>
          <li>Teachings on the Armor of God</li>
          <li>Biblical evidence for the deity of Christ</li>
          <li>And more resources to help you grow in your faith</li>
        </ul>
      </section>

      <section className={styles['about-connect']}>
        <h2>Connect With Us</h2>
        <p>
          Follow us on X (formerly Twitter) for regular updates, Bible verses, and announcements.
          We post weekly about salvation passages and hymns that focus on salvation.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
