import { readJsonFile } from './read-json-file.js';
import { writeJsonFile } from './write-json-file.js';
/**
 * Update json file
 * @param filepath
 * @param handler update handler that get the json object and return it.
 */
export async function updateJsonFile<T extends object>(
  filepath: string,
  handler: (value: T) => T | Promise<T>
): Promise<void> {
  const jsonValue = await readJsonFile<T>(filepath);
  const updatedJsonValue = await handler(jsonValue);
  await writeJsonFile(filepath, updatedJsonValue);
}
