import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js";
import connectMongoDB from "./config/mongo/dbConfig.js";
import cors from "cors";

dotenv.config();
connectMongoDB();

const port = process.env.PORT;

const app = express();

const whitelist = [
  process.env.CLIENT_APP_BASE_URL,
  "http://localhost:8080",
  "http://localhost:5173",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.some((url) => origin && origin.startsWith(url)) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
// here "/" is route and (req, res) => {} is controller

app.get("/error", (req, res) => {
  throw new Error("Something went wrong!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// REFRESH_TOKEN_EXPIRES_IN="2m"
// REFRESH_TOKEN_MAX_AGE="120000"
// ACCESS_TOKEN_EXPIRES_IN="15s"
// ACCESS_TOKEN_MAX_AGE="15000"
