/* eslint-disable prettier/prettier */
import 'dotenv/config';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule, { cors: true });

  const SWAGGER_TITLE = 'Fincheck API';
  const SWAGGER_DESCRIPTION =
    'Documentação Fincheck API - Desenvolvida para um sistema financeiro.';
  const SWAGGER_PREFIX = '/docs';
  const config = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE)
    .setDescription(SWAGGER_DESCRIPTION)
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_PREFIX, app, document, {
    customCssUrl: '/swagger-ui.css',
    customJs: ['/swagger-ui-bundle.js', '/swagger-ui-standalone-preset.js'],
  });


  const port = parseInt(process.env.PORT || '5000', 10);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
}

bootstrap();
