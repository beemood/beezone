import { scope, writeJsonFile } from '@beezone/fs';
import { JSONSchema7Object } from '@beezone/types';
import { workspaceRoot } from '@nx/devkit';
import { rm } from 'fs/promises';
import { join } from 'path';
import { bundleJsonSchema7 } from './bundle-json-schema-7.js';
describe('bundleJSONSchema7', () => {
  const root = join(
    workspaceRoot,
    'tmp',
    'test',
    'libs',
    'json',
    'bundle-json-schema-7'
  );

  const resolve = scope(root);
  const propertySchemaFilePath = resolve(root, 'property.schema.json');
  const propertyNameScehamFilePah = resolve(
    root,
    'enum',
    'property-names.schema.json'
  );

  beforeAll(async () => {
    await writeJsonFile<JSONSchema7Object>(propertyNameScehamFilePah, {
      enum: ['name'],
    });
    await writeJsonFile<JSONSchema7Object>(propertySchemaFilePath, {
      properties: {
        name: {
          $ref: './enum/property-names.schema.json',
        },
      },
    });
  });

  afterAll(async () => {
    await rm(root, { recursive: true });
  });
  it('should bundle the schema', async () => {
    const result = await bundleJsonSchema7(propertySchemaFilePath);

    expect(result).toEqual({
      properties: {
        name: {
          $ref: '#/definitions/PropertyNamesSchema',
        },
      },
      definitions: {
        PropertyNamesSchema: { enum: ['name'] },
      },
    } as JSONSchema7Object);
  });
});
