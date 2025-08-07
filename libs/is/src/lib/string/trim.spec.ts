import { trim } from './trim.js';

describe('trim', () => {
  it.each`
    value                  | result
    ${''}                  | ${''}
    ${' '}                 | ${''}
    ${'some   '}           | ${'some'}
    ${'  some   '}         | ${'some'}
    ${'  some    word   '} | ${'some word'}
  `('trim($value) should return "$result"', ({ value, result }) => {
    expect(trim(value)).toEqual(result);
  });
});
