import { isDefinedOrThrow } from '@beezone/is';
import type { ModelSchema } from '@beezone/types';
import { PrismaModelPrinter } from './prisma-model-printer.js';

export function printModels(models: ModelSchema[]) {
  return models
    .filter((e) => e.abstract != true)
    .map((e) => {
      if (e.extends) {
        const abstractModels = models.filter((m) => {
          return e.extends?.includes(isDefinedOrThrow(m.name));
        });

        const abstractProperties = abstractModels.map((a) => {
          return { ...a.properties };
        });

        const abstractRelations = abstractModels.map((a) => {
          return { ...a.relations };
        });

        e.properties = {
          ...e.properties,
          ...abstractProperties,
        };

        e.relations = {
          ...e.relations,
          ...abstractRelations,
        };
      }
      return new PrismaModelPrinter(e).toString();
    })
    .join('\n\b');
}
