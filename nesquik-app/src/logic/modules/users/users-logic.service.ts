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

  async verifyUser(id: number, accessKey: string) {
    const user = await this.usersDataService.findUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!accessKey) {
      throw new UnauthorizedException('Unauthorized');
    }

    const verifiedUser = await this.authDataService.findUserByIdAndToken(
      id,
      accessKey,
    );
    if (!verifiedUser) {
      throw new UnauthorizedException('Access denied');
    }

    return user;
  }

  async getAllUsers() {
    return this.usersDataService.getAllUsers();
  }

  async getUser(id: number, accessKey: string) {
    const user = await this.verifyUser(id, accessKey);
    if (user.isBanned) {
      throw new ForbiddenException('User is banned');
    }
    return user;
  }

  async updateUser(
    id: number,
    login: string,
    password: string,
    accessKey: string,
  ) {
    const user = await this.verifyUser(id, accessKey);
    if (user.isBanned) {
      throw new ForbiddenException('User is banned');
    }
    await this.usersDataService.update(id, login, password);
    return this.usersDataService.findUserById(id);
  }

  async deleteUser(id: number, accessKey: string) {
    const user = await this.verifyUser(id, accessKey);
    if (user.isBanned) {
      throw new ForbiddenException('User is banned');
    }
    await this.usersDataService.delete(id);
  }

  async blockUser(id: number, accessKey: string) {
    const user = await this.verifyUser(id, accessKey);
    if (user.isBanned) {
      throw new ForbiddenException('User is banned');
    }

    const res = await this.usersDataService.block(id);
    if (!res.affected) {
      throw new NotFoundException('User not found');
    }

    return this.usersDataService.findUserById(id);
  }

  async unblockUser(id: number, accessKey: string) {
    const user = await this.verifyUser(id, accessKey);
    if (!user.isBanned) {
      throw new ForbiddenException('User is not banned');
    }

    const res = await this.usersDataService.unblock(id);
    if (!res.affected) {
      throw new NotFoundException('User not found');
    }

    return this.usersDataService.findUserById(id);
  }
}
