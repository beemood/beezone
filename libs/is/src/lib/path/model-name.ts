import type { Names } from '@beezone/types';
import { names } from '../string/names.js';
import { validateModelFileName } from './validate-model-file-name.js';

export const MODEL_FILE_NAME_EXTENTION = '.model.yaml';

export function modelName(fileName: string): Names {
  validateModelFileName(fileName);
  return names(fileName.replace(MODEL_FILE_NAME_EXTENTION, ''))
    .kebabCase as Names;
}
