import { names } from './names.js';
describe('names', () => {
  it('should transform name', () => {
    const name = 'some-name';
    expect(names(name)).toEqual({
      snakeCase: 'some_name',
      camelCase: 'someName',
      kebabCase: 'some-name',
      pascalCase: 'SomeName',
      titleCase: 'Some Name',
      screamingSnakeCase: 'SOME_NAME',
      sentenceCase: 'Some name',
    });
  });
  it('should transform long name', () => {
    const name = 'some-long-name';
    expect(names(name)).toEqual({
      snakeCase: 'some_long_name',
      camelCase: 'someLongName',
      kebabCase: 'some-long-name',
      pascalCase: 'SomeLongName',
      titleCase: 'Some Long Name',
      screamingSnakeCase: 'SOME_LONG_NAME',
      sentenceCase: 'Some long name',
    });
  });
});
