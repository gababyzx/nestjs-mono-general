import { Test, TestingModule } from '@nestjs/testing';
import { WorkerPlanController } from './worker-plan.controller';

describe('WorkerPlanController', () => {
  let controller: WorkerPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkerPlanController],
    }).compile();

    controller = module.get<WorkerPlanController>(WorkerPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
