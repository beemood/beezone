import type { ModelSchema } from '@beezone/types';
import { prismaClient } from './prisma-client.js';
import { prismaDatasource } from './prisma-datasource.js';
import { prismaModels } from './prisma-models.js';

export type PrismaSchemaOptions = {
  models: ModelSchema[];
  generatedClientPath: string;
};

export function prismaSchema(options: PrismaSchemaOptions): string {
  return [
    prismaClient({ generatedClientPath: options.generatedClientPath }),
    prismaDatasource(),
    prismaModels(options.models),
  ].join('\n\n');
}
