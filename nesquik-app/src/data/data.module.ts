import { Module } from '@nestjs/common';
import { AuthDataModule } from './modules/auth/auth-data.module.js';
import { UsersDataModule } from './modules/users/users-data.module.js';
import { UsersDetailsDataModule } from './modules/details/users-details-data.module.js';

@Module({
  imports: [AuthDataModule, UsersDataModule, UsersDetailsDataModule],
  exports: [AuthDataModule, UsersDataModule, UsersDetailsDataModule],
})
export class DataModule {}
