"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const blogpost_entity_1 = require("./entities/blogpost.entity");
let BlogPostsService = class BlogPostsService {
    constructor(blogPostRepository) {
        this.blogPostRepository = blogPostRepository;
    }
    async getAllBlogPosts() {
        return await this.blogPostRepository.find();
    }
    async getBlogPostById(id) {
        const post = await this.blogPostRepository.findOne({
            where: { id },
        });
        if (!post) {
            throw new common_1.NotFoundException(`Blog post with ID ${id} not found`);
        }
        return post;
    }
    async createBlogPost(createBlogPostDto) {
        try {
            const newBlogPost = this.blogPostRepository.create(createBlogPostDto);
            return await this.blogPostRepository.save(newBlogPost);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to create blog post');
        }
    }
    async deleteBlogPost(id) {
        const result = await this.blogPostRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Blog post with ID ${id} not found`);
        }
    }
};
exports.BlogPostsService = BlogPostsService;
exports.BlogPostsService = BlogPostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blogpost_entity_1.BlogPostEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BlogPostsService);
//# sourceMappingURL=blogposts.service.js.map