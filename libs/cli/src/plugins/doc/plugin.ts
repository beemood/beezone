import type { CreateNodesV2 } from '@nx/devkit';
import { createNodesFromFiles } from '@nx/devkit';
import { dirname } from 'path';

/**
 * Generate type-docs
 * @group plugin
 */
export const createNodesV2: CreateNodesV2 = [
  // eslint-disable-next-line spellcheck/spell-checker
  '**/typedoc.json',
  async (configFiles, options, context) => {
    return await createNodesFromFiles(
      (configFile) => {
        const root = dirname(configFile);
        return {
          projects: {
            [root]: {
              targets: {
                doc: {
                  executor: 'nx:run-commands',
                  options: {
                    command:
                      // eslint-disable-next-line spellcheck/spell-checker
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
