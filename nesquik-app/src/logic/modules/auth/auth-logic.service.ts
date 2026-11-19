import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDataService } from '../../../data/modules/auth/auth-data.service.js';
import { UsersDataService } from '../../../data/modules/users/users-data.service.js';

@Injectable()
export class AuthLogicService {
  constructor(
    private readonly authDataService: AuthDataService,
    private readonly usersDataService: UsersDataService,
  ) {}

  async register(login: string, password: string) {
    const userExists = await this.usersDataService.findUserByLogin(login);
    if (userExists) {
      throw new ConflictException('The user already exists');
    }

    return this.usersDataService.register(login, password);
  }

  async login(login: string, password: string) {
    const user = await this.usersDataService.findUserByLoginAndPassword(
      login,
      password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid login or password');
    }

    return this.authDataService.login(user.id);
  }
}
