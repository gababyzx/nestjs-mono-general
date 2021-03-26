import { Module } from '@nestjs/common';
import { WorkerPlanController } from './worker-plan.controller';

@Module({
  controllers: [WorkerPlanController],
})
export class WorkerPlanModule {}
