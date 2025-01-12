import express from "express";
import { createTask } from "../controller/todoController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/create-todo", verifyToken, createTask);

export default router;
