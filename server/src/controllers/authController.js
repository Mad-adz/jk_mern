import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { validateLogin } from "../validators/userValidators.js";
import { generateJwtToken } from "../utils/generateToken.js";
import { generateOTP } from "../utils/helper.js";
import { sendVerificationEmail } from "../utils/verifyEmail.js";

const loginUser = asyncHandler(async (req, res) => {
  const { error, value } = validateLogin(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const { email, password } = value;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("Invalid email address.!");
  }

  // if (user && (await user.comparePassword(password))) {
  //   const { accessToken } = generateJwtToken(res, user._id);
  //   console.log({ accessToken });

  //   res.status(200).json({
  //     _id: user._id,
  //     email: user.email,
  //     isVerified: user.isVerified,
  //     role: user.role,
  //   });
  // } else {
  //   res.status(400);
  //   throw new Error("Invalid email or password");
  // }

  if (user.isVerified) {
    const comparePwd = await user.comparePassword(password);

    if (!comparePwd) {
      res.status(400);
      throw new Error("Invalid password.!");
    }
    if (user.email === process.env.SUPER_ADMIN_EMAIL && !user.isAdmin) {
      // console.log(user.email, process.env.SUPER_ADMIN_EMAIL);
      user.role = "superadmin";
      await user.save();
    }

    // Generate JWT Token
    const { authToken } = generateJwtToken(res, user._id);

    // Return response in desired format
    res.status(200).json({
      // message: `Welcome back ${user.fname}`,
      user: {
        _id: user._id,
        email: user.email,
        isVerified: user.isVerified,
        fname: user.fname,
        lname: user.lname,
      },
      authToken,
    });
  } else {
    const verificationOTP = generateOTP();
    const expiryDate = new Date();
    const expiryMinutes = expiryDate.getMinutes() + 1;
    expiryDate.setMinutes(expiryMinutes);
    const verificationOTPExpiresAt = expiryDate;

    user.verificationOTP = verificationOTP;
    user.verificationOTPExpiresAt = verificationOTPExpiresAt;
    await user.save();

    const verificationEmailResponse = await sendVerificationEmail(
      user.email,
      user.fname,
      user.lname,
      user.verificationOTP
    );
    if (verificationEmailResponse.error) {
      res.status(500);
      throw new Error("Failed to send OTP!");
    }
    res.status(200).json({ message: "Verification mail sent.!" });
  }
});

const emailVerification = asyncHandler(async (req, res) => {
  const { otp } = req.body;

  const user = await User.findOne({
    verificationOTP: otp,
    verificationOTPExpiresAt: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({ message: "Invalid or expired otp.!" });
  }

  user.isVerified = true;
  user.verificationOTP = undefined;
  user.verificationOTPExpiresAt = undefined;
  await user.save();

  res.status(200).json({ message: "Email verification is done.!" });
});

const logoutUser = asyncHandler(async (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";
  const authToken = req.cookies?.authToken;
  if (!authToken) {
    return res.sendStatus(204);
  }
  const decoded = jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET);
  console.log(decoded);

  res.clearCookie("authToken", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "None" : "Strict",
  });

  res.status(200).json({ message: "Logged out.!" });
});

export { loginUser, logoutUser, emailVerification };
