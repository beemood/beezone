import { names } from '@beezone/is';
import type { ClassType } from '@beezone/types';
import { Inject, type Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { PrismaClient } from '@prisma/client/extension.js';
import { DEFAULT_DATASOURCE_NAME } from './constants.js';

export function getClientToken(datasourceName = DEFAULT_DATASOURCE_NAME) {
  return `${
    names(datasourceName).screamingSnakeCase
  }_PRISMA_CLIENT`.toUpperCase();
}

export function provideClient(
  clientClass: ClassType<PrismaClient>,
  datasourceName = DEFAULT_DATASOURCE_NAME
): Provider {
  return {
    inject: [ConfigService],
    provide: getClientToken(datasourceName),
    useFactory(config: ConfigService) {
      const keyPrefix =
        datasourceName === DEFAULT_DATASOURCE_NAME ? '' : datasourceName + '_';
      const DATABASE_URL = config.getOrThrow(`${keyPrefix}DATABASE_URL`);
      return new clientClass({
        datasourceUrl: DATABASE_URL,
      });
    },
  };
}

export function InjectClient(datasourceName?: string): ParameterDecorator {
  return (...args) => {
    Inject(getClientToken(datasourceName))(...args);
  };
}
