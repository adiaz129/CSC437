import { Schema, Model, Document, model } from "mongoose";
 import { Song } from "ts-models";

const songSchema = new Schema<Song>(
  {
    userid: { type: String, required: true, trim: true },
    song_name: { type: String, required: true, trim: true },
    original_author: { type: String, required: true, trim: true },
    difficulty: { type: String, required: true, trim: true },
    instrument: { type: String, required: true, trim: true },
    sheet_music: { type: String, required: true, trim: true },
  },
  { collection: "song_profiles" }
);

const SongModel = model<Song>("Song", songSchema);

export default SongModel;