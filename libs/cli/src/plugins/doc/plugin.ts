import type { CreateNodesV2 } from '@nx/devkit';
import { createNodesFromFiles } from '@nx/devkit';
import { dirname } from 'path';

/**
 * Generate type-docs
 * @group plugin
 */
export const createNodesV2: CreateNodesV2 = [
  '**/package.json',
  async (configFiles, options, context) => {
    return await createNodesFromFiles(
      (configFile) => {
        const root = dirname(configFile);

        if (root.endsWith('source')) {
          return { projects: {} };
        }

        return {
          projects: {
            [root]: {
              targets: {
                doc: {
                  executor: 'nx:run-commands',
                  options: {
                    command:
                      'npx typedoc --options {projectRoot}/typedoc.json  --entryPoints {projectRoot}/src/index.ts --out public/{projectRoot} --tsconfig {projectRoot}/tsconfig.lib.json',
                  },
                },
              },
            },
          },
        };
      },
      configFiles,
      options,
      context
    );
  },
];
