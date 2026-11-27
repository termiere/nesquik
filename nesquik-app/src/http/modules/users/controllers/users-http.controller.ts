import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Headers,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersLogicService } from '../../../../logic/modules/users/users-logic.service.js';
import { UpdateUserDto } from '../dto/users.dto.js';

@Controller('api/v1/users')
export class UsersHttpController {
  constructor(private readonly usersService: UsersLogicService) {}

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('/profile/:id')
  async getUser(
    @Param('id', ParseIntPipe) id: number,
    @Headers('x-user-access-key') accessKey: string,
  ) {
    return this.usersService.getUser(id, accessKey);
  }

  @Patch('/profile/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Headers('x-user-access-key') accessKey: string,
    @Body() body: UpdateUserDto,
  ) {
    return this.usersService.updateUser(
      id,
      body.login,
      body.password,
      accessKey,
    );
  }

  @Delete('/profile/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(
    @Param('id', ParseIntPipe) id: number,
    @Headers('x-user-access-key') accessKey: string,
  ) {
    return this.usersService.deleteUser(id, accessKey);
  }

  @Post('/:id/ban')
  async blockUser(
    @Param('id', ParseIntPipe) id: number,
    @Headers('x-user-access-key') accessKey: string,
  ) {
    return this.usersService.blockUser(id, accessKey);
  }

  @Post('/:id/unban')
  async unblockUser(
    @Param('id', ParseIntPipe) id: number,
    @Headers('x-user-access-key') accessKey: string,
  ) {
    return this.usersService.unblockUser(id, accessKey);
  }
}
