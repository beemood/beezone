import { createNodesFromFiles, CreateNodesV2 } from '@nx/devkit';
import { dirname } from 'path';

type MyPluginOptions = { tagName: string };

export const createNodesV2: CreateNodesV2<MyPluginOptions> = [
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
