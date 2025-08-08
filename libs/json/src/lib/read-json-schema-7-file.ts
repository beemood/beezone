import { readJsonFile } from '@beezone/fs';
import { JSONSchema7Object } from '@beezone/types';

/**
 * Read {@link JSONSchema7Object} file
 * @param filepath
 * @returns json object
 */
export async function readJsonSchema7File(filepath: string) {
  return await readJsonFile<JSONSchema7Object>(filepath);
}
