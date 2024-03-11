"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profiles_1 = __importDefault(require("./profiles"));
const songs_1 = __importDefault(require("./songs"));
const router = express_1.default.Router();
// all routes under this router require authentication
// router.use(authenticateUser);
router.use("/profiles", profiles_1.default);
router.use("/song", songs_1.default);
exports.default = router;
