import { Request, Response } from 'express';
import { verses } from '../models/data';

// Controllers for Bible verses
export const getAllVerses = (req: Request, res: Response) => {
  res.json(verses);
};

export const getVerseById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const verse = verses.find(v => v.id === id);
  
  if (!verse) {
    return res.status(404).json({ message: 'Verse not found' });
  }
  
  res.json(verse);
};
