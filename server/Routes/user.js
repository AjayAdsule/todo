import express from "express";
import { userSignin, userSignup } from "../controller/userController.js";

const router = express.Router();

router.get("/first", (req, res) => {
  res.send("router is initlize");
});

router.post("/signup", userSignup);

router.post("/signin", userSignin);

export default router;
