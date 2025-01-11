import express from "express";
import User from "./user.js";

const router = express.Router();

router.use("/auth", User);

export default router;
