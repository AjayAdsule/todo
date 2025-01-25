import express from "express";
import {
  createTask,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../controller/todoController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/create-task", verifyToken, createTask);
router.get("/get-todo", verifyToken, getTodo);
router.patch("/edit-task", verifyToken, updateTodo);
router.post("/delete-task", verifyToken, deleteTodo);
export default router;
