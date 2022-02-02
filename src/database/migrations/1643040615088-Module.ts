import {MigrationInterface, QueryRunner} from "typeorm";

export class Module1643040615088 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS module(
                module_id NOT NULL AUTO_INCREMENT,
                module_name VARCHAR(256) NOT NULL,
                module_file VARCHAR(256) NOT NULL,
                created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
                PRIMARY KEY (module_id)
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS module(
            module_id NOT NULL AUTO_INCREMENT,
            module_name VARCHAR(256) NOT NULL,
            module_file VARCHAR(256) NOT NULL,
            created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
            PRIMARY KEY (module_id)
        )
    `)
    }

}
