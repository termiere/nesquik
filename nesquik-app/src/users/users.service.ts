import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository.js';
import { AuthRepository } from '../auth/auth.repository.js';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly authRepository: AuthRepository,
  ) {}

  sayHello(): string {
    return 'Hello every!';
  }

  async getAllUsers() {
    return this.usersRepository.getAllUsers();
  }

  async getUser(id: number, access_token: string) {
    const user = await this.usersRepository.getUserById(id);
    if (!user) {
      return 'nu net takogo usera';
    }

    if (!access_token) {
      return 'nu ti nichego ne zabil? login nada';
    }
    const verifiedUser = await this.authRepository.getUserByAccessToken(
      user.id,
      access_token,
    );
    if (!verifiedUser) {
      return 'ti zhe lzhesh chertila';
    }

    return user;
  }

  async updateUser(
    id: number,
    login: string,
    password: string,
    access_token: string,
  ) {
    const user = await this.usersRepository.getUserById(id);
    if (!user) {
      return 'a polzovatelya to nema';
    }

    const verifiedUser = await this.authRepository.getUserByAccessToken(
      user.id,
      access_token,
    );
    if (!verifiedUser) {
      return 'ti zhe lzhesh chertila';
    }

    await this.usersRepository.updateUser(id, login, password);
    return this.usersRepository.getUserById(id);
  }

  async deleteUser(id: number, access_token: string) {
    const user = await this.usersRepository.getUserById(id);
    if (!user) {
      return 'a polzovatelya to nema';
    }

    const verifiedUser = await this.authRepository.getUserByAccessToken(
      user.id,
      access_token,
    );
    if (!verifiedUser) {
      return 'ti zhe lzhesh chertila';
    }

    await this.usersRepository.deleteUser(id);
    return 'vse usera nema';
  }
}
