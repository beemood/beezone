import { readdir as __readdir } from 'fs/promises';
import { resolve } from 'path';
import { isDirectory } from './is-directory.js';
import { isFile } from './is-file.js';

export type Directory = {
  path: string;
  isFile: boolean;
  isDirectory: boolean;
  children?: Directory[];
};

export async function readdir(rootdir: string): Promise<Directory[]> {
  const resolvedRootdir = resolve(rootdir);

  const foundPaths = await __readdir(resolvedRootdir, { encoding: 'utf-8' });

  return await Promise.all(
    foundPaths.map(async (filepath: string) => {
      const absoluteFilepath = resolve(rootdir, filepath);
      const __isDirectory = await isDirectory(absoluteFilepath);
      const __isFile = await isFile(absoluteFilepath);

      const getChildren = async () => {
        if (__isDirectory) {
          return await readdir(absoluteFilepath);
        }
        return undefined;
      };

      const __children = await getChildren();
      return {
        path: absoluteFilepath,
        isDirectory: __isDirectory,
        isFile: __isFile,
        children: __children,
      } as Directory;
    })
  );
}
