import { readYamlFile } from '@beezone/fs';
import { ModelSchema, Names } from '@beezone/types';
import { workspaceRoot } from '@nx/devkit';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { inspect } from 'util';
import { getModelNameFromFilepath } from '../common/get-model-name-from-filepath.js';
import { generatePrismaSchema } from './generate-prisma-schema.js';
describe('generatePrismaSchema', () => {
  it('should generate the prisma schema', async () => {
    const rootDirectory = join(
      workspaceRoot,
      'projects',
      'inventory',
      'models'
    );
    const allFilePaths = await readdir(rootDirectory);

    const modelFilePaths = allFilePaths
      .map((e) => join(rootDirectory, e))
      .filter((e) => e.endsWith('.model.yaml'));

    const models = await Promise.all(
      modelFilePaths.map(async (filepath) => {
        const content = await readYamlFile<ModelSchema>(filepath);

        return {
          name: getModelNameFromFilepath(filepath) as Names,
          ...content,
        };
      })
    );
    const result = await generatePrismaSchema('project', models);

    console.log(inspect(result));
  });
});
