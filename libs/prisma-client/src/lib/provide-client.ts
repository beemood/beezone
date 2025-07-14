import type { Provider, Type } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export function getClientToken(datasourceName = '') {
  const SUFFIX = 'PRISMA_CLIENT';
  if (datasourceName) {
    return `${datasourceName}PRISMA_CLIENT`;
  }
  return SUFFIX;
}

export function provideClient(
  clientClass: Type,
  datasourceName = ''
): Provider {
  return {
    inject: [ConfigService],
    provide: getClientToken(datasourceName),
    useFactory(config: ConfigService) {
      const datasourceUrl = config.getOrThrow('DATABASE_URL');
      return new clientClass({ datasourceUrl });
    },
  };
}

export function InjectClient(datasourceName = ''): ParameterDecorator {
  return (...args) => {
    Inject(getClientToken(datasourceName))(...args);
  };
}
