import { readYamlFile } from '@beezone/fs';
import type { ModelSchema } from '@beezone/types';

export async function readModel(filepath: string) {
  return await readYamlFile<ModelSchema>(filepath);
}
