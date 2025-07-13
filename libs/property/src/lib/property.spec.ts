import { Property } from './property.js';

describe('property', () => {
  it('should work', () => {
    class Sample {
      @Property({ type: 'string' }) name: string;
    }
  });
});
