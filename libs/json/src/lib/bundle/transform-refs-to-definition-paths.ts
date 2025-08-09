import type { JSONSchema7Object } from '@beezone/types';
import { $REF } from './constants.js';
import { isDefinitionPath } from './is-definition-path.js';
import { toDefinitionPath } from './to-definition-path.js';

/**
 * Transform schema's $ref paths into definition paths
 * @param schema
 */
export function transformRefsToDefinitionPaths(schema: JSONSchema7Object) {
  schema.$ref;

  if (schema.$ref && !isDefinitionPath(schema.$ref)) {
    schema.$ref = toDefinitionPath(schema.$ref);
  }

  const entries = Object.entries(schema);

  for (const [key, value] of entries) {
    if (key === $REF) {
      continue;
    }
    if (Array.isArray(value)) {
      for (const v of value) {
        transformRefsToDefinitionPaths(v);
      }
    } else if (typeof value === 'object') {
      transformRefsToDefinitionPaths(value);
    }
  }

  return schema;
}
