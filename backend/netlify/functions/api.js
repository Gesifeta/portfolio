import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { getPool, closePool } from "../../database/db.js";
import { userRouter } from "../../routes/user.router.js";
import { skillRouter } from "../../routes/skill.router.js";
import { projectRouter } from "../../routes/project.router.js";
import { experienceRouter } from "../../routes/experience.router.js";
import { educationRouter } from "../../routes/education.router.js";
import { certificationRouter } from "../../routes/certification.router.js";
import { badgeRouter } from "../../routes/badge.router.js";
import { analyticsRouter } from "../../routes/analytics.router.js";
import { serverRateLimit } from "../../auth/middleware.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://localhost:3000",
      "https://gemechuadam.com",
      "https://680a56e3a2221100083b3f9f--gemechuadam.netlify.app/",
      "https://gemechuadam-backend.netlify.app",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", serverRateLimit);

// Test database connection
const testDatabase = async () => {
  const pool = getPool();
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Database connected:", result.rows[0].now);
    return result.rows[0].now;
  } catch (err) {
    console.error("Database connection error:", err);
    throw err;
  }
};

// Routes
app.use("/api", userRouter);
app.use("/api", skillRouter);
app.use("/api", projectRouter);
app.use("/api", experienceRouter);
app.use("/api", educationRouter);
app.use("/api", certificationRouter);
app.use("/api", badgeRouter);
app.use("/api", analyticsRouter);

// Basic route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Test database connection on startup
testDatabase()
  .then((result) => console.log("Database test successful:", result))
  .catch((err) => {
    console.error("Database test failed:", err);
    closePool();
  });

export const handler = serverless(app);
