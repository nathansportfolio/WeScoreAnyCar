const USER_NOT_FOUND = "Firebase: Error (auth/user-not-found).";
const INCORRECT_PASSWORD = "Firebase: Error (auth/wrong-password).";
const TOO_MANY_ATTEMPTS =
  "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).";

export default {
  USER_NOT_FOUND,
  INCORRECT_PASSWORD,
  TOO_MANY_ATTEMPTS,
};
