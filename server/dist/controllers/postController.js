"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = exports.getPostsByType = exports.getAllPosts = void 0;
const data_1 = require("../models/data");
// Controllers for weekly posts
const getAllPosts = (req, res) => {
    res.json(data_1.posts);
};
exports.getAllPosts = getAllPosts;
const getPostsByType = (req, res) => {
    const type = req.params.type;
    const filteredPosts = data_1.posts.filter(post => post.type === type);
    res.json(filteredPosts);
};
exports.getPostsByType = getPostsByType;
const getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = data_1.posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
};
exports.getPostById = getPostById;
