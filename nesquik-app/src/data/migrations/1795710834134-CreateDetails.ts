import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDetails1795710834134 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS "details" (
            "id" SERIAL PRIMARY KEY,
            "data" VARCHAR NOT NULL,
            "user_id" INTEGER NOT NULL UNIQUE REFERENCES "users"("id") ON DELETE CASCADE
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "details";
    `);
  }
}
