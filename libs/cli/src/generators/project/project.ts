import {
  formatFiles,
  generateFiles,
  names,
  readJsonFile,
  Tree,
  updateJson,
  workspaceRoot,
} from '@nx/devkit';
import * as path from 'path';
import { ProjectGeneratorSchema } from './schema';

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {
  const mp = await readJsonFile(path.join(workspaceRoot, 'package.json'));
  const { name: mainProjectName } = mp;
  const __names = names(options.name);
  const __projectName = __names.fileName;
  const orgnamePrefix = mainProjectName.split('/')[0];
  const projectName = `${orgnamePrefix}/${__projectName}`;

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
