import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterAuthDTO } from './dto/register-auth.dto.js';
import { LoginAuthDTO } from './dto/login-auth.dto.js';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() body: RegisterAuthDTO) {
    if (!body) {
      throw new BadRequestException('body de tvoi?');
    }
    return this.authService.register(body.login, body.password);
  }

  @Post('/login')
  async login(@Body() body: LoginAuthDTO) {
    if (!body) {
      throw new BadRequestException('body de tvoi?');
    }
    return this.authService.login(body.login, body.password);
  }
}
