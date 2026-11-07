import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository.js';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  sayHello(): string {
    return this.usersRepository.sayUserHello();
  }

  getAllUsers() {
    return this.usersRepository.getAllUsers();
  }

  getUser(id: number) {
    return this.usersRepository.getUser(id);
  }

  createUser(name: string) {
    return this.usersRepository.createUser(name);
  }

  deleteUser(id: number) {
    return this.usersRepository.deleteUser(id);
  }
}
