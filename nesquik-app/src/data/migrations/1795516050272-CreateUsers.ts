import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1795516050272 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "users" (
        "id" SERIAL PRIMARY KEY,
        "login" VARCHAR NOT NULL UNIQUE,
        "password" VARCHAR NOT NULL
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "users";
    `);
  }
}
