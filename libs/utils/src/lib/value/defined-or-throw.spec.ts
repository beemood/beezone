import { ValueIsNotDefinedError } from '@beezone/errors';
import { definedOrThrow } from './defined-or-throw.js';
describe('definedOrThrow', () => {
  it('should return the value if the value is defined', () => {
    expect(definedOrThrow(0)).toEqual(0);
    expect(definedOrThrow(-1)).toEqual(-1);
    expect(definedOrThrow(-1)).toEqual(-1);
    expect(definedOrThrow(1)).toEqual(1);
  });
  it('should throw error if the value is not defiend', () => {
    expect(() => definedOrThrow(undefined)).toThrowError(
      ValueIsNotDefinedError
    );
    expect(() => definedOrThrow(null)).toThrowError(ValueIsNotDefinedError);
    expect(() => definedOrThrow(NaN)).toThrowError(ValueIsNotDefinedError);
  });
});
