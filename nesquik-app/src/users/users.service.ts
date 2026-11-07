import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository.js';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    sayHello(): string {return this.usersRepository.sayUserHello()}
}
