import { names } from '@beezone/is';
import type { Names } from '@beezone/types';

export function modelName(fileName: string): Names {
  return names(fileName.replace('.model.yaml', '')).kebabCase as Names;
}
