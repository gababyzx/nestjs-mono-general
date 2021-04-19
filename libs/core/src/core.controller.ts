import { Controller, Get } from '@nestjs/common';
import { CoreService } from './core.service';

@Controller()
export class CoreController {
  constructor(private readonly appService: CoreService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
