import mongoose from "mongoose";

const { Schema, model } = mongoose;
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    profile_img_url: { type: String },
    verificationOTP: { type: String },
    verificationOTPExpiresAt: { type: Date },
    verificationToken: { type: String },
    verificationTokenExpiration: { type: Date },
    reset_password_token: { type: String },
    reset_password_token_expiration: { type: Date },
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// # hash password using bcrypt & mongoose pre middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// # compare password using bcrypt & mongoose instance method middleware
userSchema.methods.comparePassword = async function (givenPassword) {
  return await bcrypt.compare(givenPassword, this.password);
};

const User = model("User", userSchema);

export default User;
