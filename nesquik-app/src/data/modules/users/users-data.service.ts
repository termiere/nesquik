import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersDataService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  async getAllUsers() {
    return this.repository.find();
  }

  async findUserById(id: number) {
    return this.repository.findOneBy({ id });
  }

  async findUserByLogin(login: string) {
    return this.repository.findOneBy({ login });
  }

  async findUserByLoginAndPassword(login: string, password: string) {
    return this.repository.findOneBy({ login, password });
  }

  async register(login: string, password: string) {
    const createdUser = this.repository.create({ login, password });
    return this.repository.save(createdUser);
  }

  async update(id: number, login: string, password: string) {
    return this.repository.update({ id }, { login, password });
  }

  async delete(id: number) {
    return this.repository.delete({ id });
  }
}
