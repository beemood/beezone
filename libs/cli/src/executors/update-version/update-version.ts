import { readJsonFile, updateJsonFile } from '@beezone/fs';
import { type PromiseExecutor } from '@nx/devkit';
import { join } from 'path';
import type { UpdateVersionSchema } from './schema';

/**
 * Update project versions to the main project version
 * @group executor
 * @param options
 * @returns
 */
const runExecutor: PromiseExecutor = async (options: UpdateVersionSchema) => {
  const mainProjectJson = await readJsonFile<{ version: string }>(
    'package.json'
  );

  console.log(
    `Updating ${options.projectRoot} version to ${mainProjectJson.version}`
  );
  await updateJsonFile<{ version: string }>(
    join(options.projectRoot, 'package.json'),
    (value) => {
      value.version = mainProjectJson.version;
      return value;
    }
  );

  return {
    success: true,
  };
};

export default runExecutor;
