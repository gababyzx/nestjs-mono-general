import { ShareService } from '@lib/share';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaamService {
  constructor(private shareService: ShareService) {}

  getServiceInfo() {
    return this.shareService.getServiceInfo();
  }
}
