import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { BlogContent } from '../interfaces/blog-content.type';

export class CreateBlogPostDto {
  @IsNotEmpty()
  @IsNumber()
  time_to_read: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  author_profession: string;

  @IsNotEmpty()
  @IsUrl()
  image: string;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  content: BlogContent;
}
