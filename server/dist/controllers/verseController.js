"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVerseById = exports.getAllVerses = void 0;
const data_1 = require("../models/data");
// Controllers for Bible verses
const getAllVerses = (req, res) => {
    res.json(data_1.verses);
};
exports.getAllVerses = getAllVerses;
const getVerseById = (req, res) => {
    const id = parseInt(req.params.id);
    const verse = data_1.verses.find(v => v.id === id);
    if (!verse) {
        return res.status(404).json({ message: 'Verse not found' });
    }
    res.json(verse);
};
exports.getVerseById = getVerseById;
