"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostsModule = void 0;
const common_1 = require("@nestjs/common");
const blogposts_controller_1 = require("./blogposts.controller");
const blogposts_service_1 = require("./blogposts.service");
const typeorm_1 = require("@nestjs/typeorm");
const blogpost_entity_1 = require("./entities/blogpost.entity");
let BlogPostsModule = class BlogPostsModule {
};
exports.BlogPostsModule = BlogPostsModule;
exports.BlogPostsModule = BlogPostsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([blogpost_entity_1.BlogPostEntity])],
        controllers: [blogposts_controller_1.BlogPostsController],
        providers: [blogposts_service_1.BlogPostsService],
    })
], BlogPostsModule);
//# sourceMappingURL=blogposts.module.js.map