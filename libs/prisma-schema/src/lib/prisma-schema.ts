import type { ModelSchema } from '@beezone/types';
import { prismaClient } from './prisma-client.js';
import { prismaDatasource } from './prisma-datasource.js';
import { prismaModels } from './prisma-models.js';

export type PrismaSchemaOptions = {
  models: ModelSchema[];
  output: string;
};

export function prismaSchema(options: PrismaSchemaOptions): string {
  return [
    prismaClient({ output: options.output }),
    prismaDatasource(),
    prismaModels(options.models),
  ].join('\n');
}
