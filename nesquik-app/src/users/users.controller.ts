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
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.usersService.getUser(id);
  }

  @Post()
  createUser(@Body('name') name: string) {
    return this.usersService.createUser(name);
  }

  @Delete()
  deleteUser(@Body('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
