import { Injectable } from '@nestjs/common';

@Injectable()
export class BaamService {
  getHello(): string {
    return 'Hello World!';
  }
}
