"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHymnById = exports.getAllHymns = void 0;
const data_1 = require("../models/data");
// Controllers for hymns
const getAllHymns = (req, res) => {
    res.json(data_1.hymns);
};
exports.getAllHymns = getAllHymns;
const getHymnById = (req, res) => {
    const id = parseInt(req.params.id);
    const hymn = data_1.hymns.find(h => h.id === id);
    if (!hymn) {
        return res.status(404).json({ message: 'Hymn not found' });
    }
    res.json(hymn);
};
exports.getHymnById = getHymnById;
