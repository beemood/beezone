/* eslint-disable spellcheck/spell-checker */
import { isDefinedOrThrow } from '@beezone/is';
import type { ModelSchema } from '@beezone/types';
import { prismaDatabaseConfiguration } from './prisma-database-configuration.js';
import { PrismaModelPrinter } from './prisma-model-printer.js';

export function generatePrismaSchema(
  generatedProjectName: string,
  models: ModelSchema[]
) {
  return [
    prismaDatabaseConfiguration(generatedProjectName),
    printModels(models),
  ].join('\n\b');
}
