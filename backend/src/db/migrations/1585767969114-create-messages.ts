import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createMessages1585767969114 implements MigrationInterface {

    private table = new Table({
         name: 'messages',
         columns:[{
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
         },
         {
             name: 'user_id',
             type: 'integer',
             isNullable: false,

         },
         {
            name: 'content',
            type: 'varchar',
            length: '255',
            isUnique: false,
            isNullable: false
         },
         {
            name: 'created_at',
            type: 'timestampz',
            isNullable: false,
            default: 'now()'
        },
        {
            name: 'updated_at',
            type: 'timestampz',
            isNullable: false,
            default: 'now()'
        }]
    })

    private userIdForeignKey = new TableForeignKey({
        columnNames: ['users_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'cascade'
    })

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.table)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.table)
    }

}
