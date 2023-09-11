import * as Models from "../../database/models";

export const existingUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await Models.User.findOne({ where: { email } });
    console.log(user, "Existing user");
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }
  } catch (error) {
    next();
  }
};
