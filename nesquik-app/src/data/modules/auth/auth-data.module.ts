import { Module } from '@nestjs/common';
import { Auth } from './entities/auth.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Auth, User])],
  exports: [TypeOrmModule.forFeature([Auth, User])],
})
export class AuthDataModule {}
