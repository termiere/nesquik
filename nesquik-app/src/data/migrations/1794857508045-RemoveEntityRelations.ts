import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveEntityRelations1794857508045 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "auth"
      ALTER COLUMN "user_id" SET NOT NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "auth"
      ALTER COLUMN "user_id" DROP NOT NULL
    `);
  }
}
