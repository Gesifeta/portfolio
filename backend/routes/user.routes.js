import express from "express";

import { getAllUsers, registerUser, getUserByEmail, getUserByUser_name, getUserByUser_nameOrEmail, getUserByUser_nameOrEmailOrPassword, getUserByUser_nameOrEmailOrPasswordOrId } from "../controllers/user.controller.js";

export const userRouter = express.Router();
//register user route
userRouter.post("/users/register/new", registerUser);
userRouter.get("/users", getAllUsers);
userRouter.get("/users/email/:email", getUserByEmail);
userRouter.get("/users/username/:username", getUserByUser_name);
userRouter.get("/users/username/:username/email/:email", getUserByUser_nameOrEmail);
userRouter.get("/users/username/:username/email/:email/password/:password", getUserByUser_nameOrEmailOrPassword);
userRouter.post("/users/login", (req, res) => {
  res.json({ message: "Login route" });
});
