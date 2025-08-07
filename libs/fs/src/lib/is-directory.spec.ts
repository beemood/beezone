import { join } from 'path';
import { isDirectory } from './is-directory.js';

describe('isDirectory', () => {
  it('should the path is directory or not', async () => {
    expect(await isDirectory(join(__dirname))).toEqual(true);
    expect(await isDirectory(join(__dirname, 'is-file.spec.ts'))).toEqual(
      false
    );
  });
});
