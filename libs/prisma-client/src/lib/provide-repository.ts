import { Inject, Provider } from '@nestjs/common';
import { getClientToken } from './provide-client.ts';

export function getRepositoryToken(
  resouceName: string,
  datasourceName = ''
): string {
  const prefix = `${resouceName}_REPOSITORY`;
  if (datasourceName) {
    return `${prefix}_${datasourceName}`;
  }
  return prefix;
}
export function provideRepository(
  resourceName: string,
  datasourceName = ''
): Provider {
  return {
    inject: [getClientToken(datasourceName)],
    provide: getRepositoryToken(resourceName, datasourceName),
    useFactory(client: any) {
      return client[resourceName];
    },
  };
}

export function InjectRepository(
  resouceName: string,
  datasouceName = ''
): ParameterDecorator {
  return (...args) => {
    Inject(getRepositoryToken(resouceName, datasouceName))(...args);
  };
}
