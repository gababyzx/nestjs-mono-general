import { Test, TestingModule } from '@nestjs/testing';
import { WorkerPlanService } from './worker-plan.service';

describe('WorkerPlanService', () => {
  let service: WorkerPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkerPlanService],
    }).compile();

    service = module.get<WorkerPlanService>(WorkerPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
