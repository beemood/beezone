import { NestFactory } from '@nestjs/core';
import { Logger, Type, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

export type BoostrapOptions = {
  module: Type;
};
export async function bootstrap(options: BoostrapOptions) {
  const app = await NestFactory.create(options.module);

  const config = app.get(ConfigService);
  const PORT = config.getOrThrow('PORT');
  const TITLE = config.getOrThrow('TITLE');
  const DESCRIPTION = config.getOrThrow('DESCRIPTION');

  // Middlewares
  {
    app.use(helmet());
    app.setGlobalPrefix('api');
    app.enableCors({ origins: '*' });

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        validationError: { target: false, value: false },
      })
    );
  }

  // Swagger configuration
  {
    const swaggerConfig = new DocumentBuilder()
      .setTitle(TITLE)
      .setDescription(DESCRIPTION)
      .build();
    const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, swaggerDoc);
  }

  await app.listen(PORT);
  Logger.log(`🚀 App is running at ${await app.getUrl()}`);
}
