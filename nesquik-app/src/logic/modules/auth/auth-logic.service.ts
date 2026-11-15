import { Injectable } from '@nestjs/common';
import { AuthDataRepository } from '../../../data/modules/auth/auth-data.repository.js';
import { UsersDataRepository } from '../../../data/modules/users/users-data.repository.js';

@Injectable()
export class AuthLogicService {
  constructor(
    private readonly authRepository: AuthDataRepository,
    private readonly usersRepository: UsersDataRepository,
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
