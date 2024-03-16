"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const song_1 = __importDefault(require("../mongo/song"));
function index() {
    return song_1.default.find();
}
function get(song_name) {
    return song_1.default.find({ song_name })
        .then((list) => list[0])
        .catch((err) => {
        throw `${song_name} Not Found`;
    });
}
function create(song) {
    const p = new song_1.default(song);
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
exports.default = { index, get, create };
