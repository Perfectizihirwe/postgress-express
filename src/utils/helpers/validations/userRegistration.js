import * as yup from "yup";

export const userRegistrationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Input a valid email")
    .required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  companyName: yup.string().required("Company name is required"),
});
