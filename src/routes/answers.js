import express from "express";

import {
  ADD_ANSWER,
  GET_ANSWERS,
  DELETE_ANSWER,
} from "../controllers/answers.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.post("/question/:id/answers", auth, ADD_ANSWER);
router.get("/question/:id/answers", GET_ANSWERS);
router.delete("/answer/:id", auth, DELETE_ANSWER);

export default router;
