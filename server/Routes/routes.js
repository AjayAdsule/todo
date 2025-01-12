import express from "express";
import Todo from "./todo.js";
import User from "./user.js";

const router = express.Router();

router.use("/auth", User);
router.use("/todo", Todo);

export default router;
