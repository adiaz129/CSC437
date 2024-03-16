"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const songs_1 = __importDefault(require("../services/songs"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    console.log(req.body);
    const newSong = req.body;
    console.log(newSong);
    songs_1.default
        .create(newSong)
        .then((song) => res.status(201).send(song))
        .catch((err) => res.status(500).send(err));
});
router.get("/:song_name", (req, res) => {
    const { song_name } = req.params;
    songs_1.default
        .get(song_name)
        .then((song) => {
        if (!song)
            throw "Not found";
        else
            res.json(song);
    })
        .catch((err) => res.status(404).end());
});
exports.default = router;
