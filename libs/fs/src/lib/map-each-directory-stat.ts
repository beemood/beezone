import type { DirectoryStat } from './readdir.js';

/**
 *
 * @param directories {@link DirectoryStat}
 * @param handler
 * @returns
 */
export function mapEachDirectoryStat<T>(
  directories: DirectoryStat<T>[],
  handler: (value: DirectoryStat<T>) => DirectoryStat<T>
): DirectoryStat<T>[] {
  for (const d of directories) {
    handler(d);
    if (d.children) {
      d.children = mapEachDirectoryStat(d.children, handler);
    }
  }
  return directories;
}
