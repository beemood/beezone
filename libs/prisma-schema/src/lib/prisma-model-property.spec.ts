import { PropertyOptions as O } from '@beezone/types';
import { PrismaModelProperty } from './prisma-model-property.js';

describe('PrismaModelProperty', () => {
    
  describe('optional', () => {
    it.each`
      options                                                            | result
      ${{ name: 'name', type: 'string' } as O}                           | ${'name String?'}
      ${{ name: 'name', type: 'number' } as O}                           | ${'name Decimal?'}
      ${{ name: 'name', type: 'integer' } as O}                          | ${'name Int?'}
      ${{ name: 'name', type: 'date' } as O}                             | ${'name DateTime?'}
      ${{ name: 'name', type: 'boolean' } as O}                          | ${'name Boolean?'}
      ${{ name: 'name', type: 'object' } as O}                           | ${'name Json?'}
      ${{ name: 'name', type: 'array', items: { type: 'string' } } as O} | ${'name String[]'}
    `('should return $result from $options', ({ options, result }) => {
      expect(new PrismaModelProperty(options).toString()).toEqual(result);
    });
  });

  describe('required', () => {
    it.each`
      options                                                            | result
      ${{ name: 'name', type: 'string' } as O}                           | ${'name String'}
      ${{ name: 'name', type: 'number' } as O}                           | ${'name Decimal'}
      ${{ name: 'name', type: 'integer' } as O}                          | ${'name Int'}
      ${{ name: 'name', type: 'date' } as O}                             | ${'name DateTime'}
      ${{ name: 'name', type: 'boolean' } as O}                          | ${'name Boolean'}
      ${{ name: 'name', type: 'object' } as O}                           | ${'name Json'}
      ${{ name: 'name', type: 'array', items: { type: 'string' } } as O} | ${'name String[]'}
    `('should return $result from $options', ({ options, result }) => {
      expect(
        new PrismaModelProperty({ ...options, required: true }).toString()
      ).toEqual(result);
    });
  });
});
