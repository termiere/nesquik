import { Module } from '@nestjs/common';
import { UsersLogicModule } from './modules/users/users-logic.module.js';
import { AuthLogicModule } from './modules/auth/auth-logic.module.js';
import { UsersDetailsLogicModule } from './modules/details/user-details-logic.module.js';

@Module({
  imports: [UsersLogicModule, AuthLogicModule, UsersDetailsLogicModule],
  exports: [UsersLogicModule, AuthLogicModule, UsersDetailsLogicModule],
})
export class LogicModule {}
