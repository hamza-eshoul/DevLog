import { Module } from '@nestjs/common';
import { BlogPostsController } from './blogposts.controller';
import { BlogPostsService } from './blogposts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPostEntity } from './entities/blogpost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPostEntity])],
  controllers: [BlogPostsController],
  providers: [BlogPostsService],
})
export class BlogPostsModule {}
