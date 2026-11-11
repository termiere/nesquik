import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersService } from './users/users.service.js';
import { UsersController } from './users/users.controller.js';
import { UsersRepository } from './users/users.repository.js';
import { LoggerMiddleware } from './logger/logger.middleware.js';
import { Pool } from 'pg';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [
    AppService,
    UsersService,
    UsersRepository,
    {
      provide: 'PG_POOL',
      useFactory: () => {
        return new Pool({
          host: 'localhost',
          port: 5432,
          user: 'postgres',
          password: 'postgres',
          database: 'nesquik',
        });
      },
    },
  ],
  exports: ['PG_POOL'],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
