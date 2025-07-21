import type { CreateNodesV2 } from '@nx/devkit';
import { createNodesFromFiles } from '@nx/devkit';
import { dirname } from 'path';

/**
 * Update public content, create or update the `public/content.json` file by adding each project's package.json content.
 * @group plugin
 */
export const createNodesV2: CreateNodesV2 = [
  '**/package.json',
  async (configFiles, options, context) => {
    return await createNodesFromFiles(
      (configFile) => {
        const root = dirname(configFile);
        return {
          projects: {
            [root]: {
              targets: {
                'update-content': {
                  executor: '@beezone/cli:update-content',
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
