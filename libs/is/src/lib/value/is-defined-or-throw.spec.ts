import { UndefinedError } from '@beezone/errors';
import { isDefinedOrThrow } from './is-defined-or-throw.js';

describe('isDefinedOrThrow', () => {
  describe('should throw error', () => {
    it.each`
      value
      ${undefined}
      ${null}
      ${NaN}
      ${new Date('someotaiuo')}
    `('isDefinedOrThrow($value) should throw UndefinedError', ({ value }) => {
      expect(() => isDefinedOrThrow(value)).toThrowError(UndefinedError);
    });
  });

  describe('should return the value', () => {
    it.each`
      value
      ${-1}
      ${0}
      ${1}
      ${new Date()}
      ${''}
      ${'some'}
      ${{}}
    `('isDefinedOrThrow($value) should return $value', ({ value }) => {
      expect(isDefinedOrThrow(value)).toEqual(value);
    });
  });
});
