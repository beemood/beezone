import { NestFactory } from '@nestjs/core';
import { SampleModule } from './lib/sample.module.js';
import { Logger } from '@nestjs/common';
import helmet from 'helmet';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

export async function main() {
  const app = await NestFactory.create(SampleModule);

  const config = app.get(ConfigService);
  const PORT = config.getOrThrow('PORT');

  //
  {
    app.use(helmet());
    app.setGlobalPrefix('api');
    app.enableCors({ origins: '*' });
  }

  //
  {
    const swaggerConfig = new DocumentBuilder().build();
    const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, swaggerDoc);
  }

  await app.listen(PORT);
  Logger.log(`🚀 App is running at ${await app.getUrl()}`);
}

main();
