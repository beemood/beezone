import { readFile } from 'fs/promises';
/**
 * Read json file and parse it
 * @param filepath
 * @returns object
 */
export async function readJsonFile<T extends object>(
  filepath: string
): Promise<T> {
  const text = await readFile(filepath, { encoding: 'utf-8' });
  return JSON.parse(text) as T;
}
