import express from "express";
import * as models from "../database/models/index.js";
export const userRouter = express.Router();

userRouter.post("/addUser", async (req, res) => {
  const data = {
    firstName: "Sostene",
    lastName: "Niyonkuru",
    apiKey: "123456789",
  };

  const user = await models.User.create(data);
  return res.status(201).json(user);
});

userRouter.get("/allUsers", async (req, res) => {
  const users = await models.User.findAll();
  return res.status(200).json(users);
});
