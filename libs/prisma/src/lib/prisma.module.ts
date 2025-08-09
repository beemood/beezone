import { ClassType } from '@beezone/types';
import type { DynamicModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaClient } from '@prisma/client/extension';
import { getClientToken, provideClient } from './providers/client.js';
import {
  getRepositoryToken,
  provideRepository,
} from './providers/repository.js';

export type PrismaRootModuleOptions = {
  datasourceName?: string;
  clientClass: ClassType<PrismaClient>;
};

export type PrismaFeatureModuleOptions = {
  datasourceName?: string;
  resourceNames: string[];
};

@Module({
  imports: [ConfigModule.forFeature(() => ({}))],
})
export class PrismaModule {
  static forRoot(options: PrismaRootModuleOptions): DynamicModule {
    return {
      global: true,
      module: PrismaModule,
      providers: [provideClient(options.clientClass, options.datasourceName)],
      exports: [getClientToken(options.datasourceName)],
    };
  }

  static forFeature(options: PrismaFeatureModuleOptions): DynamicModule {
    const repositoryProviders = options.resourceNames.map((resourceName) => {
      return provideRepository(resourceName, options.datasourceName);
    });

    const repositoryTokens = options.resourceNames.map((resourceName) => {
      return getRepositoryToken(resourceName, options.datasourceName);
    });

    return {
      module: PrismaModule,

      providers: [...repositoryProviders],
      exports: [...repositoryTokens],
    };
  }
}
