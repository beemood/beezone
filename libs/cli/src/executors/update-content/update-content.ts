import { throwContentNotArrayError } from '@beezone/errors';
import { readJsonFile, updateJsonFile } from '@beezone/fs';
import type { CommonPackageJson as Package } from '@beezone/types';
import type { PromiseExecutor } from '@nx/devkit';
import { join } from 'path';
import type { UpdateContentExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<UpdateContentExecutorSchema> = async (
  options
) => {
  const projectPackageJsonFilePath = join(options.projectRoot, 'package.json');

  const projectJson = await readJsonFile<Package>(projectPackageJsonFilePath);

  const contentFilePath = 'public/content.json';

  console.log(
    `Updating the public content under '${contentFilePath}' directory by appending ${projectPackageJsonFilePath}`
  );

  await updateJsonFile<Package[]>(contentFilePath, (value) => {
    if (!Array.isArray(value)) {
      throwContentNotArrayError();
    }

    const index = value.findIndex((c) => c.name === projectJson.name);

    if (index > 0) {
      value[index] = projectJson;
    } else {
      value.push(projectJson);
      value = value.sort((a, b) => (a.name > b.name ? 1 : -1));
    }

    return value;
  });

  return { success: true };
};

export default runExecutor;
