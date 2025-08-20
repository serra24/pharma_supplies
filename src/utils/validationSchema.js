import * as Yup from "yup";

export const getValidationSchema = (t) => {
  return Yup.object({
    username: Yup.string().required(t.usernameRequired),
    fullName: Yup.string().required(t.fullNameRequired),
    email: Yup.string().email(t.invalidEmail).required(t.emailRequired),
    PhoneNumber: Yup.string().required(t.mobileRequired),
    company: Yup.string().required(t.companyRequired),
    password: Yup.string()
      .required(t.passwordRequired)
      .min(8, t.passwordMinLength)
      .matches(/[a-z]/, t.passwordLowercase)
      .matches(/[A-Z]/, t.passwordUppercase)
      .matches(/[0-9]/, t.passwordNumber)
      .matches(/[@$!%*?&]/, t.passwordSpecialChar),
    confirmPassword: Yup.string()
      .required(t.confirmPasswordRequired)
      .oneOf([Yup.ref("password"), null], t.passwordMismatch),
  });
};
