import type { DirectoryStat } from '@beezone/fs';
import type { ModelSchema, Names } from '@beezone/types';
import { toModelName } from './to-model-name.js';

export function mapModels(
  directories: DirectoryStat<ModelSchema>[],
  map: Map<Names, ModelSchema>
): Map<Names, ModelSchema> {
  for (const d of directories) {
    if (d.isFile) {
      if (d.content) {
        const modelName = toModelName(d.path);
        map.set(modelName, { ...d.content });
      }
    } else if (d.isDirectory) {
      if (d.children) {
        mapModels(d.children, map);
      }
    }
  }
  return map;
}
