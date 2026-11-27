import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersDataService } from '../../../data/modules/users/users-data.service';
import { AuthDataService } from '../../../data/modules/auth/auth-data.service';
import { UserDetailsDataService } from '../../../data/modules/details/users-details-data.service';

@Injectable()
export class UserDetailsLogicService {
  constructor(
    private readonly userDetailsService: UserDetailsDataService,
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

  async getAllDetails() {
    return this.userDetailsService.getAllDetails();
  }

  async getUserDetails(id: number, accessKey: string) {
    const user = await this.verifyUser(id, accessKey);
    if (user.isBanned) {
      throw new ForbiddenException('User is banned');
    }

    const details = await this.userDetailsService.findDetailsByUserId(user.id);
    if (!details) {
      throw new NotFoundException('Data not found');
    }
    return details;
  }

  async createUserDetails(userId: number, accessKey: string, data: string) {
    const user = await this.verifyUser(userId, accessKey);
    if (user.isBanned) {
      throw new ForbiddenException('User is banned');
    }

    const details = await this.userDetailsService.findDetailsByUserId(user.id);
    if (details) {
      throw new ConflictException('User details already exist');
    }

    return this.userDetailsService.createDetails(user.id, data);
  }

  async updateUserDetails(userId: number, accessKey: string, data: string) {
    const user = await this.verifyUser(userId, accessKey);
    if (user.isBanned) {
      throw new ForbiddenException('User is banned');
    }

    const details = await this.userDetailsService.findDetailsByUserId(user.id);
    if (!details) {
      throw new NotFoundException('Data not found');
    }

    await this.userDetailsService.updateDetails(details.id, data);
    return this.userDetailsService.findDetailsByUserId(user.id);
  }

  async deleteUserDetails(id: number, accessKey: string) {
    const user = await this.verifyUser(id, accessKey);
    if (user.isBanned) {
      throw new ForbiddenException('User is banned');
    }

    const details = await this.userDetailsService.findDetailsByUserId(user.id);
    if (!details) {
      throw new NotFoundException('Data not found');
    }
    return this.userDetailsService.deleteDetails(details.id);
  }
}
