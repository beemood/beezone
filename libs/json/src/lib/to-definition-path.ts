import { DEFINITION_PREFIX } from './constants.js';
import { toDefinitionName } from './to-definition-name.js';

export function toDefinitionPath(path: string) {
  return `${DEFINITION_PREFIX}/${toDefinitionName(path)}`;
}
