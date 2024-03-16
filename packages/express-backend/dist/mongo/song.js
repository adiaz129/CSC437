"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const songSchema = new mongoose_1.Schema({
    userid: { type: String, required: true, trim: true },
    song_name: { type: String, required: true, trim: true },
    original_author: { type: String, required: true, trim: true },
    difficulty: { type: String, required: true, trim: true },
    instrument: { type: String, required: true, trim: true },
    sheet_music: { type: String, required: true, trim: true },
}, { collection: "song_profiles" });
const SongModel = (0, mongoose_1.model)("Song", songSchema);
exports.default = SongModel;
