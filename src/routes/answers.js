import express from "express";

import {
  ADD_ANSWER,
  GET_ANSWERS,
  DELETE_ANSWER,
} from "../controllers/answers.js";

const router = express.Router();
router.post("/question/:id/answers", ADD_ANSWER);
router.get("/question/:id/answers", GET_ANSWERS);
router.delete("/answer/:id", DELETE_ANSWER);

export default router;
