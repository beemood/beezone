import { join } from 'path';
import { isFile } from './is-file.js';

describe('isFile', () => {
  it('should the path is file or not', async () => {
    expect(await isFile(join(__dirname, 'is-file.spec.ts'))).toEqual(true);
    expect(await isFile(join(__dirname))).toEqual(false);
  });
});
