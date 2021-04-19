import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './entities/customer.entity';

@Injectable()
export class ShareCustomerService {

  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>
  ) { }

  async create(customer: CustomerEntity) {
    const newCustomer = this.customerRepository.create(customer);
    const result = await this.customerRepository.save(newCustomer);
    return result;
  }

  findAll() {
    return this.customerRepository.find();
  }

  async findOne(id: string) {
    const customer = await this.customerRepository.findOne(id);
    if (!customer) {
      throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
    }
    return customer;
  }

  async update(id: string, customer: CustomerEntity) {
    delete customer.id;
    await this.customerRepository.update(id, customer);
    const updatedCustomer = await this.customerRepository.findOne(id);
    if (!updatedCustomer) {
      throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
    }
    return updatedCustomer;
  }

  async remove(id: string) {
    const deleteResponse = await this.customerRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
    }
    return deleteResponse;
  }
}
