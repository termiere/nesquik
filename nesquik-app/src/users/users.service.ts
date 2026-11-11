  import { Injectable } from '@nestjs/common';
  import { UsersRepository } from './users.repository.js';

  @Injectable()
  export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    sayHello(): string {
      return this.usersRepository.sayUserHello();
    }

    async getAllUsers() {
      return await this.usersRepository.getAllUsers();
    }

    async getUser(id: number) {
      return await this.usersRepository.getUser(id);
    }

    async createUser(name: string, password: string) {
      return await this.usersRepository.createUser(name, password);
    }

    async deleteUser(id: number) {
      return await this.usersRepository.deleteUser(id);
    }
  }
