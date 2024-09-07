import { Router } from "express";
import BlogPostsController from "../controllers/blogPostsController";
const router = Router();

// Fetch all posts
router.get("/", BlogPostsController.getBlogPosts);

// Fetch a specific post by ID
router.get("/:id", BlogPostsController.getBlogPostById);

// Add a new post
router.post("/", BlogPostsController.addBlogPost);

// Delete a post by ID
router.delete("/:id", BlogPostsController.deleteBlogPost);

export default router;
