import type { CreateNodesV2 } from '@nx/devkit';
import { createNodesFromFiles } from '@nx/devkit';
import { dirname, join } from 'path';

/**
 * Serve application
 * @group plugin
 */
export const createNodesV2: CreateNodesV2 = [
  'apps/*/package.json',
  async (configFiles, options, context) => {
    return await createNodesFromFiles(
      (configFile) => {
        const root = join(dirname(configFile));
        return {
          projects: {
            [root]: {
              targets: {
                'serve-static': {
                  executor: 'nx:run-commands',
                  options: {
                    command: 'nodemon dist/main.js',
                    cwd: '{projectRoot}',
                  },
                },
                serve: {
                  executor: 'nx:run-commands',
                  dependsOn: ['build-watch', 'serve-static'],
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
