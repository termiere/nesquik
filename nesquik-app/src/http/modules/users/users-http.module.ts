import { Module } from '@nestjs/common';
import { UsersHttpController } from './controllers/users-http.controller.js';

import { LogicModule } from '../../../logic/logic.module.js';

@Module({
  imports: [LogicModule],
  controllers: [UsersHttpController],
})
export class UsersHttpModule {}
