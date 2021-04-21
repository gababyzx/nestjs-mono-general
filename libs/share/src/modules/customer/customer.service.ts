import { BaseService } from '@lib/share/base.service';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CustomerEntity } from '../../entities/customer.entity';

@Injectable()
export class ShareCustomerService extends BaseService<
  CustomerEntity,
  Repository<CustomerEntity>
> {}
