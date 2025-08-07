import { stat } from 'fs/promises';
import { resolve } from 'path';

/**
 * Check the given {@link paths} are pointing at a directory or not
 * @param paths
 * @returns
 */
export async function isDirectory(...paths: string[]): Promise<boolean> {
  return (await stat(resolve(...paths))).isDirectory();
}
