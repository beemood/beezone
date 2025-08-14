import type { ModelSchema } from '@beezone/types';
import { PrismaModel } from './prisma-model.js';

export function prismaModels(models: ModelSchema[]): string {
  return models
    .map((e) => {
      return new PrismaModel(e).toString();
    })
    .join('\n');
}
