import { Module } from '@nestjs/common';
import { AuthLogicService } from './auth-logic.service.js';
import { AuthDataModule } from '../../../data/modules/auth/auth-data.module.js';
import { UsersDataModule } from '../../../data/modules/users/users-data.module.js';

@Module({
  imports: [AuthDataModule, UsersDataModule],
  providers: [AuthLogicService],
  exports: [AuthLogicService],
})
export class AuthLogicModule {}
