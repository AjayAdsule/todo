import express from "express";
import {
  getUser,
  userSignin,
  userSignup,
} from "../controller/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", userSignup);

router.post("/signin", userSignin);

router.get("/get-user", verifyToken, getUser);

export default router;
