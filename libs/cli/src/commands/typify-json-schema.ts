import { writeTextFile } from '@beezone/fs';
import { typifyJsonSchema7 } from '@beezone/json';
import type { Command } from 'commander';

export type TypifyJsonSchemaCommandOptions = {
  filePath: string;
  outputPath: string;
};

export async function typifyJsonSchemaCommandHandler(
  options: TypifyJsonSchemaCommandOptions
) {
  const types = await typifyJsonSchema7(options.filePath);
  await writeTextFile(options.outputPath, types);
}

export function bindTypifyJsonSchemaCommand(program: Command) {
  program
    .command('typify-json-schema')
    .description('convert json schema into typescript type')
    .requiredOption('-f,--filePath <string>, json schema file')
    .requiredOption('-o,--outputPath <string>, typescript file path')
    .action(typifyJsonSchemaCommandHandler);
}
