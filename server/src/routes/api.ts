import express from 'express';
import { getAllVerses, getVerseById } from '../controllers/verseController';
import { getAllHymns, getHymnById } from '../controllers/hymnController';
import { getAllPosts, getPostsByType, getPostById } from '../controllers/postController';
import { getUserProfile, getUserTweets, searchTweets } from '../controllers/twitterController';

const router = express.Router();

// Bible verse routes
router.get('/verses', getAllVerses);
router.get('/verses/:id', getVerseById);

// Hymn routes
router.get('/hymns', getAllHymns);
router.get('/hymns/:id', getHymnById);

// Weekly post routes
router.get('/posts', getAllPosts);
router.get('/posts/type/:type', getPostsByType);
router.get('/posts/:id', getPostById);

// Twitter/X integration routes
router.get('/twitter/profile/:username', getUserProfile);
router.get('/twitter/tweets/:userId', getUserTweets);
router.get('/twitter/search', searchTweets);

export default router;
