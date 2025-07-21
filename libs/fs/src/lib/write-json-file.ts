import { writeTextFile } from './write-text-file.js';

export async function writeJsonFile<T extends object>(
  filepath: string,
  content: T
): Promise<void> {
  const textContent = JSON.stringify(content, undefined, 2);
  await writeTextFile(filepath, textContent);
}
