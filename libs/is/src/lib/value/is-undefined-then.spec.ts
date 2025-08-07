import { isUndefinedThen } from './is-undefined-then.js';

describe('isUndefinedThen', () => {
  let thenHandler: (...args: any) => any;
  let elseHandler: (...args: any) => any;

  beforeEach(() => {
    thenHandler = vi.fn();
    elseHandler = vi.fn();
  });

  describe('it should run the else handler', () => {
    it.each`
      value
      ${0}
      ${1}
      ${''}
      ${new Date()}
      ${{}}
    `('isUndefinedThen($value, thenHandler, elseHandler) ', ({ value }) => {
      isUndefinedThen(value, thenHandler, elseHandler);
      expect(elseHandler).toBeCalledWith(value);
    });
  });

  describe('it should run the then handler', () => {
    it.each`
      value
      ${undefined}
      ${null}
      ${new Date('somethaosdf')}
      ${NaN}
    `('isUndefinedThen($value, thenHandler, elseHandler)', ({ value }) => {
      isUndefinedThen(value, thenHandler, elseHandler);
      expect(thenHandler).toHaveBeenCalledOnce();
    });
  });
});
