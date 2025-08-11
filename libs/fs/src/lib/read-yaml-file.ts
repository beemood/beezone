import { load } from 'js-yaml';
import { readTextFile } from './read-text-file.js';

export async function readYamlFile<T extends object>(
  filepath: string
): Promise<T> {
  const text = await readTextFile(filepath);

  return (await load(text)) as T;
}
