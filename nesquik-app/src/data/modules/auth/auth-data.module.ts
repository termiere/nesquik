import { Module } from '@nestjs/common';
import { Auth } from './entities/auth.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthDataRepository } from './auth-data.repository.js';
import { User } from '../users/entities/user.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Auth, User])],
  providers: [AuthDataRepository],
  exports: [AuthDataRepository],
})
export class AuthDataModule {}
