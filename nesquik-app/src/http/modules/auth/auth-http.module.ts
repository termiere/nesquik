import { Module } from '@nestjs/common';
import { AuthHttpController } from './controllers/auth-http.controller.js';
import { LogicModule } from '../../../logic/logic.module.js';

@Module({ imports: [LogicModule], controllers: [AuthHttpController] })
export class AuthHttpModule {}
