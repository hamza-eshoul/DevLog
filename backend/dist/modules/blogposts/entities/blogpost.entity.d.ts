import { BlogPost as IBlogPost } from '../interfaces/blog-post.interface';
import { BlogContent } from '../interfaces/blog-content.type';
export declare class BlogPostEntity implements IBlogPost {
    id: number;
    time_to_read: number;
    title: string;
    description: string;
    author: string;
    author_profession: string;
    image: string;
    content: BlogContent;
    created_at: Date;
}
