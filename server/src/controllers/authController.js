import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { validateLogin } from "../validators/userValidators.js";
import { generateJwtToken } from "../utils/generateToken.js";

const loginUser = asyncHandler(async (req, res) => {
  const { error, value } = validateLogin(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const { email, password } = value;

  const user = await User.findOne({ email });

  if (user && (await user.comparePassword(password))) {
    const { accessToken } = generateJwtToken(res, user._id);
    console.log({ accessToken });

    res.status(200).json({
      _id: user._id,
      email: user.email,
      isVerified: user.isVerified,
      role: user.role,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";
  const accessToken = req.cookies?.accessToken;

  if (!accessToken) {
    return res.sendStatus(204);
  }
  const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  console.log(decoded);

  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "None" : "Strict",
  });

  res.status(200).json({ message: "Logged out.!" });
});

export { loginUser, logoutUser };
