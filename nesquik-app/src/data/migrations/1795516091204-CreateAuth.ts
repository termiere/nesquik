import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAuth1795516091204 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "auth" (
        "id" SERIAL PRIMARY KEY,
        "access_token" VARCHAR NOT NULL,
        "user_id" INTEGER NOT NULL
      );
    `);

    await queryRunner.query(`
      ALTER TABLE "auth"
      ADD CONSTRAINT "FK_auth_user"
      FOREIGN KEY ("user_id")
      REFERENCES "users"("id")
      ON DELETE CASCADE
      ON UPDATE NO ACTION;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE IF EXISTS "auth"
      DROP CONSTRAINT IF EXISTS "FK_auth_user";
    `);

    await queryRunner.query(`
      DROP TABLE IF EXISTS "auth";
    `);
  }
}