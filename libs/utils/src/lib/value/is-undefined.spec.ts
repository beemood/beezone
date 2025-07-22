import { isUndefined } from './is-undefined.js';

describe('isUndefined', () => {
  it.each`
    value               | result
    ${undefined}        | ${true}
    ${null}             | ${true}
    ${NaN}              | ${true}
    ${new Date('some')} | ${true}
  `('isUndefined($value) should return $result', ({ value, result }) => {
    expect(isUndefined(value)).toEqual(result);
  });
});
