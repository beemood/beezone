import { toDefinitionPath } from './to-definition-path.js';

describe('toDefinitionPath', () => {
  it('should turn path into definition path', () => {
    expect(toDefinitionPath('./some/sample.json')).toEqual(
      `#/definitions/Sample`
    );
    expect(toDefinitionPath('./../some/sample-item.json')).toEqual(
      `#/definitions/SampleItem`
    );
  });
});
