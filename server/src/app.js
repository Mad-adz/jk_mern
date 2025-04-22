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

app.set("trust proxy", 1);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const whitelist = new Set([
  process.env.CLIENT_APP_BASE_URL,
  "https://jaikosha-client-demo.vercel.app",
  "https://jaikosha-client.onrender.com",
  "http://localhost:5173",
]);

console.log(whitelist);

const corsOptions = {
  origin: function (origin, callback) {
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

// # Method 2

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

// # Method 3

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

app.get("/error", (req, res) => {
  throw new Error("Something went wrong!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
