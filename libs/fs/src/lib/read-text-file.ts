import { readFile } from 'fs/promises';
/**
 * Read text file with utf-8 encoding
 * @param filepath
 * @returns file content
 */
export async function readTextFile(filepath: string): Promise<string> {
  return await readFile(filepath, { encoding: 'utf-8' });
}
