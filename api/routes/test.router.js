import express from "express";
import {
  shouldBeLoggedIn,
  shouldBeAdmin,
} from "../controler/test.controler.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn);

router.get("/should-be-admin", shouldBeAdmin);

export default router;
