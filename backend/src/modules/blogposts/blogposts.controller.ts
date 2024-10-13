import {
  Controller,
  Param,
  Body,
  HttpCode,
  Get,
  Post,
  Delete,
} from '@nestjs/common';
import { BlogPostsService } from './blogposts.service';
import { BlogPost } from './interfaces/blog-post.interface';
import { CreateBlogPostDto } from './dto/create-blogpost.dto';

@Controller('posts')
export class BlogPostsController {
  constructor(private blogPostsService: BlogPostsService) {}

  @Get()
  async getAllPosts(): Promise<BlogPost[]> {
    return this.blogPostsService.getAllBlogPosts();
  }

  @Get(':id')
  async getBlogPostById(@Param('id') id: number): Promise<BlogPost> {
    return this.blogPostsService.getBlogPostById(id);
  }

  @Post()
  async createBlogPost(
    @Body() createBlogPost: CreateBlogPostDto,
  ): Promise<BlogPost> {
    return this.blogPostsService.createBlogPost(createBlogPost);
  }

  @Delete(':id')
  @HttpCode(200)
  async deleteBlogPost(@Param('id') id: number): Promise<{ message: string }> {
    await this.blogPostsService.deleteBlogPost(id);
    return { message: `Blog post with ID ${id} has been successfully deleted` };
  }
}
