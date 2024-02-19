"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const profileSchema = new mongoose_1.Schema({
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    date_joined: { type: String, required: true, trim: true },
    instruments: [String],
    avatar_image: { type: String, required: false, trim: true },
}, { collection: "user_profiles" });
const ProfileModel = (0, mongoose_1.model)("Profile", profileSchema);
exports.default = ProfileModel;
