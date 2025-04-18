import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js";
import connectMongoDB from "./config/mongo/dbConfig.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
connectMongoDB();

const port = process.env.PORT;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const whitelist = new Set([
  process.env.CLIENT_APP_BASE_URL,
  "https://jaikosha-client-demo.vercel.app",
  "http://localhost:5173",
]);

const corsOptions = {
  origin: function (origin, callback) {
    // if (!origin || whitelist.some((url) => origin && origin.startsWith(url))) {
    //   console.log("✅ Allowed by CORS:", origin);
    //   callback(null, true);
    // } else {
    //   callback(new Error("Not allowed by CORS"));
    // }
    // if (!origin || whitelist.includes(origin)) {
    //   callback(null, true);
    // } else {
    //   callback(new Error("Not allowed by CORS"));
    // }
    if (!origin || whitelist.has(origin)) {
      console.log("✅ Allowed by CORS:", origin);
      callback(null, origin);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// # Example 0

// const whitelist = [
//   process.env.CLIENT_APP_BASE_URL?.replace(/\/$/, ""), // Remove trailing slash
//   "https://jaikosha-client-demo.vercel.app".replace(/\/$/, ""), // Explicitly add production URL
//   "http://localhost:5173".replace(/\/$/, ""), // Explicitly add production URL
// ];

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

// # Example 1

// const whitelist = new Set([
//   process.env.CLIENT_APP_BASE_URL?.replace(/\/$/, ""),
//   "https://jaikosha-client-demo.vercel.app".replace(/\/$/, ""),
//   "http://localhost:5173".replace(/\/$/, ""),
// ]);

// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("CORS Origin:", origin);
//     console.log("Allowed Origins:", [...whitelist]);

//     if (!origin || whitelist.has(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

// # Example 2

// const whitelist = [
//   process.env.CLIENT_APP_BASE_URL.replace(
//     /\/$/,
//     "https://jaikosha-client-demo.vercel.app"
//   ),
// ]; // Remove trailing slash

// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("CORS Origin:", origin); // Debugging log
//     console.log("Allowed Origins:", whitelist);

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

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

// # Example 3

// const corsOptions = {
//   origin: "*", // Allow all origins
//   credentials: false, // Disable credentials if origin is "*"
// }

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

// # Example 4

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

// # Example 5

// app.use(
//   cors({
//     origin:
//       process.env.CLIENT_APP_BASE_URL ||
//       "https://jaikosha-client-demo.vercel.app", // Ensure this matches your frontend URL
//     credentials: true, // Allow credentials (e.g., cookies, authorization headers)
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow these HTTP methods
//     allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
//   })
// );

// app.options("*", cors()); // Allow preflight requests for all routes

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "https://jaikosha-client-demo.vercel.app");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });

// # Example 6

// const whitelist = [...new Set([
//   process.env.CLIENT_APP_BASE_URL?.replace(/\/$/, ""),
//   "https://jaikosha-client-demo.vercel.app",
//   "http://localhost:5173"
// ])].filter(Boolean); // Remove duplicates and empty values

// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("CORS Origin:", origin); // Debugging log
//     console.log("Allowed Origins:", whitelist);

//     if (!origin) {
//       console.log("✅ Allowing request with no origin (e.g., same-origin, server-to-server)");
//       return callback(null, true); // Allow requests without Origin header
//     }

//     if (whitelist.includes(origin)) {
//       console.log("✅ Allowed by CORS:", origin);
//       return callback(null, true);
//     } else {
//       console.log("❌ Blocked by CORS:", origin);
//       return callback(null, false); // Instead of throwing an error
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

// app.options("*", (req, res) => {
//   res.header("Access-Control-Allow-Origin", whitelist.includes(req.headers.origin) ? req.headers.origin : "");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.sendStatus(200);
// });

// # Example 7

// const whitelist = new Set([
//   process.env.CLIENT_APP_BASE_URL,
//   "https://jaikosha-client-demo.vercel.app",
//   "http://localhost:5173"
// ]);

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Serve static files from React
app.use(express.static(path.join(__dirname, "client", "dist")));

// Handle client-side routing - return index.html for all unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

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
