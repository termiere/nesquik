import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../../data/modules/users/entities/user.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from '../../../data/modules/auth/entities/auth.entity.js';

@Injectable()
export class UsersLogicService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectRepository(Auth) private readonly authRepository: Repository<Auth>,
  ) {}

  async getAllUsers() {
    return this.usersRepository.find();
  }

  async getUser(id: number, access_token: string) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!access_token) {
      throw new UnauthorizedException('Unauthorized');
    }

    const verifiedUser = await this.authRepository.findOneBy({
      user: { id },
      access_token,
    });
    if (!verifiedUser) {
      throw new ForbiddenException('Access denied');
    }

    return user;
  }

  async updateUser(
    id: number,
    login: string,
    password: string,
    access_token: string,
  ) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!access_token) {
      throw new UnauthorizedException('Unauthorized');
    }

    const verifiedUser = await this.authRepository.findOneBy({
      user: { id },
      access_token,
    });
    if (!verifiedUser) {
      throw new ForbiddenException('Access denied');
    }

    await this.usersRepository.update({ id }, { login, password });
    return this.usersRepository.findOneBy({ id });
  }

  async deleteUser(id: number, access_token: string) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!access_token) {
      throw new UnauthorizedException('Unauthorized');
    }

    const verifiedUser = await this.authRepository.findOneBy({
      user: { id },
      access_token,
    });
    if (!verifiedUser) {
      throw new ForbiddenException('Access denied');
    }

    await this.usersRepository.delete({ id });

  }
}
