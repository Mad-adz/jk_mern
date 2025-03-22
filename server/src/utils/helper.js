import crypto from "crypto";
export const capitalize = (str) => {
  return str.replace(/^./, str[0].toUpperCase());
};

export const generateOTP = (length = 6) =>
  crypto.randomInt(10 ** (length - 1), 10 ** length).toString();
