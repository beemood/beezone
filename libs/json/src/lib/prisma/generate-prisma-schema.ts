/* eslint-disable spellcheck/spell-checker */
import type { ModelSchema } from '@beezone/types';
import { PrismaModelPrinter } from './prisma-model-printer.js';

export function generatePrismaSchema(
  generatedProjectName: string,
  models: ModelSchema[]
) {
  return [
    `
generator client {
  provider = "prisma-client-js"
  output   = "../node_modules/${generatedProjectName}"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}`.trim(),
    models
      .map((e) => {
        return new PrismaModelPrinter(e).toString();
      })
      .join('\n\n'),
  ];
}
