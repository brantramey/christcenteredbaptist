import { Request, Response } from 'express';
import { TwitterApi } from 'twitter-api-v2';
import { Tweet } from '../models/types';
import dotenv from 'dotenv';

dotenv.config();

// Twitter API configuration - skip initialization completely
const twitterClient = null;

// Get user profile by username
export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const username = req.params.username;
    
    // Always return mock data for development/testing
    return res.json({
      id: '123456789',
      name: 'Christ Centered Baptist',
      username: 'christcenteredbaptist',
      profileImageUrl: 'https://via.placeholder.com/200',
      description: 'Teaching Christ Through The Bible',
      followersCount: 250,
      followingCount: 100
    }) ;
    
  } catch (error: any) {
    console.error('Error fetching Twitter user profile:', error);
    res.status(500).json({ message: 'Error fetching Twitter user profile', error: error.message });
  }
};

// Get user tweets
export const getUserTweets = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const count = parseInt(req.query.count as string) || 5;
    
    // Always return mock data for development/testing
    const mockTweets: Tweet[] = [
      {
        id: '1',
        text: 'Join us this Sunday as we explore the meaning of salvation through Christ. #ChristCenteredBaptist #Salvation',
        createdAt: '2025-03-20T10:30:00Z',
        username: 'christcenteredbaptist',
        name: 'Christ Centered Baptist',
        profileImageUrl: 'https://via.placeholder.com/48'
      },
      {
        id: '2',
        text: '"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." - John 3:16 #BibleVerse',
        createdAt: '2025-03-18T14:15:00Z',
        username: 'christcenteredbaptist',
        name: 'Christ Centered Baptist',
        profileImageUrl: 'https://via.placeholder.com/48'
      },
      {
        id: '3',
        text: 'New post on our website about Amazing Grace, one of the most beloved hymns about salvation. Learn about its history and meaning. #Hymns #AmazingGrace',
        createdAt: '2025-03-15T09:45:00Z',
        username: 'christcenteredbaptist',
        name: 'Christ Centered Baptist',
        profileImageUrl: 'https://via.placeholder.com/48'
      }
    ];
    return res.json(mockTweets) ;
    
  } catch (error: any) {
    console.error('Error fetching Twitter user tweets:', error);
    res.status(500).json({ message: 'Error fetching Twitter user tweets', error: error.message });
  }
};

// Search tweets
export const searchTweets = async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;
    const count = parseInt(req.query.count as string) || 10;
    
    if (!query) {
      return res.status(400).json({ message: 'Query parameter is required' });
    }
    
    // Always return mock data for development/testing
    const mockTweets: Tweet[] = [
      {
        id: '1',
        text: `Search results for "${query}": Join us this Sunday as we explore the meaning of salvation through Christ. #ChristCenteredBaptist #Salvation`,
        createdAt: '2025-03-20T10:30:00Z',
        username: 'christcenteredbaptist',
        name: 'Christ Centered Baptist',
        profileImageUrl: 'https://via.placeholder.com/48'
      },
      {
        id: '2',
        text: `Search results for "${query}": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." - John 3:16 #BibleVerse`,
        createdAt: '2025-03-18T14:15:00Z',
        username: 'christcenteredbaptist',
        name: 'Christ Centered Baptist',
        profileImageUrl: 'https://via.placeholder.com/48'
      }
    ];
    return res.json(mockTweets) ;
    
  } catch (error: any) {
    console.error('Error searching tweets:', error);
    res.status(500).json({ message: 'Error searching tweets', error: error.message });
  }
};
