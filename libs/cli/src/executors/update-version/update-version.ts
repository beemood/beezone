import type { PromiseExecutor } from '@nx/devkit';
import type { UpdateVersionExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<UpdateVersionExecutorSchema> = async (
  options,
  context
) => {
  console.log(
    `Updating versions to ${options.version} for the project ${context.projectName}`
  );
  return {
    success: true,
  };
};

export default runExecutor;
