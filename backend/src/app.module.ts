import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BlogPostsModule } from './modules/blogposts/blogposts.module';
import { DatabaseModule } from './database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyAuthGuard } from './guards/api-key-auth.guard';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot([
      {
        ttl: 60 * 15, // 15 minutes
        limit: 100, // limit each IP to 100 requests per windowMs
      },
    ]),
    DatabaseModule,
    BlogPostsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApiKeyAuthGuard,
    },
  ],
})
export class AppModule {}
