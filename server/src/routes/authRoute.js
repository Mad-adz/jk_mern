import express from "express";
import {
  emailVerification,
  loginUser,
  logoutUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/verify-email", emailVerification);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

export default router;
