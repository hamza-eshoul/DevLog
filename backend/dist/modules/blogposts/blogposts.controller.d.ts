import { BlogPostsService } from './blogposts.service';
import { BlogPost } from './interfaces/blog-post.interface';
import { CreateBlogPostDto } from './dto/create-blogpost.dto';
export declare class BlogPostsController {
    private blogPostsService;
    constructor(blogPostsService: BlogPostsService);
    getAllPosts(): Promise<BlogPost[]>;
    getBlogPostById(id: number): Promise<BlogPost>;
    createBlogPost(createBlogPost: CreateBlogPostDto): Promise<BlogPost>;
    deleteBlogPost(id: number): Promise<{
        message: string;
    }>;
}
