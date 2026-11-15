import { Injectable } from '@nestjs/common';
import { UsersDataRepository } from '../../../data/modules/users/users-data.repository.js';
import { AuthDataRepository } from '../../../data/modules/auth/auth-data.repository.js';

@Injectable()
export class UsersLogicService {
  constructor(
    private readonly usersRepository: UsersDataRepository,
    private readonly authRepository: AuthDataRepository,
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
