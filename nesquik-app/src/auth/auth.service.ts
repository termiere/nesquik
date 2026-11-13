import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository.js';
import { UsersRepository } from '../users/users.repository.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  async register(login: string, password: string) {
    const user = await this.usersRepository.getUserByLogin(login);
    if (user) {
      return 'user to uzhe est';
    }
    return await this.authRepository.register(login, password);
  }

  async login(login: string, password: string) {
    const user = await this.usersRepository.getUserByLoginAndPassword(
      login,
      password,
    );
    if (!user) {
      return 'ne pravelnii parol or login';
    }
    return await this.authRepository.login(user);
  }
}
