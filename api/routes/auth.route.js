import express from "express";
import { login, logout, register } from "../controler/auth.controler.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/logout", logout);

export default router;
