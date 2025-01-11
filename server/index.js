import cors from "cors";
import dotEnv from "dotenv";
import express, { urlencoded } from "express";
import morgan from "morgan";
import connectDB from "./Database/DB.js";
import Routes from "./Routes/routes.js";

dotEnv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("/api/v1", Routes);

connectDB();

app.listen("3000", () => {
  console.log(`server is running on 3000`);
});
