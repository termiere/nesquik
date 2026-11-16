import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../data/modules/users/entities/user.entity.js';
import { Auth } from '../../../data/modules/auth/entities/auth.entity.js';

@Injectable()
export class AuthLogicService {
  constructor(
    @InjectRepository(Auth) private readonly authRepository: Repository<Auth>,
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async register(login: string, password: string) {
    const userExists = await this.usersRepository.findOneBy({
      login,
    });
    if (userExists) {
      throw new ConflictException('The user already exists');
    }

    const user = this.usersRepository.create({
      login,
      password,
    });
    return this.usersRepository.save(user);
  }

  async login(login: string, password: string) {
    const user = await this.usersRepository.findOneBy({ login, password });
    if (!user) {
      throw new UnauthorizedException('Invalid login or password');
    }

    const auth = this.authRepository.create({
      user_id: user.id,
      access_token: String(Math.floor(Math.random() * 500)),
    });
    return this.authRepository.save(auth);
  }
}
