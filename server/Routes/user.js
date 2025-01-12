import express from "express";
import { userSignin, userSignup } from "../controller/userController.js";

const router = express.Router();

router.post("/signup", userSignup);

router.post("/signin", userSignin);

export default router;
