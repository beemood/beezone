import { readdir } from '@beezone/fs';
import type { Names } from '@beezone/types';
import { type ModelSchema } from '@beezone/types';
import { mapModels } from './map-models.js';
import { resolveModels } from './resolve-models.js';

export async function readModels(root: string): Promise<ModelSchema[]> {
  const directories = await readdir<ModelSchema>(root, {
    jsonParseError: 'ignore',
    mediaType: 'yaml',
  });
  const map = new Map<Names, ModelSchema>();
  mapModels(directories, map);
  resolveModels(map);
  return [...map.values()].filter((e) => e.abstract != true);
}
