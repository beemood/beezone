import { mkdir, writeFile } from 'fs/promises';
import { dirname } from 'path';

/**
 * Write text file with utf-8 encoding
 * @param filepath
 * @param content
 */
export async function writeTextFile(
  filepath: string,
  content = ''
): Promise<void> {
  await mkdir(dirname(filepath), { recursive: true });
  await writeFile(filepath, content, { encoding: 'utf-8' });
}
