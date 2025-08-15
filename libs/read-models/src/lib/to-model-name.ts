import { fileName, names } from '@beezone/is';
import type { Names } from '@beezone/types';

export function toModelName(filepath: string): Names {
  return names(fileName(filepath).replace('.model.yaml', ''))
    .kebabCase as Names;
}
