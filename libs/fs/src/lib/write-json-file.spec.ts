import { workspaceRoot } from '@nx/devkit';
import { rm } from 'fs/promises';
import { join } from 'path';
import { readJsonFile } from './read-json-file.js';
import { scope } from './scope.js';
import { writeJsonFile } from './write-json-file.js';

describe('writeJsonFile', () => {
  const root = join(
    workspaceRoot,
    'tmp',
    'test',
    'libs',
    'fs',
    'write-json-file'
  );
  const resolve = scope(root);

  const filepath = resolve(root, 'file.txt');
  const content = { name: 'some' };

  afterAll(async () => {
    await rm(root, { recursive: true });
  });

  it('should write text file', async () => {
    await writeJsonFile(filepath, content);
    expect(await readJsonFile(filepath)).toEqual(content);
  });
});
