import express from "express";
import {
  createTask,
  deleteTodo,
  getTodo,
  updateTodoStatus,
} from "../controller/todoController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/create-task", verifyToken, createTask);
router.get("/get-todo", verifyToken, getTodo);
router.patch("/update-status", verifyToken, updateTodoStatus);

router.get("/get-todo", verifyToken, getTodo);

router.patch("/update-todo", verifyToken, updateTodoStatus);
router.post("/delete-task", verifyToken, deleteTodo);
export default router;
