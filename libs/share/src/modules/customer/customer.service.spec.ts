import { Test, TestingModule } from '@nestjs/testing';
import { ShareCustomerService } from './customer.service';

describe('ShareCustomerService', () => {
  let service: ShareCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShareCustomerService],
    }).compile();

    service = module.get<ShareCustomerService>(ShareCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
