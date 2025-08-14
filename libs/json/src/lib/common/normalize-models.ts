import type { DirectoryStat } from '@beezone/fs';
import type { ModelSchema } from '@beezone/types';
import { modelName } from './model-name.js';

export function normalizeModels(
  directoryStats: DirectoryStat<ModelSchema>[]
): DirectoryStat<ModelSchema>[] {
  for (const m of directoryStats) {
    if (m.isDirectory) {
      if (m.children) {
        normalizeModels(m.children);
      }
    } else if (m.isFile) {
      if (m.content) {
        m.content = {
          ...m.content,
          name: modelName(m.path),
        };
      }
    }
  }

  return directoryStats;
}
