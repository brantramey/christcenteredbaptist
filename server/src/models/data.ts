import { BibleVerse, Hymn, WeeklyPost } from '../models/types';

// Mock data for Bible verses
export const verses: BibleVerse[] = [
  {
    id: 1,
    reference: 'John 3:16',
    verses: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
    explanation: 'This verse encapsulates the gospel message - God\'s love for humanity led Him to send Jesus so that through faith in Him, we can have eternal life.'
  },
  {
    id: 2,
    reference: 'Romans 10:9-10',
    verses: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.',
    explanation: 'These verses explain the simplicity of salvation - it requires belief in Jesus\' resurrection and confession of Him as Lord.'
  },
  {
    id: 3,
    reference: 'Ephesians 2:8-9',
    verses: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.',
    explanation: 'Salvation is a gift from God received through faith, not something we can earn through our own efforts or good works.'
  }
];

// Mock data for hymns
export const hymns: Hymn[] = [
  {
    id: 1,
    title: 'Amazing Grace',
    author: 'John Newton',
    year: '1779',
    lyrics: 'Amazing grace! How sweet the sound\nThat saved a wretch like me!\nI once was lost, but now am found;\nWas blind, but now I see.\n\n\'Twas grace that taught my heart to fear,\nAnd grace my fears relieved;\nHow precious did that grace appear\nThe hour I first believed.',
    explanation: 'Written by John Newton, a former slave trader who experienced a profound conversion to Christianity. This hymn reflects his personal testimony of God\'s grace in his life.'
  },
  {
    id: 2,
    title: 'How Great Thou Art',
    author: 'Carl Boberg (translated by Stuart K. Hine)',
    year: '1885',
    lyrics: 'O Lord my God, when I in awesome wonder,\nConsider all the worlds Thy hands have made;\nI see the stars, I hear the rolling thunder,\nThy power throughout the universe displayed.\n\nThen sings my soul, my Savior God, to Thee,\nHow great Thou art, how great Thou art.\nThen sings my soul, my Savior God, to Thee,\nHow great Thou art, how great Thou art!',
    explanation: 'Originally a Swedish poem written by Carl Boberg, this hymn celebrates God\'s majesty as revealed in creation and salvation.'
  }
];

// Mock data for weekly posts
export const posts: WeeklyPost[] = [
  {
    id: 1,
    title: 'Understanding God\'s Plan of Salvation',
    date: '2025-03-10',
    content: 'Salvation is at the core of the Christian faith. It represents God\'s rescue mission for humanity, offering forgiveness, reconciliation, and eternal life through Jesus Christ.\n\nThe Bible teaches that all have sinned and fall short of God\'s glory (Romans 3:23), and the wages of sin is death (Romans 6:23). But God, in His infinite love and mercy, provided a way of salvation through the sacrifice of His Son, Jesus Christ.\n\nSalvation is not something we can earn through good works or religious rituals. It is a free gift from God, received through faith in Jesus Christ. When we place our trust in Him, acknowledging our sin and need for a Savior, we are forgiven, justified, and adopted into God\'s family.',
    type: 'salvation',
    references: ['Romans 3:23', 'Romans 6:23', 'Ephesians 2:8-9', 'John 3:16-17']
  },
  {
    id: 2,
    title: 'The Story Behind "Amazing Grace"',
    date: '2025-03-05',
    content: 'Few hymns have touched as many hearts as "Amazing Grace." Written by John Newton in 1779, this beloved hymn tells the story of a man transformed by God\'s grace.\n\nNewton was once a slave trader who underwent a dramatic conversion experience during a violent storm at sea. After becoming a Christian, he eventually became an Anglican priest and a prominent supporter of the abolition of slavery.\n\nThe lyrics of "Amazing Grace" reflect Newton\'s personal journey from sin to salvation. The line "I once was lost, but now am found" speaks to his transformation from a man involved in the horrific slave trade to a minister proclaiming God\'s grace.\n\nThis hymn reminds us that no one is beyond the reach of God\'s amazing grace. No matter our past, God\'s grace offers forgiveness, redemption, and a new beginning.',
    type: 'hymn',
    author: 'Pastor James',
    references: ['Ephesians 2:8-9', '2 Corinthians 5:17']
  }
];
