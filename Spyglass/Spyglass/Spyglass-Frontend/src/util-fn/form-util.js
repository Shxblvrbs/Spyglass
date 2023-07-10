const getRequrieRules = (fieldName, fullMessage) => ({
  required: true,
  message: fullMessage ? fullMessage : `Please enter your ${fieldName}`,
});
const getGoalRequrieRules = (fieldName, fullMessage) => ({
  required: true,
  message: fullMessage ? fullMessage : `${fieldName}`,
});
const getMinRule = (letters, message) => ({
  min: letters,
  message: message,
});
const getValidateEmailRules = () => ({
  type: "email",
  message: "The input is not valid E-mail!",
});
const getStrongPasswordRules = () => ({
  pattern:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  message: "Please Enter Strong Password ",
});
const getConfirmPasswordRules = (dependency) => {
  return ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue(dependency) === value) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error("The two passwords that you entered do not match!")
      );
    },
  });
};
export {
  getRequrieRules,
  getStrongPasswordRules,
  getValidateEmailRules,
  getConfirmPasswordRules,
  getGoalRequrieRules,
  getMinRule,
};
