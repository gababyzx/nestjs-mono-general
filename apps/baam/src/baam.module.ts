import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { DatabaseModule } from '../../../libs/share/src/modules/database/database.module';
import { EnvModule } from '../../../libs/share/src/modules/env/env.module';
import { BaamController } from './baam.controller';
import { BaamService } from './baam.service';
import { ShareCustomerService } from '@lib/share/modules/customer/customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from '@lib/share/modules/customer/entities/customer.entity';

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    CustomerModule,
    TypeOrmModule.forFeature([CustomerEntity]),
  ],
  controllers: [BaamController],
  providers: [ShareCustomerService, BaamService],
})
export class BaamModule {}
