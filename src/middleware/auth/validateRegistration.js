import { userRegistrationSchema } from "../../utils/helpers/validations";

export const validateRegistration = async (req, res, next) => {
  try {
    await userRegistrationSchema.validate(req.body);
    next();
  } catch (error) {
    console.log(error.errors[0], "error");
    return res.status(400).json({ message: error.errors[0] });
  }
};
