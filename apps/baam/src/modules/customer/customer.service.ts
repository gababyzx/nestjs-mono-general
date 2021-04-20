import { ShareCustomerService } from '@lib/share/modules/customer/customer.service';
import { CustomerEntity } from '@lib/share/modules/customer/entities/customer.entity';
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {

  constructor(
    private shareCustomerService: ShareCustomerService
  ) { }

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = new CustomerEntity(createCustomerDto)
    return this.shareCustomerService.create(customer);
  }

  findAll() {
    return this.shareCustomerService.findAll();
  }

  findOne(id: string) {
    return this.shareCustomerService.findOne(id);
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customer = new CustomerEntity(updateCustomerDto)
    return this.shareCustomerService.update(id, customer);
  }

  async remove(id: string) {
    return this.shareCustomerService.remove(id);

  }
}
