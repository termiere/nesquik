import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service.js';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @Get('/profile/:id')
  async getUser(
    @Param('id') id: number,
    @Body() body: { access_token: string },
  ) {
    if (!body || !body.access_token) {
      throw new BadRequestException('body / access_token de tvoi?');
    }
    return await this.usersService.getUser(id, body.access_token);
  }

  @Patch('/profile/:id')
  async updateUser(
    @Param('id') id: number,
    @Body() body: { access_token: string; login: string; password: string },
  ) {
    if (!body || !body.access_token || !body.login || !body.password) {
      throw new BadRequestException(
        'body / access_token / login / password de tvoi?',
      );
    }
    return await this.usersService.updateUser(
      id,
      body.login,
      body.password,
      body.access_token,
    );
  }

  @Delete('/profile/')
  async deleteUser(@Body('id') body: { access_token: string; id: number }) {
    if (!body || !body.access_token) {
      throw new BadRequestException(
        'body / access_token / login / password de tvoi?',
      );
    }
    return await this.usersService.deleteUser(body.id, body.access_token);
  }
}
