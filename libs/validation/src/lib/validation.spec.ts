import { plainToInstance } from 'class-transformer';
import { Validation } from './validation.js';
import { validateSync } from 'class-validator';

describe('validation', () => {
  it('should work', () => {
    class Sample {
      @Validation({})
      value: string;
    }

    const instance = plainToInstance(Sample, { value: 'some' });

    const erros = validateSync(instance);

    expect(erros.length).toEqual(0);
  });
});
