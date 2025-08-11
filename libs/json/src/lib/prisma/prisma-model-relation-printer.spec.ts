import { RelationPropertyOptions } from '@beezone/types';
import { PrismaModelRelationPrinter } from './prisma-model-relation-printer.js';

const testData: [RelationPropertyOptions, string][] = [
  [
    { name: 'sample', type: 'many-to-many', target: 'sample' },
    'sample Sample[]',
  ],
  [
    { name: 'sample', type: 'one-to-many', target: 'sample' },
    'sample Sample[]',
  ],
  [
    { name: 'sample', type: 'one-to-one', target: 'sample' },
    [
      'sample Sample @relation(fields: [sampleId], references: [id], onDelete: SetNull, onUpdate: SetNull)',
      'sampleId Int',
    ].join('\n\b'),
  ],
  [
    { name: 'sample', type: 'group', target: 'sample' },
    [
      'sample Sample @relation(fields: [sampleId], references: [id], onDelete: SetNull, onUpdate: SetNull)',
      'sampleId Int',
    ].join('\n\b'),
  ],
  [
    { name: 'sample', type: 'owner', target: 'sample' },
    [
      'sample Sample @relation(fields: [sampleId], references: [sampleId], onDelete: Cascade, onUpdate: Cascade)',
      'sampleId String',
    ].join('\n\b'),
  ],
];

describe('PrismaModelRelationPrinter', () => {
  it.each(testData)('should print $options as $result', (options, result) => {
    expect(new PrismaModelRelationPrinter(options).toString()).toEqual(result);
  });
});
