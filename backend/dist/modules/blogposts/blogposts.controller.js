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
exports.BlogPostsController = void 0;
const common_1 = require("@nestjs/common");
const blogposts_service_1 = require("./blogposts.service");
const create_blogpost_dto_1 = require("./dto/create-blogpost.dto");
let BlogPostsController = class BlogPostsController {
    constructor(blogPostsService) {
        this.blogPostsService = blogPostsService;
    }
    async getAllPosts() {
        return this.blogPostsService.getAllBlogPosts();
    }
    async getBlogPostById(id) {
        return this.blogPostsService.getBlogPostById(id);
    }
    async createBlogPost(createBlogPost) {
        return this.blogPostsService.createBlogPost(createBlogPost);
    }
    async deleteBlogPost(id) {
        await this.blogPostsService.deleteBlogPost(id);
        return { message: `Blog post with ID ${id} has been successfully deleted` };
    }
};
exports.BlogPostsController = BlogPostsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogPostsController.prototype, "getAllPosts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BlogPostsController.prototype, "getBlogPostById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blogpost_dto_1.CreateBlogPostDto]),
    __metadata("design:returntype", Promise)
], BlogPostsController.prototype, "createBlogPost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BlogPostsController.prototype, "deleteBlogPost", null);
exports.BlogPostsController = BlogPostsController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [blogposts_service_1.BlogPostsService])
], BlogPostsController);
//# sourceMappingURL=blogposts.controller.js.map