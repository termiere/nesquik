import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDataService } from '../../../data/modules/auth/auth-data.service.js';
import { UsersDataService } from '../../../data/modules/users/users-data.service.js';

@Injectable()
export class UsersLogicService {
  constructor(
    private readonly usersDataService: UsersDataService,
    private readonly authDataService: AuthDataService,
  ) {}

  async getAllUsers() {
    return this.usersDataService.getAllUsers();
  }

  async getUser(id: number, access_token: string) {
    const user = await this.usersDataService.findUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!access_token) {
      throw new UnauthorizedException('Unauthorized');
    }

    const verifiedUser = this.authDataService.findUserByIdAndToken(
      id,
      access_token,
    );
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
    const user = await this.usersDataService.findUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!access_token) {
      throw new UnauthorizedException('Unauthorized');
    }

    const verifiedUser = this.authDataService.findUserByIdAndToken(
      id,
      access_token,
    );
    if (!verifiedUser) {
      throw new ForbiddenException('Access denied');
    }

    await this.usersDataService.update(id, login, password);
    return this.usersDataService.findUserById(id);
  }

  async deleteUser(id: number, access_token: string) {
    const user = await this.usersDataService.findUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!access_token) {
      throw new UnauthorizedException('Unauthorized');
    }

    const verifiedUser = this.authDataService.findUserByIdAndToken(
      id,
      access_token,
    );
    if (!verifiedUser) {
      throw new ForbiddenException('Access denied');
    }

    await this.usersDataService.delete(id);
  }
}
