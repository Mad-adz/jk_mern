import express from "express";
import {
  registerUser,
  getAllUsers,
  getUser,
  editUser,
  removeUser,
} from "../controllers/userController.js";
import {
  superAdminRoute,
  verifyJwtToken,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.get("/", verifyJwtToken, superAdminRoute, getAllUsers);

router.get("/profile", verifyJwtToken, getUser);

router.put("/profile", verifyJwtToken, editUser);

router.delete("/profile/:id", verifyJwtToken, superAdminRoute, removeUser);

export default router;
