import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

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
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server with ts-node-dev");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
