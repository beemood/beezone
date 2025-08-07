import { workspaceRoot } from '@nx/devkit';

import { rm } from 'fs/promises';
import { join } from 'path';
import { readTextFile } from './read-text-file.js';
import { scope } from './scope.js';
import { writeTextFile } from './write-text-file.js';

describe('writeTextFile', () => {
  const root = join(
    workspaceRoot,
    'tmp',
    'test',
    'libs',
    'fs',
    'write-text-file'
  );
  const resolve = scope(root);

  const filepath = resolve(root, 'file.txt');
  const content = 'some';

  afterAll(async () => {
    await rm(root, { recursive: true });
  });

  it('should write text file', async () => {
    await writeTextFile(filepath, content);
    expect(await readTextFile(filepath)).toEqual(content);
  });
});
