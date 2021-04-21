import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { DatabaseModule } from '../../../libs/share/src/modules/database/database.module';
import { EnvModule } from '../../../libs/share/src/modules/env/env.module';
import { BaamController } from './baam.controller';
import { BaamService } from './baam.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from '@lib/share/entities/customer.entity';
import { ShareCustomerService } from '@lib/share/modules/customer/customer.service';
import { ShareService } from '@lib/share/share.service';

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    CustomerModule,
    TypeOrmModule.forFeature([CustomerEntity]),
  ],
  controllers: [BaamController],
  providers: [ShareService, ShareCustomerService, BaamService],
})
export class BaamModule {}
