import { Repository } from 'typeorm';
import { BlogPost } from './interfaces/blog-post.interface';
import { CreateBlogPostDto } from './dto/create-blogpost.dto';
export declare class BlogPostsService {
    private blogPostRepository;
    constructor(blogPostRepository: Repository<BlogPost>);
    getAllBlogPosts(): Promise<BlogPost[]>;
    getBlogPostById(id: number): Promise<BlogPost>;
    createBlogPost(createBlogPostDto: CreateBlogPostDto): Promise<BlogPost>;
    deleteBlogPost(id: number): Promise<void>;
}
