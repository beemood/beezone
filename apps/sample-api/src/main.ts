import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app/app.module.js';
async function boot() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  // Environment variables
  const GLOBAL_REFIX = config.getOrThrow('GLOBAL_REFIX', 'api');
  const PORT = config.getOrThrow('PORT');
  const NAME = config.getOrThrow('NAME');
  const DESCRIPTION = config.getOrThrow('DESCRIPTION');

  // Configure middlewares
  {
    app.setGlobalPrefix(GLOBAL_REFIX);
    app.enableCors({ origin: ['*'] });
    app.use(helmet());
  }

  // Configure swagger
  {
    const swaggerConfig = new DocumentBuilder()
      .setTitle(NAME)
      .setDescription(DESCRIPTION)
      .addBearerAuth()
      .build();
    const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig, {});
    SwaggerModule.setup(GLOBAL_REFIX, app, swaggerDoc);
  }

  // Start
  {
    await app.listen(PORT);

    Logger.log(`${NAME} app is up and running at ${app.getUrl()}`, 'BOOT');
  }
}

boot();
