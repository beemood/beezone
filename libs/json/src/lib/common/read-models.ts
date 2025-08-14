import { readdir } from '@beezone/fs';
import type { ModelSchema, Names } from '@beezone/types';
import { mapToModels } from './map-to-models.js';

export async function readModels(
  rootDir: string
): Promise<Map<Names, ModelSchema>> {
  const modelMap = new Map<Names, ModelSchema>();

  const directories = await readdir<ModelSchema>(rootDir, {
    mediaType: 'yaml',
    jsonParseError: 'ignore',
  });

  mapToModels(modelMap, directories);
  return modelMap;
}
