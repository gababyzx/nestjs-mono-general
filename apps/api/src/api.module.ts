import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { WorkerPlanService } from './modules/worker-plan/worker-plan.service';
import { WorkerPlanModule } from './modules/worker-plan/worker-plan.module';

@Module({
  imports: [WorkerPlanModule],
  controllers: [ApiController],
  providers: [ApiService, WorkerPlanService],
})
export class ApiModule {}
