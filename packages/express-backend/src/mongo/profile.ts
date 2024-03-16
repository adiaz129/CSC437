import { Schema, Model, Document, model } from "mongoose";
import { Profile } from "ts-models";

const profileSchema = new Schema<Profile>(
  {
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    date_joined: { type: String, required: true, trim: true },
    instruments: { type: String, required: false, trim: true },
    avatar_image: { type: String, required: false, trim: true },
  },
  { collection: "user_profiles" }
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;