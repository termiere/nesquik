import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthDataService {
  constructor(
    @InjectRepository(Auth) private readonly repository: Repository<Auth>,
  ) {}

  async findUserByIdAndToken(id: number, access_token: string) {
    return this.repository.findOneBy({
      user_id: id,
      access_token,
    });
  }

  async login(id: number) {
    const auth = this.repository.create({
      user_id: id,
      access_token: String(Math.floor(Math.random() * 500)),
    });
    await this.repository.save(auth);
    return { access_token: auth.access_token };
  }
}
