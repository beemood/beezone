import { workspaceRoot } from '@nx/devkit';
import { mkdir, rm } from 'fs/promises';
import { resolve as __resolve } from 'path';
import { readdir } from './readdir.js';
import { scope } from './scope.js';
import { writeTextFile } from './write-text-file.js';

describe('readdir', () => {
  const root = __resolve(workspaceRoot, 'tmp', 'test', 'libs', 'fs', 'readdir');
  const resolve = scope(root);
  const testDirs: string[] = ['dir1', 'dir2', 'dir1/a', 'dir2/b'];
  const testFiles: string[] = ['dir1/a/file1.txt'];

  beforeAll(async () => {
    for (const dir of testDirs) {
      await mkdir(resolve(root, dir), { recursive: true });
    }

    for (const dir of testFiles) {
      await writeTextFile(resolve(root, dir));
    }
  });

  afterAll(async () => {
    await rm(root, { recursive: true });
  });

  it('should read the directories/files', async () => {
    const foundDirs = await readdir(root);
    // console.log(inspect(foundDirs, true,100));
    expect(foundDirs[0].path).toEqual(resolve(root, testDirs[0]));
    expect(foundDirs[0].children?.length).toEqual(1);
    expect(foundDirs[0].children?.[0].path).toEqual(resolve(root, testDirs[2]));
    expect(foundDirs[0].children?.[0].children?.length).toEqual(1);

    expect(foundDirs[1].path).toEqual(resolve(root, testDirs[1]));
  });
});
