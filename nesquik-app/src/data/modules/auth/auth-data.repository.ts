import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity.js';
import { Auth } from './entities/auth.entity.js';

@Injectable()
export class AuthDataRepository {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectRepository(Auth) private readonly authRepository: Repository<Auth>,
  ) {}

  async getUserByAccessToken(user_id: number, access_token: string) {
    return this.authRepository.findOneBy({
      user: { id: user_id },
      access_token,
    });
  }

  async register(login: string, password: string) {
    const user = this.usersRepository.create({
      login: login,
      password: password,
    });
    return this.usersRepository.save(user);
  }

  async login(user: User) {
    const auth = this.authRepository.create({
      user,
      access_token: String(Math.floor(Math.random() * 500)),
    });
    return this.authRepository.save(auth);
  }
}
