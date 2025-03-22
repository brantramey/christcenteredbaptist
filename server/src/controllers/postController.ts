import { Request, Response } from 'express';
import { posts } from '../models/data';

// Controllers for weekly posts
export const getAllPosts = (req: Request, res: Response) => {
  res.json(posts);
};

export const getPostsByType = (req: Request, res: Response) => {
  const type = req.params.type as 'salvation' | 'hymn';
  const filteredPosts = posts.filter(post => post.type === type);
  res.json(filteredPosts);
};

export const getPostById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  
  res.json(post);
};
