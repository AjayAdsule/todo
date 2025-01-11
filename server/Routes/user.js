import express from "express";

const router = express.Router();

router.get("/first", (req, res) => {
  res.send("router is initlize");
});

export default router;
