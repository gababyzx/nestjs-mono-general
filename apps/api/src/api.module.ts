import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { CustomerModule } from './modules/customer/customer.module';
import { DatabaseModule } from './modules/database/database.module';
import { EnvModule } from './modules/env/env.module';

@Module({
  imports: [EnvModule, DatabaseModule, CustomerModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule { }
