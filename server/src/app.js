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

// const whitelist = [
//   process.env.CLIENT_APP_BASE_URL,
//   "http://localhost:8080",
//   "http://localhost:5173",
// ];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.some((url) => origin && origin.startsWith(url)) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

// const whitelist = [
//   process.env.CLIENT_APP_BASE_URL.replace(
//     /\/$/,
//     "https://jaikosha-client-demo.vercel.app"
//   ),
// ]; // Remove trailing slash

// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("CORS Origin:", origin); // Debugging log
//     console.log("Allowed Origin:", whitelist);

//     if (!origin || whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

// Define allowed origins
// const whitelist = [
//   "https://jaikosha-client-demo.vercel.app", // Add additional allowed origins if needed
//   process.env.CLIENT_APP_BASE_URL, // Use the environment variable directly
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("CORS Origin:", origin); // Debugging log
//     console.log("Allowed Origins:", whitelist);

//     // Allow requests with no origin (e.g., server-to-server requests)
//     if (!origin || whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true, // Allow credentials (cookies, authorization headers)
//   optionsSuccessStatus: 200, // Some legacy browsers choke on 204
// };

// ✅ Handle OPTIONS preflight requests before routes
// app.use((req, res, next) => {
//   if (req.method === "OPTIONS") {
//     console.log("Handling preflight request...");
//     res.setHeader(
//       "Access-Control-Allow-Origin",
//       "https://jaikosha-client-demo.vercel.app"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PUT, DELETE, OPTIONS"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Content-Type, Authorization"
//     );
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     return res.sendStatus(200);
//   }
//   next();
// });

// const corsOptions = {
//   origin: "*", // Allow all origins
//   credentials: false, // Disable credentials if origin is "*"
// }

// const whitelist = [
//   process.env.CLIENT_APP_BASE_URL?.replace(/\/$/, ""), // Remove trailing slash
//   "https://jaikosha-client-demo.vercel.app",
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("CORS Origin:", origin);
//     console.log("Allowed Origins:", whitelist);

//     if (!origin || whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       console.error(`Blocked by CORS: ${origin}`);
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

app.use(cors({
  origin: 'https://jaikosha-client-demo.vercel.app', // ensure this URL matches your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
  credentials: true
}));

app.options('*', cors()); // Allow preflight requests for all routes

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
