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

  async getAllDetails() {
    return this.userDetailsService.getAllDetails();
  }

  async getUserDetails(id: number, accessKey: string) {
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
      throw new ForbiddenException('Access denied');
    }

    const existingDetails = await this.userDetailsService.findDetailsById(id);
    if (!existingDetails) {
      throw new NotFoundException('Data not found');
    }
    return existingDetails;
  }

  async createUserDetails(id: number, accessKey: string, data: string) {
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
      throw new ForbiddenException('Access denied');
    }

    const existingDetails = await this.userDetailsService.findDetailsById(id);

    if (existingDetails) {
      throw new ConflictException('User details already exist');
    }

    return this.userDetailsService.createDetails(user.id, data);
  }

  async updateUserDetails(id: number, accessKey: string, data: string) {
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
      throw new ForbiddenException('Access denied');
    }

    const existingDetails = await this.userDetailsService.findDetailsById(id);
    if (!existingDetails) {
      throw new NotFoundException('Data not found');
    }

    await this.userDetailsService.updateDetails(existingDetails.id, data);
    return this.userDetailsService.findDetailsById(id);
  }

  async deleteUserDetails(id: number, accessKey: string) {
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
      throw new ForbiddenException('Access denied');
    }

    const existingDetails = await this.userDetailsService.findDetailsById(id);
    if (!existingDetails) {
      throw new NotFoundException('Data not found');
    }
    return this.userDetailsService.deleteDetails(existingDetails.id);
  }
}
