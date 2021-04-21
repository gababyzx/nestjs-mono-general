import { Injectable } from '@nestjs/common';
import prettyms from 'pretty-ms';
import os from 'os';
import { EnvService } from './modules/env/env.service';

@Injectable()
export class ShareService {
  getServiceInfo() {
    const envService = new EnvService();
    const vars = envService.read();
    const workers = envService.currentWorker();
    const now = new Date();
    return {
      statusCode: 200,
      message: 'NestJS is da best!',
      name: vars.APP_NAME,
      server:
        process.env['HOST_HOSTNAME'] ||
        process.env['HOSTNAME'] ||
        os.hostname(),
      description: vars.APP_DESCRIPTION,
      version: vars.APP_VERSION,
      // releaseDate: vars.releasedDate,
      startedAt: vars.START_AT.toISOString(),
      uptime: prettyms(now.getTime() - vars.START_AT.getTime()),
      now: now.toISOString(),
      worker: workers,
      totalWorkers: os.cpus().length,
      system: {
        architect: os.arch(),
        platform: os.platform(),
        cpus: os.cpus().length,
        freeMemory: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + ' GB',
        totalMemory: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GB',
      },
    };
  }
}
