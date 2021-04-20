import { Controller, Get } from '@nestjs/common';
import { BaamService } from './baam.service';

@Controller()
export class BaamController {
  constructor(private readonly baamService: BaamService) {}

  @Get()
  getHello(): string {
    return this.baamService.getHello();
  }
}
