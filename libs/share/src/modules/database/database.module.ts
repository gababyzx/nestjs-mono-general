import { Module, DynamicModule } from '@nestjs/common';
import { EnvModule } from '../env/env.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvService } from '../env/env.service';
import path from 'path';

const pathPrefix = '../../';

function DatabaseOrmModule(): DynamicModule {
  const config = new EnvService().read();
  const entitiesPath = path.join(__dirname, pathPrefix, 'entities');
  const migrationsPath = path.join(__dirname, pathPrefix, 'migrations');
  console.log('config: ', { config, entitiesPath, migrationsPath });
  return TypeOrmModule.forRoot({
    type: config.DB_TYPE,
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    synchronize: true,
    migrationsRun: true,
    migrationsTableName: 'migration_table',
    entityPrefix: null,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  });
}

@Module({
  imports: [EnvModule, DatabaseOrmModule()],
})
export class DatabaseModule {}
