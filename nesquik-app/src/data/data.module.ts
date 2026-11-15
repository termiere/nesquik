import { Module } from '@nestjs/common';
import { AuthDataModule } from './modules/auth/auth-data.module.js';
import { UsersDataModule } from './modules/users/users-data.module.js';

@Module({
  imports: [AuthDataModule, UsersDataModule],
  exports: [AuthDataModule, UsersDataModule],
})
export class DataModule {}
