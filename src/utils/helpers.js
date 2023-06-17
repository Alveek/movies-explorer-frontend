import { EMAIL_REGEX } from './constants';

export const validateEmail = (email) => {
  return email && EMAIL_REGEX.test(email.toLowerCase());
};
