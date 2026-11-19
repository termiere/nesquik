import { Module } from '@nestjs/common';
import { Auth } from './entities/auth.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity.js';
import { AuthDataService } from './auth-data.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Auth, User])],
  providers: [AuthDataService],
  exports: [TypeOrmModule.forFeature([Auth, User]), AuthDataService],
})
export class AuthDataModule {}
