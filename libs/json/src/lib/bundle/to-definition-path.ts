import { DEFINITION_PREFIX } from './constants.js';
import { toDefinitionName } from './to-definition-name.js';

/**
 * Convert reference path into definition path
 * @param path string
 * @returns string
 */
export function toDefinitionPath(path: string) {
  return `${DEFINITION_PREFIX}/${toDefinitionName(path)}`;
}
