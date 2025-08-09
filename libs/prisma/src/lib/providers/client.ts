import type { ClassType } from '@beezone/types';
import type { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { PrismaClient } from '@prisma/client/extension.js';
import { DEFAULT_DATASOURCE_NAME } from './constants.js';
export function getClientToken(datasourceName = DEFAULT_DATASOURCE_NAME) {
  return `${datasourceName}_PRISMA_CLIENT`;
}

export function provideClient(
  datasourceName = DEFAULT_DATASOURCE_NAME,
  clientClass: ClassType<PrismaClient>
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
