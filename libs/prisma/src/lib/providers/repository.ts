import { names } from '@beezone/is';
import type { Provider } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { inferResourceName } from '../helpers/infer-resource-name.js';
import { getClientToken } from './client.js';
import { DEFAULT_DATASOURCE_NAME } from './constants.js';

export function getRepositoryToken(
  resourceName: string,
  datasourceName = DEFAULT_DATASOURCE_NAME
) {
  return `${datasourceName}_${
    names(resourceName).screamingSnakeCase
  }_PRISMA_REPOSITORY`.toUpperCase();
}

export function provideRepository(
  resourceName: string,
  datasourceName?: string
): Provider {
  return {
    inject: [getClientToken(datasourceName)],
    provide: getRepositoryToken(resourceName, datasourceName),
    useFactory(client) {
      return client[resourceName];
    },
  };
}

export function InjectRepository(
  resourceName?: string,
  datasourceName?: string
): ParameterDecorator {
  return (...args) => {
    resourceName = resourceName ?? inferResourceName(args[0].constructor.name);
    Inject(getRepositoryToken(resourceName, datasourceName))(...args);
  };
}
