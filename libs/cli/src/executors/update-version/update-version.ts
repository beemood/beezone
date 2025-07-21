import { readJsonFile, updateJsonFile } from '@beezone/fs';
import { type PromiseExecutor } from '@nx/devkit';
import { join } from 'path';

const runExecutor: PromiseExecutor = async (options, context) => {
  const mainProjectJson = await readJsonFile<{ version: string }>(
    'package.json'
  );
  await updateJsonFile<{ version: string }>(
    join(context.root, 'package.json'),
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
