import { inferResourceName } from './infer-resource-name.js';
import { names } from './names.js';

export function inferResoucePath(className: string) {
  const resouceName = inferResourceName(className);

  return names(resouceName).kebabCase;
}
