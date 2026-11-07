import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  private users = new Map<number, string>();

  sayUserHello(): string {
    return 'Hello every!';
  }

  getAllUsers() {
    return [...this.users];
  }

  getUser(id: number) {
    return this.users.get(Number(id));
  }

  createUser(name: string) {
    let id = this.users.size + 1;
    this.users.set(id, name);

    return { id, name };
  }

  deleteUser(id: number) {
    this.users.delete(id);
    return 'vse nema usera';
  }
}
