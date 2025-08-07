import { readJsonFile } from '@beezone/fs';
import { JSONSchema7, JSONSchema7Object } from '@beezone/types';
import { dirname, resolve } from 'path';

function isDefinitionReference(referencePah: string) {
  return referencePah.startsWith('#/definitions');
}

function resolveReferencePaths(
  rootdir: string,
  schema: JSONSchema7 | JSONSchema7[]
) {
  if (Array.isArray(schema)) {
    for (const s of schema) {
      resolveReferencePaths(rootdir, s);
    }
  } else if (typeof schema != 'object') {
    const entries = Object.entries(schema);

    // Resolve $ref path
    {
      schema = schema as unknown as JSONSchema7Object;
      const $ref = schema.$ref;

      if ($ref && !isDefinitionReference($ref)) {
        schema.$ref = resolve(rootdir, $ref);
      }
    }

    for (const [key, value] of entries) {
      if (key == '$ref') continue;
      resolveReferencePaths(rootdir, value);
    }

    return;
  }
}

export async function bundleJson(jsonFilepath: string) {
  const absoluteFilePath = resolve(jsonFilepath);
  const rootdir = dirname(absoluteFilePath);

  const jsonObject = await readJsonFile<JSONSchema7Object>(absoluteFilePath);
}
