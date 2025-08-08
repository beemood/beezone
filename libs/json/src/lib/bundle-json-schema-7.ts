import { mapEachDirectoryStat, readdir, readJsonFile } from '@beezone/fs';
import { names } from '@beezone/is';
import { JSONSchema7Object } from '@beezone/types';
import { dirname, resolve } from 'path';

function __fileName($ref: string) {
  return $ref.split('/').pop()!.replace('.json', '');
}

function __definitionName(filename: string) {
  return names(filename).pascalCase;
}

function __updateReferencePaths(schema: JSONSchema7Object) {
  const $ref = schema.$ref;
  if ($ref) {
    schema.$ref = __definitionName(__fileName($ref));
  }

  const entries = Object.entries(schema);

  for (const [key, value] of entries) {
    if (key == '$ref') continue;

    if (Array.isArray(value)) {
      for (const v of value) {
        __updateReferencePaths(v);
      }
    } else if (typeof value == 'object') {
      __updateReferencePaths(value);
    }
  }

  return schema;
}

export async function bundleJsonSchema7(filepath: string) {
  const absoluteFilePath = resolve(filepath);
  const mainSchema = await readJsonFile<JSONSchema7Object>(absoluteFilePath);
  const rootdir = dirname(filepath);
  const schemaFiles = await readdir<JSONSchema7Object>(rootdir, {
    mediaType: 'json',
    jsonParseError: 'ignore',
  });

  mapEachDirectoryStat<JSONSchema7Object>(schemaFiles, (value) => {
    if (value.isDirectory) {
      return value;
    }
    if (value.content) {
      value.content = __updateReferencePaths(value.content);
    }
    if (value.path != absoluteFilePath) {
      const definitionName = __definitionName(__fileName(value.path));
      if (value.content) {
        mainSchema.definitions = {
          ...mainSchema.definitions,
          ...value.content.definitions,
          [definitionName]: value.content,
        };
        delete value.content.definitions;
      }
    }

    return value;
  });

  return mainSchema;
}
