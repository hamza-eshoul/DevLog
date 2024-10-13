import { BlogContent } from '../interfaces/blog-content.type';
export declare class CreateBlogPostDto {
    time_to_read: number;
    title: string;
    description: string;
    author: string;
    author_profession: string;
    image: string;
    content: BlogContent;
}
