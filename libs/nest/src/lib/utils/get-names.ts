import type { Names } from '@beezone/names';
import { names } from '@beezone/names';

export function getNames(controllerName: string): Names {
  return names(controllerName.replace('Controller', ''));
}
