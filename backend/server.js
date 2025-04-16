import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { getPool, closePool, ordinaryDatabaseQuery } from "./database/db.js";
import { userRouter } from "./routes/user.routes.js";
// Load environment variables
dotenv.config();
// function to connect to database
async function testDatabase(params) {
  const pool = getPool();
  try {
    const result = await pool.query("SELECT NOW()");
    return result.rows[0].now;
  } catch (err) {
    console.error("Error executing query", err);
    throw err;
  }
}
testDatabase()
  .then((result) => {
    console.log("Database is running OK:", result);
  })
  .catch((err) => {
    console.error("Error during database query:", err);
    closePool();
  });
// Initialize express app
const app = express();
const port = process.env.EXPRESS_SERVER_PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// user router
app.use("/api/users", userRouter);
// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});
// set up response headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});
// Start server
let server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log("Server is running on port", port);
// Graceful shutdown handler
function gracefulShutdown(signal) {
  console.log(`Received ${signal}. Starting graceful shutdown...`);

  server.close(async () => {
    console.log("HTTP server closed.");
    try {
      // Assuming you have a pool object from your database connection
      // Add this to your database/db.js file
      await closePool();
      console.log("Database pool has ended");
      process.exit(0);
    } catch (err) {
      console.error("Error during shutdown:", err);
      process.exit(1);
    }
  });

  // Force shutdown after 30 seconds
  setTimeout(() => {
    console.error(
      "Could not close connections in time, forcefully shutting down"
    );
    process.exit(1);
  }, 30000);
}

// Handle different signals for shutdown
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));

// Modify your unhandled rejection handler
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  gracefulShutdown("UNHANDLED REJECTION");
});
