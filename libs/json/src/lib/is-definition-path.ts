import { DEFINITION_PREFIX } from './constants.js';

/**
 * Check that the $ref value stats with {@link DEFINITION_PREFIX} or not
 * @param path
 * @returns
 */
export function isDefinitionPath(path: string) {
  return path.startsWith(DEFINITION_PREFIX);
}
