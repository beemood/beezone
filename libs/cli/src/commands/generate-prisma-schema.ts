import { readYamlFile, writeTextFile } from '@beezone/fs';
import { isDefinedOrThrow, names } from '@beezone/is';
import { generatePrismaSchema } from '@beezone/json';
import type { ModelSchema, Names } from '@beezone/types';
import type { Command } from 'commander';
import { readdir } from 'fs/promises';

export type GeneratePrismaSchemaCommandOptions = {
  modelsRoot: string;
  projectName: string;
  outputPath: string;
};

function modelNameFromFileName(filepath: string) {
  const filename = isDefinedOrThrow(filepath.split(/\/\\/).pop());
  return names(filename.replace('.model.yaml', '')).kebabCase;
}

async function readModels(rootDir: string): Promise<ModelSchema[]> {
  const dirs = await readdir(rootDir);

  const filteredDirs = dirs.filter((e) => e.endsWith('.model.json'));

  return await Promise.all(
    filteredDirs.map(async (e) => {
      const content = await readYamlFile<ModelSchema>(e);

      return {
        name: modelNameFromFileName(e) as Names,
        ...content,
      };
    })
  );
}

export async function generatePrismaSchemaCommandHandler(
  options: GeneratePrismaSchemaCommandOptions
) {
  const models = await readModels(options.modelsRoot);
  const schema = await generatePrismaSchema(options.projectName, models);
  await writeTextFile(options.outputPath, schema);
}

export function bindGeneratePrismaSchemaCommand(program: Command) {
  program
    .command('bundle-json-schema')
    .description('bundle json schema into a single json file')
    .requiredOption('-f,--filePath <string>, Main json file path')
    .requiredOption('-o,--outputPath <string>, Bundled json file path')
    .action(generatePrismaSchemaCommandHandler);
}
