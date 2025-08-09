import { readdir } from '@beezone/fs';
import type { JSONSchema7Object } from '@beezone/types';

/**
 * Find all json schema files and read content
 * @param rootdir the root parent dir of the json schemas.
 * @returns direcctory stats {@link DirectoryStat![]}
 */
export async function readJsonSchema7Files(rootdir: string) {
  return await readdir<JSONSchema7Object>(rootdir, {
    mediaType: 'json',
    jsonParseError: 'ignore',
  });
}
