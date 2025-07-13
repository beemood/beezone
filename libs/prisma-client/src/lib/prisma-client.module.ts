import { DynamicModule, Module, Type } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getClientToken, provideClient } from './provide-client.js';
import { getRepositoryToken, provideRepository } from './provide-repository.js';

export type PrismaClientModuleRootOptions = {
  clientClass: Type;
  datasourceName?: string;
};

export type PrismaClientModuleFeatureOptions = {
  resourceNames: string[];
  dataSourceName?: string;
};

@Module({
  imports: [],
})
export class PrismaClientModule {
  static forRoot(options: PrismaClientModuleRootOptions): DynamicModule {
    return {
      global: true,
      imports: [ConfigModule.forFeature(() => ({}))],
      module: PrismaClientModule,
      providers: [provideClient(options.clientClass, options.datasourceName)],
      exports: [getClientToken(options.datasourceName)],
    };
  }

  static forFeature(options: PrismaClientModuleFeatureOptions): DynamicModule {
    const providers = options.resourceNames.map((resourceName) => {
      return provideRepository(resourceName, options.dataSourceName);
    });

    const tokens = options.resourceNames.map((resouceName) => {
      return getRepositoryToken(resouceName, options.dataSourceName);
    });

    return {
      module: PrismaClientModule,
      providers: [...providers],
      exports: [...tokens],
    };
  }
}
