import { OutOfScopeError } from '@beezone/errors';
import { resolve } from 'path';

/**
 * Create a path resolver function that throw error if the given path is out of the defined {@link scopePaths}
 * @param scopePaths string[]
 * @returns
 */
export function scope(...scopePaths: string[]): (...args: string[]) => string {
  const allowedScope = resolve(...scopePaths);

  return (...paths: string[]) => {
    const resolvedPath = resolve(...paths);

    if (resolvedPath.startsWith(allowedScope)) {
      return resolvedPath;
    }

    throw new OutOfScopeError(
      `${resolvedPath} is not out of the defined scope (${allowedScope})`
    );
  };
}
