import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity.js';
import { UsersDataService } from './users-data.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersDataService],
  exports: [TypeOrmModule.forFeature([User]), UsersDataService],
})
export class UsersDataModule {}
