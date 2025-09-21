import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS setup
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

// Body parsers
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Static files
app.use(express.static("public"));

// Cookie parser
app.use(cookieParser());

// Routes
import userRouter from "./routes/user.routes.js";

// Routes declaration
app.use("/api/v1/user", userRouter);

// Example: http://localhost:8000/api/v1/user/register

export { app };
