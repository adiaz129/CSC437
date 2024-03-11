import { Document } from "mongoose";
import { Song } from "ts-models";
import SongModel from "../mongo/song";

function index(): Promise<Song[]> {
  return SongModel.find();
}

function get(song_name: String): Promise<Song> {
  return SongModel.find({ song_name })
    .then((list) => list[0])
    .catch((err) => {
      throw `${song_name} Not Found`;
    });
}

function create(song: Song): Promise<Song> {
  const p = new SongModel(song);
  console.log("HIHUHUHUHU");
  return p.save();
}

// function update(
//   userid: String,
//   profile: Profile
// ): Promise<Profile> {
//   return new Promise((resolve, reject) => {
//     ProfileModel.findOneAndUpdate({ userid }, profile, {
//       new: true
//     }).then((profile) => {
//       if (profile) resolve(profile);
//       else reject("Failed to update profile");
//     });
//   });
// }

export default { index, get, create };