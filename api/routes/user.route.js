import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controler/user.controler.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", verifyToken, getUser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);

export default router;
