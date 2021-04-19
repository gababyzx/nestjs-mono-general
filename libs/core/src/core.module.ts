import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { CustomerModule } from './customer/customer.module';
import { EnvModule } from './env/env.module';

@Module({
  imports: [CustomerModule, EnvModule],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
