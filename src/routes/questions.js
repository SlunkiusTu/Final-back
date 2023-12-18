import express from "express";

import {
  ADD_QUESTION,
  GET_QUESTIONS,
  DELETE_QUESTION,
  GET_QUESTION_BY_ID,
} from "../controllers/questions.js";

const router = express.Router();
router.post("/question", ADD_QUESTION);
router.get("/questions", GET_QUESTIONS);
router.get("/question/:id", GET_QUESTION_BY_ID);
router.delete("/question/:id", DELETE_QUESTION);

export default router;
