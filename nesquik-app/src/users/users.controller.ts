import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUserHello(): string {
    return this.usersService.sayHello();
  }

  @Get('all')
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: number) {
    return await this.usersService.getUser(id);
  }

  @Post()
  async createUser(@Body() body: { name: string; password: string }) {
    return await this.usersService.createUser(body.name, body.password);
  }

  @Delete()
  async deleteUser(@Body('id') id: number) {
    return await this.usersService.deleteUser(id);
  }
}
