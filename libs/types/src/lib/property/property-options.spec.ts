import { PropertyOptions } from './property-options.js';

describe('PropertyOptions', () => {
  it('should create string options', () => {
    const options: PropertyOptions = {
      type: 'string',
      minLength: 3,
      maxLength: 30,
      defaultValue: '',
      dependsOnProperties: [''],
    };

    expect(options).toBeDefined();
    
  });
});
