import { readJsonFile } from './read-json-file.js';
import { writeJsonFile } from './write-json-file.js';

export async function updateJsonFile<T extends object>(
  filepath: string,
  contentHandler: (value: T) => T
): Promise<void> {
  const content = await readJsonFile<T>(filepath);
  const newContent = contentHandler(content);
  await writeJsonFile(filepath, newContent);
}
