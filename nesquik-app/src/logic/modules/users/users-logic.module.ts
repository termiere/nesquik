import { Module } from '@nestjs/common';
import { UsersLogicService } from './users-logic.service.js';
import { UsersDataModule } from '../../../data/modules/users/users-data.module.js';
import { AuthDataModule } from '../../../data/modules/auth/auth-data.module.js';

@Module({
  imports: [UsersDataModule, AuthDataModule],
  providers: [UsersLogicService],
  exports: [UsersLogicService],
})
export class UsersLogicModule {}
