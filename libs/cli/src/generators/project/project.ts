import type { Tree } from '@nx/devkit';
import {
  formatFiles,
  generateFiles,
  names,
  readJsonFile,
  updateJson,
  workspaceRoot,
} from '@nx/devkit';
import * as path from 'path';
import type { ProjectGeneratorSchema } from './schema';

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {
  const mp = await readJsonFile(path.join(workspaceRoot, 'package.json'));
  const { name: mainProjectName } = mp;
  const __names = names(options.name);
  const __projectName = __names.fileName;
  const orgNamePrefix = mainProjectName.split('/')[0];
  const projectName = `${orgNamePrefix}/${__projectName}`;

  const projectRoot =
    options.projectType == 'api'
      ? `apps/${__projectName}`
      : `libs/${__projectName}`;

  const source = path.join(__dirname, options.projectType);

  generateFiles(tree, source, projectRoot, {
    ...__names,
    projectName,
    projectRoot,
    mp,
  });

  await updateJson(tree, 'tsconfig.json', (value) => {
    if (!value.references) {
      value.references = [];
    }
    value.references.push({ path: `./${projectRoot}` });
    return value;
  });

  await formatFiles(tree);
}

export default projectGenerator;
