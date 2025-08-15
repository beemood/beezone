import { writeTextFile } from '@beezone/fs';
import { prismaSchema } from '@beezone/prisma-schema';
import { readModels } from '@beezone/read-models';
import type { Command } from 'commander';

export type PrismaSchemaCommandOptions = {
  generatedClientPath: string;
  prismaSchemaPath: string;
  modelDefinitionsPath: string;
};

export async function prismaSchemaCommandHandler(
  options: PrismaSchemaCommandOptions
) {
  const models = await readModels(options.modelDefinitionsPath);
  const content = prismaSchema({
    models,
    generatedClientPath: options.generatedClientPath,
  });

  await writeTextFile(options.prismaSchemaPath, content);
}

export function bindPrismaSchemaCommand(program: Command) {
  program
    .command('prisma-schema')
    .description('Generate prisma schema from models definitions')
    .requiredOption('--generatedClientPath <string>, Generated client path')
    .requiredOption('--prismaSchemaPath <string>, Prisma schema file path')
    .requiredOption(
      '--modelDefinitionsPath <string, Root directory that contains model definitions'
    )
    .action(prismaSchemaCommandHandler);
}
