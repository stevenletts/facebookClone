import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";
import postRouter from "./routes/post";

dotenv.config();

mongoose.set("strictQuery", false);

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    console.log("connected to MONGODB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB", error.message);
  });

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server with ts-node-dev");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
