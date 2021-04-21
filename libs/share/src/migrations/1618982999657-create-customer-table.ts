import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createCustomerTable1618982999657 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'customer',
        columns: [
          {
            name: 'id',
            type: 'string',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'description',
            type: 'string',
          },
          {
            name: 'domain',
            type: 'string[]',
          },
          {
            name: 'active',
            type: 'boolean',
          },
          {
            name: 'key',
            type: 'string',
          },
          {
            name: 'mailing_host',
            type: 'string',
          },
          {
            name: 'mailing_secure',
            type: 'boolean',
          },
          {
            name: 'mailing_port',
            type: 'number',
          },
          {
            name: 'mailing_user',
            type: 'string',
          },
          {
            name: 'mailing_password',
            type: 'string',
          },
          {
            name: 'airtable_key',
            type: 'string',
          },
          {
            name: 'airtable_base',
            type: 'string',
          },
          {
            name: 'createdAt',
            type: 'datetime',
            default: 'now()',
            isNullable: true,
          },
          {
            name: 'updatedAt',
            type: 'datetime',
            default: 'now()',
            isNullable: true,
          },
          {
            name: 'createdBy',
            type: 'string',
            isNullable: true,
          },
          {
            name: 'updatedBy',
            type: 'string',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('customer')
  }
}
