import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogPostEntity } from './entities/blogpost.entity';
import { BlogPost } from './interfaces/blog-post.interface';
import { CreateBlogPostDto } from './dto/create-blogpost.dto';

@Injectable()
export class BlogPostsService {
  constructor(
    @InjectRepository(BlogPostEntity)
    private blogPostRepository: Repository<BlogPost>,
  ) {}

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return await this.blogPostRepository.find();
  }

  async getBlogPostById(id: number): Promise<BlogPost> {
    const post = await this.blogPostRepository.findOne({
      where: { id },
    });

    if (!post) {
      throw new NotFoundException(`Blog post with ID ${id} not found`);
    }

    return post;
  }

  async createBlogPost(
    createBlogPostDto: CreateBlogPostDto,
  ): Promise<BlogPost> {
    try {
      const newBlogPost = this.blogPostRepository.create(createBlogPostDto);
      return await this.blogPostRepository.save(newBlogPost);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create blog post');
    }
  }

  async deleteBlogPost(id: number): Promise<void> {
    const result = await this.blogPostRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Blog post with ID ${id} not found`);
    }
  }
}
