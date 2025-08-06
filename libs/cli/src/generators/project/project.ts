import type {
  Tree} from "@nx/devkit";
import {
  formatFiles,
  generateFiles,
  names,
  readJsonFile,
  updateJson,
  workspaceRoot,
} from "@nx/devkit";
import * as path from "path";
import type { ProjectGeneratorSchema, ProjectType } from "./schema";

function getProjectName(mainProjectName: string, projectName: string): string {
  return [
    mainProjectName.split("/").slice(0, 1).join(""),
    "/",
    projectName,
  ].join("/");
}

function normalizeOptions(
  options: ProjectGeneratorSchema
): ProjectGeneratorSchema {
  return {
    ...options,
    name: names(options.name).fileName,
  };
}

function getProjectRoot(normalizedOptions: ProjectGeneratorSchema) {
  switch (normalizedOptions.type) {
    case "prisma":
    case "lib":
      return `libs/${normalizedOptions.name}`;
    case "api":
      return `apps/${normalizedOptions.name}`;
  }
}

function getSourceRoot(projectType: ProjectType): string {
  return path.join(__dirname, projectType);
}

export async function projectGenerator(
  tree: Tree,
  rawOptions: ProjectGeneratorSchema
) {
  const options = normalizeOptions(rawOptions);
  const __names = names(options.name);
  const mp = await readJsonFile(path.join(workspaceRoot, "package.json"));

  const projectName = getProjectName(mp.name, __names.fileName);
  const projectRoot = getProjectRoot(options);
  const sourceRoot = getSourceRoot(options.type);

  generateFiles(tree, sourceRoot, projectRoot, {
    ...__names,
    projectName,
    projectRoot,
    mp,
  });

  updateJson(tree, "tsconfig.json", (value) => {
    value.references.push({ path: `./${projectRoot}` });
    return value;
  });

  await formatFiles(tree);
}

export default projectGenerator;
