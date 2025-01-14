import express from "express";
import {
  createTask,
  getTodo,
  updateTodoStatus,
} from "../controller/todoController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/create-todo", verifyToken, createTask);
router.get("/get-todo", verifyToken, getTodo);
router.patch("/update-status", verifyToken, updateTodoStatus);

export default router;
