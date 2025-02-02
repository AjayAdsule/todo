import cors from "cors";
import dotEnv from "dotenv";
import express, { urlencoded } from "express";
import morgan from "morgan";

import connectDB from "../Database/DB.js";
import Routes from "./../Routes/routes.js";

dotEnv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: process.env.ENVIORMENT === "Prod" ? process.env.FRONTEND_URL : "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("/api/v1", Routes);

connectDB();

app.listen(port, () => {
  console.log(`server is running on 3000`);
});
export default app;
