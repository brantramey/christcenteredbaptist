"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchTweets = exports.getUserTweets = exports.getUserProfile = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Twitter API configuration - skip initialization completely
const twitterClient = null;
// Get user profile by username
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        });
    }
    catch (error) {
        console.error('Error fetching Twitter user profile:', error);
        res.status(500).json({ message: 'Error fetching Twitter user profile', error: error.message });
    }
});
exports.getUserProfile = getUserProfile;
// Get user tweets
const getUserTweets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const count = parseInt(req.query.count) || 5;
        // Always return mock data for development/testing
        const mockTweets = [
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
        return res.json(mockTweets);
    }
    catch (error) {
        console.error('Error fetching Twitter user tweets:', error);
        res.status(500).json({ message: 'Error fetching Twitter user tweets', error: error.message });
    }
});
exports.getUserTweets = getUserTweets;
// Search tweets
const searchTweets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query.q;
        const count = parseInt(req.query.count) || 10;
        if (!query) {
            return res.status(400).json({ message: 'Query parameter is required' });
        }
        // Always return mock data for development/testing
        const mockTweets = [
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
        return res.json(mockTweets);
    }
    catch (error) {
        console.error('Error searching tweets:', error);
        res.status(500).json({ message: 'Error searching tweets', error: error.message });
    }
});
exports.searchTweets = searchTweets;
