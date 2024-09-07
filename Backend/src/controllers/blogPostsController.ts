import { Request, Response } from "express";
import db from "../Database/database";
import { BlogPost } from "../types";

class BlogPostsController {
  /**
   * @route GET /posts
   * @desc Fetch all blog posts
   * @access Public
   * @returns {Object[]} Array of blog posts
   */
  async getBlogPosts(req: Request, res: Response): Promise<void> {
    try {
      const blogPosts = await db.getAllBlogPosts();

      res.status(200).json({
        success: true,
        data: blogPosts,
      });
    } catch (error) {
      console.error("Error fetching blog posts:", error);

      res.status(500).json({
        success: false,
        message: "Server Error",
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  }

  /**
   * @route GET /posts/:id
   * @desc Fetch a specific blog post by ID
   * @param {number} id - The ID of the blog post
   * @access Public
   * @returns {Object} The blog post with the given ID
   */
  async getBlogPostById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const blogPost = await db.getBlogPostById(parseInt(id));

      if (!blogPost) {
        res.status(404).json({
          success: false,
          message: "Blog Post not found",
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: blogPost,
      });
    } catch (error) {
      console.error("Error fetching blog post by ID:", error);

      res.status(500).json({
        success: false,
        message: "Server Error",
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  }

  /**
   * @route POST /posts
   * @desc Add a new blog post
   * @access Public
   * @returns {Object} The newly created blog post
   */
  async addBlogPost(req: Request, res: Response): Promise<void> {
    try {
      // Validate all required fields
      const requiredFields = [
        "time_to_read",
        "title",
        "description",
        "author",
        "author_profession",
        "image",
        "content",
      ];
      const missingFields = requiredFields.filter((field) => !req.body[field]);

      if (missingFields.length > 0) {
        res.status(400).json({
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`,
        });
        return;
      }

      const {
        time_to_read,
        title,
        description,
        author,
        author_profession,
        image,
        content,
      } = req.body;

      const newPost = await db.addBlogPost({
        time_to_read,
        title,
        description,
        author,
        author_profession,
        image,
        content,
      });

      res.status(201).json({
        success: true,
        message: "Blog post created successfully",
        data: newPost,
      });
    } catch (error) {
      console.error("Error adding blog post:", error);

      if (
        error instanceof Error &&
        error.message.includes("violates not-null constraint")
      ) {
        res.status(400).json({
          success: false,
          message: "Missing required fields",
          error: error.message,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Server Error",
          error:
            error instanceof Error
              ? error.message
              : "An unknown error occurred",
        });
      }
    }
  }

  async deleteBlogPost(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const deletedPost = await db.deleteBlogPost(parseInt(id));

      if (!deletedPost) {
        res.status(404).json({
          success: false,
          message: "Blog Post not found",
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: "Blog post deleted successfully",
      });
    } catch (error) {
      console.error("Error fetching blog post by ID:", error);

      res.status(500).json({
        success: false,
        message: "Server Error",
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  }
}

export default new BlogPostsController();
