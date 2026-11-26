import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Headers,
  ParseIntPipe,
  Body,
  HttpCode,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { UsersDetailsDto } from '../dto/users-details.dto';
import { UserDetailsLogicService } from '../../../../logic/modules/details/user-details-logic.service';

@Controller('/api/v1/data/')
export class UsersDetailsHttpController {
  constructor(private readonly userDetailsService: UserDetailsLogicService) {}

  @Get('all')
  async getAllData() {
    return this.userDetailsService.getAllDetails();
  }

  @Get(':id')
  async getUserData(
    @Param('id', ParseIntPipe) id: number,
    @Headers('x-user-access-key') accessKey: string,
  ) {
    return this.userDetailsService.getUserDetails(id, accessKey);
  }

  @Post(':id')
  async createUserData(
    @Param('id', ParseIntPipe) id: number,
    @Headers('x-user-access-key') accessKey: string,
    @Body() body: UsersDetailsDto,
  ) {
    return this.userDetailsService.createUserDetails(id, accessKey, body.data);
  }

  @Patch(':id')
  async updateUserData(
    @Param('id', ParseIntPipe) id: number,
    @Headers('x-user-access-key') accessKey: string,
    @Body() body: UsersDetailsDto,
  ) {
    return this.userDetailsService.updateUserDetails(id, accessKey, body.data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUserData(
    @Param('id', ParseIntPipe) id: number,
    @Headers('x-user-access-key') accessKey: string,
  ) {
    return this.userDetailsService.deleteUserDetails(id, accessKey);
  }
}
