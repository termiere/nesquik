import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class UsersRepository {
  constructor(@Inject('PG_POOL') private readonly pool: Pool) {}

  sayUserHello(): string {
    return 'Hello every!';
  }

  async getAllUsers() {
    try {
      const res = await this.pool.query('select * from users');
      return res.rows;
    } catch (error) {
      throw error;
    }
  }

  async getUser(id: number) {
    try {
      const res = await this.pool.query('select * from users where id = $1', [
        id,
      ]);
      return res.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async createUser(name: string, password: string) {
    try {
      const userAlreadyCreated = await this.pool.query(
        'select * from users where username = $1',
        [name],
      );

      if (userAlreadyCreated.rows.length > 0) {
        return 'user to uzhe est  ';
      }

      const res = await this.pool.query(
        'INSERT INTO users (username, password) VALUES ($1, $2)',
        [name, password],
      );

      return res.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: number) {
    try {
      const res = await this.pool.query('SELECT * FROM USERS WHERE id = $1', [
        id,
      ]);
      if (res.rows.length === 0) {
        return 'usera no nema';
      }

      await this.pool.query('DELETE FROM users WHERE id = $1', [id]);
      return 'vse nema usera';
    } catch (error) {
      throw error;
    }
  }
}
