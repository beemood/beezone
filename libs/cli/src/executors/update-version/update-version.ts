import { readJsonFile } from '@beezone/fs';
import { type PromiseExecutor } from '@nx/devkit';
import type { UpdateVersionSchema } from './update-version-schema';

const runExecutor: PromiseExecutor = async (
  options: UpdateVersionSchema,
  context
) => {
  const mainProjectJson = await readJsonFile<{ version: string }>(
    'package.json'
  );

  console.log(
    `Updating ${options.projectRoot} version to ${mainProjectJson.version}`
  );
  // await updateJsonFile<{ version: string }>(
  //   join(context.root, 'package.json'),
  //   (value) => {
  //     value.version = mainProjectJson.version;
  //     return value;
  //   }
  // );

  return {
    success: true,
  };
};

export default runExecutor;
