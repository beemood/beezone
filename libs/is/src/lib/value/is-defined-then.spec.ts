import { isDefinedThen } from './is-defined-then.js';

describe('isDefinedThen', () => {
  let thenHandler: (...args: any) => any;
  let elseHandler: (...args: any) => any;

  beforeEach(() => {
    thenHandler = vi.fn();
    elseHandler = vi.fn();
  });

  describe('it should run the then handler', () => {
    it.each`
      value
      ${0}
      ${1}
      ${''}
      ${new Date()}
      ${{}}
    `('isDefinedThen($value, thenHandler, elseHandler) ', ({ value }) => {
      isDefinedThen(value, thenHandler, elseHandler);
      expect(thenHandler).toBeCalledWith(value);
    });
  });

  describe('it should run the else handler', () => {
    it.each`
      value
      ${undefined}
      ${null}
      ${new Date('somethaosdf')}
      ${NaN}
    `('isDefinedThen($value, thenHandler, elseHandler)', ({ value }) => {
      isDefinedThen(value, thenHandler, elseHandler);
      expect(elseHandler).toHaveBeenCalledOnce();
    });
  });
});
