import { writeTextFile } from './write-text-file.js';
/**
 * Write json file
 * @param filepath
 * @param content
 */
export async function writeJsonFile<T extends object>(
  filepath: string,
  content: T
): Promise<void> {
  const textContent = JSON.stringify(content, undefined, 2);
  await writeTextFile(filepath, textContent);
}
