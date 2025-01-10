import cors from "cors";
import dotEnv from "dotenv";
import express, { urlencoded } from "express";
import morgan from "morgan";
dotEnv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.listen("3000", () => {
  console.log(`server is running on 3000`);
});
