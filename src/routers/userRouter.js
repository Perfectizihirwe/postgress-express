import express from "express";
import * as Models from "../database/models";
import { validateRegistration, existingUser } from "../middleware";
import { registerUser } from "../controllers";
export const userRouter = express.Router();

userRouter.post("/register", validateRegistration, existingUser, registerUser);

userRouter.get("/allUsers", async (req, res) => {
  const users = await Models.User.findAll();
  return res.status(200).json(users);
});
