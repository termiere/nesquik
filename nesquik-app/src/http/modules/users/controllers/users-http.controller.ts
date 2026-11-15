import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
} from '@nestjs/common';
import { UsersLogicService } from '../../../../logic/modules/users/users-logic.service.js';

@Controller('api/v1/users')
export class UsersHttpController {
  constructor(private readonly usersService: UsersLogicService) {}

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

  @Delete('/profile/:id')
  async deleteUser(
    @Param('id') id: number,
    @Body() body: { access_token: string },
  ) {
    console.log('sha proverim');

    if (!body || !body.access_token) {
      throw new BadRequestException(
        'body / access_token / login / password de tvoi?',
      );
    }
    console.log('sha proverim');
    return await this.usersService.deleteUser(id, body.access_token);
  }
}
