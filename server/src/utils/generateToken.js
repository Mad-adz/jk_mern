import jwt from "jsonwebtoken";

export const generateJwtToken = (res, id, tokenName) => {
  const authToken = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
  });

  const isProduction = process.env.NODE_ENV === "production";
  const cookieOptions = {
    httpOnly: true, // ? prevent XSS attacks, cross site scripting attack
    secure: isProduction,
    sameSite: isProduction ? "None" : "Lax", // ? prevents CSRF attack, cross-site request forgery attack
  };

  res.cookie("authToken", authToken, {
    ...cookieOptions,
    maxAge: Number(process.env.ACCESS_TOKEN_MAX_AGE),
  });

  return { authToken };
};

// export const generateRefreshAndAccessToken = (res, id) => {
//   const refreshToken = jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
//     expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
//   });

//   const accessToken = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
//   });

//   const isProduction = process.env.NODE_ENV === "production";
//   const cookieOptions = {
//     httpOnly: !isProduction, // ? prevent XSS attacks, cross site scripting attack
//     secure: isProduction,
//     sameSite: !isProduction ? "Strict" : "None", // ? prevents CSRF attack, cross-site request forgery attack
//   };

//   res.cookie("refreshToken", refreshToken, {
//     ...cookieOptions,
//     maxAge: Number(process.env.REFRESH_TOKEN_MAX_AGE),
//   });

//   res.cookie("accessToken", accessToken, {
//     ...cookieOptions,
//     maxAge: Number(process.env.ACCESS_TOKEN_MAX_AGE),
//   });

//   return { accessToken, refreshToken };
// };
