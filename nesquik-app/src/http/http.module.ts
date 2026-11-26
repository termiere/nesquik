import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersHttpModule } from './modules/users/users-http.module.js';
import { AuthHttpModule } from './modules/auth/auth-http.module.js';
import { LoggerMiddleware } from './middleware/logger.middleware.js';
import { UsersDetailsHttpModule } from './modules/details/users-details-http.module.js';

@Module({
  imports: [UsersHttpModule, AuthHttpModule, UsersDetailsHttpModule],
})
export class HttpModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
