import express from "express";
import { authenticateUser } from "../auth";
import profileRouter from "./profiles";
import songRouter from "./songs";

const router = express.Router();

// all routes under this router require authentication
// router.use(authenticateUser);

router.use("/profiles", profileRouter);
router.use("/song", songRouter);

export default router;