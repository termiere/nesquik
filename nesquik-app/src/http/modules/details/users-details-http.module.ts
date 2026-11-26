import { Module } from '@nestjs/common';
import { UsersDetailsHttpController } from './controllers/users-details-http.controller';
import { UsersDetailsLogicModule } from '../../../logic/modules/details/user-details-logic.module';

@Module({
  imports: [UsersDetailsLogicModule],
  controllers: [UsersDetailsHttpController],
})
export class UsersDetailsHttpModule {}
