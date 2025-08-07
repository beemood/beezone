import { OutOfScopeError } from '@beezone/errors';
import { workspaceRoot } from '@nx/devkit';
import { join, resolve as pathResolve } from 'path';
import { scope } from './scope.js';

describe('scope', () => {
  const root = join(workspaceRoot, 'tmp', 'test', 'libs', 'fs', 'scope');
  const resolve = scope(root);

  describe(`Given scope: ${root}`, () => {
    it.each`
      value
      ${join(root, 'some')}
    `('resolve($value) should resolve path', ({ value }) => {
      expect(resolve(value)).toEqual(pathResolve(value));
    });

    it.each`
      value
      ${join(root, '..')}
      ${join(workspaceRoot)}
      ${join(workspaceRoot, '..')}
      ${join(workspaceRoot, 'tmp', 'test', 'libs', 'fs')}
    `('resolve($value) should throw OutOfScopeError', ({ value }) => {
      expect(() => resolve(value)).toThrowError(OutOfScopeError);
    });
  });
});
