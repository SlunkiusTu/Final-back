import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import questionRouter from "./src/routes/questions.js";
import answerRouter from "./src/routes/answers.js";
import userRouter from "./src/routes/user.js";

import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
app.use(questionRouter);
app.use(answerRouter);
app.use(userRouter);

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log("Error", err);
  });

app.listen(process.env.PORT, () => {
  console.log(`App started on port ${process.env.PORT}`);
});
