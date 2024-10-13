import { BlogContent } from './blog-content.type';

export interface BlogPost {
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
