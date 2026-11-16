import { Controller, Post, Body } from '@nestjs/common';

import { LoginAuthDTO, RegisterAuthDTO } from '../dto/auth.dto.js';
import { AuthLogicService } from '../../../../logic/modules/auth/auth-logic.service.js';

@Controller('api/v1/auth')
export class AuthHttpController {
  constructor(private readonly authService: AuthLogicService) {}

  @Post('/register')
  async register(@Body() body: RegisterAuthDTO) {
    return this.authService.register(body.login, body.password);
  }

  @Post('/login')
  async login(@Body() body: LoginAuthDTO) {
    return this.authService.login(body.login, body.password);
  }
}
