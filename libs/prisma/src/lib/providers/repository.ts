import type { Provider } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { getClientToken } from './client.js';
import { DEFAULT_DATASOURCE_NAME } from './constants.js';

export function getRepositoryToken(
  resourceName: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
) {
  return `${datasourceName}_${resourceName}_PRISMA_REPOSITORY`;
}

export function provideRepository(
  resourceName: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
): Provider {
  return {
    inject: [getClientToken(datasourceName)],
    provide: getRepositoryToken(resourceName, datasourceName),
    useFactory(client) {
      return client[datasourceName];
    },
  };
}

export function InjectRepository(
  resourceName: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
): ParameterDecorator {
  return (...args) => {
    Inject(getRepositoryToken(resourceName, datasourceName))(...args);
  };
}
