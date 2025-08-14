import type { DirectoryStat } from '@beezone/fs';
import type { JSONSchema7Object } from '@beezone/types';
import { dirname, resolve } from 'path';
import { readJsonSchema7File } from '../common/read-json-schema-7-file.js';
import { readJsonSchema7Files } from '../common/read-json-schema-7-files.js';
import { toDefinitionName } from './to-definition-name.js';
import { transformRefsToDefinitionPaths } from './transform-refs-to-definition-paths.js';

/**
 * Bundle multiple {@link JSONSchema7Object}s into a single one and return it.
 * @param filepath main schema file path
 * @returns bundle schema value as {@link JSONSchema7Object!}
 */
export async function bundleJsonSchema7(filepath: string) {
  const absoluteFilePath = resolve(filepath);
  const root = dirname(filepath);

  const mainSchema = await readJsonSchema7File(absoluteFilePath);
  const schemaFiles = await readJsonSchema7Files(root);

  if (!mainSchema.definitions) {
    mainSchema.definitions = {};
  }

  transformRefsToDefinitionPaths(mainSchema);

  const normalizeSchemaFile = (file: DirectoryStat<JSONSchema7Object>) => {
    if (file.isFile) {
      if (file.content) {
        if (file.path == absoluteFilePath) {
          return;
        }
        transformRefsToDefinitionPaths(file.content);

        mainSchema.definitions = {
          ...mainSchema.definitions,
          ...file.content.definitions,
          [toDefinitionName(file.path)]: file.content,
        };

        delete file.content.definitions;
      }
    } else if (file.isDirectory) {
      if (file.children) {
        for (const c of file.children) {
          normalizeSchemaFile(c);
        }
      }
    }
  };

  for (const file of schemaFiles) {
    normalizeSchemaFile(file);
  }

  return mainSchema;
}
