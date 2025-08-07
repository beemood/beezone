import { workspaceRoot } from '@nx/devkit';
import { rm } from 'fs/promises';
import { join } from 'path';
import { describe } from 'vitest';
import { readJsonFile } from './read-json-file.js';
import { scope } from './scope.js';
import { updateJsonFile } from './update-json-file.js';
import { writeJsonFile } from './write-json-file.js';

describe('updateJsonFile', () => {
  const root = join(
    workspaceRoot,
    'tmp',
    'test',
    'libs',
    'fs',
    'update-json-file'
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

    await updateJsonFile<{ name: string }>(filepath, (value) => {
      value.name = 'updated';

      return value;
    });
    expect(await readJsonFile(filepath)).toEqual({ name: 'updated' });
  });
});
