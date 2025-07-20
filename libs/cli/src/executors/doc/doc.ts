import { PromiseExecutor } from '@nx/devkit';
import { DocExecutorSchema } from './schema';
import { execSync } from 'child_process';

const runExecutor: PromiseExecutor<DocExecutorSchema> = async (
  options,
  context
) => {
  // Get the root path of the current project from the context
  // context.projectName is the name of the project currently being executed (e.g., 'my-app', 'my-lib')
  if (!context.projectName) throw new Error('projectName is required!');

  const projectRoot = context.projectGraph.nodes[context.projectName].data.root;
  const projectName = context.projectName;

  console.log(`\n--- Generating documentation for project: ${projectName} ---`);
  console.log(`Project root: ${projectRoot}`);

  // Construct the typedoc command.
  // We use template literals to dynamically insert project-specific paths.
  const command = `npx typedoc --options ${projectRoot}/typedoc.json --entryPoints ${projectRoot}/src/index.ts --favicon ${projectRoot}/favicon.png --out public/${projectRoot}`;

  try {
    // Execute the command synchronously.
    // stdio: 'inherit' ensures that the output of typedoc is shown in the terminal.
    // cwd: projectRoot sets the current working directory for the command execution.
    execSync(command, { stdio: 'inherit', cwd: projectRoot });
    console.log(`Documentation generated successfully for ${projectName}`);
    return { success: true };
  } catch (error: any) {
    console.error(
      `\n--- Failed to generate documentation for ${projectName} ---`
    );
    console.error(error.message);
    return { success: false };
  }
};

export default runExecutor;
