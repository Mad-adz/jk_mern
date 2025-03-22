import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// ? using asyncHandler

export const verifyJwtToken = asyncHandler(async (req, res, next) => {
  const accessToken = req.cookies?.accessToken;

  if (!accessToken) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No access token provided!" });
  }

  const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  const user = await User.findById(decoded.id);

  if (!user) {
    return res.status(401).json({ message: "User not found!" });
  }

  req.user = user;
  // console.log(user);
  next(); // ? Pass control to the next middleware or route handler
});

// export const verifyJwtToken = async (req, res, next) => {
//   try {
//     const accessToken = req.cookies?.accessToken;

//     if (!accessToken) {
//       return res
//         .status(401)
//         .json({ message: "Unauthorized - No Access Token Provided!" });
//     }

//     try {
//       const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
//       const user = await User.findById(decoded.id);

//       if (!user) {
//         return res.status(401).json({ message: "User not found!" });
//       }
//       req.user = user;
//       next();
//     } catch (error) {
//       console.log("Error in token verification : ", error.message);
//       if (error.name === "TokenExpiredError") {
//         return res
//           .status(401)
//           .json({ message: "Unauthorized - Access Token Expired!" });
//       }
//       throw error;
//     }
//   } catch (error) {
//     console.log("Error in verifyJwtToken middleware: ", error.message);
//     return res
//       .status(401)
//       .json({ message: "Unauthorized - Invalid Access Token!" });
//   }
// };

export const adminRoute = (req, res, next) => {
  if (
    (req.user && req.user.role === "admin") ||
    req.user.role === "superadmin"
  ) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Access Denied - Super Admin and Admin Only!" });
  }
};

export const superAdminRoute = (req, res, next) => {
  if (req.user && req.user.role === "superadmin") {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Access Denied - Super Admin Only!" });
  }
};
