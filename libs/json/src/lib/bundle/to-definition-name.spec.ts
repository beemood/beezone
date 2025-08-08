import { toDefinitionName } from './to-definition-name.js';

describe('toDefinitionName', () => {
  it('should turn path into definition path', () => {
    expect(toDefinitionName('./some/sample.json')).toEqual(`Sample`);
    expect(toDefinitionName('./../some/sample-item.json')).toEqual(
      `SampleItem`
    );
  });
});
