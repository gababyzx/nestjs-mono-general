import { NestFactory } from '@nestjs/core';
import { BaamModule } from './baam.module';

async function bootstrap() {
  const app = await NestFactory.create(BaamModule);
  await app.listen(3000);
}
bootstrap();
