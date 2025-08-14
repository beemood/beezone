import type { DirectoryStat } from '@beezone/fs';
import type { ModelSchema, Names } from '@beezone/types';
import { modelName } from './model-name.js';

export function mapToModels(
  map: Map<Names, ModelSchema>,
  directories: DirectoryStat<ModelSchema>[]
) {
  for (const m of directories) {
    if (m.isFile) {
      if (m.content) {
        const name = modelName(m.path);
        map.set(name, m.content);
      }
    } else if (m.isDirectory) {
      if (m.children) {
        mapToModels(map, m.children);
      }
    }
  }
}
