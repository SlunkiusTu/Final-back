import express from "express";
import { ADD_USER, LOGIN } from "../controllers/user.js";

const router = express.Router();

router.post("/register", ADD_USER);
router.post("/login", LOGIN);

export default router;
