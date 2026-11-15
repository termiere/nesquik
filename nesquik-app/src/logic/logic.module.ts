import { Module } from '@nestjs/common';
import { UsersLogicModule } from './modules/users/users-logic.module.js';
import { AuthLogicModule } from './modules/auth/auth-logic.module.js';

@Module({
  imports: [UsersLogicModule, AuthLogicModule],
  exports: [UsersLogicModule, AuthLogicModule],
})
export class LogicModule {}
