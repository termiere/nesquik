import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
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
    @Body() body: { access_token: string },
  ) {
    return this.usersService.getUser(id, body.access_token);
  }

  @Patch('/profile/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
  ) {
    return this.usersService.updateUser(
      id,
      body.login,
      body.password,
      body.access_token,
    );
  }

  @Delete('/profile/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { access_token: string },
  ) {
    return this.usersService.deleteUser(id, body.access_token);
  }
}
