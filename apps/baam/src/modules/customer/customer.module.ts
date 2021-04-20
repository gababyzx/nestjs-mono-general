import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from '@lib/share/modules/customer/entities/customer.entity';
import { DatabaseModule } from '../../../../../libs/share/src/modules/database/database.module';
import { ShareCustomerService } from '@lib/share/modules/customer/customer.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([CustomerEntity])],
  controllers: [CustomerController],
  providers: [ShareCustomerService, CustomerService],
})
export class CustomerModule {}
