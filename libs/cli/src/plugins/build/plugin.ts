import type { CreateNodesV2 } from '@nx/devkit';
import { createNodesFromFiles } from '@nx/devkit';
import { dirname, join } from 'path';

/**
 * Build libs/apps
 * @group plugin
 */
export const createNodesV2: CreateNodesV2 = [
  '**/package.json',
  async (configFiles, options, context) => {
    return await createNodesFromFiles(
      (configFile) => {
        const root = join(dirname(configFile));
        if (root.includes('cli')) {
          return {};
        }
        return {
          projects: {
            [root]: {
              targets: {
                build: {
                  executor: '@nx/js:swc',
                  outputs: ['{options.outputPath}'],
                  options: {
                    outputPath: '{projectRoot}/dist',
                    main: '{projectRoot}/src/index.ts',
                    tsConfig: '{projectRoot}/tsconfig.lib.json',
                    skipTypeCheck: true,
                    stripLeadingPaths: true,
                  },
                },
                'build-watch': {
                  executor: '@nx/js:swc',
                  outputs: ['{options.outputPath}'],
                  options: {
                    outputPath: '{projectRoot}/dist',
                    main: '{projectRoot}/src/index.ts',
                    tsConfig: '{projectRoot}/tsconfig.lib.json',
                    skipTypeCheck: true,
                    stripLeadingPaths: true,
                    watch: true,
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
