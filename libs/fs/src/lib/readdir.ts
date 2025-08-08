import { readdir as __readdir } from 'fs/promises';
import { resolve } from 'path';
import { isDirectory } from './is-directory.js';
import { isFile } from './is-file.js';
import { readJsonFile } from './read-json-file.js';
import { readTextFile } from './read-text-file.js';

export type DirectoryStat<T = string> = {
  path: string;
  isFile: boolean;
  isDirectory: boolean;
  children?: DirectoryStat<T>[];
  content?: T;
};

export type ReaddirOptions = {
  /**
   * If provided, the file will be read and stored into the content property.
   */
  mediaType?: 'text' | 'json';

  /**
   * If {@link mediaType} is set `json` and this property is not set `ignore`, then json errors are thrown else return undefined.
   */
  jsonParseError?: 'ignore';
};

export async function readdir<T>(
  rootdir: string,
  options?: ReaddirOptions
): Promise<DirectoryStat<T>[]> {
  const resolvedRootdir = resolve(rootdir);

  const foundPaths = await __readdir(resolvedRootdir, { encoding: 'utf-8' });

  return await Promise.all(
    foundPaths.map(async (filepath: string) => {
      const absoluteFilepath = resolve(rootdir, filepath);
      const __isDirectory = await isDirectory(absoluteFilepath);
      const __isFile = await isFile(absoluteFilepath);

      const getChildren = async () => {
        if (__isDirectory) return await readdir(absoluteFilepath, options);

        return undefined;
      };

      const getContent = async () => {
        if (__isDirectory) return undefined;

        if (options?.mediaType == 'text') {
          return await readTextFile(absoluteFilepath);
        } else if (options?.mediaType === 'json') {
          try {
            return await readJsonFile(absoluteFilepath);
          } catch (err) {
            if (options.jsonParseError == 'ignore') {
              return undefined;
            }
            throw err;
          }
        }
        return undefined;
      };

      const __children = await getChildren();
      const __content = await getContent();

      return {
        path: absoluteFilepath,
        isDirectory: __isDirectory,
        isFile: __isFile,
        children: __children,
        content: __content,
      } as DirectoryStat<T>;
    })
  );
}
