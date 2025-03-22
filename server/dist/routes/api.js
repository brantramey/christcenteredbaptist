"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verseController_1 = require("../controllers/verseController");
const hymnController_1 = require("../controllers/hymnController");
const postController_1 = require("../controllers/postController");
const twitterController_1 = require("../controllers/twitterController");
const router = express_1.default.Router();
// Bible verse routes
router.get('/verses', verseController_1.getAllVerses);
router.get('/verses/:id', verseController_1.getVerseById);
// Hymn routes
router.get('/hymns', hymnController_1.getAllHymns);
router.get('/hymns/:id', hymnController_1.getHymnById);
// Weekly post routes
router.get('/posts', postController_1.getAllPosts);
router.get('/posts/type/:type', postController_1.getPostsByType);
router.get('/posts/:id', postController_1.getPostById);
// Twitter/X integration routes
router.get('/twitter/profile/:username', twitterController_1.getUserProfile);
router.get('/twitter/tweets/:userId', twitterController_1.getUserTweets);
router.get('/twitter/search', twitterController_1.searchTweets);
exports.default = router;
