import { Controller, Post, Body, BadRequestException } from '@nestjs/common';

import { RegisterAuthDTO } from '../dto/register-auth.dto.js';
import { LoginAuthDTO } from '../dto/login-auth.dto.js';
import { AuthLogicService } from '../../../../logic/modules/auth/auth-logic.service.js';

@Controller('api/v1/auth')
export class AuthHttpController {
  constructor(private readonly authService: AuthLogicService) {}

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
