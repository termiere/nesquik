import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity.js';
import { Details } from './entities/users-details-data.entity.js';
import { UserDetailsDataService } from './users-details-data.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Details, User])],
  providers: [UserDetailsDataService],
  exports: [TypeOrmModule.forFeature([Details, User]), UserDetailsDataService],
})
export class UsersDetailsDataModule {}
