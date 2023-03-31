import * as Models from "../database/models/index.js";
import { hash } from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const hashedPassword = await hash(req.body.password, 10);
    console.log(hashedPassword, "hashedPassword");
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      companyName: req.body.companyName,
      password: hashedPassword,
    };
    const newUser = await Models.User.create(data);
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({ message: "Something went wrong" });
  }
};
