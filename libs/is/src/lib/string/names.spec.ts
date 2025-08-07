import { Names, names } from './names.js';

describe('names', () => {
  it.each`
    value          | result
    ${'so'}        | ${{ camelCase: 'so', kebabCase: 'so', pascalCase: 'So', screamingSnakeCase: 'SO', sentenceCase: 'So', snakeCase: 'so', titleCase: 'So' } as Names}
    ${'so   go  '} | ${{ camelCase: 'soGo', kebabCase: 'so-go', pascalCase: 'SoGo', screamingSnakeCase: 'SO_GO', sentenceCase: 'So go', snakeCase: 'so_go', titleCase: 'So Go' } as Names}
  `('names($value) should return $result', ({ value, result }) => {
    expect(names(value)).toEqual(result);
  });
});
