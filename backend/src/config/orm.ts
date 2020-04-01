
import * as path from 'path'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const options: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'data/project.db',
    logging: true,
    entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
    migrations: [path.resolve(__dirname, '..', 'db', 'moigrations', '*')]
}

module.exports = options;