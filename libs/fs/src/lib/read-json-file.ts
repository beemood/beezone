import { readTextFile } from './read-text-file.js';

/**
 * Read json file
 * @param filepath
 * @returns
 */
export async function readJsonFile<T extends object>(
  filepath: string
): Promise<T> {
  const textContent = await readTextFile(filepath);
  return JSON.parse(textContent);
}
