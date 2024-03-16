import express, { Request, Response } from "express";
import { Song } from "ts-models";
import songs from "../services/songs";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
    console.log(req.body);
  const newSong = req.body;
  console.log(newSong);

  songs
    .create(newSong)
    .then((song: Song) => res.status(201).send(song))
    .catch((err: any) => res.status(500).send(err));
});

router.get("/:song_name", (req: Request, res: Response) => {
    const { song_name } = req.params;
  
    songs
      .get(song_name)
      .then((song: Song | undefined) => {
        if (!song) throw "Not found";
        else res.json(song);
      })
      .catch((err: any) => res.status(404).end());
  });

export default router;