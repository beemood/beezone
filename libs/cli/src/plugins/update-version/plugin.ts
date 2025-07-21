import type { CreateNodesV2 } from '@nx/devkit';
import { createNodesFromFiles } from '@nx/devkit';
import { dirname } from 'path';
/**
 * Update project version to the main project version
 * @group plugin
 */
export const createNodesV2: CreateNodesV2 = [
  '**/package.json',
  async (configFiles, options, context) => {
    return await createNodesFromFiles(
      (configFile) => {
        const root = dirname(configFile);

        if (root.endsWith('source')) {
          return {};
        }

        return {
          projects: {
            [root]: {
              targets: {
                'update-version': {
                  executor: '@beezone/cli:update-version',
                  options: {
                    projectRoot: '{projectRoot}',
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
