import express from "express";
import { authenticateUser } from "../auth";

const router = express.Router();

// all routes under this router require authentication
router.use(authenticateUser);

export default router;