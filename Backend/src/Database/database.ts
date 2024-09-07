import { Pool, QueryResult } from "pg";
import { BlogPost } from "../types";
import dotenv from "dotenv";

dotenv.config();

class Database {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT || "5432"),
    });
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    try {
      const result: QueryResult = await this.pool.query(
        "SELECT * FROM blogPosts ORDER BY created_at DESC"
      );
      return result.rows as BlogPost[];
    } catch (error) {
      throw error;
    }
  }

  async getBlogPostById(id: number): Promise<BlogPost | null> {
    try {
      const result: QueryResult = await this.pool.query(
        "SELECT * FROM blogPosts WHERE id = $1",
        [id]
      );
      return result.rows[0] as BlogPost | null;
    } catch (error) {
      throw error;
    }
  }

  async addBlogPost(
    post: Omit<BlogPost, "id" | "created_at" | "updated_at">
  ): Promise<BlogPost> {
    const {
      time_to_read,
      title,
      description,
      author,
      author_profession,
      image,
      content,
    } = post;
    const query = `
      INSERT INTO blogPosts (time_to_read, title, description, author, author_profession, image, content)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `;
    const values = [
      time_to_read,
      title,
      description,
      author,
      author_profession,
      image,
      content,
    ];

    try {
      const { rows } = await this.pool.query(query, values);
      return rows[0];
    } catch (error) {
      console.error("Error adding blog post to database:", error);
      throw error;
    }
  }

  async deleteBlogPost(id: number): Promise<BlogPost | null> {
    try {
      const result: QueryResult = await this.pool.query(
        "DELETE FROM blogPosts WHERE id = $1 RETURNING *",
        [id]
      );
      return result.rows[0] as BlogPost | null;
    } catch (error) {
      throw error;
    }
  }

  async close(): Promise<void> {
    await this.pool.end();
  }
}

const db = new Database();

export default db;
