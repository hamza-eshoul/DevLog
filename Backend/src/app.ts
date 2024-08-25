import express from "express";
import { Express } from "express";
import cors from "cors";
import blogPostsRouter from "./routes/blogPosts";

// Initialize app
const app: Express = express();

// middleware functions
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// routes
app.use("/api/posts", blogPostsRouter);

export default app;
