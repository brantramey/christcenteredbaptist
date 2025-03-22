import { Request, Response } from 'express';
import { hymns } from '../models/data';

// Controllers for hymns
export const getAllHymns = (req: Request, res: Response) => {
  res.json(hymns);
};

export const getHymnById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const hymn = hymns.find(h => h.id === id);
  
  if (!hymn) {
    return res.status(404).json({ message: 'Hymn not found' });
  }
  
  res.json(hymn);
};
