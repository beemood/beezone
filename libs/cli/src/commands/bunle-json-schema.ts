import { writeJsonFile } from '@beezone/fs';
import { bundleJsonSchema7 } from '@beezone/json';
import type { Command } from 'commander';

export type BundleJsonSchemaCommandOptions = {
  filePath: string;
  outputPath: string;
};

export async function bundleJsonSchemaCommandHandler(
  options: BundleJsonSchemaCommandOptions
) {
  const schema = await bundleJsonSchema7(options.filePath);
  await writeJsonFile(options.outputPath, schema);
}

export function bindBundleJsonSchemaCommand(program: Command) {
  program
    .command('bundleJsonSchema')
    .requiredOption('-f,--filePath <string>, Main json file path')
    .requiredOption('-o,--ouputPath <string>, Bundled json file path')
    .action(bundleJsonSchemaCommandHandler);
}
