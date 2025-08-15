import { workspaceRoot } from '@nx/devkit';
import { join } from 'path';
import { inspect } from 'util';
import { readModels } from './read-models.js';

describe('readModels', () => {
  it('should work', async () => {
    console.log(
      inspect(
        await readModels(join(workspaceRoot, 'projects', 'inventory')),
        true,
        100
      )
    );
  });
});
