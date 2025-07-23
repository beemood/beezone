import { readJsonFile, updateJsonFile } from '@beezone/fs';
import { definedOrThrow, sortBy } from '@beezone/utils';
import type { Tree } from '@nx/devkit';
import { formatFiles, generateFiles, names, workspaceRoot } from '@nx/devkit';
import * as path from 'path';
import type { ProjectGeneratorSchema } from './schema';

/**
 * Generate project
 * @group generator
 * @param tree
 * @param options
 */
export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {
  const __names = names(options.name);

  const packageJsonFilePath = path.join(workspaceRoot, 'package.json');
  const mp = await readJsonFile<{ name: string }>(packageJsonFilePath);

  const mainProjectName = definedOrThrow(mp.name);

  const __projectName = __names.fileName;
  const orgNamePrefix = mainProjectName.split('/')[0];
  const projectName = `${orgNamePrefix}/${__projectName}`;

  const projectRoot =
    options.projectType == 'api'
      ? `apps/${__projectName}`
      : options.projectType === 'db'
      ? `databases/${__projectName}`
      : `libs/${__projectName}`;

  const source = path.join(__dirname, options.projectType);

  generateFiles(tree, source, projectRoot, {
    ...__names,
    projectName,
    projectRoot,
    mp,
  });

  if (options.projectType != 'db')
    await updateJsonFile<{ references?: { path: string }[] }>(
      'tsconfig.json',
      (value) => {
        if (!value.references) {
          value.references = [];
        }
        value.references.push({ path: `./${projectRoot}` });

        value.references = value.references.sort(sortBy('path'));
        return value;
      }
    );

  await formatFiles(tree);
}

export default projectGenerator;
