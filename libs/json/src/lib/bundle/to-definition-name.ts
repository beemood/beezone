import { names } from '@beezone/is';

/**
 * Convert reference path into definition name (PascalName)
 * @param path reference path
 * @returns string
 */
export function toDefinitionName(path: string) {
  return names(
    path
      .split(/[\/\\]/)
      .pop()
      ?.replace('.json', '')!
  ).pascalCase;
}
