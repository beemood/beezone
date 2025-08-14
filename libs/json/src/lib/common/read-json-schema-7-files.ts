import { readdir } from '@beezone/fs';
import type { JSONSchema7Object } from '@beezone/types';

/**
 * Find all json schema files and read content
 * @param root the root parent dir of the json schema.
 * @returns directory stats {@link DirectoryStat![]}
 */
export async function readJsonSchema7Files(root: string) {
  return await readdir<JSONSchema7Object>(root, {
    mediaType: 'json',
    jsonParseError: 'ignore',
  });
}
