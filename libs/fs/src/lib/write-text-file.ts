import { writeFile } from 'fs/promises';

export async function writeTextFile(
  filepath: string,
  content: string
): Promise<void> {
  await writeFile(filepath, content, { encoding: 'utf-8' });
}
