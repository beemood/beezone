import { prismaSchema } from './prisma-schema.js';
describe('prismaSchema', () => {
  it('should print the prisma schema', () => {
    expect(
      prismaSchema({
        models: [
          {
            name: 'sample',
            properties: {
              id: { type: 'integer', generated: 'id' },
              name: { type: 'string' },
            },
          },
        ],
        generatedClientPath: 'output',
      })
    ).toEqual(
      [
        'generator client {',
        '  provider = "prisma-client-js"',
        '  output   = "output"',
        '}',
        '',
        'datasource db {',
        '  provider = "postgresql"',
        '  url      = env("DATABASE_URL")',
        '}',
        '',
        'model Sample {',
        '  id Int @id @default(autoincrement())',
        '  name String?',
        '}',
      ].join('\n')
    );
  });
});
