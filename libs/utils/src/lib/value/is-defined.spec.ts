import { isDefined } from './is-defined.js';

describe('isDefined', () => {
  it.each`
    value               | result
    ${undefined}        | ${false}
    ${null}             | ${false}
    ${NaN}              | ${false}
    ${new Date('some')} | ${false}
  `('isDefined($value) should return $result', ({ value, result }) => {
    expect(isDefined(value)).toEqual(result);
  });
});
