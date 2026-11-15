import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersHttpModule } from './modules/users/users-http.module.js';
import { AuthHttpModule } from './modules/auth/auth-http.module.js';
import { LoggerMiddleware } from './middleware/logger.middleware.js';

@Module({ imports: [UsersHttpModule, AuthHttpModule] })
export class HttpModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
