import { PropertyOptions } from '@beezone/types';
import { expect } from 'vitest';
import { PrismaModelPropertyPrinter } from './prisma-model-property-printer.js';

const testData: [PropertyOptions, string][] = [
  [{ name: 'sample', type: 'string' }, 'sample String?'],
  [{ name: 'sample', type: 'integer' }, 'sample Int?'],
  [{ name: 'sample', type: 'date' }, 'sample DateTime?'],
  [{ name: 'sample', type: 'object' }, 'sample Json?'],
  [
    { name: 'sample', type: 'array', items: { type: 'string' } },
    'sample String[]',
  ],
  [{ name: 'sample', type: 'string', required: true }, 'sample String'],
  [
    { name: 'sample', type: 'string', generated: 'uuid' },
    'sample String @default(uuid())',
  ],
];

describe('PrismaModelPropertyPrinter', () => {
  it.each(testData)('should print $options as $result', (options, result) => {
    expect(new PrismaModelPropertyPrinter(options).toString()).toEqual(result);
  });
});
