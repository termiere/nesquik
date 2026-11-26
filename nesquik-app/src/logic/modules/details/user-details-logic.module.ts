import { Module } from '@nestjs/common';
import { UserDetailsLogicService } from './user-details-logic.service';
import { AuthDataModule } from '../../../data/modules/auth/auth-data.module';
import { UsersDataModule } from '../../../data/modules/users/users-data.module';
import { UsersDetailsDataModule } from '../../../data/modules/details/users-details-data.module';

@Module({
  imports: [AuthDataModule, UsersDataModule, UsersDetailsDataModule],
  providers: [UserDetailsLogicService],
  exports: [UserDetailsLogicService],
})
export class UsersDetailsLogicModule {}
