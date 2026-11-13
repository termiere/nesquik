import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity.js';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async getAllUsers() {
    return this.usersRepository.find();
  }

  async getUserById(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async getUserByLogin(login: string) {
    return this.usersRepository.findOneBy({ login });
  }

  async getUserByLoginAndPassword(login: string, password: string) {
    return this.usersRepository.findOneBy({ login, password });
  }

  async updateUser(id: number, login: string, password: string) {
    return this.usersRepository.update({ id }, { login, password });
  }

  async deleteUser(id: number) {
    return await this.usersRepository.delete({ id });
  }
}
