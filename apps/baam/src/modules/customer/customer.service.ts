import { ShareCustomerService } from '@lib/share/modules/customer/customer.service';
import { CustomerEntity } from '@lib/share/entities/customer.entity';
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';

@Injectable()
export class CustomerService {
  constructor(private shareCustomerService: ShareCustomerService) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = new CustomerEntity(createCustomerDto);
    return this.shareCustomerService.store(customer);
  }

  findAll(options?: IPaginationOptions) {
    return this.shareCustomerService.findAll(options);
  }

  findById(id: string) {
    return this.shareCustomerService.findById(id);
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customer = new CustomerEntity(updateCustomerDto);
    return this.shareCustomerService.update(id, customer);
  }

  async remove(id: string) {
    return this.shareCustomerService.delete(id);
  }
}
