import { Module, DynamicModule } from '@nestjs/common';
import { EnvModule } from '../env/env.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvService } from '@lib/share/modules/env/env.service';

function DatabaseOrmModule(): DynamicModule {
  const config = new EnvService().read();
  return TypeOrmModule.forRoot({
    type: config.DB_TYPE,
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    synchronize: true,
  });
}

@Module({
  imports: [EnvModule, DatabaseOrmModule()],
})
export class DatabaseModule {}
