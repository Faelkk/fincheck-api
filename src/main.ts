/* eslint-disable prettier/prettier */
import 'dotenv/config';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = parseInt(process.env.PORT || '5000', 10);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
}

bootstrap();
