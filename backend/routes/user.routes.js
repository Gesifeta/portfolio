import express from "express";

import { registerUser } from "../controllers/user.controller.js";

export const userRouter = express.Router();
//register user route
userRouter.post("/register", registerUser);
userRouter.post("/login", (req, res) => {
  res.json({ message: "Login route" });
});
