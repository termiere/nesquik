import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
    sayUserHello(): string {return 'Hello every!';}
}
