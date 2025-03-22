import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import { capitalize, generateOTP } from "../utils/helper.js";
import { validateRegister } from "../validators/userValidators.js";
import { sendVerificationEmail } from "../utils/verifyEmail.js";

const registerUser = asyncHandler(async (req, res) => {
  const { error, value } = validateRegister(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  let { fname, lname, email, password } = value;

  fname = capitalize(fname);
  lname = capitalize(lname);

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email is already registered.!");
  }

  const verificationOTP = generateOTP();
  const expiryDate = new Date();
  const expiryMinutes = expiryDate.getMinutes() + 5;
  expiryDate.setMinutes(expiryMinutes);
  const verificationOTPExpiresAt = expiryDate;

  const user = await User.create({
    fname,
    lname,
    email,
    password,
    verificationOTP,
    verificationOTPExpiresAt,
  });

  if (user) {
    const verificationEmailResponse = await sendVerificationEmail(
      user.email,
      user.fname,
      user.lname,
      user.verificationOTP
    );
    if (verificationEmailResponse.error) {
      res.status(400);
      throw new Error("Failed to send verification otp.!");
    }
    res.status(200).json({ message: "Verification otp sent.!" });
  } else {
    res.status(400);
    throw new Error("Registration failed.!");
  }
});

const getUser = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const user = {
    _id: req.user._id,
    fname: req.user.fname,
    lname: req.user.lname,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
    isVerified: req.user.isVerified,
    role: req.user.role,
  };
  res.status(200).json(user);
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});
const editUser = async () => {};
const removeUser = async () => {};

export { registerUser, getUser, getAllUsers, editUser, removeUser };
