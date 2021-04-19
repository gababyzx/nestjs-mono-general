import { EnvService } from '@lib/share/modules/env/env.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: EnvService,
      useValue: new EnvService(),
    },
  ],
  exports: [EnvService],
})
export class EnvModule { }
