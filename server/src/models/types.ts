// Types for the application
export interface BibleVerse {
  id: number;
  reference: string;
  verses: string;
  explanation?: string;
}

export interface Hymn {
  id: number;
  title: string;
  author?: string;
  year?: string;
  lyrics: string;
  explanation?: string;
}

export interface WeeklyPost {
  id: number;
  title: string;
  date: string;
  content: string;
  type: 'salvation' | 'hymn';
  author?: string;
  references?: string[];
}

export interface Tweet {
  id: string;
  text: string;
  createdAt: string;
  username: string;
  name: string;
  profileImageUrl: string;
}
