import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity.js';
import { UsersDataRepository } from './users-data.repository.js';
import { AuthDataModule } from '../auth/auth-data.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersDataRepository],
  exports: [UsersDataRepository],
})
export class UsersDataModule {}
