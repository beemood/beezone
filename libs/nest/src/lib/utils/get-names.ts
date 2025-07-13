import { names, Names } from '@beezone/names';

export function getNames(controllerName: string): Names {
  return names(controllerName.replace('Controller', ''));
}
